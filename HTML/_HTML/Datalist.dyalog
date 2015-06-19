    :class Datalist : #._html.datalist
⍝ <datalist name=⍵[1]> <option value= 1⊃2⊃⍵ > 1⊃2⊃⍵ </option> <option value= 2⊃2⊃⍵ > 2⊃2⊃⍵ </option> ... </ datalist>
⍝ <datalist name=⍵[1]> <option value=(2⊃⍵)[1;1]>(2⊃⍵)[1;2]</option> <option value=(2⊃⍵)[2;1]>(2⊃⍵)[2;2]</option> ... </ datalist>
	
	:field public Options←0 2⍴⊂''

        ∇ make
          :Access public
          :Implements constructor
        ∇

        ∇ make1 args;attr
          :Access public
          :Implements constructor
          args←eis⍣(~0∊⍴args)⊢args
          (name Options attr)←3↑args,(⍴args)↓UNDEF'' ''
          Set attr
        ∇

        ∇ r←Render;dl
          :Access public
          
          :If ~0∊⍴Options
              :If 1=⍴⍴Options
                  Options←Options,⍪Options
              :EndIf
              (dl←Add #._html.datalist).id←name,'_datalist'
              dl.Add∊{'<option value="',(HtmlSafeText ⍵),'">',(⍕⍺),'</option>'}/Options
              'list'Set dl.id
          :EndIf
          r←⎕BASE.Render
        ∇

    :endclass