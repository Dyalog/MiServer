:Class divAdvanced : MiPageSample
⍝ Control:: _html.div
⍝ Description:: Add interactivity to a division

    ∇ Compose
      :Access Public
      Add _.p'Hover over the following text to reveal translation. Click to make translation permanent.'
     
      t1←'Loves or pursues or desires to obtain pain of itself '
      t1,←'because it is pain, but circumstances occur in which '
      t1,←'toil and pain can procure him some great. To take a '
      t1,←'trivial example, which of us ever laborious physical '
      t1,←'exercise, except to obtain some advantage from it? '
      t1,←'But who find fault chooses to enjoy a pleasure one '
      t1,←'avoids a pain produces no.'
     
      t2←'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
      t2,←'sed do eiusmod tempor incididunt ut labore et dolore '
      t2,←'magna aliqua. Ut enim ad minim veniam, quis nostrud '
      t2,←'exercitation ullamco laboris nisi ut aliquip ex ea '
      t2,←'commodo consequat. Duis aute irure dolor in reprehenderit '
      t2,←'in voluptate velit esse cillum dolore eu fugiat nulla '
      t2,←'pariatur. Excepteur sint occaecat cupidatat non proident, '
      t2,←'sunt in culpa qui officia deserunt mollit anim id est laborum.'
     
      mytext←'#d1' 'style=background-color:orchid'Add _.div t1
      mytext.On'mouseover mouseout click'
    ∇

    ∇ js←APLJax
     ⍝ Callback on mouseover, mouseout and click
      :Access Public
     
      js←'#d1'Replace⊃(_event≡'click')⌽(t1 t2)←t2 t1
     
    ∇



:EndClass