 msg←Test dummy;result
 result←Selenium.Find¨'alpha' 'beta' 'gamma'
 msg←∊∪result Selenium.WaitFor¨'0'