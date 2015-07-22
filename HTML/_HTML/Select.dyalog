:class Select : #._html.select
⍝ Description:: Dyalog Enhanced HTML select
⍝ Constructor:: [options [[selected] [null]]]
⍝ options   - vector of options or 2 column matrix of displayed[;1] and returned[;2] values
⍝ selected  - Boolean or integer array indicating pre-selected options(s)
⍝ null      - first item to display (has no value) (default '[Select]')
⍝ Public Fields::
⍝ Options   - vector of options or 2 column matrix of displayed[;1] and returned[;2] values
⍝ Selected  - Boolean or integer array indicating pre-selected options(s)
⍝ Null      - first item to display (has no value) (default '[Select]')
⍝ Examples::
⍝ Select (⊂'Choice 1' 'Choice 2' 'Choice 3')                       ⍝ needs to be enclosed if vector
⍝ Select  (3 2⍴'Choice 1' 'c1' 'Choice 2' 'c2' 'Choice 3' 'c3')
⍝ Select ((3 2⍴'Choice 1' 'c1' 'Choice 2' 'c2' 'Choice 3' 'c3') 2) ⍝ second item is selected
⍝ Select ((3 2⍴'Choice 1' 'c1' 'Choice 2' 'c2' 'Choice 3' 'c3') (0 1 0)) ⍝ second item is selected
⍝ Select ((3 2⍴'Choice 1' 'c1' 'Choice 2' 'c2' 'Choice 3' 'c3') 2 'Pick One')

    :field public Options←0 2⍴⊂'' ⍝ vector or matrix [;1] display, [;2] value
    :field public Selected←⍬      ⍝ either Boolean integer vector indicating
    :field public Null←'[Select]' ⍝ character vector "null" choice - the first choice on the list and does not have a value

    ∇ make
      :Access public
      :Implements constructor
    ∇

    ∇ make1 args;attr
      :Access public
      :Implements constructor
⍝      :Select ⊃⍴⍴args
⍝      :Case 1
⍝          :If 0 2∊⍨10|⎕DR args ⍝ simple character vector
⍝              args←,⊂args
⍝          :ElseIf ~2|⎕DR 2⊃args ⍝
⍝              args←,⊂args
⍝          :EndIf
⍝      :Case 2 ⋄ args←,⊂args
⍝      :Else
⍝      :EndSelect
      args←,∘⊂⍣(2∊⍴⍴args)⊢args ⍝ enclose matrices
      (Options Selected Null)←args defaultArgs(Options Selected Null)
    ∇

    ∇ r←Render;opts;sel
      :Access public
      SetId
      :If ~0∊⍴Options
          opts←{(⍵,⍵)[;⍳2]}⍪Options
          :If (11≠⎕DR sel)∨(,1)≡sel←Selected
              sel←(⍳1↑⍴opts)∊sel
          :EndIf
          :If Null≢'' ⋄ opts←Null''⍪opts ⋄ sel←0,sel ⋄ :EndIf
     
          Add∊sel FormatOptions¨↓opts
      :EndIf
      r←⎕BASE.Render
    ∇
    
    FormatOptions←{'<option value="',(HtmlSafeText 1⊃⍵),'"',(⍺/' selected="selected"'),'>',(2⊃⍵),'</option>'}

:endclass