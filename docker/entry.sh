#!/bin/bash

## This is a workaround for APL using 100% CPU when input is redirected from /dev/null

#mkfifo /tmp/aplfifo
#tail -f /dev/null > /tmp/aplfifo &

export MiServer=${MiServer-/MiServer/MS3}

if [ "${USE_DEVMODE}" = "true" ]; then
    dyalog -s /MiServer/miserver.dws 2>/dev/null 0<&-
else
    dyalog -rt /MiServer/miserver.dws
fi

