:Class callback : Dyalog14

    ∇ Render;h
      :Access public
     
      Add h2'MiPage Sample - Simple Form with Callback'
     
      i←Add Input'text' 'name' '' 'Please enter your name: '
     
      Add br
     
      b←Add InputSubmit'Click Me'
      b.On'click' 1('name' '#name')
     
      (Add div).id←'result'
     
    ∇

    ∇ r←APLJax
      :Access public
      r←'#result'Append h2('Hi ',Get'name')
    ∇
:EndClass