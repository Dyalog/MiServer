 msg←ejTreeViewSimple;visible

 ('CssSelectors'Find'.e-plus')[0].Click ⍝ Open first node
 visible←⊃¨5↓¨(⌷BROWSER.FindElementsByCssSelector⊂'#tv li').Text
 msg←(visible≢'123  6 8')/'Tree expansion did not work as expected'