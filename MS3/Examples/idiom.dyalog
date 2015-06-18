﻿:class idiom :MiPageSample
    
    ∇ Compose;fm;bn
      :Access public
     
      :If 0=⎕NC'idioms'
          idioms←⎕SE.SALT.Load'[ws]\MS3\Data\idioms -noname -nolink'
      :EndIf
     
      Add _.h1'Search Idiom Database'
      Add _.br
      (Add _.EditField'str').On'change' ''('str' 'val')
      Add'      Press '
      'type' 'button'Add _.button'Enter'
      Add'to search'
      Add _.br
      (Add _.div).id←'res'
    ∇

    ∇ r←APLJax;found;finn;dyal
      :Access public
      found←idioms⌿⍨∨/∨/¨idioms[;1 2 4]⍷¨⍨Get'str'
      found←found\⍨7⍴1 0
      found[;2×⍳3]←⊂6/⎕UCS 160
      finn←found[;2+⍳5]⌿⍨~found[;1]
      dyal←found[;3 4 7]⌿⍨found[;1]
      :If ×≢found
          r←'#res'Replace''
          :If ×≢finn
              r,←'#res'Append _.h3'One-liners from the reknown FinnAPL Idiom Library'
              r,←'#res'Append _.Table finn
          :EndIf
          :If ×≢dyal
              r,←'#res'Append _.h3'Recognised and evaluated internally for performance'
              r,←'#res'Append _.Table dyal
          :EndIf
      :Else
          r←'#res'Replace _.h3'No matching idioms found'
      :EndIf
    ∇

:endclass