 msg←Test dummy;link;ok;text;output
 link←('CssSelectors'Selenium.Find'#links li')[1]
 Selenium.MoveToElement link 10 10
 text←'mouseover : ',link.Text
 output←Selenium.Find'output'
 ok←{text≡output.Text}Selenium.Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 msg←(~ok)/'Mouseover test failed'