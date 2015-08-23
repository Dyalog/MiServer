:Class FieldSetSimple : MiPageSample
⍝ Control:: _DC.FieldSet _html.label _.EditField
⍝ Description:: Enter first and last name in a FieldSet and react to onkeypress events

    ∇ Render;fieldset;field;prompt;edit;frm
      :Access Public
     
     ⍝ First we need a form for the button below to serialize the data to be sent
      frm←Add _.form
     
      fieldset←frm.Add _.Fieldset'Personalia:'       ⍝ The fieldset will surround our input fields
     
      :For (field prompt) :In ('fname' 'First Name:')('lname' 'Last Name:')
          ('for'field)fieldset.Add _.label prompt   ⍝ Create label
          edit←field fieldset.Add _.EditField         ⍝ Create EditField
          edit.On'keypress' 'CallbackFn'     ⍝ Catch keypress events
          fieldset.Add _.br                           ⍝ Line Break
      :EndFor
     
      'result'Add _.div
    ∇

    ∇ r←CallbackFn;text
      :Access Public  
     
      text←'Hi ',(Get'fname'),' ',(Get'lname'),'.'
      r←'#result'Replace _.h2 text
    ∇

:EndClass