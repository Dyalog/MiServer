 msg←Test dummy

 ⍝ Test that we can add a node
 Click'Add'
 'LinkText'Click'Added Item 1' ⍝ Select the new node
 :If 0=⍴msg←'output'WaitFor'Node "Added Item 1"' 'Add node failed'

 ⍝ Test that we can check a node
     'tv'SendKeys Space   ⍝ Turn checkbox on
 :AndIf 0=⍴msg←'output'WaitFor'1 nodes checked.' 'Check node failed'

 ⍝ Test for proper model
     Click'Del' ⍝ delete the node server side
     'tv'SendKeys Delete ⍝ make the client model match
     Click'Mod' ⍝ ... and display the model
 :AndIf 0=⍴msg←'Display Model button did not work, or models do not agree.'/⍨~{38=('CssSelectors'Selenium.Find'#tvModel td').Count}Retry ⍬
     msg←'tvModel'WaitFor'Server≡Browser' 'Server/Browser model mismatch.'

 :EndIf