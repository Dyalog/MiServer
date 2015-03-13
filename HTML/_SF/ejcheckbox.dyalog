  :class ejCheckBox : #._SF._ejWidget
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejCheckBox.html'
    :field public shared readonly ApiLevel←2
    :field public Label
    ∇ make
      :Access public
      JQueryFn←Uses←'ejCheckBox'
      ContainerType←'input'
      :Implements constructor
      Container.type←'checkbox'
    ∇
  :EndClass
