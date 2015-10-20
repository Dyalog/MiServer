 msg←Test dummy

 'fruits'Selenium.ListMgrSelect'Oranges' 'Lemons'
 Selenium.Click'btnSave'
 msg←'output'WaitFor'You picked: Oranges Lemons'