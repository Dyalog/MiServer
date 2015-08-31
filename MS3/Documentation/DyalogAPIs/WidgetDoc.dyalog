:Class WidgetDoc : MiPageTemplate

    ∇ Compose;ns;widget;doc;t
      :Access public
      (ns widget)←Get'namespace widget'
      doc←ns Document widget
      doc[;2]←{New _.pre ⍵}¨doc[;2]
      Add _.StyleSheet'/Styles/widgetDoc.css'
      Add _.h4 ns,'.',widget
      (Add #._.Table doc).CellAttr'class="widgetDoc"' 'class="widgetDocContent"'
    ∇

    ∇ r←ns Document widget;ref;wref;src;mask;chunk;pv;c;c1;c2
      :Access public shared
      r←''
      :If 9.1=#.⎕NC⊂ns
          ref←#.⍎ns
          :If 9=ref.⎕NC widget
              wref←ref⍎widget
              src←1↓⎕SRC wref
              src←#.Strings.dlb¨src
              src←src/⍨∧\'⍝'=⊃¨src
              src←HtmlSafeText¨#.Strings.dlb¨1↓¨src
              pv←∨/¨'::'∘⍷¨src
              r←0 2⍴⊂''
              :For chunk :In pv⊂src
                  c←⊃chunk
                  (c1 c2)←{⍵{(1,1↓<\⍵)⊂⍺}'::'⍷⍵}c
                  c2←#.Strings.deb 2↓c2
                  c2←c2{0∊⍴⍺:⍵ ⋄ (⊂⍺),⍵}1↓chunk
                  c2,¨←⊂⎕UCS 13 10
                  r⍪←c1 c2
              :EndFor
          :EndIf
      :EndIf
    ∇


:EndClass