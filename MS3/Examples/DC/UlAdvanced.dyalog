:Class UlAdvanced : MiPageSample
⍝ Control:: _DC.Ul
⍝ Description:: Insert an unordered list of links based on an array of texts and links, and add callbacks on mouse movements
    
    ∇ Compose;text;ul;urls;intro;list
      :Access Public
     
     
      Add _.title'_DC.Ul - Advanced Example '
      Add _.h2'_DC.Ul - Unordered List'
      Add _.p'This page illustrates advanced uses of the _DC.Ul widget.'
      list←⊂'The specification of attributes for anchor elements in the list.'
      list,←⊂'Setting up mouse movement callbacks on the list elements.'
      Add _.Ul(⊂list)
     
      Add _.h3'Useful Links'
      text←'Dyalog Home (opens in this tab)' 'Dyalog Forums (opens new tab)'
     
     ⍝ Below, the second link includes a target attribute for the <a> element
      urls←'http://www.dyalog.com'('http://forums.dyalog.com' 'target=_blank')
     
      ul←Add _.Ul(text urls) ⍝ Construct Ul with texts and urls
      ('style="margin-top:24pt;height:12pt"'Add _.div).id←'output' ⍝ A place to write messages
     
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