 msg←ASimple

 Click'aDyalog' ⍝ Click on the URL
 :If {'http://www.dyalog.com/'≡BROWSER.Url}Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
     msg←''
 :Else
     msg←'Click on link failed to navigate to http://www.dyalog.com/'
 :EndIf