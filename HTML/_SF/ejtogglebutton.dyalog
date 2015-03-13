:class ejToggleButton : #._SF._ejWidget
  :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejToggleButton.html'
  :field public shared readonly ApiLevel←3
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
    :Implements constructor :base args
    Container.type←'checkbox'
    'defaultText' 'activeText'Option 2⍴1↓args
  ∇
:EndClass
