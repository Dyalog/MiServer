:class ButtonSample : MiPageSample
    
    ∇ Compose
      :Access public 
     
      Add'Is this '
      Add _.Button'' ⍝ Create a button with the default caption
      Add'? '
     
      Add'This is very '
     ⍝ Create a button with a caption of 'clickable'
      Add _.Button'clickable'
      Add'! '
     
      Add'Click '
     ⍝ Create a button with a caption of 'this' and an id of 'myname'
      Add _.Button'this' 'myname'
      Add'to select nothing. '
     
      Add'Push '
     ⍝ Create a button with a caption of 'here' and an id of 'myname'
      Add _.Button'here' 'myname' 'somedata' ⍝ and a value of 'somedata'
      Add'to chose "somedata". '
    ∇
    
:endclass
