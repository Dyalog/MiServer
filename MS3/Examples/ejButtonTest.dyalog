:Class ejButtonTest : MiPageSample

    ∇ Render;f
      :Access Public
	  f←Add _HTML.Form
      b1←f.Add _SF.ejButton 'Click Me!'
	  b1.id←'b1'
      'type'b1.Set'ej.ButtonType.Button'
      b2←f.Add _SF.ejButton'Click Me!'
	  b2.id←'b2'
      'type' 'enabled'b2.Set'ej.ButtonType.Button'_false
      b1.On 'click' 'myCallback' ('b2state' '#b2' 'enabled')
      b2.On 'click' 'myCallback'
    ∇

    ∇ r←myCallback
      :Access public
      :if 'b1'≡⎕←#.z←_what
	  r←'enabled' b2.Set ⍬⍴_true _false~⎕←Get 'b2state'
	  :else
	  r←Execute'alert("Ding!")'
	  :endif
	  
    ∇

:EndClass