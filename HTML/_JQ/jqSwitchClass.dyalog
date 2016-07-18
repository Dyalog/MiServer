:Class jqSwitchClass : #._JQ._jqUIWidget

⍝ Description:: jQueryUI SwitchClass effect
⍝ Constructor:: [selector [removeClassName addClassName [duration [easing [complete]]]] | options]]
⍝ selector - the jQuery/CSS selector from which to remove the class
⍝ removeClassName - one or more class names (space separated) to be removed from the class attribute of each matched element
⍝ addClassName - one or more class names (space separated) to be added to the class attribute of each matched element
⍝ duration - number or string (default: 400) determining how long the animation will run
⍝ easing - a string (default: 'swing') indicating which easing function to use for the transition
⍝ complete - a function (no default) to call once the animation is complete, called once per matched element
⍝ options - all animation settings (all optional)
⍝ Public Fields::
⍝ Selector - the jQuery/CSS selector from which to remove the class
⍝ RemoveClassName - one or more class names (space separated) to be removed from the class attribute of each matched element
⍝ AddClassName - one or more class names (space separated) to be added to the class attribute of each matched element
⍝ Duration - number or string (default: 400) determining how long the animation will run
⍝ Easing - a string (default: 'swing') indicating which easing function to use for the transition
⍝ Complete - a function (no default) to call once the animation is complete, called once per matched element
⍝ Options - all animation settings (all optional)

    :field public shared readonly DocBase←'https://jqueryui.com/switchclass/'
    :field public shared readonly ApiLevel←3
    :Field public RemoveClassName←''
    :Field public AddClassName←''
    :field public Duration←''
    :field public Easing←''
    :field public Complete←''

    ∇ Make
      :Access public
      :Implements constructor
      JQueryFn←'switchClass'
    ∇

    ∇ Make1 arg
      :Access public
      :Implements constructor
      JQueryFn←'switchClass'
      arg←⊂⍣(1=≡,arg),arg
      :If 2∊⍴arg
      :AndIf isRef 2⊃arg
          (Selector Options)←arg
      :Else
          (Selector RemoveClassName AddClassName Duration Easing Complete)←arg defaultArgs 6/⊂''
      :EndIf
    ∇

    ∇ r←Render
      :Access Public
      'removeClassName' 'addClassName' 'duration' 'easing' 'complete'SetIfNotSet¨RemoveClassName AddClassName Duration Easing Complete
      :If ''≡Selector
      :OrIf ''≡(GetOption'removeClassName')~' '
      :OrIf ''≡(GetOption'addClassName')~' '
          r←''
      :Else
          r←⎕BASE.Render
          r[(1+≢JQueryFn)+(('.',JQueryFn,'({')⍷r)/⍳⍴r]←⊂'("',(GetOption'removeClassName'),'","',(GetOption'addClassName'),'",'
          r←'(complete:)"(.*?)"'⎕R'\1\2'∊r
      :EndIf
    ∇

:EndClass