:class iframeSimple: MiPageSample
⍝ Control:: _html.iframe
⍝ Description:: Embed another webpage
 
    ∇ Compose;ifr
      :Access public 
     
    ⍝ First we put in a header
      Add _.header'Here is the header'
     
    ⍝ Then we add some text
      Add _.p(888⍴'Curabitur in nisl congue, sollicitudin leo vitae, lacinia mi. ')
     
    ⍝ Then we add the iframe
      ifr←Add _.iframe
      'src'ifr.Set'http://www.dyalog.com' ⍝ add the source
    ⍝ We can add an alternate phrase in case the browser does not support it:
      ifr.Add _.p'Well, it appears your browser won''t do this'
     
    ⍝ Finally a bit more text
      Add _.p(666⍴'Quisque lectus magna, rutrum in fermentum eu, pellentesque a nisl. ')
    ∇

:endclass
