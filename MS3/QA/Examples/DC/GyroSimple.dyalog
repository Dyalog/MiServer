 msg←Test dummy;result
 result←Selenium.Find¨'alpha' 'beta' 'gamma'
 msg←∊∪result WaitFor¨'0'