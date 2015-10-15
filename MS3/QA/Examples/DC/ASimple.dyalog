 msg←Test dummy

 Selenium.Click'aDyalog' ⍝ Click on the URL
 :If {'http://www.dyalog.com/'≡Selenium.BROWSER.Url}Selenium.Retry ⍬ ⍝ Wait a bit to see if it gets populated
     msg←''
 :Else
     msg←'Click on link failed to navigate to http://www.dyalog.com/ - URL reported: ',Selenium.BROWSER.Url
 :EndIf