:Namespace _JSS ⍝ Javascript Snippets

    ⍝∇:require =\JSON
    (⎕ML ⎕IO)←1
⍝ this list will grow over time as usage patterns are discovered
    eis←{2>|≡⍵:,⊂⍵ ⋄ ⍵} ⍝ Enclose if simple
    enlist←{∊⍵}
    quote←{'"'∊⍵:⍵ ⋄ '"',⍵,'"'}
    ine←{0∊⍴⍺:'' ⋄ ⍵} ⍝ if not empty
    fmtSelector←{{'this'≡⍵:⍵ ⋄quote ⍵}¯2↓enlist{⍵,', '}¨eis ⍵}
    JAchars←#.JSON.JAchars

    ∇ r←Alert txt
      r←'alert(',(#.JSON.JAchars txt),');'
    ∇

    ∇ r←sel(fn JQuery)args;opt;val
      args←eis args
      (opt val)←2↑args,(⍴args)↓''⎕NULL
      :If val≡⎕NULL
          r←'$(',(fmtSelector sel),').',fn,'(',(JAchars⍕opt),');'
      :Else
          r←'$(',(fmtSelector sel),').',fn,'(',(JAchars⍕opt),',',(JAchars⍕val),');'
      :EndIf
    ∇

    ∇ r←sel Css args ⍝ JQuery css cover
      r←sel('css'JQuery)args
    ∇

    ∇ r←sel Val args ⍝ JQuery val cover
      r←sel('val'JQuery)args
    ∇

    ∇ r←sel Attr args ⍝ JQuery attr cover
      r←sel('attr'JQuery)args
    ∇

    ∇ r←sel Html args ⍝ JQuery html cover
      r←sel('html'JQuery)args
    ∇

:EndNamespace