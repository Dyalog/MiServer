#!/bin/bash

set -x


DOCKER_ID=$1
COMMIT_ID=$2

echo "{ \"body\": \"Build failed with output:\n\`\`\`$(docker logs ${DOCKER_ID}  2>&1| sed '/   \+$/d;:a;N;$!ba;s/\\/\\\\/g;s/\r//g;s/\n/\\n /g;s/"/\\"/g')\n\`\`\`\"}" >json

curl -v --data "$(cat json)" -H "Authorization: token $GHTOKEN" -i https://api.github.com/repos/Dyalog/MiServer/commits/${COMMIT_ID}/comments
