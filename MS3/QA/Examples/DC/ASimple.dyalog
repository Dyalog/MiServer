﻿ msg←Test dummy;error

 Click'link' ⍝ Click on the URL
 error←'Click on link failed to navigate to WidgetDoc - URL reported: '
 msg←(~{'A'≡⊃⌽Selenium.BROWSER.Url}Retry ⍬)/error,Selenium.BROWSER.Url ⍝ Wait a bit to see if it gets populated