:Namespace Utils
⍝ This namespace contains general utility functions
    (⎕ML ⎕IO)←1

    penclose←{⎕ML←3 ⋄ ⍺←↑,⍵ ⋄ (~⍵∊⍺)⊂,⍵ } ⍝ APL2 style partitioned enclose (optional ⍺ is character(s) to break on)
    eis←{(,∘⊂)⍣((326∊⎕DR ⍵)<2>|≡⍵),⍵} ⍝ Enclose if simple

    backscan←{0≡≢⍵:⍬ ⋄ h←⍺ ⍺⍺⊃⍵ ⋄ (⊂h),h ⍺⍺ ∇∇ 1↓⍵} ⍝ scan \ in the opposite direction
    levels2nodes←0{(⌽⍵↑1)+⍵↑⍺}backscan ⊢
    levels2ids←{(⍺,(∊('_',⍕)¨))¨levels2nodes ⍵}

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
     
    ⍝ rank
      :Trap 2
          ∆rank←⍤
      :Else
          ∆rank←{ ⍝ apply ⍺⍺ to/between rank ⍵⍵ cells of ⍺ and/or ⍵
              mlr←⌽3⍴⌽⍵⍵,⍳(aa←⍺⍺)/m←0
              ⍺←(aa←⊢∘aa)/m←1
              l r←-1↓r⌊|{⍵+r×0>⍵}(mlr⌊r←3⍴(⍴⍴⍵),⍴⍴⍺)[⍒m×⍳3]
              ↑aa⌿(⊂[l↑⍳⍴⍴⍺]⍺),[-0.1-⍳1]⊂[r↑⍳⍴⍴⍵]⍵
          }
      :EndTrap
     
    ⍝ upper/lowercase - !!! modifies #.String !!!
      :Trap 11
          {}(819⌶)'ABC' ⍝ are we in a version where the IBeam is implemented?
          #.Strings.lc←(819⌶)
          #.Strings.uc←1∘(819⌶)
      :EndTrap
    ∇
    
    ∇ r←tox hex num;HEX;⎕IO;⎕ML;b
     ⍝ Turn a 32 bit integer into HEX format or the other way around if la is 0
      →(num∨.≠' ')↓⍴r←⍬
      ⎕ML←⎕IO←0 ⋄ HEX←⎕D,'ABCDEFabcdef'
      num←b\num/⍨b←~num∊',' ⍝ tolerant of ,
      :If tox∧∨/0 2∊10|⎕DR num ⋄ num←1⊃⎕VFI num ⋄ :EndIf ⍝ accept char string
      :If tox
          'must be 32 bits signed integer'⎕SIGNAL 11/⍨323<⎕DR num
          r←{HEX[{(1⌈⍴⍵)↑⍵},16⊥⍣¯1⊢(323⌊⎕DR ⍵)⎕DR ⍵]}¨num
      :Else
          num←'(?<!\d)0x'⎕R''⊢num ⍝ remove any 0x before the numbers
          'invalid number(s)'⎕SIGNAL 11↓⍨∧/num∊' ',HEX
          num←(⊂'')~⍨{1↓¨(⍵∊' ')⊂⍵}' ',num ⍝ cut on spaces
          r←16⊥¨{⍵-6×⍵>15}¨HEX∘⍳¨num
      :EndIf
    ∇
    
    tohex←1∘hex
    fromhex←0∘hex

:EndNamespace
