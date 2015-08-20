:class Fieldset: #._html.fieldset
⍝ Description:: Same as base HTML5 fieldset, but accepts the legend for the fieldset as an argument
⍝ Constructor:: [legend]
⍝ legend   - legend/heading to display
⍝ Public Fields::
⍝ Legend   - legend/heading to display

    :field public Legend←''

    ∇ Make0
      :Access public
      :Implements constructor
    ∇

    ∇ Make1 args
      :Access public
      :Implements constructor
      Legend←args
    ∇

    ∇ html←Render
      :Access public
      Add Legend
      html←⎕BASE.Render
    ∇
:endclass