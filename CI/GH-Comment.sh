#!/bin/bash

set -e
TESTLOG=/tmp/miserver-test.log
WORKSPACE=${WORKSPACE-$PWD}
cd ${WORKSPACE}

DOCKER_ID=$1
COMMIT_ID=$2

COMMENT_FILE=`tempfile`

echo "--- APL SESSION ---" > ${COMMENT_FILE}
docker logs ${DOCKER_ID} >> ${COMMENT_FILE} 2>&1
echo "--- CI-Test Output ---" >> ${COMMENT_FILE}
cat ${TESTLOG} >> ${COMMENT_FILE}



echo "{ \"body\": \"Build failed with output:\n\`\`\`$(cat ${COMMENT_FILE} | sed '/   \+$/d;:a;N;$!ba;s/\\/\\\\/g;s/\r//g;s/\n/\\n /g;;s/\t/\\t/g;s/"/\\"/g')\n\`\`\`\"}" >json
curl -v --data "$(cat json)" -H "Authorization: token $GHTOKEN" -i https://api.github.com/repos/Dyalog/MiServer/commits/${COMMIT_ID}/comments

rm -f json
rm -f ${COMMENT_FILE} ${TESTLOG}
