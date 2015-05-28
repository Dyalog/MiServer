﻿    :class Select : #._html.select
        :field public Options←0 2⍴⊂''  ⍝ vector or matrix [;1] display, [;2] value
        :field public Selected←⍬       ⍝

        ∇ make
          :Access public
          :Implements constructor
        ∇

        ∇ make1 args;attr
          :Access public
          :Implements constructor
          args←eis args
          (name Options attr)←3↑args,(⍴args)↓UNDEF'' ''
          SetAttr attr
        ∇

        ∇ r←Render;opts
          :Access public
          :If name≡UNDEF
              name←id
          :ElseIf id≡UNDEF
              id←name
          :EndIf
          :If ~0∊⍴Options
              Content←⍬
              opts←Options
              :If 1=⍴⍴opts
                  opts←opts,⍪opts
              :EndIf
              opts[Selected;1],⍨←⎕UCS 1
              Add∊{sel←(⎕UCS 1)=1↑⍺ ⋄ '<option value="',(HtmlSafeText ⍵),'"',(sel/' selected="selected"'),'>',(⍕sel↓⍺),'</option>'}/¨↓opts
          :EndIf
          r←⎕BASE.Render
        ∇
    :endclass