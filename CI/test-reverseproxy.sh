#!/bin/bash

set -e

TESTOUT=/tmp/miserver-test.log                                                                                                                                                                                
touch ${TESTOUT}
PROXYCONTAINER="jwilder/nginx-proxy"


##This test will test MiServer behind a reverse proxy which has shown an issue somewhere in the connections.
## This requires that the server has started with -e VIRTUAL_HOST=miserver.dyalog.bramley -e VIRTUAL_PORT=8080

## Start a load balancer / reverse proxy system
##NB: This must have access to the docker.sock fifo.

docker pull ${PROXYCONTAINER}

PROXY=$(docker run -d -v /var/run/docker.sock:/tmp/docker.sock:ro ${PROXYCONTAINER})

PROXY_IP=$(docker inspect ${PROXY} | jq -r .[0].NetworkSettings.IPAddress)

## give it all time to start up
sleep 5

## Test the website

echo -e -n "Testing site with reverse proxy:\n" | tee -a ${TESTOUT}     

## run the test 5 times, under the issue we found the first load would load enough data for the test to pass.

STRING="Dyalog MiServer 3 Sample Site"
COUNTER=1
MAXRUN=5
while [ ${COUNTER} -le ${MAXRUN} ]; do
    echo -e -n "Test $COUNTER/${MAXRUN}: " | tee -a ${TESTOUT}
    if ! curl -s --retry 5 --retry-delay 5 --connect-timeout 10 --max-time 10 -H "Host: miserver.dyalog.bramley" -q http://${PROXY_IP} | grep "${STRING}" > /dev/null  2>&1; then
        echo -e -n "**FAILED**\n\tRoot page failed to load under reverse proxy with text: ${STRING}\n" | tee -a ${TESTOUT}
        docker stop ${PROXY} >/dev/null 2>&1
        docker rm ${PROXY} >/dev/null 2>&1
        echo -e -n "------\n" | tee -a ${TESTOUT}     
        exit 1
    else 
        echo -e -n "**PASS**\n" | tee -a ${TESTOUT}
    fi

    let COUNTER=${COUNTER}+1
done


## Clean up
docker stop ${PROXY} >/dev/null 2>&1
docker rm ${PROXY} >/dev/null 2>&1
echo -e -n "------\n" | tee -a ${TESTOUT}     
exit 0
