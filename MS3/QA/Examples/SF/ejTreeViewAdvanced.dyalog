 msg←Test dummy;text;pages;output;ok

 Selenium.Click'Add'
 Selenium.Click'Added Item 1' ⍝ Select the new node

 Selenium.Click'Chk'  ⍝ Turn checkbox on
 output←Selenium.Find'output'
 :If {'1 nodes checked.'≢output.Text}Selenium.Retry ⍬ ⍝ Wait to see if it gets populated
     msg←'Node Add & Check Failed.'
 :EndIf

 Selenium.Click'Del'  ⍝ Delete the added node again (or models won't match :()

 Selenium.Click'Mod'  ⍝ Display model
 :If {38=('CssSelectors'Selenium.Find'#tvModel td').Count}Selenium.Retry 0
     text←('CssSelectors'Selenium.Find'#tvModel td')[0].Text
     msg←(text≢'Server≡Browser')/'Server and Browser model did not match.'
 :Else
     msg←'Display Model button did not work, or models do not agree.'
 :EndIf