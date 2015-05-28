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