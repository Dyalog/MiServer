 msg←Test dummy;result
 'name'Selenium.SendKeys name←'Brian'
 Selenium.Click'done'
 result←Selenium.Find'result'
 msg←result Selenium.WaitFor('Hello, ',name,'!')'Expected output was not produced.'