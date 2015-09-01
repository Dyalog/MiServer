:Class WidgetDoc : MiPageTemplate

    ∇ Compose;ns;widget;doc;t;opts;og
      :Access public
      Add _.StyleSheet'/Styles/widgetDoc.css'
      (ns widget)←Get'namespace widget'
      :If 0∊⍴widget
          Add _.h3'Select widget'
          opts←'onchange="window.open(this.value,''this'');this.selectedIndex=0"'Add _.select
          'disabled=' 'value='opts.Add _.option'[Select widget]'
          :For ns :In '_DC' '_SF' '_JQ' '_html'
              og←('label'ns)opts.Add _.optgroup
              :For widget :In (⍎ns).⎕NL ¯9
                  ('value=?namespace=',ns,'&widget=',widget)og.Add _.option widget
              :EndFor
          :EndFor
      :Else
          doc←ns Document widget
          doc[;2]←{New _.pre ⍵}¨doc[;2]
          Add _.h3 ns,'.',widget
          (Add #._.Table doc).CellAttr←'class="widgetDoc"' 'class="widgetDocContent"'
      :EndIf
    ∇

    ∇ r←ns Document widget;ref;wref;src;mask;chunk;pv;c;c1;c2;samples;files
      :Access public shared
      r←''
      :If 9.1=#.⎕NC⊂ns
          ref←#.⍎ns
          :If 9=ref.⎕NC widget
              wref←ref⍎widget
              src←1↓⎕SRC wref
              src↓⍨←+/∧\''∘≡¨src
              src←#.Strings.dlb¨src
              src←src/⍨∧\'⍝'=⊃¨src
              src←HtmlSafeText¨#.Strings.dlb¨1↓¨src
              pv←∨/¨'::'∘⍷¨src
              r←0 2⍴⊂''
              :For chunk :In pv⊂src
                  c←⊃chunk
                  (c1 c2)←{⍵{(1,1↓<\⍵)⊂⍺}'::'⍷⍵}c
                  c2←#.Strings.deb 2↓c2
                  c2←c2{0∊⍴⍺:⍵ ⋄ 0∊⍴⍵:⊂⍺ ⋄ (⊂⍺),⍵}1↓chunk
                  c2←¯2↓∊c2,¨⊂⎕UCS 13 10
                  r⍪←c1 c2
              :EndFor
              :If 0≠wref.⎕NC⊂'DocBase'
                  r⍪←'Documentation'('target=_blank'New _.A(2⍴⊂wref.DocBase))
              :EndIf
              samples←'/Examples/',(ns~'_'),'/'
              :If ~0∊⍴files←1⌷[2]#.Files.List #.Boot.ms.Config.AppRoot,samples
              :AndIf ~0∊⍴files/⍨←∨/files∘.#.Strings.(beginsWith nocase)widget∘,¨'Simp' 'Adv'
                  r⍪←'Sample Pages'({'target=_blank'New _.A(2⍴⊂⍵)}¨samples∘,¨files)
              :EndIf
          :EndIf
      :EndIf
    ∇


:EndClass