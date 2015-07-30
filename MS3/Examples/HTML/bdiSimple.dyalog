:class bdiSimple: MiPageSample
⍝ Control:: _html.bdi _html.meta
⍝ Description:: specify Unicode encoding and isolate text that might be formatted in a different direction from the surrounding text

    ∇ Compose
      :Access public 
    ⍝ As we are using UTF-8 characters, we must specify so, otherwise we get 2 ASCII letters per letter
      'http-equiv' 'content-type' 'content' 'text/html;charset=UTF-8'Add _.meta
      Add'My name is '
    ⍝ The text below will look like XTO in Dyalog, but like OTX in a browser
    ⍝ See http://www.w3.org/International/questions/qa-visual-vs-logical for more info
      Add _.bdi'אדם'
      Add' in Hebrew. (This only works in Chrome and Firefox!)'
    ∇

:endclass
