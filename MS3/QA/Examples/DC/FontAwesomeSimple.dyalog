 msg←Test dummy;page;head;z;html
 page←Selenium.PageSource
 z←0<1↑('<head>.*(<link href="/FontAwesome/css/font-awesome\.min\.css" rel="stylesheet" type="text/css" />).*</head>'⎕S 0⍠('Mode' 'M')('DotAll' 1)('IC' 1))page
 →(0<⍴msg←(~z)/'FontAwesome.css not linked in head of document!')/0

 html←(Selenium.BROWSER.FindElementById,⊂'foo1').GetAttribute,⊂'innerHTML'
 z←'<i class="fa fa-li fa-check-square"></i>List icons'≡html~⎕UCS 10 13
 msg←(~z)/'Element "foo1" does not correspond to expectations!'

