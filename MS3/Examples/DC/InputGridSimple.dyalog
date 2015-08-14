:Class InputGridSimple : MiPageSample
⍝ Control:: _DC.InputGrid
⍝ Description:: Enter first, last name and birthdate

    ∇ Render;ig;btn;handler;frm
      :Access Public
     
      Add _.h2'Please tell us about yourself'
     
     ⍝ First we need a form for the button below to serialize the data to be sent
      frm←Add _.form
     
     ⍝ The grid
      ig←frm.Add _.InputGrid
     
     ⍝ There are a few fields we can use. Here we set the Border to none
      ig.Border←0
     ⍝ The labels, by default they are aligned to the left of the input areas
     ⍝ ig.Flip←1 would put them to the right
      ig.Labels←'First name' 'Last name' 'Birthdate'
     ⍝ We give an ID to each so we can retrieve their values in the callback
      ig.Inputs←'fname' 'lname' 'bdate'New¨_.EditField _.EditField _.jqDatePicker
     
     ⍝ Finally we add a button to generate the display in the 'result' div below
      btn←'style="margin-top,margin-bottom: 50px"'frm.Add _.Button'Click Me!'
      btn.type←'button'
      btn.On'click' 'CallbackFn'
     
      'result'frm.Add _.div  ⍝ this is where the result will appear
    ∇

    ∇ r←CallbackFn
      :Access Public  
     ⍝ First we instruct to display 'Hi' followed by the full name
      r←'#result'Replace _.h2('Hi',⍕Get'fname lname')
     ⍝ and if the birthdate given happens to be today's we pop up a birthday message:
      :If ⎕TS[2 3]≡2⍴(4⍴100)⊤2⊃⎕VFI(Get'bdate')∩⎕D
          r,←Execute'alert("Happy Birthday!")'
      :EndIf
    ∇

:EndClass