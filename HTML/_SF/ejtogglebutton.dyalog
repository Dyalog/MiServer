  :class ejToggleButton : #._SF._ejObject
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejToggleButton.html'
    :field public shared readonly ApiLevel←1

    ∇ make
      :Access public
      JQueryFn←Uses←'ejToggleButton'
      ContainerType←'input'
      :Implements constructor
      ControlContent.type←'checkbox'
    ∇

  :EndClass