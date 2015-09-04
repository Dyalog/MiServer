:Class SubmitButtonSimple : MiPageSample
⍝ Control:: _DC.SubmitButton _DC.ResetButton _DC.Fieldset
⍝ Description:: Use a Submitbutton to POST the form, rather than use an AJAX callback

    :Field Public fname←''
    :Field Public lname←'' 

    ∇ Compose;frm;field;prompt;value;fieldset;hello
      :Access Public
     
      :If _Request.Command≡'get' ⍝ Reset names on a GET
          fname←lname←''
      :EndIf
     
      Add _.p ScriptFollows
      ⍝ The SubmitbUTTON control will cause a POST of the form that it is in back to the server.
      ⍝ Unlike callbacks that are set up using handlers or the On function, this will cause the
      ⍝ Compose function to run each time the button is pressed. Because the class has two
      ⍝ public fields with the same name as the EditFields created below, MiServer will populate
      ⍝ these two variables with the input each time the form is posted back.
     
      Add _.p ScriptFollows
      ⍝ Today, this type of page, which refreshes completely each time the button is pressed,
      ⍝ is considerd old-fashioned: new applications should use AJAX-style interation, as do
      ⍝ the vast majority of the MS3 samples.
     
      frm←Add _.form
      fieldset←frm.Add _.Fieldset'Personalia:' ⍝ The fieldset will surround our input fields
     
      :For (field prompt value) :In ('fname' 'First Name:'fname)('lname' 'Last Name:'lname)
          ('for'field)fieldset.Add _.label prompt   ⍝ Create label
          field fieldset.Add _.EditField value       ⍝ Create EditField
          fieldset.Add _.br                               ⍝ Next input on new line
      :EndFor
     
      Add _.br
      frm.Add _.SubmitButton'Submit'
      frm.Add _.ResetButton'Reset'
     
      :If 0≠⍴fname,lname ⋄ hello←'Hello, ',fname,' ',lname,'!'
      :Else ⋄ hello←'' ⋄ :EndIf
     
      Add _.div hello ⍝ CallbackFn will update this
    ∇

:EndClass