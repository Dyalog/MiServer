#!/bin/bash

## This is a workaround for APL using 100% CPU when input is redirected from /dev/null

#mkfifo /tmp/aplfifo
#tail -f /dev/null > /tmp/aplfifo &

export MiServer=${MiServer-/MiServer/MS3}
dyalog -ride +s -q /MiServer/miserver.dws 0<&- 2>/dev/null

