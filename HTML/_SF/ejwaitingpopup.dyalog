:class ejWaitingPopup : #._SF._ejObject
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejWaitingPopup.html'
    :field public shared readonly ApiLevel←3
    
    ∇ make
      Monadic←0
      :Access public
      JQueryFn←Uses←'ejWaitingPopup'
      :Implements constructor
      (Template←⎕NEW #._html.div).id←GenId
    ∇

    ∇ make1 args
      Monadic←1
      args←eis args
      :Access public
      JQueryFn←Uses←'ejWaitingPopup'
      :Implements constructor ⍝:base args
     
     ⍝ (Outer←Add _html.div'').id←'xxx'
⍝      (Inner←Outer.Add _html.div'').id←'yyy'
⍝      (Cntnt←Inner.Add _html.div(1↓args)).id←'zzz'
       ⍝(1↓args).Render)
    ∇
        
    ∇ r←Render
      :Access public
      :If Monadic ⋄ 'template'Option('$("#','xxx','")') ⋄ :EndIf
      Body.Content[1].id←'xxx'
    ∇

:EndClass