:Class jqToggleClass : #._JQ._jqUIWidget

⍝ Description:: jQueryUI ToggleClass effect
⍝ Constructor:: [selector [className [switch [duration [easing [complete]]]]] | [switch] options]]
⍝ selector - the jQuery/CSS selector for which to toggle the class
⍝ className - one or more class names (space separated) to be toggled for each element in the matched set
⍝ switch - a boolean value to determine whether the class should be added or removed
⍝ duration - number or string (default: 400) determining how long the animation will run
⍝ easing - a string (default: 'swing') indicating which easing function to use for the transition
⍝ complete - a function (no default) to call once the animation is complete, called once per matched element
⍝ options - all animation settings (all optional)
⍝ Public Fields::
⍝ Selector - the jQuery/CSS selector from which to remove the class
⍝ ClassName - one or more class names (space separated) to be toggled  for each element in the matched set
⍝ switch - a boolean value to determine whether the class should be added or removed
⍝ Duration - number or string (default: 400) determining how long the animation will run
⍝ Easing - a string (default: 'swing') indicating which easing function to use for the transition
⍝ Complete - a function (no default) to call once the animation is complete, called once per matched element
⍝ Options - all animation settings (all optional)

    :field public shared readonly DocBase←'https://jqueryui.com/toggleclass/'
    :field public shared readonly ApiLevel←3
    :Field public ClassName←UNDEF
    :Field public Switch←UNDEF
    :field public Duration←UNDEF
    :field public Easing←UNDEF
    :field public Complete←UNDEF

    ∇ Make
      :Access public
      :Implements constructor
      JQueryFn←'toggleClass'
    ∇

    ∇ Make1 arg
      :Access public
      :Implements constructor
      JQueryFn←'toggleClass'
      :If 2=≢arg
      :AndIf isRef 2⊃arg
          (Selector Options)←arg
      :Else
          (Selector ClassName Switch Duration Easing Complete)←arg defaultArgs 6/⊂''
      :EndIf
    ∇

    ∇ r←Render;args
      :Access Public
      :If ''UNDEF∊⍨⊂Selector
      :OrIf ''≡ClassName~' '
          r←''
      :Else
          'className' 'switch' 'selector' 'duration' 'easing' 'complete'SetIfNotSet¨ClassName Switch Selector Duration Easing Complete
          args←'("',Options.className,'",'
          :If ~¯1 UNDEF''⍬∊⍨⊂Switch
              args,←'true,'⊣⍣(isTrue Options.switch)⊢'false,'
          :EndIf
          r←⎕BASE.Render
          r[(1+≢JQueryFn)+(('.',JQueryFn,'({')⍷r)/⍳⍴r]←⊂args
          r←'(complete:)"(.*?)"'⎕R'\1\2'∊r
      :EndIf
    ∇

:EndClass