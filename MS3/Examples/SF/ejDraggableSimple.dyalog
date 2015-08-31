:Class ejDraggableSimple : MiPageSample
⍝ Control:: _SF.ejDraggable
⍝ Description:: Take a div for a drag

    ∇ Compose;drag
      :Access Public
      Add _.h4 'Unfortunately Syncfusion''s implementation of ejDraggable is currently unusable'
      ('dragon'Add _.div'Drag Me!').Style('height' '150px')('width' '150px')('padding' '10px')('background-color' 'aliceblue')
      drag←Add _.ejDraggable'#dragon'
    ∇

:EndClass