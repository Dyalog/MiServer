:Class memleaktest : MiPageSample
    ∇ Render
      :Access public
      (Add _html.button'Start').On'click'
      (Add _html.div(⍕Stats←⎕WA,(2000⌶)0 1)).id←'d1'
      Add _JQ.Handler'body' 'ping'
    ∇

    ∇ r←APLJax
      :Access public
      ⎕DL 1
      r←'#d1'Replace{⍵⍪-⌿⍵}Stats,[0.1]⎕WA,(2000⌶)0 1
      r,←Execute'$("body").trigger("ping")'
    ∇
:EndClass