    :class Datalist : #._html.input
        :field public Options←0 2⍴⊂''

        ∇ make
          :Access public
          :Implements constructor
        ∇

        ∇ make1 args;attr
          :Access public
          :Implements constructor
          args←eis args
          (name Options attr)←3↑args,(⍴args)↓UNDEF'' ''
          Set attr
        ∇

        ∇ r←Render;dl
          :Access public
          :If name≡UNDEF
          :AndIf id≢UNDEF
              name←id
          :ElseIf id≡UNDEF
              id←name
          :EndIf
          :If ~0∊⍴Options
              :If 1=⍴⍴Options
                  Options←Options,⍪Options
              :EndIf
              (dl←Add #._html.datalist).id←name,'_datalist'
              dl.Add∊{'<option value="',(HtmlSafeText ⍵),'">',(⍕⍺),'</option>'}/¨↓Options
              ⍝{(dl.Add #._html.option ⍺).value←⍵}/¨↓Options
              'list'Set dl.id
          :EndIf
          r←⎕BASE.Render
        ∇

    :endclass