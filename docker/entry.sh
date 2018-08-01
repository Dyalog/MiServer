#!/bin/bash

## This is a workaround for APL using 100% CPU when input is redirected from /dev/null

#mkfifo /tmp/aplfifo
#tail -f /dev/null > /tmp/aplfifo &

export MiServer=${MiServer-/MiServer/MS3}

echo "Running MiServer: $(cat /MiServer/MiServer.version)"
/usr/bin/dyalog -s /MiServer/miserver.dws 0<&-

