 msg←Test dummy;picker;result;ok
 picker←'ClassName'Selenium.Find'e-down-arrow'
 picker.Click
 picker.Click
 result←Selenium.Find'result'
 ok←{'Selected from NormalCP:'≡23↑result.Text}Selenium.Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 msg←(~ok)/'Color selection did not work'