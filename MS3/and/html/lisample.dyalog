:class lisample : MiPage⍝Sample
    ∇ Compose;myol;myul
      :Access public 
      Add'Here is an ordered list:'
      myol←Add _.ol 
      myol.Add _.li 'First item'
      myol.Add _.li 'Second item'
      Add'Here is an unordered list:'
      myul←Add _.ul 
      myul.Add _.li 'First item'
      myul.Add _.li 'Second item'
    ∇
:endclass
