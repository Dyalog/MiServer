:Class jqSpinner : #._JQ._jqUIWidget

⍝ Description:: jQueryUI Spinner widget
⍝ Constructor:: [min [max [value]]]
⍝ min - the minimum value for the spinner (default ⍬)
⍝ max - the maximum value for the spinner (default ⍬)
⍝ value - the initial value for the spinner (default ⍬)
⍝ Public Fields::
⍝ Value - the initial value for the spinner (default ⍬)
⍝ Min - the minimum value for the spinner (default ⍬)
⍝ Max - the maximum value for the spinner (default ⍬)

    :field public shared readonly DocBase←'https://jqueryui.com/spinner/'
    :field public shared readonly ApiLevel←3
    :field public shared readonly IntEvt←'change' 'create' 'spin' 'start' 'stop'
    :field public Value←⍬
    :field public Min←⍬
    :field public Max←⍬


    ∇ Make
      :Access public
      :Implements constructor
      ContainerTag←'input'
      JQueryFn←'spinner'
      InternalEvents←IntEvt
    ∇

    ∇ Make1 arg
      :Access public
      :Implements constructor
      ContainerTag←'input'
      JQueryFn←'spinner'
      InternalEvents←IntEvt
      Min Max Value←3↑arg,(⍴arg)↓⍬ ⍬ ⍬
    ∇

    ∇ r←Render
      :Access public
      :If ⍬≢Min ⋄ 'min'Set Min ⋄ :EndIf
      :If ⍬≢Max ⋄ 'max'Set Max ⋄ :EndIf
      r←⎕BASE.Render
      :If ⍬≢Value ⋄ r,←'<script>$(function(){$( "#',id,'" ).spinner( "value", ',(⍕Value),' );});</script>' ⋄ :EndIf
    ∇

:EndClass