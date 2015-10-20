 msg←Test dummy;input;output
 'input'Selenium.SendKeys input←'Brian'
 Selenium.Click'done'
 msg←'output'Selenium.WaitFor'Hello, ',input,'!'