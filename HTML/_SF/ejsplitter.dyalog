:class ejSplitter : #._SF._ejWidget
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
    ∇ r←Render;props;i;pre;value;name
      :Access public
     
      :If ~0∊⍴Panes
          {Container.Add #._html.div ⍵}¨Panes
      :EndIf
     
      :For i :In (0≠⊃∘⍴¨PaneProps)/⍳⍴PaneProps
          pre←'properties[',(⍕i),'].'
          :If 2=|≡props←i⊃PaneProps ⋄ props←,⊂props ⋄ :EndIf
          :For (name value) :In props
              (pre,name)Option value
          :EndFor
      :EndFor
      'orientation'Option Orientation
     
      r←⎕BASE.Render
    ∇
:EndClass
