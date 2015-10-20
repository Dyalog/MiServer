 msg←Test dummy;result;m
 result←Selenium.Find¨'alpha' 'beta' 'gamma'
 msg←∊∪result WaitFor¨'0'