:Class jqRemoveClass : #._JQ._jqUIWidget

⍝ Description:: jQueryUI RemoveClass effect
⍝ Constructor:: [selector [className [duration [easing [complete]]]] | options]]
⍝ selector - the jQuery/CSS selector from which to remove the class
⍝ className - one or more class names (space separated) to be removed from the class attribute of each matched element
⍝ duration - number or string (default: 400) determining how long the animation will run
⍝ easing - a string (default: 'swing') indicating which easing function to use for the transition
⍝ complete - a function (no default) to call once the animation is complete, called once per matched element
⍝ options - all animation settings (all optional)
⍝ Public Fields::
⍝ Selector - the jQuery/CSS selector from which to remove the class
⍝ ClassName - one or more class names (space separated) to be removed from the class attribute of each matched element
⍝ Duration - number or string (default: 400) determining how long the animation will run
⍝ Easing - a string (default: 'swing') indicating which easing function to use for the transition
⍝ Complete - a function (no default) to call once the animation is complete, called once per matched element
⍝ Options - all animation settings (all optional)

    :field public shared readonly DocBase←'https://jqueryui.com/removeclass/'
    :field public shared readonly ApiLevel←3
    :Field public ClassName←UNDEF
    :field public Duration←UNDEF
    :field public Easing←UNDEF
    :field public Complete←UNDEF

    ∇ Make
      :Access public
      :Implements constructor
      JQueryFn←'removeClass'
    ∇

    ∇ Make1 arg
      :Access public
      :Implements constructor
      JQueryFn←'removeClass'
      :If 2=≢arg
      :AndIf isRef 2⊃arg
          (Selector Options)←arg
      :Else
          (Selector ClassName Duration Easing Complete)←arg defaultArgs 5/⊂''
      :EndIf
    ∇

    ∇ r←Render
      :Access Public
      :If ''UNDEF∊⍨⊂Selector
      :OrIf ''≡ClassName~' '
          r←''
      :Else
          'className' 'selector' 'duration' 'easing' 'complete'SetIfNotSet¨ClassName Selector Duration Easing Complete
          r←⎕BASE.Render
          r[(1+≢JQueryFn)+(('.',JQueryFn,'({')⍷r)/⍳⍴r]←⊂'("',Options.className,'",'
          r←'(complete:)"(.*?)"'⎕R'\1\2'∊r
      :EndIf
    ∇

:EndClass