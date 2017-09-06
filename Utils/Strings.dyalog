:Namespace Strings

    (⎕IO ⎕ML)←1

    lc←(819⌶) ⍝ :Includable Lower-casification of simple array
    uc←1∘(819⌶) ⍝ Ditto Upper-casification

    cis←{~0∊⍴(⍺ ⎕S 0 ⎕OPT'IC' 1)⍵} ⍝ Case Insensitive Search

    nocase←{(lc ⍺)⍺⍺ lc ⍵} ⍝ case insensitive operator

    firstCap←('(?<first>\w)(?<remainder>\w*)'⎕R'\u<first>\l<remainder>')

    beginsWith←{(,⍺){⍵≡(⍴⍵)↑⍺},⍵}
    endsWith←{(,⍺){⍵≡(-⍴⍵)↑⍺},⍵}
    stringify←{¯2↓∊(↓⍕↑⍵),¨⊂⎕UCS 13 10}

    split←{⎕ML←3 ⋄ ⍺←' ' ⋄ ⍵⊂⍨~⍵∊⍺}
    vtom←↑split  ⍝ vector to matrix

    dlb←{(+/∧\' '=⍵)↓⍵}               ⍝ Delete Leading Blanks
    dtb←{(-+/∧\' '=⌽⍵)↓⍵}             ⍝ Delete Trailing Blanks
    deb←{{1↓¯1↓(~'  '⍷⍵)/⍵}' ',⍵,' '} ⍝ Delete extraneous blanks

    vtv←{{1↓¨(v=n)⊂v←(n←⎕UCS 10),⍵}⍵~⎕UCS 13} ⍝ vector of text vectors

    stringToHex←{⎕IO←0⋄∊⍉(16⍴⎕D,⎕A)[16 16⊤⎕UCS ⍵]}

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

    tonum←{0∊⍴⍵:⍬ ⋄ w←⍕⍵ ⋄ ((w='-')/w)←'¯' ⋄ ⊃(//)⎕VFI w}

    fmtNum←{⍺←⊢ ⋄ w←⍺⍕⍵ ⋄ (('¯'=,w)/,w)←'-' ⋄ w}

    ∇ r←{d}commaFmt n
      :If 0=⎕NC'd'
          r←(,¨'CI20'∘⎕FMT¨n)~¨' '
      :Else
          r←(,¨('CF20.',⍕d)∘⎕FMT¨n)~¨' '
      :EndIf
      (∊r)←{w←⍵ ⋄ w⊣((w='¯')/w)←'-'}∊r
    ∇


:EndNamespace
⍝)(!commaFmt!brian!2017 9 3 10 58 15 0!0
⍝)(!subst!brian!2017 9 3 10 58 15 0!0
