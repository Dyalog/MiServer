:Class jqDroppableSimple : MiPageSample
⍝ Control:: _JQ.jqDroppable
⍝ Description:: Take a div for a drag and drop

    ∇ Compose;drop;left;right
      :Access Public                  
     
    ⍝ Add and style the left division
      left←'#dropin'Add _.div'Drop It Here!'
      left.Style('height' '150px')('width' '150px')('margin' '10px')('padding' '10px')('background-color' 'darkkhaki')('float' 'right')
     
    ⍝ make the element with id 'dropin' (the div we just added) accept things with id 'dragon' to be dropped
      drop←Add _.jqDroppable'#dropin' '#dragon'
      drop.On'drop' 'myCallBack'
     
    ⍝ Add and style the right division
      right←'#dragon'Add _.div'Drag Me!'
      right.Style('height' '150px')('width' '150px')('margin' '10px')('padding' '10px')('background-color' 'aliceblue')('float' 'right')
     
    ⍝ Specify that the element with id 'dragon' (the div we just added) is draggable
      Add _.jqDraggable'#dragon'
     
    ∇

    ∇ r←myCallBack;date
      :Access Public
      r←'#dropin'Replace'Good Job!'  ⍝ congratulate the user
      r,←'#dragon'Replace' '         ⍝ blank out the dropped div
      r,←Execute'#dragon'Css'background-color' 'inherit' ⍝ hide it by making it have its parent's background
      r,←Execute'#dropin'Css'background-color' 'gold'    ⍝ change the background of the recipient div
    ∇


:EndClass