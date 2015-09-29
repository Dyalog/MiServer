:Namespace Utils
⍝ This namespace contains general utility functions
    (⎕ML ⎕IO)←1

    penclose←{⎕ML←3 ⋄ ⍺←↑,⍵ ⋄ (~⍵∊⍺)⊂,⍵ } ⍝ APL2 style partitioned enclose (optional ⍺ is character(s) to break on)

    ∇ SetupCompatibility;z
    ⍝ create covers for primitives that may not exist in earlier versions of Dyalog
     
    ⍝ key operator
      :Trap 2
          ∆key←⌸
      :Else
          ∆key←{
              0=⎕NC'⍺':⍵ ∇⍳⍬⍴⍴⍵
              ⍺ ⍺⍺{⍺ ⍺⍺ ⍵}{⎕ML←1
                  j←⍋i←{1<⍴⍴⍵:∇↓⍵ ⋄ (∪⍵)⍳⍵}⍺
                  ↑(⊂[1↓⍳⍴⍴⍺]((⍳⍴i)=i⍳i)⌿⍺)⍺⍺¨(2≠/¯1,i[j])⊂[⎕IO]⍵⌷⍨⊂j
              }⍵
          }
      :EndTrap
     
    ⍝ tally
      :Trap 2
          z←≢1
          ∆tally←≢
      :Else
          ∆tally←{⍬⍴(⍴⍵),1}
      :EndTrap
    ∇


:EndNamespace