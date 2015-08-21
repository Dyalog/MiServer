 msg←SelectAdvanced;result;output;sel;froot;prev
⍝ Test /Examples/DC/SelectAdvanced

⍝ Ensure 'multi' (the selection list) is there:
 msg←'selection list not there'
 :If 0≢sel←Find'multi'
   ⍝ Grab the 2 elements already chosen:
     Click'PressMe'
     output←Find'output'
     {0≠⍴output.Text}Retry ⍬ ⍝ Wait to see if it gets populated
     msg←'Expected output was not produced.'
 :AndIf 'You picked: Bananas Pears'≡prev←output.Text
   ⍝ Make a single selection:
     froot←'Grapes'
     'multi'SelectItemText'~'froot
     Click'PressMe'
     output←Find'output'
     {prev≢output.Text}Retry ⍬ ⍝ Wait to see if it gets populated
 :AndIf (prev←output.Text)≡'You picked: ',froot
   ⍝ Make another selection:
     'multi'SelectItemText'Pears'
     Click'PressMe'
     output←Find'output'
     {prev≢output.Text}Retry ⍬ ⍝ Wait to see if it gets populated
 :AndIf (prev←output.Text)≡'You picked: ',froot,' Pears'
     msg←''
 :EndIf