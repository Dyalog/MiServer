:class ejCheckBox : #._SF._ejWidget
    :field public shared readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejCheckBox.html'
    :field public shared readonly ApiLevel←2
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejCheckBox.html'
    :field public Label
    ∇ make
      :Access public
      JQueryFn←Uses←'ejCheckBox'
      ContainerType←'input'
      :Implements constructor
      Container.type←'checkbox'
    ∇
    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejCheckBox'
      :Implements constructor :base args
    ∇
:EndClass