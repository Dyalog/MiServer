:Class ejTabSimple : MiPageSample
⍝ Control:: _SF.ejTab
⍝ Decription:: Add a simple tabbed interface 
    ∇ Compose;captions;contents;intro
      :Access public
     
      intro←'The ejTab control allows you to create a tabbed area. The constructor '
      intro,←'takes a vector of tab captions and a vector of tab contents.'
     
      Add _.title'_SF.ejTab - Simple Example '
      Add _.h2'_SF.ejTab - Syncfusion Tab Control'
      Add _.p intro
     
      captions←'Tab One' 'Another' 'Third Tab'
      contents←'This is the contents of '∘,¨captions
      Add _.ejTab(captions contents)
    ∇

:EndClass