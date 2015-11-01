 msg←Test dummy
 'inp2'SendKeys'morten'
 Click'inp5'
 :If 0∊⍴msg←'inp5'WaitFor'' 'Failed to detect invalid input'⍝ inp5 will be gone if POST succeeded
     'inp2'SendKeys'@dyalog.apl'
     Click'inp5'
     msg←'output'WaitFor'Input accepted'
 :EndIf