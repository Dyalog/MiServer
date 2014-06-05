:Class plain : MildPage

    :Include #.HTMLInput
    

    ∇ Render req;data;html
      :Access Public   
     
      data←4 3⍴'Name' 'Age' 'Sex' 'Fred' 35 'Male' 'Susan' 50 'Female' 'Chris' 18 'Female'
     
      html←'h2'Enclose'This is a simple page with a table of data, an input field, and a submit button'
     
      html,←BRA Table data'border="1"'
     
      html,←'post'Form'Enter your name: ',('name'Edit'' 25),2 SP'submit'Submit'Click Me'
     
      req.Return html
    ∇

:EndClass
