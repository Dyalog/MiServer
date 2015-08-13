:Class InputGridSimple : MiPageSample
⍝ Control:: _DC.InputGrid
⍝ Description:: Enter first, last name and birthdate

    ∇ Render;frm;ig;btn;handler
      :Access Public
     
      Add _.h2'Please tell us about yourself'
      (frm←Add _.Form).id←'myform'
      (ig←frm.Add _.InputGrid).Border←0
      ig.Labels←'First name' 'Last name' 'Birthdate'
      ig.Inputs←'fname' 'lname' 'bdate'New¨_.EditField _.EditField _.jqDatePicker
     
      btn←'style="margin-top,margin-bottom: 50px"'frm.Add _.Button'Click Me!'
      btn.On'click' 'CallbackFn'
     
      'result'frm.Add _.div
    ∇

    ∇ r←CallbackFn
      :Access Public
     
      r←'#result'Replace _.h2('Hi ',⍕Get'fname lname')
      :If ⎕TS[2 3]≡2⍴(4⍴100)⊤2⊃⎕VFI(Get'bdate')∩⎕D
          r,←Execute'alert("Happy Birthday!")'
      :EndIf
    ∇

:EndClass