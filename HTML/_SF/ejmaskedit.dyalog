:Class ejMaskEdit : #._SF._ejWidget
    :Field Public Shared Readonly DocBase←'https://help.syncfusion.com/js/maskedit/overview'
    :Field Public Shared Readonly ApiLevel←1
    :Field Public Shared Readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejMaskEdit.html'

    ∇ make
      :Access public
      JQueryFn←Uses←'ejMaskEdit'
      :Implements constructor
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejMaskEdit'
      :Implements constructor :base args
    ∇

:EndClass
