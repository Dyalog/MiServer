:Class Fieldset: #._html.fieldset
⍝ Description:: Same as base HTML5 fieldset, but accepts the legend for the fieldset as an argument
⍝ Constructor:: [legend]
⍝ legend   - legend/heading to display
⍝ Public Fields::
⍝ Legend   - legend/heading to display

    :Field Public Legend←''

    ∇ Make0
      :Access Public
      :Implements constructor
    ∇

    ∇ Make1 args
      :Access Public
      :Implements constructor
      Legend←args
    ∇

    ∇ html←Render
      :Access Public
     
      Add _.legend Legend
      html←⎕BASE.Render
    ∇

:EndClass