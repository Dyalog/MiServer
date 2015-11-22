:class InputFile : #._DC.Input
⍝ Description:: Dyalog input file widget
⍝ Constructor:: [label [labelpos]]
⍝ label    - string of text to appear next to the button
⍝ labelpos - position of label relative to the input ('left' (default) or 'right')
⍝ Public Fields::
⍝ Label    - string of text to appear next to the input field
⍝ LabelPos - position of label relative to the input field ('left' (default) or 'right')                                   

    ∇ Make0
      :Access public
      :Implements constructor
      type←'file'
    ∇

    ∇ Make1 args
      :Access public
      :Implements constructor
      args←eis args
      (Label LabelPos)←args defaultArgs'' 'left'
      type←'file'
    ∇

    ∇ r←Render
      :Access public
      type←'file'
      r←⎕BASE.Render
    ∇
:endclass