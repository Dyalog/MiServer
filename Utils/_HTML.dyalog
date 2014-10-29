:Namespace _HTML

    :class Form : #._html.form

        :field public Method←'post'
        :field public Action←''
        :field public Serialize←0

        ∇ make;c
          :Access public
          :Implements constructor
          :If ''≢c←##.context'_Request'
              Action←c._Request.Page
          :EndIf
        ∇

        ∇ make1 action
          :Access public
          :Implements constructor
          Action←action
        ∇

        ∇ r←Render
          :Access public
          Attr['action' 'method']←Action Method
          r←⎕BASE.Render
        ∇
    :endclass

    :class InputSubmit : #._html.input

        ∇ Make args;n;v
          :Access public
          :Implements constructor :base
          args←eis args
          (n v)←2↑args,(⍴args)↓'submit' 'submit'
          (name value)←n v
          SetAttr('type' 'submit')
        ∇
    :endclass

    :class Input : #._html.input

        :field public Label←''

        ∇ Make1 args;l;n;t;v
          :Access public
          :Implements constructor
          args←eis args
          t n v l←4↑args,(⍴args)↓'text' '' '' ''
          (type value Label)←t v l
          :If ~0∊⍴n ⋄ name←id←n ⋄ :EndIf
        ∇

        ∇ html←Render
          :Access public
          html←''
          :If ~0∊⍴Label
              :If id≡⎕NULL ⋄ id←'gen',⍕?1000 ⋄ :EndIf
              html,←'<label for="',(⍕id),'">',Label,'</label>'
          :EndIf
          html,←⎕BASE.Render
        ∇
    :endclass

    :class InputGrid : #._html.table

        :field public Border←0
        :field public Labels←''
        :field public Inputs←''
        :field public Headings←''

        ∇ html←Render;cells;rows
          :Access public
          cells←{⎕NEW #._html.td(⍵)}¨Labels,[1.1]{326=⎕DR⊃⍵:(⎕NEW ⍵).Render ⋄ ⍵}¨Inputs
          cells.SetAttr(⍴cells)⍴'style="text-align:right"' ''
          (rows←⎕NEW¨(⊃⍴cells)⍴#._html.tr).Add↓cells
          Content←rows.Render
          SetAttr'border'(⍕Border)
          html←⎕BASE.Render
        ∇
    :endclass

    :class EditField : #._html.input

        :field public readonly type←'text'
        ∇ make1 nm
          :Access public
          :Implements constructor
          name←nm
          id←name
        ∇
        ∇ make2(nm val)
          :Access public
          :Implements constructor
          (name value)←nm val
          id←name
        ∇
    :endclass

    :class Button : #._html.button

        :field _content←''

        ∇ Make0
          :Access public
          :Implements constructor :base
          SetAttr('type' 'button')
        ∇

        ∇ Make args;n;v
          :Access public
          :Implements constructor :base
          ⍝ arguments are name value {content}
          args←eis args
          (n v _content)←3↑args,(⍴args)↓'button' 'button' ''
          :If 0∊⍴_content ⋄ _content←v ⋄ :EndIf
          (name value)←n v
          SetAttr('type' 'button')
        ∇

        ∇ html←Render
          :Access public
          :If 0∊⍴Content
              Content←_content
          :EndIf
          html←⎕BASE.Render
        ∇

    :endclass

    :class Script : #._html.script

        :field public File←''
        :field public Code←''

        ∇ Make0
          :Access public
          :Implements constructor
          SetAttr'type="text/javascript"'
        ∇

        ∇ Make1 params
          :Access public
          :Implements constructor
          params←eis params
          Code File←2↑params,(⍴params)↓'' ''
          SetAttr'type="text/javascript"'
        ∇

        ∇ html←Render
          :Access public
          :If ~0∊⍴File
              SetAttr('src'File)
          :ElseIf ~0∊⍴Code
              Content←Code
          :EndIf
          html←⎕BASE.Render
        ∇

    :endclass

    :class Style : #._html.style
        :field public Selector←''
        :field public Styles←''

        ∇ Make1 params
          :Access public
          :Implements constructor
          params←eis params
          (Selector Styles)←2↑params,(⍴params)↓'' ''
        ∇

        ∇ html←Render
          :Access public
          Content←Selector,#.HTMLUtils.Styles Styles
          html←⎕BASE.Render
        ∇

    :endclass

:EndNamespace