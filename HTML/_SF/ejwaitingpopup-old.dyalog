﻿:class ejWaitingPopup : #._SF._ejWidget
    :field public shared readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejWaitingPopup.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejWaitingPopup.html'
  
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
