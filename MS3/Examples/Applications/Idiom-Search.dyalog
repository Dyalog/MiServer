:Class Idiom_Search :MiPageSample
⍝ Control:: Idiom_Search
⍝ Description:: Search the Dyalog and FinnAPL idiom lists

    ∇ Compose;fm;bn
      :Access Public
     
      :If 0=⎕NC'idioms'
          idioms←⎕SE.SALT.Load'[ws]\MS3\Examples\Data\idioms -noname -nolink'
      :EndIf
     
      Add _.(style ScriptFollows)
       ⍝ .IdiomTable {
       ⍝     border: 1px solid black;
       ⍝     border-collapse: collapse;
       ⍝     font-size: 13px;
       ⍝ }
       ⍝ #str,
       ⍝ .IdiomTable td:nth-child(1n+2) {font-family:APL385 Unicode;}
       ⍝ .IdiomTable td,
       ⍝ .IdiomTable {
       ⍝     border: 1px solid black;
       ⍝     padding: 3px;
       ⍝ }
       ⍝ .IdiomTable tr:nth-child(odd) {background-color: orange;}
     
      ef←Add _.EditField'str'
      ef.On'change' 'Search'('str' 'val')
      Add' Press '
      Add _.Button'Enter'
      Add'to search'
      Add _.br
      (Add _.div).id←'res'  ⍝ This is a container that will be filled with result
    ∇

    ∇ r←Search;found;finn;dyal
      :Access public
      found←idioms⌿⍨∨/∨/¨idioms[;2 3 4]⍷¨⍨⊂Get'str'
      found←found\⍨7⍴1 0
      found[;2×⍳3]←⊂6/⎕UCS 160
      finn←found[;2+⍳5]⌿⍨~found[;1]
      dyal←found[;3 4 7]⌿⍨found[;1]
      :If ×≢found
          r←'#res'Replace''
          :If ~0∊⍴dyal
              r,←'#res'Append _.h3'Dyalog Optimised Idioms'
              r,←'#res'Append'.IdiomTable'New _.Table dyal
          :EndIf
          :If ~0∊⍴finn
              r,←'#res'Append _.h3'FinnAPL Idiom Library'
              r,←'#res'Append'.IdiomTable'New _.Table(finn[;1 3 5]) ⍝ /// What is in these columns?
          :EndIf
     
      :Else
          r←'#res'Replace _.h3'No matching idioms found'
      :EndIf
    ∇

:EndClass