 msg←Test dummy

 'fruits'Selenium.ListMgrSelect'Oranges' 'Lemons'
 Selenium.Click'btnSave'
 msg←'output'Selenium.WaitFor'You picked: Oranges Lemons'