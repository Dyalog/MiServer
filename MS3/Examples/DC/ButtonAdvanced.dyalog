:class ButtonAdvanced : MiPageSample
⍝ Control::     _.DC.Button
⍝ Description:: This example shows how to create buttons with captions
⍝ and callback programs from various events

    ∇ Compose;b1;b2;b3
      :Access public
     
      Add _.h2'Example of button usage'
     
     ⍝ Create a button with a caption
      b1←'B1'Add _.Button'Press me'
     
     ⍝ Add a callback program
      b1.On'click' 'CBPgm'
     
      Add¨3/_.br
     
      Add'Of which sex are you?'
      Add _.br
     
     ⍝ Create buttons with a caption and the different names.
     ⍝ They also have a value.
     ⍝ We cannot create radio buttons with the Button object
     ⍝ for that we need to use the Input object with type "radio"
     
      b2←,Add _.Button'Male' 'sex1' 'male'
      b2,←Add _.Button'Female' 'sex2' 'female'
      b2,←Add _.Button'Undecided' 'sexX' 'who knows?'
     
     ⍝ Add a callback for these too
      b2.On⊂'click' 'CBPgm'
     
      'out'Add _.div ⍝ where we will output something
     
      Add¨3/_.br
     ⍝ Create a button with a caption and an id of 'myname'
      b3←'B3'Add _.Button'Press and hold to test'
      b3.On'mousedown' 'CBPgm'
      b3.On'mouseup' 'CBPgm'
    ∇

    Alert←{Execute _JSS.Alert ⍵}

    ∇ r←CBPgm
      :Access public
      ⍝ Which button was pressed?
      :If 'B1'≡_what
          r←Alert'You pressed the button!'
      :ElseIf 'B3'≡_what
          r←'#B3'Replace(1+_event≢'mousedown')⊃'Release to detonate' 'Keep pressed'
      :Else  ⍝ must be B2 then
          r←'#out'Replace'sex=',_value
      :EndIf
    ∇

:endclass