:Namespace Strings

    (⎕IO ⎕ML)←1

    lower←'abcdefghijklmnopqrstuvwxyzáâãçèêëìíîïðòóôõùúûýàäåæéñöøü'
    upper←'ABCDEFGHIJKLMNOPQRSTUVWXYZÁÂÃÇÈÊËÌÍÎÏÐÒÓÔÕÙÚÛÝÀÄÅÆÉÑÖØÜ'


    ∇ r←lc r;m
      m←r∊upper
      (m/r)←lower[upper⍳m/r]
    ∇

    ∇ r←uc r;m
      m←r∊lower
      (m/r)←upper[lower⍳m/r]
    ∇

    vtom←{⎕ML←3 ⋄ ⍺←' ' ⋄ ⊃⍵⊂⍨~⍵∊⍺} ⍝ vector to matrix


    ∇ r←dlb x
    ⍝ Delete Leading Blanks
      r←(+/∧\' '=x)↓x
    ∇

    ∇ r←dtb x
    ⍝ Delete Trailing Blanks
      r←(-+/∧\' '=⌽x)↓x
    ∇

    ∇ r←deb x
    ⍝ Delete extraneous blanks
      r←{1↓¯1↓(~'  '⍷⍵)/⍵}' ',x,' '
    ∇

    ∇ r←dmb x;m
    ⍝ Delete multiple blanks
      r←(m⍲1⌽m←' '=x)/x
    ∇

    ∇ str←str subst(from to);m;⎕IO;i
    ⍝ simple string substitution
      ⎕IO←0
      :Trap 0
          str←((esc from)⎕R(esc to))str
      :Else
          →(∨/m←from⍷str)↓0
          i←m⍳1
          str←((i↑str),to,(i+⍴from)↓str)subst(from to)
      :EndTrap
    ∇

    esc←{m←∊(-1+⍵∊'%\')↑¨1 ⋄ r←m\⍵ ⋄ ((~m)/r)←'\' ⋄ r }

    scaledFmt←{0=⍵:' 0' ⋄ ⍵{((1+⍵)⊃(⊂''),'KMGTQP'),⍨(1⌊⍵)⍕⍺÷10*3×⍵}⌊3÷⍨10⍟⍵}

    tonum←{0∊⍴⍵:⍬ ⋄ w←⍵ ⋄ ((w='-')/w)←'¯'⋄2 1⊃⎕VFI w}

    ∇ r←{d}commaFmt n
      :If 0=⎕NC'd'
          r←(,¨'CI20'∘⎕FMT¨n)~¨' '
      :Else
          r←(,¨('CF20.',⍕d)∘⎕FMT¨n)~¨' '
      :EndIf
    ∇
    
    beginsWith←{(,⍺){⍵≡(⍴⍵)↑⍺},⍵}
    endsWith←{(,⍺){⍵≡(-⍴⍵)↑⍺},⍵}

:EndNamespace