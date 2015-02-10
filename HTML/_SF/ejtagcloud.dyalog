  :class ejTagCloud : #._SF._ejObject
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejTagCloud.html'
    :field public shared readonly ApiLevel←1

    ∇ make
      :Access public
      JQueryFn←Uses←'ejTagCloud'
      :Implements constructor
    ∇

    ∇ r←Render;d;n
      :Access public
      :If ~0∊⍴Data
        :If ~isString d←Data
          :Select ⊃⍴⍴Data
          :Case 1 ⍝ assumed to be a vector of vectors
            n←⊃⍴⊃Data
          :Case 2
            n←⊃⍴⍉Data
          :EndSelect
          d←⊃#.JSON.formatData/(n↑'text' 'frequency' 'url')d
        :EndIf
        Options.dataSource←d
      :EndIf
      r←⎕BASE.Render
    ∇

  :EndClass