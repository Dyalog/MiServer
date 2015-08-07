:class formSimple: MiPageSample
⍝ Control:: _html.form _html.input _html.textarea _html.select _html.option _html.optgroup _html.fieldset _html.label _.keygen
⍝ Description:: Create a form using many form-related elements

    ∇ Compose
      :Access public
      myform←'action="demo_keygen.asp"'⊢'method="get"'Add _.form
     
     ⍝ This adds a box with an embedded legend
      mybox←myform.Add _.fieldset
      mybox.Add _.legend'Text input'
      'for="user"'mybox.Add _.label'User name: '
      '#user'mybox.Add _.input
      mybox.Add¨2/_.br
      'cols="50"'mybox.Add _.textarea'Anyone who can write an APL function should be able to host it on the web.™'
     
      mybox←myform.Add _.fieldset
      mybox.Add _.legend'Selection'
      'for="prim"'mybox.Add _.label'Primitives: '
      primitives←'#prim'mybox.Add _.select
     
      fns←'label="Functions"'primitives.Add _.optgroup
      fns.Add¨(_.option,⊂)¨'Ceiling' 'Floor' 'Encode' 'Decode'
     
      ops←'label="Ops"'primitives.Add _.optgroup
      ops.Add¨(_.option,⊂)¨'Each' 'Commute' 'Power' 'Rank'
     
      mybox.Add¨2/_.br
      mybox.Add'Security: '
      'name="security"'mybox.Add _.keygen
     
      myform.Add _.br
      'type="submit"'myform.Add _.input
    ∇
:endclass