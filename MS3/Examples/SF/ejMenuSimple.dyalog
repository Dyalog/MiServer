:Class ejMenuSimple : MiPageSample
⍝ Control:: _SF.ejMenu
⍝ Description:: basic menu with background image

    ∇ r←Compose;items;t;imgframe
      :Access Public
      imgframe←'.imgframe'Add _.div
      items←⊂'*MK' 'BB' 'DB' '*AB' 'RH' '*GC' 'HB' 'BC'
      items,←⊂1 2 2 3 3 1 2 2
      items,←⊂'http://dyalog.com' '' 'http://aplsmith.com'
      (⊃⌽items),←'' 'http://en.wikipedia.org/wiki/Roger_Hui'
      (⊃⌽items),←'http://dyalog.com/meet-team-dyalog.htm' '' 'http://hellobc.com'
      'width'(imgframe.Add _.ejMenu items).Set 632
     
      t←'.imgframe{background: url("../Data/menupix.jpg") no-repeat scroll 0 0 transparent;'
      t,←'width: 615px;height: 213px;margin: 0 auto;}'
      (Add _.style t).(type class)←'text/css' 'cssStyles'
    ∇

:EndClass