:Class Figure : #._html.figure
⍝ Description:: Same as base HTML5 figure, but with Caption and CaptionPos attributes
⍝ Constructor:: [content [attr]]
⍝ content    - the content for the figure
⍝ attr       - attribute settings, if any, for the figure
⍝ Public Fields::
⍝ Caption    - Caption to display for the figure
⍝ CaptionPos - Caption position, either 'bottom' (the default) or 'top'

    :Field Public Caption←''
    :field public CaptionPos←'bottom'  ⍝ valid values are 'bottom' 'top'

    ∇ html←Render
      :Access Public
      :If ~0∊⍴Caption
          :If 'bottom'≢CaptionPos
              Insert #._html.figcaption Caption
          :Else
              Add #._html.figcaption Caption
          :EndIf
      :EndIf
      html←⎕BASE.Render
    ∇

:EndClass