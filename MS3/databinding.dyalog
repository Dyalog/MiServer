:Class datepicker : Dyalog14 

    :field public inp←''

    ∇ Render;f
      :Access public
      f←Add Form
      f.Add Input 'checkbox' 'inp' 'yes' 'Check Me: '
      f.Add InputSubmit'submit' 'OK'
      :If IsPost ⍝ was it a POST request?
∘∘∘
          Add br
          Add 'Form: ',inp
          Add br
          Add 'PageData: ',Get 'inp'
      :EndIf
    ∇

:EndClass