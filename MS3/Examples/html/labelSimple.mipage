:class labelSimple: MiPageSample
⍝ Control:: _html.label _html.form
⍝ Description:: Include text in controls' clickable area

    ∇ Compose
      :Access public
     
      Add _.p'Click on one of the text labels to toggle the related control:'
      :With Add _.form
          'for="male"'Add _.label'Male'
          '#male' 'type="radio"' 'name="sex"' 'value="male"'Add _.input
          Add¨2/_.br
          'for="female"'Add _.label'Female'
          '#female' 'type="radio"' 'name="sex"' 'value="female"'Add _.input
          Add¨2/_.br
          'type="submit"' 'value="Submit"'Add _.input
      :EndWith
    ∇

:endclass