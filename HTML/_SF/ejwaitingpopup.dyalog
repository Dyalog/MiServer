:class ejWaitingPopup : #._SF._ejObject
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejWaitingPopup.html'
    :field public shared readonly ApiLevel←3
    :field public Template 
    
    ∇ make
      :Access public
      JQueryFn←Uses←'ejWaitingPopup'
      :Implements constructor
      (Template←⎕NEW #._html.div 'hello world').id←GenId
    ∇

    ∇ make1 args
      args←eis args
      :Access public
      JQueryFn←Uses←'ejWaitingPopup'
      :Implements constructor
      (Template←⎕NEW #._html.div(1↓args)).id←GenId
    ∇

    ∇ r←Render
      :Access public
      'template'Option('$("#',Template.id,'")')
      r←Template.Render,⎕BASE.Render
    ∇

:EndClass