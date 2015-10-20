 msg←Test dummy;error

 Click'link' ⍝ Click on the URL
 error←'Click on link failed to navigate to WidgetDoc - URL reported: '
 msg←(~{'A'≡⊃⌽BROWSER.Url}Retry ⍬)/error,BROWSER.Url ⍝ Wait a bit to see if it gets populated