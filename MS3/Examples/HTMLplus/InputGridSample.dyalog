:Class InputGridSample : MiPageSample

  ∇ Render;frm;ig;btn;handler
    :Access public
    Add h2'Please tell us about yourself'
    (frm←Add Form).id←'myform'
    (ig←frm.Add InputGrid).Border←0
    ig.Labels←'First name' 'Last name' 'Birthdate'
    ig.Inputs←New¨(EditField'fname')(EditField'lname')(_JQ.jqDatePicker'bdate')
    frm.Add br
    btn←frm.Add Button'mybutton' 'Click Me!'
    handler←btn.On'click' 'CallbackFn'
    handler.ClientData←'formdata' '#myform' 'serialize'
    (Add div).id←'result'
  ∇

  ∇ r←CallbackFn
    :Access public
    r←'#result'Replace h2('Hi ',⍕Get'fname lname')
    :If ⎕TS[2 3]≡2↑{⊃(//)⎕VFI ⍵{⍵\⍵/⍺}⍵∊⎕D}Get'bdate'
      r,←Execute'alert("Happy Birthday!")'
    :EndIf
  ∇
:EndClass