:class ejBarcode : #._SF._ejWidget
⍝ Description:: Syncfusion Barcode widget
⍝ Constructor:: [text [symbology]]
⍝ text          - text to represent in barcode format
⍝ symbology     - barcode symbology default 'code128A' (see http://help.syncfusion.com/js/api/global#members:symbologytype)
⍝ Examples::
⍝ ejBarcode 'Dyalog' 'code93'

    :field public shared readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejBarcode.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejBarcode.html'
    :field public shared readonly IntEvt←,⊂'load'

    ∇ make
      :Access public
      JQueryFn←Uses←'ejBarcode'
      :Implements constructor
      'text symbologyType'Set'' 'code128A'
      InternalEvents←IntEvt
    ∇

    ∇ make1 args;type;text;sel
      :Access public
      JQueryFn←Uses←'ejBarcode'
      args←eis args
      (text type)←args defaultArgs'' 'code128A'
      :Implements constructor :base
      'text symbologyType'Set text type
      InternalEvents←IntEvt
    ∇
:EndClass
