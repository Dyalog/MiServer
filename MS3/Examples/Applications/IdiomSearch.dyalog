:class IdiomSearch :MiPageSample
⍝ Control:: Idiom Search
⍝ Description:: Search the FinnAPL and Dyalog idiom lists

    ∇ Compose;fm;bn
      :Access public
     
      :If 0=⎕NC'idioms'
          idioms←⎕SE.SALT.Load'[ws]\MS3\Examples\Data\idioms -noname -nolink'
      :EndIf
      Add _.style'td:nth-child(2n+3) {font-family:APL385 Unicode}'
      ef←Add _.EditField'str'
      ef.On'change' ''('str' 'val')
      Add'      Press '
      Add _.Button'Enter'
      Add'to search'
      Add _.br
      (Add _.div).id←'res'  ⍝ This is a container that will be filled with result
    ∇

    ∇ r←APLJax;found;finn;dyal
      :Access public
      found←idioms⌿⍨∨/∨/¨idioms[;2 3 4]⍷¨⍨⊂Get'str'
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