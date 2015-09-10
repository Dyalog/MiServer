:Namespace _SF
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

        handlerSyntax←'argument' 'argument'  'argument.model' 'this.element'  ⍝ Syncfusion's event model (see _JQ.RenderHandlerCore for details)

        ∇ make
          :Access public
          :If 0=⎕NC⊂'Uses' ⋄ Uses←'' ⋄ :EndIf
          :If 0∊⍴Uses ⋄ Uses←'Syncfusion' ⋄ :EndIf
          :Implements constructor
        ∇

        ∇ r←Render
          :Access public
          JQPars←Options
          r←⎕BASE.Render
        ∇

        ∇ {r}←opts RenderHandler handler
          :Access public override
          r←opts RenderHandlerCore(handler handlerSyntax Force)
        ∇

    :EndClass
    :endsection
:EndNamespace