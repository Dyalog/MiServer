:Class UlAdvanced : MiPageSample

    ∇ Compose;text;ul;urls
      :Access public
     
      intro←'This page illustrates advanced uses of the _HTML.Ul widget.'
     
      Add title'_HTML.Ul - Advanced Example '
      Add h2'_HTML.Ul - Unordered List'
      Add p intro
     
        ⍝ --- Add a list of interesting web pages ---
      Add h3'Useful Links'
      text←'Dyalog Home (opens in this tab)' 'Dyalog Forums (opens new tab)'
        ⍝ Below, one of the links includes attributes for the <a> element
      urls←'http://www.dyalog.com'('http://forums.dyalog.com' 'target=_blank')
      ul←Add _HTML.Ul(text urls) ⍝ Construct Ul with texts and urls
        ⍝ ul.On 'mouseover mouseout' 'onMouseOver'
      Add Handler'li a' 'mouseover mouseout' 'onMouse'('item' 'html') ⍝ Send html content of a elements within li
      Add br
      (Add div).id←'output' ⍝ A place to write messages
    ∇

    ∇ r←onMouse;li
        ⍝ Callback on mouseover and mouseout
      :Access Public             
     
      r←'#output'Replace p((_event≡'mouseover')/(_event,' : ',_PageData.item))
    ∇

:EndClass