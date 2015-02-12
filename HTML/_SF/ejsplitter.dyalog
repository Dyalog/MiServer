:class ejSplitter : #._SF._ejObject
    :Field Public Shared Readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejSplitter.html'
    :Field Public Shared Readonly ApiLevel←3

    :Field Public Panes←0⍴⊂''
    :Field Public PaneProps←0⍴⊂''
    :Field Public Orientation←'horizontal'

    ∇ make
      :Access public
      JQueryFn←Uses←'ejSplitter'
      :Implements constructor
    ∇

    ∇ makec(selector panes)
      :Access public
      JQueryFn←Uses←'ejSplitter'
      :Implements constructor
      (Selector Panes)←selector panes
    ∇

    ∇ r←Render;props
      :Access public
     
      :If ~0∊⍴Panes
          {Container.Add #._html.div ⍵}¨Panes
      :EndIf
     
      :If 0∨.≠⊃∘⍴¨PaneProps
          props←'[',(¯2↓∊(#.JSON.toJQueryParameters¨PaneProps),¨⊂', '),']'
          'properties'Option props
      :EndIf
      'orientation'Option Orientation
     
      r←⎕BASE.Render
    ∇

:EndClass