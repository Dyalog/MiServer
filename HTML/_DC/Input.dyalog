:class Input : #._html.input
⍝ Description:: Dyalog input widget
⍝ Constructor:: [type [value [label [labelpos]]]]
⍝ type     - type of input field (text, date, etc) (default is 'text')
⍝ value    - initial value for the input (empty if none)
⍝ label    - string of text to appear next to the button
⍝ labelpos - position of label relative to the input ('left' (default) or 'right')
⍝ Public Fields::
⍝ Label    - string of text to appear next to the input field
⍝ LabelPos - position of label relative to the input field ('left' (default) or 'right')

    :field public Label←''
    :field public LabelPos←'left'

    ∇ Make0
      :Access public
      :Implements constructor
      type←'text'
    ∇

    ∇ Make1 args
      :Access public
      :Implements constructor
      args←eis args
      (type value Label LabelPos)←args defaultArgs'text' '' '' 'left'
    ∇

    ∇ r←Render
      :Access public
      SetInputName
      r←⎕BASE.Render
      :If ~0∊⍴Label
          r←r((LabelPos≡'right'){⍺⍺:⍺,⍵ ⋄ ⍵,⍺})(⎕NEW #._html.label(Label(,⊂'for'id))).Render
      :EndIf
    ∇
:endclass