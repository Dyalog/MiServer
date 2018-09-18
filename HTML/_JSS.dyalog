﻿:Namespace _JSS ⍝ Javascript Snippets

    (⎕ML ⎕IO)←1
⍝ little helpers for JS/JQuery used in callbacks
⍝ this list will grow over time as usage patterns are discovered
    eis←{(,∘⊂)⍣((326∊⎕DR ⍵)<2>|≡⍵),⍵} ⍝ Enclose if simple
    quote←{0∊⍴⍵: '' ⋄ '"',(('"' ⎕R '\\\0')⍕⍵),'"'}
    ine←{0∊⍴⍺:'' ⋄ ⍵} ⍝ if not empty
    fmtSelector←{{'this'≡⍵:⍵ ⋄quote ⍵}¯2↓∊{⍵,', '}¨eis ⍵}
    fmtData←#.JSON.fromAPL ⍝ {{(326=⍵)<0=2|⍵}⎕DR ⍵:quote ⍵ ⋄ ⍕⍵}
    JAchars←#.JSON.JAchars

    ∇ r←Alert txt
    ⍝ popup alert text
      r←'alert(',(quote txt),');'
    ∇

    ∇ r←CloseWindow
    ⍝ close the browser window
      r←'var w=window.open(window.location,''_self''); w.close();'
    ∇

    ∇ r←sel Css args ⍝ JQuery css cover
      r←(sel JQuery'css')args
    ∇

    ∇ r←sel Val args ⍝ JQuery val cover
      r←(sel JQuery'val')args
      :If args≡'' '' ⋄ r/⍨←~',"");'⍷r ⋄ :EndIf  ⍝ special case to set value to ""
    ∇

    ∇ r←sel Prop args ⍝ JQuery prop cover
      r←(sel JQuery'prop')args
    ∇

    ∇ r←sel Attr args ⍝ JQuery attr cover
      r←(sel JQuery'attr')args
    ∇

    ∇ r←sel RemoveAttr args
      r←(sel JQuery'removeAttr')args
    ∇

    ∇ r←sel AddClass args
      r←(sel JQuery'addClass')args
    ∇

    ∇ r←sel RemoveClass args
      r←(sel JQuery'removeClass')args
    ∇

    ∇ r←sel Html args ⍝ JQuery html cover
      r←(sel JQuery'html')args
    ∇

    ∇ r←sel Show args
      r←(sel JQuery'show')args
    ∇

    ∇ r←sel Hide args
      r←(sel JQuery'hide')args
    ∇

    ∇ r←sel Toggle args
      r←(sel JQuery'toggle')args
    ∇

    ∇ r←sel Trigger args
      r←(sel JQuery'trigger')args
    ∇

    ∇ r←Submit sel
      r←(sel JQuery'submit')''
    ∇

    ∇ r←sel Position args;Position;inds;parameters;q;mask
      parameters←'my' 'at' 'of' 'collision' 'within'
      q←{1⌽'''''',{⍵/⍨1+''''=⍵}⍕⍵}
      Position←⎕NS ⍬
      :If 2=⍴⍴args ⍝ matrix
          args←,args
      :ElseIf 3=≡args
          args←⊃,/args
      :EndIf
      args←eis args
      inds←parameters⍳args
      :If ∨/mask←inds≤⍴parameters
          :If mask≡(2×+/mask)⍴1 0
              parameters←mask/args
              args←(1⌽mask)/args
          :EndIf
      :Else
          parameters←(⍴args)↑parameters
      :EndIf
      mask←⍬∘≢¨args
      args←mask/args
      parameters←mask/parameters
      parameters({⍎'Position.',⍺,'←',q ⍵})¨args
      :If ~0∊⍴Position.⎕NL-2
          r←0 #.JQ.JQueryfn'position'sel Position
      :EndIf
    ∇

    ∇ r←{eval}JSDate date
    ⍝ snippet to create a JS date (JavaScript months are 0-11!!!)
    ⍝ date is one of:
    ⍝   ∘ 3-6↑⎕TS form
    ⍝   ∘ IDN
    ⍝   ∘ charvec
    ⍝ eval is optional Boolean to indicate whether to return executable phrase (1) or just a string (0)
     
      :If 0=⎕NC'eval' ⋄ eval←0 ⋄ :EndIf
     
      :If 0 2∊⍨10|⎕DR date  ⍝ char?
          date←'"',date,'"'
      :Else
          :If 1=≢date
              date←3↑2 ⎕NQ'.' 'IDNToDate'date
          :EndIf
     
          date←1↓∊','∘,∘⍕¨(¯1∘+@2)(3⌈6⌊≢date)↑date
      :EndIf
      r←(⊂⍣eval)'new Date(',date,')'
    ∇

    ∇ r←{varname}JSData data
    ⍝ return var definition to build a JavaScript object based on data
    ⍝ varname is the name of the variable
    ⍝ data is either a matrix of [1;] column names, (1↓) data
    ⍝      or a vector of namespaces
      :If 0=⎕NC'varname' ⋄ varname←'' ⋄ :EndIf
      :If 2=⍴⍴data
          data←#.JSON.fromTable data
      :EndIf
      r←(((~0∊⍴varname)/'var ',varname,' = '),0 0 1 #.JSON.fromAPL data),';'
    ∇

    ∇ r←{val}(sel JQuery fn)args;opt
    ⍝ construct JavaScript to call a jQuery function - eg val(), html(), css(), prop(), or attr()
    ⍝ optionally setting a value for
    ⍝ Get a jQuery parameter:
    ⍝    ('"#id"' JQuery 'attr') '"data-role"'
    ⍝ Set a jQuery parameter:
    ⍝    '"blue"' ('#id' JQuery 'css') 'background-color'
    ⍝
      args←eis args
      :If 0=⎕NC'val'
          (opt val)←2↑args,(⍴args)↓''⎕NULL
      :Else
          opt←⊃args
      :EndIf
      :If val≡⎕NULL
          r←'$(',(fmtSelector sel),').',fn,'(',(quote opt),');'
      :Else
          r←'$(',(fmtSelector sel),').',fn,'(',(quote opt),',',(fmtData val),');'
      :EndIf
    ∇

    ∇ r←{val}(fn JQueryOpt sel)opt
      :If 0=⎕NC'val'
          r←'$(',(fmtSelector sel),').',fn,'("option",',(quote opt),');'
      :Else
          r←'$(',(fmtSelector sel),').',fn,'("option",',(quote opt),',',(fmtData val),');'
      :EndIf
    ∇



    :Class StorageObject
    ⍝ !!!Prototype!!!

        ∇ r←{what}Set(type value);name;w;v
          :Access public shared
        ⍝ value may be
          :Access public shared
          r←''
          :If 9.1=⎕NC⊂'value' ⍝ namespace?
              :For name :In value.⎕NL-2
                  r,←formatSet(type name(value⍎name))
              :EndFor
          :Else
              value←eis value
              :If 2=⎕NC'what' ⍝ value is list of name value pairs
                  what←eis what
              :Else
                  (what value)←↓[1]((⌊0.5×⍴value),2)⍴value
              :EndIf
              :For (w v) :InEach (what value)
                  r,←formatSet(type w v)
              :EndFor
          :EndIf
        ∇

        ∇ r←formatSet(type what value)
          :Access public shared
          r←type,'.setItem("',what,'",JSON.stringify(',(#.JSON.fromAPL value),');'
        ∇

        ∇ r←type Remove what;w;ww
          :Access public shared
          what←eis what
          r←''
          :For w :In what
              :If ' '∊w←#.Strings.deb w
                  :For ww :In ' '#.Utils.penclose w
                      r,←type,'.removeItem("',w,'");'
                  :EndFor
              :Else
                  r,←type,'.removeItem("',w,'");'
              :EndIf
          :EndFor
        ∇

        ∇ r←type Get what
          :Access public shared
          r←''
          r,←'<input type="hidden" name="',w,'" value="',JSON
        ∇
    :endclass

    :class localStorage : StorageObject

        ∇ r←{what}Set value
          :If 0=⎕NC'what'
              r←⎕BASE.Set('localStorage'value)
          :Else
              r←what ⎕BASE.Set('localStorage'value)
          :EndIf
        ∇

        ∇ r←Remove what
          :Access public shared
          r←
        ∇

        ∇ r←{name}Get what
          :Access public shared
        ∇

    :EndClass

    :Class sessionStorage
        ∇ r←{what}Set value
          :Access public shared
        ∇
    :endclass

    :class sessionStorage
    :endclass

:EndNamespace
