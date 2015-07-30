:class formSimple: MiPageSample
⍝ Control:: _html.form _html.input _html.textarea _html.select _html.option _html.optgroup _html.fieldset _html.label
⍝ Description:: most form related elements

    ∇ Compose
      :Access public
      myform←Add _.form
     
     ⍝ This adds abox with an embedded legend
      mybox←myform.Add _.fieldset
      mybox.Add _.legend'Text input elements'
     
      mybox.Add¨_.input,2/_.br
     
      'cols="50"'mybox.Add _.textarea'Anyone who can write an APL function should be able to host it on the web.™'
     
      myform.Add¨2/_.br
     
      primitives←myform.Add _.select
      fns←'label="Functions"'primitives.Add _.optgroup
      fns.Add¨(_.option,⊂)¨'Ceiling' 'Floor' 'Encode' 'Decode'
      ops←'label="Ops"'primitives.Add _.optgroup
      ops.Add¨(_.option,⊂)¨'Each' 'Commute' 'Power' 'Rank'
     
    ∇
   
:endclass