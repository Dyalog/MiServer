 msg←Test dummy;canvases
 canvases←⌷'TagNames'Find'canvas'
 :If 0=⍴msg←'canvases not found'/⍨5≢≢canvases
 :AndIf 0=⍴msg←'canvas with wrong role'/⍨∨/'presentation'∘≢¨canvases.GetAttribute 5/⊂⊂'role'
 :EndIf