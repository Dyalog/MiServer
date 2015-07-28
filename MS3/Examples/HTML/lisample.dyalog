:class lisample: MiPage⍝Sample
⍝ Control:: _html.li 
⍝ Description:: this is an example of use of li 

    ∇ Compose;myol;myul
      :Access public 
    
    ⍝ First we build a list container (ordered)
      Add 'Here is an ordered list:'
      myol←Add _.ol 
    ⍝ which contains 2 elements
      myol.Add _.li 'First  item'
      myol.Add _.li 'Second item'

    ⍝ Then we build another list container (unordered this time)
      Add 'Here is an unordered list:'
      myul←Add _.ul 
    ⍝ which contains 3 elements
      myul.Add _.li 'First  item'
      myul.Add _.li 'Second item'
      myul.Add _.li 'Third  item'
    ∇

:endclass
