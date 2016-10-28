:Class ejLocale : #._html.script
⍝ Localization utility for Syncfusion widgets

    :field public Locales←''
    :field SyncfusionLocalesPath←'/Syncfusion/assets/scripts/cultures/ej.culture.⍵.min.js'

    ∇ make
      :Access public
      :Implements constructor
    ∇

    ∇ make1 locales
      :Access public
      :Implements constructor
      Locales←locales
    ∇

    ∇ r←Render
      :Access public
      r←''
      :If ~0∊⍴Locales
          :For locale :In eis Locales
              r,←⎕NEW #._.Script(''(SyncfusionLocalesPath{}locale)).Render
          :EndFor
      :EndIf
    ∇
:EndClass