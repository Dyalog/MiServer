:class InstantIdiom :MiPageSample
⍝ Control:: Idiom Search (Instant)
⍝ Description:: Search the FinnAPL and Dyalog idiom lists upon every keystroke

    ∇ Compose;fm;bn
      :Access public
     
      :If 0=⎕NC'idioms'
          idioms←⎕SE.SALT.Load'[ws]\MS3\Examples\Data\idioms -noname -nolink'
      :EndIf
      Add _.style'td:nth-child(2n+3) {font-family:APL385 Unicode}'
      Add'Start typing to filter: '
      ef←Add _.EditField'str'
      ef.On'keyup' ''('str' 'val')
      Add _.br
      (Add _.div).id←'res'  ⍝ This is a container that will be filled with result
    ∇

    ∇ r←APLJax;found;finn;dyal;rows
      :Access public
      found←idioms⌿⍨∨/∨/¨idioms[;2 3 4]⍷¨⍨⊂Get'str'
      found←found\⍨7⍴1 0
      found[;2×⍳3]←⊂6/⎕UCS 160
      finn←found[;2+⍳5]⌿⍨~found[;1]
      dyal←found[;3 4 7]⌿⍨found[;1]
     
    ⍝ Speedup: If more than 25 rows, then hide after 20
      :If 25<rows←≢finn
          finn↑⍨←20 5
          finn⍪←('[',(⍕rows-20),' more results...]')'' '' '' ''
      :EndIf
      :If 25<rows←≢dyal
          dyal↑⍨←20 3
          dyal⍪←('[',(⍕rows-20),' more results...]')'' ''
      :EndIf
     
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