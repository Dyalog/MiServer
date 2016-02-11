 msg←Test dummy
 'inp2'SendKeys'morten'
 Click'inp5'
 :If 0∊⍴msg←'Failed to detect invalid input'/⍨0≡Find'inp5' ⍝ inp5 will be gone if POST succeeded
     'inp2'SendKeys'@dyalog.apl'
     Click'inp5'
     msg←'output'WaitFor'Input accepted'
 :EndIf