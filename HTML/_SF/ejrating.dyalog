  :class ejRating : #._SF._ejObject
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejRangeNavigator.html'
    :field public shared readonly ApiLevel←1

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
      Selector←'#',⊃eis arg
      :Implements constructor
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