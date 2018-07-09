#!/bin/bash
set -e 

PROJECT=MiServer
REPO=Dyalog/${PROJECT} # ideally this should be parsed from "git ls-remote --get-url origin"

GIT_BRANCH=${JOB_NAME#*/*/}
GIT_COMMIT=$(git rev-parse HEAD)

if ! [ "${GIT_BRANCH}" = "master" ]; then
	echo "skipping creating release for ${GIT_BRANCH}"
	exit 0
else
	echo "creating ${GIT_BRANCH} release"
fi

# create JSON
TMP_JSON=/tmp/GH-Publish.${PROJECT}.$$.json
GH_RELEASES=/tmp/GH-Releases.${PROJECT}.$$.json
VERSION_AB="3.1"
VERSION="${VERSION_AB}.`git rev-list HEAD --count`"
echo "${VERSION} - (${GIT_COMMIT})" > ./MiServer.version

if ! [ "$GHTOKEN" ]; then
  echo 'Please put your GitHub API Token in an environment variable named GHTOKEN'
  exit 1
fi

# Delete all the old draft releases, otherwise this gets filled up pretty fast as we create for every commit:
# but only if jq is available
if which jq >/dev/null 2>&1; then
        DRAFT=true
        C=0

	# Get the json from Github API
        curl -o $GH_RELEASES \
          --silent -H "Authorization: token $GHTOKEN" \
          https://api.github.com/repos/${REPO}/releases

	RELEASE_COUNT=`cat $GH_RELEASES | jq ". | length"`
	GH_VERSION_ND_LAST=0

        while [ $C -le $RELEASE_COUNT ] ; do
		DRAFT=`cat $GH_RELEASES | jq  ".[$C].draft"`
		ID=`cat $GH_RELEASES | jq  ".[$C].id"`
		GH_VERSION=$(cat $GH_RELEASES | jq ".[$C].name" | sed 's/"//g;s/^v//')
		GH_VERSION_ND=$(cat $GH_RELEASES | jq ".[$C].name" | sed 's/"//g;s/^v//;s/\.//g')
		GH_VERSION_AB=${GH_VERSION%.*}


		if [ "${GH_VERSION_AB}" = "${VERSION_AB}" ]; then
			if [ "$DRAFT" = "true" ]; then
				echo -e -n "*** $(cat $GH_RELEASES | jq ".[$C].name" | sed 's/"//g') with id: $(cat $GH_RELEASES | jq  ".[$C].id") is a draft - Deleting.\n"
				curl -X "DELETE" -H "Authorization: token $GHTOKEN" https://api.github.com/repos/${REPO}/releases/${ID}
			else
				if [ $GH_VERSION_ND -gt $GH_VERSION_ND_LAST ]; then
					COMMIT_SHA=`cat $GH_RELEASES | jq ".[$C].target_commitish"`
					GH_VERSION_ND_LAST=$GH_VERSION_ND
				fi
			fi
		fi

		let C=$C+1
        done
        rm -f $GH_RELEASES

else
        echo jq not found, not removing draft releases
fi

echo "SHA: ${COMMIT_SHA}"

if [ $GH_VERSION_ND_LAST = 0 ]; then
#	echo "No releases of $VERSION_AB found, not populating changelog"
#	JSON_BODY=$(echo -e "Pre-Release of MiServer $VERSION_AB\n\nWARNING: This is a pre-release version of MiServer. We cannot guarantee the stability of this product at this time.\n\nInitial version of MiServer $VERSION_AB" | python -c 'import json,sys; print(json.dumps(sys.stdin.read()))')
	echo using log from $COMMIT_SHA from $GH_VERSION_ND_LAST
	JSON_BODY=$( ( echo -e "MiServer $VERSION_AB\n\nChangelog:"; git log --format='%s' 48071c6.. ) | python -c 'import json,sys; print(json.dumps(sys.stdin.read()))')
else
	echo using log from $COMMIT_SHA from $GH_VERSION_ND_LAST
	JSON_BODY=$( ( echo -e "MiServer $VERSION_AB\n\nChangelog:"; git log --format='%s' ${COMMIT_SHA}.. ) | python -c 'import json,sys; print(json.dumps(sys.stdin.read()))')
	
fi

cat >$TMP_JSON <<.
{
  "tag_name": "v$VERSION",
  "target_commitish": "${GIT_COMMIT}",
  "name": "v$VERSION",
  "body": $JSON_BODY,
  "draft": true,
  "prerelease": true
}
.

cat $TMP_JSON

# Create ZIP downloads

zip ./MiServer-${VERSION}.zip . -r -x docker-compose.yml Dockerfile GH-Release.sh githubComment.sh Jenkinsfile rancher-compose.yml docker\* SampleMiSites\* .git\* QA\*
zip ./MiServer-Samples-${VERSION}.zip SampleMiSites -r 

## Copy files to Dyalog Devt
r=/devt/builds/${PROJECT}/${GIT_BRANCH}
d=/${BUILD_NUMBER}

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
