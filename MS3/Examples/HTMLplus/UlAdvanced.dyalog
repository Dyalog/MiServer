:Class UlAdvanced : MiPageSample
⍝ Control:: _HTML.Ul
⍝ Description:: unordered list with links and callbacks on mouse movements
    
    ∇ Compose;text;ul;urls;intro
      :Access Public
     
      intro←'This page illustrates advanced uses of the _HTML.Ul widget.<br>'
      intro,←'1) The specification of attributes for anchor elements in the list.<br>'
      intro,←'2) Setting up mouse movement callbacks on the list elements.'
     
      Add _.title'_HTML.Ul - Advanced Example '
      Add _.h2'_HTML.Ul - Unordered List'
      Add _.p intro
     
      Add _.h3'Useful Links'
      text←'Dyalog Home (opens in this tab)' 'Dyalog Forums (opens new tab)'
     
     ⍝ Below, the second link includes a target attribute for the <a> element
      urls←'http://www.dyalog.com'('http://forums.dyalog.com' 'target=_blank')
     
      ul←Add _HTML.Ul(text urls) ⍝ Construct Ul with texts and urls
      Add _.br
      (Add _.div).id←'output' ⍝ A place to write messages
     
     ⍝ Set up a handler which returns the html content of <a> elements within <li>
      Add _.Handler'li a' 'mouseover mouseout' 'onMouse'('item' 'html')
    ∇

    ∇ r←onMouse;li
     ⍝ Callback on mouseover and mouseout
      :Access Public ⍝ Callback functions must be declared as public
     ⍝ Overwrite the output div with identification of the current mouse location
      r←'#output'Replace _.p((_event≡'mouseover')/(_event,' : ',_PageData.item))
    ∇

:EndClass