 msg←SelectSimple;result;output;sel
⍝ Test /Examples/DC/SelectSimple

⍝ Ensure 'fruit' is there:
 msg←'selection list not there'
 :If 0≢sel←Find'fruit'
     sel SendKeys'P'
     Click'btnPressMe'
     output←Find'output'
     {0≠⍴output.Text}Retry ⍬ ⍝ Wait to see if it gets populated
     msg←(output.Text≢'You picked: Pears')/'Expected output was not produced.'
 :EndIf