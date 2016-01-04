:class ejDialog : #._SF._ejWidget
    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejDialog.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejDialog.html'
    :field public shared readonly IntEvt←'beforeOpen' 'ajaxError' 'ajaxSuccess' 'beforeClose' 'Close' 'contentLoad' 'create' 'destroy' 'drag' 'dragStart' 'dragStop' 'open' 'resize' 'resizeStart' 'resizeStop'

    ∇ make
      :Access public
      JQueryFn←Uses←'ejDialog'
      :Implements constructor
      InternalEvents←IntEvt
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejDialog'
      :Implements constructor
      InternalEvents←IntEvt
    ∇
:EndClass