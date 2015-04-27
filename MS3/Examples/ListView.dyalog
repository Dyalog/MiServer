:Class ListView : MiPageSample
⍝ Demonstrate the SyncFusion ejListView widget
    
    ∇ r←Render;items;t
      :Access Public
      items←((1 1 1 1 1 1 1 1)('MK' 'BB' 'DB' 'AB' 'RH' 'GC' 'HB' 'BC')(⍬'#loc'⍬'apl.dk' 'apl.ca'⍬'#accounts' 's.r.us'))
      'enableCheckMark' 'width'(Add _SF.ejListView items).Set _true 400
      →0
      t←'<style type="text/css" class="cssStyles">'
      t,←'.imgframe{background: url("menupix.jpg") no-repeat scroll 0 0 transparent;width: 615px;height: 213px;margin: 0 auto;}</style>'
      Add t
    ∇
    
:EndClass