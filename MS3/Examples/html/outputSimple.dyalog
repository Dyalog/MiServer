:class outputSimple: MiPageSample
⍝ Control:: _html.output _html.form _html.input
⍝ Description:: Insert an expression's result value

    ∇ Compose
      :Access public
      Add¨'Move the slider and adjust the written number to recalculate:'_.br _.br
     
      myform←'oninput="x.value=(parseInt(a.value)+parseInt(b.value))/2"'Add _.form'First number: 0'
      '#a' 'type="range"' 'value="25"'myform.Add _.input
      myform.Add¨'100'_.br _.br'Second number: '
      '#b' 'type="number"' 'value="75"'myform.Add _.input
      myform.Add¨_.br _.br'The average is: '
      'name="x"'myform.Add _.output
     
      Add¨_.br'This is not supported in Internet Explorer.'
    ∇

:endclass