:class Select : #._html.select
⍝ Description:: Dyalog Enhanced HTML select
⍝ Constructor:: [options [[selected] [[disabled] [prompt]]]]
⍝ options   - vector of options or 2 column matrix of displayed[;1] and returned[;2] values
⍝ selected  - Boolean or integer array indicating pre-selected options(s)
⍝ disabled  - Boolean or integer array indicating disabled options(s)
⍝ prompt    - first item to display (has no value) (default '[Select]')
⍝
⍝ Public Fields::
⍝ Options   - vector of options or 2 column matrix of displayed[;1] and returned[;2] values
⍝ Selected  - Boolean or integer array indicating pre-selected options(s)
⍝ Disabled  - Boolean or integer array indicating disabled options(s)
⍝ Prompt      - first item to display (has no value) (default '[Select]')
⍝ 
⍝ Public Methods::
⍝ ReplaceOptions options [[selected] [disabled]]
⍝ Arguments as discussed above
⍝
⍝ Examples::
⍝ Select  ('Choice 1' 'Choice 2' 'Choice 3')
⍝ Select  (3 2⍴'One' 'c1' 'Two' 'c2' 'Three' 'c3')
⍝ Select ((3 2⍴'One' 'c1' 'Two' 'c2' 'Three' 'c3') 2) ⍝ second item is selected
⍝ Select ((3 2⍴'One' 'c1' 'Two' 'c2' 'Three' 'c3') (0 1 0)) ⍝ second item is selected
⍝ Select ((3 2⍴'One' 'c1' 'Two' 'c2' 'Three' 'c3') 2 3 'Pick One') ⍝ second item is selected, third item is disabled
⍝ Select ((3 2⍴'One' 'c1' 'Two' 'c2' 'Three' 'c3') (2 3) 1) ⍝ second and third items are selected, first item is disabled

    :field public Options←0 2⍴⊂''     ⍝ vector or matrix [;1] display, [;2] value
    :field public Selected←⍬          ⍝ either Boolean integer vector indicating
    :field public Prompt←'[Select]'   ⍝ character vector "Prompt" choice - the first choice on the list and does not have a value
    :field public Disabled←⍬          ⍝ either Boolean integer vector indicating

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
      (Options Selected Disabled Prompt)←args defaultArgs Options Selected Disabled Prompt
    ∇

    ∇ r←Render;opts;sel
      :Access public
     
      Content←opts←''
      SetInputName
      Add BuildOptions(Options Selected Disabled)
     
      r←⎕BASE.Render
    ∇

    ∇ r←BuildOptions(opts sel dis);v
      r←''
      :If ~0∊⍴opts
          opts←eis opts
          :If 1=⍴⍴opts
              opts←opts,⍪opts
          :EndIf
      :EndIf
          
      v←⍳⍬⍴⍴opts
      (sel dis)←v∘∊∘{∧/⍵∊0 1:⍵/⍳⍴⍵ ⋄ ⍵}∘,¨sel dis
      :If 1<+/sel                         ⍝ if we have multiple items selected
      :AndIf 0∊⍴⊃Attrs[⊂'multiple']       ⍝ and the multiple attribute is not set
          Attrs[⊂'multiple']←⊂'multiple'  ⍝ then set it
      :EndIf
     
      :If ~0∊⍴Prompt
      :AndIf 0∊⍴⊃Attrs[⊂'multiple']  ⍝ prompt makes no sense if multiple selections are allowed
          r,←(('disabled="disabled" value=""',(~∨/sel)/'selected="selected"')New #._html.option Prompt).Render
      :EndIf
     
      r,←FormatOptions(opts sel dis)
    ∇

    ∇ r←FormatOptions(opts sel dis);o;s;d
      :Access Public Shared
      r←''
      :If 1=⍴⍴opts ⋄ opts←opts,⍪opts ⋄ :EndIf
      :For o s d :InEach (↓opts)sel dis
          r,←'<option',({⍵ ine' value="',(HtmlSafeText ⍵),'"'}2⊃o),(s/' selected="selected"'),(d/' disabled="disabled"'),'>',(1⊃o),'</option>'
      :EndFor
    ∇

    ∇ r←{selector}ReplaceOptions args;sel;opts;dis;prompt
    ⍝ Replaces select elements options - used by callback functions
    ⍝ Ex: r←Execute ReplaceOptions ('New Option 1' 'New Option 2') 1
    ⍝ arg = options [[selected] [disabled] [prompt]]
      :Access public
      :If 0=⎕NC'selector' ⋄ selector←'#',id ⋄ :EndIf
      args←eis args
      :If (|≡args)∊0 1 2
      :AndIf ~0∊⍴⊃args
          args←,⊂args
      :EndIf
      (opts sel dis prompt)←args defaultArgs Options ⍬ ⍬ Prompt
      r←selector #.JQ.Replace BuildOptions(opts sel dis)
    ∇
:endclass
