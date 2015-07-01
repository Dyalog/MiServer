:class ejToggleButton : #._SF._ejWidget
    :field public shared readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejToggleButton.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejToggleButton.html'
    ∇ make
      :Access public
      JQueryFn←Uses←'ejToggleButton'
      ContainerType←'input'
      :Implements constructor
      Container.type←'checkbox'
    ∇
    ∇ make1 args
      :Access public  
      args←eis args
      JQueryFn←Uses←'ejToggleButton'
      ContainerType←'input'
      :Implements constructor
      Container.type←'checkbox'
      'defaultText' 'activeText'Option 2⍴args
    ∇
:EndClass
