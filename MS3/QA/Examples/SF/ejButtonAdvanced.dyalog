 msg←Test dummy;result;output;txt
⍝ Test /Examples/DC/ejButtonAdvanced

 output←Selenium.Find'output'
 msg←'The output should have been empty to start with'
 :If {0∊⍴output.Text}Selenium.Retry ⍬

⍝ Try clicking the 2nd button - this should not do anything
     Selenium.Click'btn2'
     msg←'There should not have been any output produced'
 :AndIf {0∊⍴output.Text}Selenium.Retry ⍬

⍝ Click the 1st button to enable the 2nd one
     Selenium.Click'btn1'
     msg,←' on the 2nd click'
 :AndIf 0∊⍴output.Text

⍝ The 2nd button should be enabled now
     Selenium.Click'btn2'
 :AndIf 0∊⍴msg←'output'WaitFor'You pressed the'

⍝ Push again to get a new msg
     Selenium.Click'btn2'
 :AndIf 0∊⍴msg←'output'WaitFor'2 times' 'Text did not change'

⍝ Click the 1st button to disable the 2nd one
     Selenium.Click'btn1'
     msg←'Text was not removed'
 :AndIf {0∊⍴output.Text}Selenium.Retry ⍬

⍝ Try the 2nd button again, it should not work
     Selenium.Click'btn2'
     msg←'Text should be empty'
 :AndIf {0∊⍴output.Text}Selenium.Retry ⍬
⍝ Looks OK
     msg←''
 :EndIf