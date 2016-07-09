 msg←Test dummy;sel
⍝ Test /Examples/DC/SelectSimple

⍝ Ensure 'fruit' is there:
 :If 0∊⍴msg←'selection list not there'/⍨0≡sel←Find'fruit'
     sel SendKeys'P'
     Click'btnPressMe'
     msg←'output'WaitFor'You picked: Pears'
 :EndIf