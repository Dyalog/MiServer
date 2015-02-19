:class ejWaitingPopup : #._SF._ejObject
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejWaitingPopup.html'
    :field public shared readonly ApiLevel←3
    :field public Template

    ∇ make
      :Access public
      UseTemplate←0
      JQueryFn←Uses←'ejWaitingPopup'
      :Implements constructor
      Template←⎕NEW #._html.div
    ∇

    ∇ make1 args;section
      UseTemplate←1
      args←eis args
      :Access public
      JQueryFn←Uses←'ejWaitingPopup'
      :Implements constructor
      section←2⊃args ⋄ section.id←ID←GenId
      Template←⎕NEW #._html.div section
    ∇

    ∇ r←Render
      :Access public
      :If UseTemplate
          'template'Option('$(''#',ID,''')')
      :EndIf
      r←Template.Render,⎕BASE.Render
    ∇

:EndClass