:class rubySimple: MiPageSample
⍝ Control:: _html.ruby _html.rt
⍝ Description:: adds ruby text (5.5pt) on top of other text for explanation or pronounciation

    ∇ Compose
      :Access public
     
    ⍝ Intro text
      Add _.h3'Ruby text was originally meant to indicate proper pronounciation inline. '
      myp←Add _.p'My name is '
     
    ⍝ First name
      (myp.Add _.ruby'Adám').Add _.rt'a-DAHM'
     
    ⍝ Last name
      (myp.Add _.ruby' Brudzewsky').Add _.rt'broo-DJAY(O)-skee'
     
      myp.Add' and now you even know how to pronouce it!'
     
      Add _.h3'However, ruby text is also useful for annotating consise APL code:'
     
    ⍝ A code segment
      (myp←Add _.p).Add _.code'FirstMatrix'
     
    ⍝ New code segment for symbols because the note should not be code
      (matmult←myp.Add _.ruby).Add _.code'+.×'
     
    ⍝ Some browsers do not handle tags inside ruby text
      ('align="center"'matmult.Add _.rt).Add¨'cross'_.br'product'
     
    ⍝ Final code
      myp.Add _.code'SecondMatrix'
    ∇

:endclass