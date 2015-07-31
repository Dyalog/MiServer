:class rubyAdvanced : MiPageSample
⍝ Control:: _html.ruby _html.rt  _html.rp
⍝ Description:: nested ruby text and alternative for non-supporting browsers

    ∇ Compose
      :Access public
     
    ⍝ Two-layered ruby text should render as
    ⍝
    ⍝                 outer
    ⍝      FirstMatrix ∘.× product SecondMatrix
      Add _.h3'A second layer of ruby text only renders correctly (to the right) in some browsers, e.g. Chrome:'
      myp←Add _.p
      myp.Add _.code'FirstMatrix'
      (matmult←myp.Add _.ruby).Add _.code'∘.×'
      (matmult.Add _.rt).Add¨'outer'(_.rt'product') ⍝ notice the second _.rt inside the first
      myp.Add _.code'SecondMatrix'
     
    ⍝ This should render as
    ⍝
    ⍝                 inner
    ⍝                 product
    ⍝      FirstMatrix  +.×  SecondMatrix
      Add _.h3'So too, many browsers do not render tags (here, a line break) inside ruby text correctly:'
      myp←Add _.p
      myp.Add _.code'FirstMatrix'
      (matmult←myp.Add _.ruby).Add _.code'+.×'
      (matmult.Add _.rt).Add¨'outer'_.br'product'
      myp.Add _.code'SecondMatrix'
     
    ⍝ Content of tags that are unknown by a browser render as plain
    ⍝ text so the ruby text would mix inappropriately into the line.
    ⍝ Browsers that recognize _.tp will not render the tag's content
    ⍝ so it may be used to add text that will only be displayed if it
    ⍝ does not know _.rp (and therefore _.ruby and _.rt). E.g. if a
    ⍝ browser does not recognize the ruby text
    ⍝
    ⍝            jail
    ⍝      Go to gaol now!
    ⍝
    ⍝ it will by default show
    ⍝
    ⍝      Go to gaol jail now!
    ⍝
    ⍝ but if we add _.rp it will show
    ⍝
    ⍝      Go to gaol [American: jail] now!
      Add _.h3'Most browsers recognise the fallback syntax of ruby text:'
      myp←Add _.p'Go to '
      myword←myp.Add _.ruby'gaol'
      myword.Add¨(_.rp' [American: ')(_.rt'jail')(_.rp'] ')
      myp.Add'now!'
     
    ⍝ Emulated non-recognition of the ruby related tags
      Add _.h3'Here, the fallback is emulated with styling:'
      myp←Add _.p'Go to '
      myword←myp.Add _.ruby'gaol'
      (⊂'style="display:inline;font-size:100%"')myword.Add¨(_.rp' [American: ')(_.rt'jail')(_.rp'] ')
      myp.Add'now!'
     
    ⍝ IE does not handle the above emulation correctly
      Add _.h3'And for Internet Explorer users, this is how the above line should have looked:'
      Add _.p'Go to gaol [American: jail ] now!'
    ∇

:endclass