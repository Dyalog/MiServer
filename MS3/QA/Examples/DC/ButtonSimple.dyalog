 msg←Test dummy
 Selenium.Click'btnPressMe'
 msg←(Selenium.Find'output')Selenium.WaitFor'Thank You!' 'Expected output was not produced.'