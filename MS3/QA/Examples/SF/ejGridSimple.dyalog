﻿ msg←ejGridSimple;text;pages

 ('CssSelector' Find '.e-lastpage').Click             ⍝ Go to the last page
 text←' ',('CssSelector' Find '.e-parentmsgbar').Text ⍝ Text at bottom right
 pages←⊃text←1↓¨(text=' ')⊂text
 msg←((pages'of'pages)≢3↑text)/'Navigate to last page failed'