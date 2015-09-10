:Class cb : MiPageSample

    ∇ Compose
      :Access public
     
      _DebugCallbacks←1
      (Add _.Button 'Click Me').On 'click'  'myCallback'
    ∇

    ∇ r←myCallback
      :Access public
      r←Execute 'alert("Ta Da!")'     
    ∇
:EndClass