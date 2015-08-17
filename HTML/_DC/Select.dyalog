:class Select : #._html.select
⍝ Description:: Dyalog Enhanced HTML select
⍝ Constructor:: [options [[selected] [prompt]]]
⍝ options   - vector of options or 2 column matrix of displayed[;1] and returned[;2] values
⍝ selected  - Boolean or integer array indicating pre-selected options(s)
⍝ prompt      - first item to display (has no value) (default '[Select]')
⍝ Public Fields::
⍝ Options   - vector of options or 2 column matrix of displayed[;1] and returned[;2] values
⍝ Selected  - Boolean or integer array indicating pre-selected options(s)
⍝ Prompt      - first item to display (has no value) (default '[Select]')
⍝ Examples::
⍝ Select  ('Choice 1' 'Choice 2' 'Choice 3')
⍝ Select  (3 2⍴'Choice 1' 'c1' 'Choice 2' 'c2' 'Choice 3' 'c3')
⍝ Select ((3 2⍴'Choice 1' 'c1' 'Choice 2' 'c2' 'Choice 3' 'c3') 2) ⍝ second item is selected
⍝ Select ((3 2⍴'Choice 1' 'c1' 'Choice 2' 'c2' 'Choice 3' 'c3') (0 1 0)) ⍝ second item is selected
⍝ Select ((3 2⍴'Choice 1' 'c1' 'Choice 2' 'c2' 'Choice 3' 'c3') 2 'Pick One')

    :field public Options←0 2⍴⊂''     ⍝ vector or matrix [;1] display, [;2] value
    :field public Selected←⍬          ⍝ either Boolean integer vector indicating
    :field public Prompt←'[Select]'   ⍝ character vector "Prompt" choice - the first choice on the list and does not have a value

    ∇ make
      :Access public
      :Implements constructor
    ∇

    ∇ make1 args;attr
      :Access public
      :Implements constructor
      args←eis args
      :If (|≡args)∊0 1 2
          args←,⊂args
      :EndIf
      (Options Selected Prompt)←args defaultArgs Options Selected Prompt
    ∇

    ∇ r←Render;opts
      :Access public
      Content←''
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
          Add Prompt FormatOptions opts
      :EndIf
      r←⎕BASE.Render
    ∇

    ∇ r←{Prompt}FormatOptions opts;opt
      :Access Public Shared
      :If 0=⎕NC'Prompt' ⋄ Prompt←'' ⋄ :EndIf
      :If 1=⍴⍴opts ⋄ opts←opts,⍪opts ⋄ :EndIf
      opt←(0∊⍴Prompt)↓(Prompt'')⍪opts
      r←∊{sel←(⎕UCS 1)=1↑⍺ ⋄ '<option',(⍵ ine' value="',(HtmlSafeText ⍵),'"'),(sel/' selected="selected"'),'>',(⍕sel↓⍺),'</option>'}/opt
     
    ∇
:endclass