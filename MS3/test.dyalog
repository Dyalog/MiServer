:Class test : MiPageSample

    ∇ make;path
      :Implements constructor
      :Access public
      path←'/Examples/Data/'
      numpics←⍬⍴⍴pics←path∘,¨1⌷[2]'pic*.png'#.Files.List #.Boot.AppRoot,path
      pos←1
    ∇
     

    ∇ Compose;butts;img
      :Access public
      img←(Add _.div).Add _.img('id=myimg src=',pos⊃pics)
      Add _.br
      butts←Add¨4⍴#._.button
      butts.type←⊂'button'
      butts.Content←'|<' '<' '>' '>|'
      butts.name←'b',∘⍕¨⍳4
      Add Handler'button' 'click'
    ∇

    ∇ r←APLJax
      :Access public
      :Select _what
      :Case 'b1' ⋄ pos←1
      :Case 'b2' ⋄ pos-←1
      :Case 'b3' ⋄ pos+←1
      :Case 'b4' ⋄ pos←numpics
      :EndSelect
      pos←1+numpics|pos-1
      r←Execute'#myimg'#._JSS.Attr'src'(pos⊃pics)
    ∇



:EndClass