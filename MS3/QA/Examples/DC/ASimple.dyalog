 msg←Test dummy;error

 Click'link' ⍝ Click on the URL
 error←'Click on link failed to open new tab'
 msg←(~{2≡Selenium.BROWSER.WindowHandles.Count}Retry ⍬)/error,Selenium.BROWSER.Url ⍝ Wait a bit to see if it opens
