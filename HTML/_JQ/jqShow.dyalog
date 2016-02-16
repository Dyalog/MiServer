:Class jqShow : #._JQ._jqUIWidget

⍝ Description:: jQueryUI Show effect
⍝ Constructor:: [selector [effect [options [duration [complete]]] | options]]
⍝ selector - the jQuery/CSS selector to show
⍝ effect - a string indicating which effect to use for the transition
⍝ options - effect-specific properties and easing OR all animation settings
⍝ duration - number or string (default: 400) determining how long the animation will run
⍝ complete - a function to call once the animation is complete, called once per matched element
⍝ Public Fields::
⍝ Selector - the jQuery/CSS selector to show
⍝ Effect - a string indicating which effect to use for the transition
⍝ Options - effect-specific properties and easing OR all animation settings
⍝ Duration - number or string (default: 400) determining how long the animation will run
⍝ Complete - a function (no default) to call once the animation is complete, called once per matched element

    :field public shared readonly DocBase←'https://jqueryui.com/show/'
    :field public shared readonly ApiLevel←3
    :Field public Effect←''
    :field public Duration←''
    :field public Complete←''

    ∇ Make
      :Access public
      :Implements constructor
      JQueryFn←'show'
    ∇

    ∇ Make1 arg
      :Access public
      :Implements constructor
      JQueryFn←'show'
      arg←⊂⍣(1=≡,arg),arg
      :If 2∊⍴arg
          :If isRef 2⊃arg
              (Selector Options)←arg
          :Else
              (Selector Effect)←arg
          :EndIf
      :Else
          (Selector Effect Options Duration Complete)←arg defaultArgs 5/⊂''
      :EndIf
      :If ''≡Options
          Options←⎕NS ⍬
      :EndIf
    ∇

    ∇ r←Render
      :Access Public
      'effect' 'duration' 'complete'SetIfNotSet¨Effect Duration Complete
      :If ''≡Selector
          r←''
      :Else
          r←⎕BASE.Render
      :EndIf
    ∇

:EndClass