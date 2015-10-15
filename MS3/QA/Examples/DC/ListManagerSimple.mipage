 msg←Test dummy;name;result;pick
⍝ Test /Examples/DC/InputGridSimple

 pick←'Oranges' 'Lemons'
 'fruits'Selenium.ListMgrSelect pick
 Selenium.Click'btnSave'

 result←Selenium.Find'output'
 {0≠⍴result.Text}Selenium.Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 :If result.Text≢'You picked:',∊' ',¨pick
     msg←'Expected output was not produced.'
 :Else ⋄ msg←''
 :EndIf