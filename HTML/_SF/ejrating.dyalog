:class ejRating : #._SF._ejWidget
    :field public shared readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejRating.html'
    :field public shared readonly ApiLevel←1
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejRating.html'
    :field public Input←''
    ∇ make
      :Access public
      JQueryFn←Uses←'ejRating'
      :Implements constructor
    ∇
    ∇ make1 arg
      :Access public
      JQueryFn←Uses←'ejRating'
      (Input←⎕NEW #._HTML.EditField arg).class←'rating'
      :Implements constructor :base arg
    ∇
    ∇ r←Render
      :Access public
      'change'Option'function(args){$("',Selector,'").val(args.value)}'
      r←''
      :If Input≢''
          r←Input.Render
      :EndIf
      r,←⎕BASE.Render
    ∇
:EndClass
