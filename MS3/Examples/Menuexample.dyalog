:Class Menuexample : Dyalog14 
⍝ Demonstrate the SyncFusion ejMenu widget
    
    ∇ r←Render;items
      :Access Public
	items←((1 2 2 3 3 1 2 2)('MK' 'BB' 'DB' 'AB' 'RH' 'GC' 'HB' 'BC')(⍬'#loc'⍬'apl.dk' 'apl.ca'⍬'#accounts' 's.r.us'))
     #.Z← r←(⎕NEW _SF.ejMenu items).Render 
    ∇
    
:EndClass