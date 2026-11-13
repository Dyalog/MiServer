#!/bin/bash
set -e 

WORKSPACE=${WORKSPACE-$PWD}
cd ${WORKSPACE}

PROJECT=MiServer
REPO=Dyalog/${PROJECT} # ideally this should be parsed from "git ls-remote --get-url origin"

# Releases are only created for tags; Jenkins sets TAG_NAME when building one.
if ! [ "${TAG_NAME}" ]; then
	echo "TAG_NAME is not set; skipping creating release"
	exit 0
fi

GIT_COMMIT=$(git rev-parse HEAD)
VERSION=${TAG_NAME#v}
echo "creating release ${TAG_NAME}"

# create JSON
TMP_JSON=/tmp/GH-Publish.${PROJECT}.$$.json
GH_RELEASES=/tmp/GH-Releases.${PROJECT}.$$.json
echo "${VERSION} - (${GIT_COMMIT})" > ./MiServer.version

if ! [ "$GHTOKEN" ]; then
  echo 'Please put your GitHub API Token in an environment variable named GHTOKEN'
  exit 1
fi

# Delete any existing draft release for this tag, so that re-running a build does not create duplicates
# but only if jq is available
if which jq >/dev/null 2>&1; then
	curl -o $GH_RELEASES \
	  --silent -H "Authorization: token $GHTOKEN" \
	  https://api.github.com/repos/${REPO}/releases

	for ID in $(jq -r --arg t "${TAG_NAME}" '.[] | select(.draft and .tag_name == $t) | .id' $GH_RELEASES); do
		echo "*** existing draft release for ${TAG_NAME} with id: ${ID} - Deleting."
		curl -X "DELETE" -H "Authorization: token $GHTOKEN" https://api.github.com/repos/${REPO}/releases/${ID}
	done
	rm -f $GH_RELEASES
else
	echo jq not found, not removing draft releases
fi

# Changelog is everything since the previous tag
if PREV_TAG=$(git describe --tags --abbrev=0 HEAD^ 2>/dev/null); then
	echo "using log since ${PREV_TAG}"
	LOG_RANGE="${PREV_TAG}..HEAD"
else
	echo "no previous tag found, using full log"
	LOG_RANGE="HEAD"
fi
JSON_BODY=$( ( echo -e "MiServer ${VERSION}\n\nChangelog:"; git log --format='%s' ${LOG_RANGE} ) | python -c 'import json,sys; print(json.dumps(sys.stdin.read()))')

cat >$TMP_JSON <<.
{
  "tag_name": "${TAG_NAME}",
  "target_commitish": "${GIT_COMMIT}",
  "name": "${TAG_NAME}",
  "body": $JSON_BODY,
  "draft": true,
  "prerelease": true
}
.


cat $TMP_JSON

# Create ZIP downloads

zip ./MiServer-${VERSION}.zip . -r -x docker-compose.yml Dockerfile CI Jenkinsfile rancher-compose.yml docker\* SampleMiSites\* .git\* QA\*
zip ./MiServer-Samples-${VERSION}.zip SampleMiSites -r 

## Copy files to Dyalog Devt
r=/devt/builds/${PROJECT}/master
d=/${VERSION}

mkdir -p $r/$d
cp ./MiServer-${VERSION}.zip ./MiServer-Samples-${VERSION}.zip MiServer.version $r/$d/

echo 'updating "latest" symlink'; l=$r/latest; rm -f $l; ln -s $r/$d $l

TMP_RESPONSE=/tmp/GH-Response.${PROJECT}.$$.json
curl -o $TMP_RESPONSE --data @$TMP_JSON -H "Authorization: token $GHTOKEN" -i https://api.github.com/repos/$REPO/releases

RELEASE_ID=`grep '"id"' $TMP_RESPONSE | head -1 | sed 's/.*: //;s/,//'`

echo "created release with id: $RELEASE_ID"

for F in `ls MiServer-*.zip`; do
  echo "uploading $F to Github"
  curl -o /dev/null -H "Authorization: token $GHTOKEN" \
    -H 'Accept: application/vnd.github.manifold-preview' \
    -H 'Content-Type: application/zip' \
    --data-binary @"./$F" \
    https://uploads.github.com/repos/$REPO/releases/$RELEASE_ID/assets?name=$F
done
rm -f $TMP_RESPONSE $TMP_JSON
rm -f *.zip
