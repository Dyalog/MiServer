#!/bin/bash

## Bail on script errors
set -e
#set -x

MISERVER=$1
TESTOUT=/tmp/miserver-test.log
rm -f ${TESTOUT}
touch ${TESTOUT}

echo sleeping for 5 seconds for docker to start.
sleep 5
echo Continuing...

## Test the root page, If this fails then we will bail straight away.
if ! curl -s --retry 5 --retry-delay 5 -q http://${MISERVER}:8080 | grep "Dyalog MiServer 3 Sample Site" > /dev/null 2>&1; then
    echo "**FAILED** Root page failed to load with text: Dyalog MiServer 3 Sample Site" | tee -a ${TESTOUT}
    exit 1 
fi

## Arrays for the URL and the text to find
declare -a urls
declare -a tests

urls[1]="/Examples/JS/DataTableAdvanced_Buttons.mipage"
urls[2]="/Documentation/DyalogAPIs/WidgetDoc?namespace=_DC&widget=Accordion"

tests[1]="The DataTable widget uses the JS-Library" # /Examples/JS/DataTableAdvanced_Buttons.mipage
tests[2]="Dyalog collapsing interface with four pseudo-language sections" # /Documentation/DyalogAPIs/WidgetDoc?namespace=_DC&widget=Accordion


COUNTER=1

## loop through until the counter is higher than the array length

while [ $COUNTER -le ${#urls[@]} ]; do
    echo -en "Test ${COUNTER}\t" | tee -a ${TESTOUT}
    if ! curl -s --retry 5 --retry-delay 5 -q http://${MISERVER}:8080/${urls[$COUNTER]} | grep "${tests[$COUNTER]}" > /dev/null ; then
        echo -en "**FAILED**\n\tPage ${urls[$COUNTER]} failed to find text ${tests[$COUNTER]}\n" | tee -a ${TESTOUT}
    else
        echo -en "**PASS**\n" | tee -a ${TESTOUT}
    fi

    let COUNTER=$COUNTER+1
    
done

if grep "**FAILED**" ${TESTOUT} > /dev/null 2>&1; then
    exit 1
fi

exit 0
