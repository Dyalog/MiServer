:class ejBarcode : #._SF._ejWidget
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejBarcode.html'
    :field public shared readonly ApiLevel←3
    ∇ make
      :Access public
      JQueryFn←Uses←'ejBarcode'
      :Implements constructor
      'text symbologyType'Option'' 'ej.SymbologyType.code128A'
    ∇
    ∇ make1 args;type;text;sel
      :Access public
      JQueryFn←Uses←'ejBarcode'
      args←eis args
      (sel text type)←3↑args,(⍴args)↓'' '' 'ej.SymbologyType.code128A'
      :Implements constructor :base args
      'text symbologyType'Option text type
    ∇
:EndClass
