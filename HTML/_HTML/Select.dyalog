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
⍝ Select ('Choice 1' 'Choice 2' 'Choice 3')	
⍝ Select (3 2⍴'Choice 1' 'c1' 'Choice 2' 'c2' 'Choice 3' 'c3')
⍝ Select ((3 2⍴'Choice 1' 'c1' 'Choice 2' 'c2' 'Choice 3' 'c3') 2) ⍝ second item is selected
⍝ Select ((3 2⍴'Choice 1' 'c1' 'Choice 2' 'c2' 'Choice 3' 'c3') (0 1 0)) ⍝ second item is selected
⍝ Select ((3 2⍴'Choice 1' 'c1' 'Choice 2' 'c2' 'Choice 3' 'c3') 2 'Pick One')

    :field public Options←0 2⍴⊂''     ⍝ vector or matrix [;1] display, [;2] value
    :field public Selected←⍬          ⍝ either Boolean integer vector indicating
    :field public Null←'[Select]' ⍝ character vector "null" choice - the first choice on the list and does not have a value

    ∇ make
      :Access public
      :Implements constructor
    ∇

    ∇ make1 args;attr
      :Access public
      :Implements constructor
      :Select ⊃⍴⍴args
      :Case 1
          :If 0 2∊⍨10|⎕DR args ⍝ simple character vector
              args←,⊂args
          :ElseIf ~2|⎕DR 2⊃args ⍝
              args←,⊂args
          :EndIf
      :Case 2 ⋄ args←,⊂args
      :Else
      :EndSelect
      args←eis args
      (Options Selected Null)←3↑args,(⍴args)↓Options Selected Null
    ∇

    ∇ r←Render;opts
      :Access public
      SetId
      :If ~0∊⍴Options
          opts←eis Options
          :If 1=⍴⍴opts
              opts←opts,⍪opts
          :EndIf
          :If 11=⎕DR sel←Selected
              sel←{⍵/⍳⍴⍵},sel
          :EndIf
          opts[sel;1],⍨←⎕UCS 1
          Add Null FormatOptions opts
      :EndIf
      r←⎕BASE.Render
    ∇

    ∇ r←{null}FormatOptions opts
      :Access public shared
      :If 0=⎕NC'null' ⋄ null←'' ⋄ :EndIf
      :If 1=⍴⍴opts ⋄ opts←opts,⍪opts ⋄ :EndIf
      r←∊{sel←(⎕UCS 1)=1↑⍺ ⋄ '<option value="',(HtmlSafeText ⍵),'"',(sel/' selected="selected"'),'>',(⍕sel↓⍺),'</option>'}/¨↓(0∊⍴null)↓(null'')⍪opts
    ∇
:endclass