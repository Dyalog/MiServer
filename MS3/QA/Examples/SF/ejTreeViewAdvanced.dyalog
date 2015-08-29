 msg←ejTreeViewAdvanced;text;pages;output;ok

 Click'Add'
 Click'tv_0' ⍝ Select the new node

 Click'Chk'  ⍝ Turn checkbox on
 output←Find'output'
 :If {'1 nodes checked.'≢output.Text}Retry ⍬ ⍝ Wait to see if it gets populated
     msg←'Node Add & Check Failed.'
 :EndIf

 Click'Del'  ⍝ Delete the added node again (or models won't match :()

 Click'Mod'  ⍝ Display model
 :If {38=('CssSelectors'Find'#tvModel td').Count}Retry 0
     text←('CssSelectors'Find'#tvModel td')[0].Text
     msg←(text≢'Server≡Browser')/'Server and Browser model did not match.'
 :Else
     msg←'Display Model button did not work, or models do not agree.'
 :EndIf