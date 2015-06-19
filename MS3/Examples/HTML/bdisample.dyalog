:class bdisample : MiPage⍝Sample
    ∇ Compose
      :Access public 
      'http-equiv' 'content-type' 'content' 'text/html;charset=UTF-8' Add _.meta
      Add'Only for Chrome and Firefox! My name is '
      Add _.bdi'אדם'
      Add' in Hebrew.'
    ∇
:endclass
