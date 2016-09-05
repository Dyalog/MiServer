﻿ msg←Test dummy

 ⍝ Test that we can add a node
 Click'Add'
 'LinkText'Click'Added_1' ⍝ Select the new node
 :If 0=⍴msg←'output'WaitFor'Select on unknown' 'Add node failed'

 ⍝ Test that we can check a node
     'tv'SendKeys Space   ⍝ Turn checkbox on
 :AndIf 0=⍴msg←'output'WaitFor'Check on unknown' 'Check node failed'

 ⍝ Test for proper model
     Click'Del' ⍝ delete the node server side
     'tv'SendKeys Delete ⍝ make the client model match
     Click'Mod' ⍝ ... and display the model
 :AndIf 0=⍴msg←'Display Model button did not work, or models do not agree.'/⍨~{33=('CssSelectors'Find'#tvModel td').Count}Retry ⍬
     msg←'tvModel'WaitFor'Server≡Browser' 'Server/Browser model mismatch.'

 :EndIf
