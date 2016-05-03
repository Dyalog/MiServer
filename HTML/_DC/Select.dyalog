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
      :AndIf ~0∊⍴⊃args
          args←,⊂args
      :EndIf
      (Options Selected Prompt)←args defaultArgs Options Selected Prompt
    ∇

    ∇ r←Render;opts;sel
      :Access public
     
      Content←opts←''
      SetInputName
      Add Selected BuildOptions Options
     
      r←⎕BASE.Render
    ∇

    ∇ r←sel BuildOptions opts
      r←''
      :If ~0∊⍴opts
          opts←eis opts
          :If 1=⍴⍴opts
              opts←opts,⍪opts
          :EndIf
          :If 11=⎕DR sel ⍝ Boolean to indicate selected items?
              sel←{⍵/⍳⍴⍵},sel
          :EndIf
          opts[sel;1],⍨←⎕UCS 1
      :EndIf
     
      :If 1<⍴sel                         ⍝ if we have multiple items selected
      :AndIf 0∊⍴Attrs[⊂'multiple']       ⍝ and the multiple attribute is not set
          Attrs[⊂'multiple']←'multiple'  ⍝ then set it
      :EndIf
     
      :If ~0∊⍴Prompt
      :AndIf ~0∊⍴Attrs[⊂'multiple']  ⍝ prompt makes no sense if multiple selections are allowed
          r,←('disabled="disabled" selected="selected"'New #._html.option Prompt).Render
      :EndIf
     
      r,←FormatOptions opts
    ∇

    ∇ r←FormatOptions opts;opt
      :Access Public Shared
      r←''
      :If ~0∊⍴opts
          :If 1=⍴⍴opts ⋄ opts←opts,⍪opts ⋄ :EndIf
          r←∊{sel←(⎕UCS 1)=1↑⍺ ⋄ '<option',(⍵ ine' value="',(HtmlSafeText ⍵),'"'),(sel/' selected="selected"'),'>',(⍕sel↓⍺),'</option>'}/opts
      :EndIf
    ∇

    ∇ r←{selector}ReplaceOptions args;sel;opts
⍝     Replaces select elements options - used by callback functions
⍝ Ex: r←Execute ReplaceOptions ('New Option 1' 'New Option 2') 1
⍝     arg = options [selected]
      :Access public
      :If 0=⎕NC'selector' ⋄ selector←'#',id ⋄ :EndIf
      args←eis args
      :If (|≡args)∊0 1 2
      :AndIf ~0∊⍴⊃args
          args←,⊂args
      :EndIf
      (opts sel Prompt)←args defaultArgs Options Selected Prompt
      r←selector #.JQ.Replace sel BuildOptions opts
    ∇
:endclass