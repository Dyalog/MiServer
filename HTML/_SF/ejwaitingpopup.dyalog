:class ejWaitingPopup : #._SF._ejWidget
⍝ Description: Syncfusion WaitingPopup widget
⍝ Constructor: [text]
⍝ text    - text to appear in the popup
⍝ Public Fields:
⍝ Text    - text to appear in the popup
⍝ Style   - CSS styles to apply to popup
⍝           default is: "height: 200px; width: 500px; margin: 0 auto;"

    :field public shared readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejWaitingPopup.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejWaitingPopup.html'
    :field public Text←''
    :field public Style←''

    ∇ make
      :Access public
      :Implements constructor
      JQueryFn←Uses←'ejWaitingPopup'
    ∇

    ∇ make1 args
      :Access public
      :Implements constructor
      JQueryFn←Uses←'ejWaitingPopup'
      Text←args
    ∇

    ∇ r←Render;style;t
      :Access public
      ∘∘∘ ⍝⍝⍝⍝⍝
      ⍝:If ''≢t←Attrs[⊂'template']
      :If 0≠Options.⎕NC'template'
      :AndIf '⍎'≢⊃t←Options.template
          'template'Set'⍎$("',t,'")'
      :EndIf
      :If ~0∊⍴Text
          'text'Set Text
      :EndIf
      r←⎕BASE.Render
      :If 0∊⍴style←Style
          style←'width: 100% !important; margin-left: auto !important; margin-right: auto !important; left: 0px !important; color: black;'
      :EndIf
      style←(⎕NEW #._HTML.Style((Selector,'_WaitingPopup')style)).Render
      r,←(⊂⍣(1<|≡r))style
    ∇

:EndClass