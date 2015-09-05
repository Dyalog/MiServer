:Class SubmitButtonSimple : MiPageSample
⍝ Control:: _DC.SubmitButton _DC.ResetButton _DC.Fieldset
⍝ Description:: Use a Submitbutton to POST the form, rather than use an AJAX callback

    :Field Public fname←''
    :Field Public lname←'' 

    ∇ Compose;frm;field;prompt;value;fieldset;hello;inputs
      :Access Public
     
      :If _Request.Command≡'get' ⍝ Reset names on a GET
          fname←lname←''
      :EndIf
     
      Add _.p ScriptFollows
      ⍝ The SubmitButton control will cause a submission of the form that it is in back to the server.
      ⍝ Unlike callbacks that are set up using handlers or the On function, this will cause the
      ⍝ Compose function to run each time the button is pressed. Because the class has two
      ⍝ public fields with the same name as the EditFields created below, MiServer will populate
      ⍝ these two variables with the input each time the form is posted back.
     
      Add _.p ScriptFollows
      ⍝ Today, this type of page, which refreshes completely each time the button is pressed,
      ⍝ is considerd old-fashioned: new applications should use AJAX-style interation, as do
      ⍝ the vast majority of the MS3 samples.
     
      frm←Add _.Form
      fieldset←frm.Add _.Fieldset'Personalia:' ⍝ The fieldset will surround our input fields
      inputs←fieldset.Add _.InputGrid
      inputs.Labels←'First Name:' 'Last Name:'
      inputs.Inputs←{New _.EditField ⍵}¨'fname' 'lname'	
              
      Add _.br
      frm.Add _.SubmitButton'Submit'
      frm.Add _.ResetButton'Reset'
     
      :If 0≠⍴fname,lname ⋄ hello←'Hello, ',fname,' ',lname,'!'
      :Else ⋄ hello←'' ⋄ :EndIf
     
      Add _.div hello ⍝ CallbackFn will update this
    ∇

:EndClass