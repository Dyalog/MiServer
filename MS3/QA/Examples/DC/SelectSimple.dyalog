 msg←Test dummy;result;output;sel
⍝ Test /Examples/DC/SelectSimple

⍝ Ensure 'fruit' is there:
 msg←'selection list not there'
 :If 0≢sel←Selenium.Find'fruit'
     sel Selenium.SendKeys'P'
     Selenium.Click'btnPressMe'
     output←Selenium.Find'output'
     {0≠⍴output.Text}Selenium.Retry ⍬ ⍝ Wait to see if it gets populated
     msg←(output.Text≢'You picked: Pears')/'Expected output was not produced.'
 :EndIf