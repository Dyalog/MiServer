 msg←Test dummy;visible

 ('CssSelectors'Find'.e-plus')[0].Click ⍝ Open first node
 visible←{⊃¨5↓¨(⌷Selenium.BROWSER.FindElementsByCssSelector⊂'#tv li').Text}
 {'123  6 8'≡visible ⍬}Retry ⍬
 msg←('123  6 8'≢visible ⍬)/'Tree expansion did not work as expected'