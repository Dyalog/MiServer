:Class jqueryexamples : MiPage

    :Include #.HTMLInput


    ∇ Render req;html
      :Access Public
     
      html←'h2'Enclose'Welcome to the jQuery widgets and plug-ins page'
      html,←'h3'Enclose'Click on the following links to view jQuery examples:'
      html,←'Googling "jQuery plugins" or "jQueryUI" is a good way to find these and others.'
      html,←List⊃∘(Enclose/)¨{('a href="',⍵,'"')⍵}¨'DatePicker' 'TableSorter' 'Accordion' 'Tabs' 'Sortable' 'Dialog' 'Slider'⍝'jsTree'
      req.Return html
    ∇

:EndClass
