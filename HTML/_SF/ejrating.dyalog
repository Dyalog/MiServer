:class ejRating : #._SF._ejWidget

⍝ Description:: Syncfusion Rating widget
⍝ Constructor:: [value [max [min]]]
⍝ value      - value for the rating
⍝ max        - maximum rating value
⍝ min        - minimum rating value
⍝
⍝ Public Fields::
⍝ Value      - value for the rating
⍝ Max        - maximum rating value
⍝ Min        - minimum rating value



    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejRating.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejRating.html'
    :field public shared readonly IntEvt←'change' 'click' 'create' 'destroy' 'mouseout' 'mouseover'
    :field public Input←''
    :field public Max←5
    :field public Min←0
    :field public Value←⍬
    :field public Increment←1

    ∇ make
      :Access public
      JQueryFn←Uses←'ejRating'
      :Implements constructor
      ContainerTag←'input'
    ∇

    ∇ make1 arg  ⍝ [1] max, [2] current, [3] increment, [4] min
      :Access public
      JQueryFn←Uses←'ejRating'
      (Input←⎕NEW #._DC.EditField arg).class←'rating'
      :Implements constructor :base arg
      ContainerTag←'input'
    ∇

    ∇ r←Render
      :Access public
      'change'Set'function(args){$("',Selector,'").val(args.value)}'
      r←''
      :If Input≢''
          r←Input.Render
      :EndIf
      r,←⎕BASE.Render
    ∇
:EndClass