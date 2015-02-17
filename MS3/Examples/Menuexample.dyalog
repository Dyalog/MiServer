:Class Menuexample : Dyalog14 
⍝ Demonstrate the SyncFusion ejMenu widget
    
    ∇ r←Render;items;t
      :Access Public
	items←((1 2 2 3 3 1 2 2)('*MK' 'BB' '*DB' 'AB' 'RH' '*GC' 'HB' 'BC')(⍬'#loc'⍬'apl.dk' 'apl.ca'⍬'#accounts' 's.r.us'))
     ⍝#.Z← r←(⎕NEW _SF.ejMenu items).Render 
t←'<style type="text/css" class="cssStyles">'
        t,←'.imgframe{background: url("../images/menu/menu-bg.png") no-repeat scroll 0 0 transparent;width: 615px;height: 213px;margin: 0 auto;}</style>'

   'width' (Add _SF.ejMenu items).Option    ⍕632
Add t
∇
    
:EndClass