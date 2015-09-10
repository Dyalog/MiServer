:Class jqDraggableSimple : MiPageSample
⍝ Control:: _JQ.jqDraggable
⍝ Description:: Take a div for a drag

    ∇ Compose;drag
      :Access Public
      ('dragon'Add _.div'Drag Me!').Style('height' '150px')('width' '150px')('padding' '10px')('background-color' 'aliceblue')
      drag←Add _.jqDraggable'#dragon'
      drag.On'stop' 'myCallBack'('pos' 'ui' 'position') ⍝ 0 '' 'alert(JSON.stringify(this))' ⍝
    ∇

    ∇ r←myCallBack;date
      :Access Public
      r←'#dragon'Replace'You stopped at: ',#.JSON.fromAPL Get'pos'
    ∇


:EndClass