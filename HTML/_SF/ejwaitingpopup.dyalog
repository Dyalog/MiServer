:class ejWaitingPopup : #._SF._ejWidget
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejWaitingPopup.html'
    :field public shared readonly ApiLevel←3
  
    ∇ make
      :Access public
      JQueryFn←Uses←'ejWaitingPopup'
      :Implements constructor
    ∇
    ∇ make1 args;section
      :Access public
      args←eis args
      JQueryFn←Uses←'ejWaitingPopup'
      :Implements constructor :base args
    ∇

:EndClass
