 msg←ejGridSimple;text;pages

 (BROWSER.FindElementByCssSelector⊂'.e-lastpage').Click         ⍝ Go to the last page
 text←' ',(BROWSER.FindElementByCssSelector⊂'.e-parentmsgbar').Text ⍝ Text at bottom right
 pages←⊃text←1↓¨(text=' ')⊂text
 msg←((pages'of'pages)≢3↑text)/'Navigate to last page failed'