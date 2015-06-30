:class ejWaitingPopup : #._SF._ejWidget
⍝ Description: Syncfusion WaitingPopup widget
⍝ Constructor: [id [content]]
⍝ id      - the id/name for the popup
⍝ content - HTML content to appear when the popup is visible
⍝ Public Fields:
⍝ Content - HTML content to appear when the popup is visible

    :field public shared readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejWaitingPopup.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejWaitingPopup.html'
    
    ∇ make
      :Access public
      :Implements constructor ⍝:base args
      JQueryFn←Uses←'ejWaitingPopup'
      makebody''
    ∇

    ∇ make1 args
      :Access public
      :Implements constructor ⍝:base args
      JQueryFn←Uses←'ejWaitingPopup'
      makebody args
    ∇

    ∇ makebody ARGS
      args←eis ARGS
      :If 2≤⍴ARGS
          id←{''≢⍵:⍵ ⋄ GenId}⊃ARGS
          :If 1=≡Content←2⊃ARGS
              'text'Set Content
          :Else
              Container.Add Content
              'template'Set'#',id
          :EndIf
      :EndIf
    ∇
:EndClass