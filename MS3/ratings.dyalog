:Class Ratings : Dyalog14

    ∇ Render;frm;ig;btn
      :Access public
      Add h2'How Did We Do?'
      frm←'myform'Add Form
      (ig←frm.Add InputGrid).Border←0
      ig.Labels←↓h3,⍪'Presenter' 'Materials' 'Exercises'
      ig.Inputs←↓ejRating,⍪'who' 'what' 'how'
      frm.Add br
      (frm.Add Button'mybutton' 'Click Me!').On'click' 'CallbackFn' 
      '#response'Add div
    ∇

    ∇ r←CallbackFn
      :Access public
      r←'#response'Replace'Hello'
      ⎕←_Request.Data
    ∇
:EndClass

