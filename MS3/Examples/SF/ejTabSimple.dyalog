:Class ejTabSimple : MiPageSample

    ∇ Compose;captions;contents;intro
      :Access public
     
      intro←'The ejTab control allows you to create a tabbed area. The constructor '
      intro,←'takes a vector of tab captions and a vector of tab contents.'
     
      Add title'_SF.ejTab - Simple Example '
      Add h2'_SF.ejTab - Syncfusion Tab Control'
      Add _html.p intro
     
      captions←'Tab One' 'Another' 'Third Tab'
      contents←'This is the contents of '∘,¨captions
      Add _SF.ejTab(captions contents)
    ∇

:EndClass