:class Select : #._html.select
    :field public Options←0 2⍴⊂''  ⍝ vector or matrix [;1] display, [;2] value
    :field public Selected←⍬       ⍝
    :field public Null←''          ⍝ character vector "null" choice - the first choice on the list and does not have a value

    ∇ make
      :Access public
      :Implements constructor
    ∇

    ∇ make1 args;attr
      :Access public
      :Implements constructor
      args←eis args
      (Options Null)←2↑args,(⍴args)↓'' ''
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
          Add Null FormatOptions opts
      :EndIf
      r←⎕BASE.Render
    ∇

    ∇ r←{null}FormatOptions opts
      :Access public shared
      :If 0=⎕NC'null' ⋄ null←'' ⋄ :EndIf
      :If 1=⍴⍴opts ⋄ opts←opts,⍪opts ⋄ :EndIf
      r←∊{sel←(⎕UCS 1)=1↑⍺ ⋄ '<option value="',(HtmlSafeText ⍵),'"',(sel/' selected="selected"'),'>',(⍕sel↓⍺),'</option>'}/¨↓(0∊⍴null)↓(null'')⍪opts
    ∇
:endclass