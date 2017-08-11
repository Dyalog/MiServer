:Namespace _SF ⍝ Syncfusion
    ⍝∇:require =\_JQ.dyalog

    :section CommonCode

    ∇ r←ApiInfo
      r←{↑⍵∘{6::⍵'' '' ⋄ ⍵(⍺⍎⍵,'.(ApiLevel DocBase)')}¨'e'⍵.⎕NL-9.4}⎕THIS
    ∇

    ∇ r←opt(sel Update jqfn)val
    ⍝ update an option for a widget
      r←opt(sel #.JQ.Update jqfn)val
    ∇

    :Class _ejWidget : #._JQ._jqWidget
⍝ generic Syncfusion Enterprise JavaScript object

        :Field public Data←''

        :Field public WidgetDef←'argument' 'argument'  'argument.model' 'this.element' '.val()'  ⍝ Syncfusion's event model (see _JQ.RenderHandlerCore for details)

        ∇ make
          :Access public
          :If 0=⎕NC⊂'Uses' ⋄ Uses←'' ⋄ :EndIf
          :If 0∊⍴Uses ⋄ Uses←'Syncfusion' ⋄ :EndIf
          :Implements constructor
        ∇

        ∇ r←Render
          :Access public
          AddLocale
          JQPars←Options
          r←⎕BASE.Render
        ∇

        ∇ AddLocale
          :If 9=⎕NC'Options'
          :AndIf 0≠Options.⎕NC'locale'
          :AndIf 9=⎕NC'#.Boot.ms'
          :AndIf ~0∊⍴sfFolder←#.Boot.ms.Config.Virtual{(⍺.alias⍳⊂⍵)⊃⍺.path,⊂''}'Syncfusion'
          :AndIf #.Files.Exists sfFolder,file←'assets/scripts/i18n/ej.culture.',Options.locale,'.min.js'
              Use'⍎/Syncfusion/',file
          :EndIf
        ∇
    :EndClass
    :endsection
:EndNamespace
