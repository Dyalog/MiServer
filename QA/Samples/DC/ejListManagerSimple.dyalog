 msg←ejListManagerSimple;name;result;pick
⍝ Test /Examples/DC/InputGridSimple

 pick←'Oranges' 'Lemons'
 'fruits'ejListMgrSelect pick
 Click'btnSave'

 result←Find'output'
 {0≠⍴result.Text}Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 :If result.Text≢'You picked:',∊' ',¨pick
     msg←'Expected output was not produced.'
 :Else ⋄ msg←''
 :EndIf