:Class LoopBack : MiPageSample

    started←0

    ∇ Render;f;list
      :Access public
      Add h2'LoopBack Test'
      (Add Button'myButt' 'Start/Stop').On'click' 'Toggle'
      Add Handler'body' 'ping' 'Pong'
      (Add div).id←'output'
    ∇

    ∇ r←Toggle
      :Access public
      started←~started
      r←''
      :If started
          r←Execute'$("body").trigger("ping")'
      :EndIf
    ∇

    ∇ r←Pong
      :Access public
      r←''
      :If started
          r←'#output'Replace⍕⎕TS
          r,←Execute'$("body").trigger("ping")'
      :EndIf
    ∇
:EndClass