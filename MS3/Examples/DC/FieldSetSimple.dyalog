:Class FieldsetSimple : MiPageSample
⍝ Control:: _DC.Fieldset _html.label _.EditField
⍝ Description:: Enter first and last name in a FieldSet (reacts to each keystroke)

    ∇ Render;fieldset;field;prompt;edit;frm;label
      :Access Public
     
     ⍝ We need a form, so that data will be serialized on each callback
      frm←Add _.form
     
      fieldset←frm.Add _.Fieldset'Personalia:' ⍝ The fieldset will surround our input fields
     
      :For (field prompt) :In ('fname' 'First Name:')('lname' 'Last Name:')
          label←(⊂'for'field)fieldset.Add _.label prompt   ⍝ Create label
          edit←field fieldset.Add _.EditField             ⍝ Create EditField
          edit.On'keyup' 'CallbackFn'
          ⍝ NB: unlike keypress, the keyup event is called AFTER the field is updated
          fieldset.Add _.br                               ⍝ Next input on new line
      :EndFor
     
      'result'Add _.div ⍝ CallbackFn will update this
    ∇

    ∇ r←CallbackFn;text
      :Access Public  
     
      text←'Hi ',(Get'fname'),' ',(Get'lname'),'!'
      r←'#result'Replace _.h2 text
    ∇

:EndClass
