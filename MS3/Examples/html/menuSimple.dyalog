:class menuSimple: MiPageSample
⍝ Control:: _html.menu _html.menuitem _html.div
⍝ Description:: Create a context menu

    Ilo←{'icon="','..Data/',⍵[1],'" label="',⍵[2],'" onclick="window.',⍵[3],'"'}

    ∇ Ami attrs
      :Access Public
      Add'<menuitem ',(Ilo args),'></menuitem>'
    ∇

    ∇ Compose
      :Access Public
      mydiv←'style="background:#D4A109;padding: 10px;"'Add _.div
      mydiv.Add _.p'Right-click inside this box to see the context menu!'
      mymenu←'type="context"'mydiv.Add _.menu
             ⍝ Ami'r.png' 'Refresh' 'location.reload();'
      :With 'label="Share on..."'mymenu.Add _.menu
                 ⍝ Ami't.png' 'Twitter' 'open(''//twitter.com/intent/tweet?text='' + window.location.href);'
                 ⍝ Ami'f.png' 'Facebook' 'open(''//facebook.com/sharer/sharer.php?u='' + window.location.href);'
      :EndWith
             ⍝ Ami'e.ico' 'Email This Page' 'location=''mailto:?body='''
      ⍝    :EndWith
      ⍝:EndWith
      Add _.p'This example currently only works in Firefox!'
    ∇


:endclass