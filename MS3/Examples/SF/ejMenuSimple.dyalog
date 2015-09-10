:Class ejMenuSimple : MiPageSample
⍝ Control:: _SF.ejMenu
⍝ Description:: Insert a menu bar with a background image

    ∇ r←Compose;items;t;href;img
      :Access Public
     
    ⍝ Define the items. The ones starting with a star will have the same ID as their caption.
      items ←⊂'*DB' 'PA' 'JM' '*BS' 'NMe' '*GC' 'HB' 'BC'
      items,←⊂1 2 2 3 3 1 2 2
      href←'http://aplsmith.com' 'http://dyalog.com' '' 
      href,← 'https://sites.google.com/site/baavector/home' 'http://dyalog.com/resource-map.htm'
      href,← '' 'http://dyalog.com/meet-team-dyalog.htm' 'http://hellobc.com'
      items,←⊂href
     
      img←'.imgframe' Add _.div  ⍝ add a picture placeholder (.imgframe)
      (img.Add _.ejMenu items).Set 'width' 500
     
     ⍝ The following is used to specify the picture display properties, it has nothing to do with
     ⍝ the menu itself.
      t←'.imgframe{background: url("../Data/menupix.jpg") no-repeat scroll 0 0 transparent;'
      t,←'width: 500px;height: 200px;margin: 0 auto;}'
      (Add _.style t).(type class)← 'text/css' 'cssStyles'
    ∇

:EndClass