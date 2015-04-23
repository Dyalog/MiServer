:Class inputform : DyNApage
    ∇ Render;frm;ig;btn;handler
      :Access public
      Add _html.h2'Please tell us about yourself'
      (frm←Add _HTML.Form).id←'myform'
      (ig←frm.Add _HTML.InputGrid).Border←0
      ig.Labels←'First name' 'Last name' 'Birthdate'
      ig.Inputs←(_HTML.EditField'fname')(_HTML.EditField'lname')(_JQ.jqDatePicker'bdate')
      frm.Add _html.br
      btn←frm.Add _HTML.Button'mybutton' 'Click Me!'
      handler←btn.On'click' 'CallbackFn'
      handler.ClientData←'formdata' '#myform' 'serialize'
      (Add _html.div).id←'result'
    ∇

    ∇ r←CallbackFn
      :Access public
      r←'#result'Replace _html.h2('Hi ',⍕Get'fname lname')
      :If ⎕TS[2 3]≡2↑{⊃(//)⎕VFI ⍵{⍵\⍵/⍺}⍵∊⎕D}Get'bdate'
          r,←Execute'alert("Happy Birthday!")'
      :EndIf
    ∇
:EndClass