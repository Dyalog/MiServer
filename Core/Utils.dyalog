:Namespace Utils
⍝ This namespace contains general utility functions
    (⎕ML ⎕IO)←1

    penclose←{⍺←⊃,⍵ ⋄ (~⍵∊⍺)⊆,⍵ } ⍝ APL2 style partitioned enclose (optional ⍺ is character(s) to break on)
    eis←{(,∘⊂)⍣((326∊⎕DR ⍵)<2>|≡⍵),⍵} ⍝ Enclose if simple

    backscan←{0≡≢⍵:⍬ ⋄ h←⍺ ⍺⍺⊃⍵ ⋄ (⊂h),h ⍺⍺ ∇∇ 1↓⍵} ⍝ scan \ in the opposite direction
    levels2nodes←0{(⌽⍵↑1)+⍵↑⍺}backscan ⊢
    levels2ids←{(⍺,(∊('_',⍕)¨))¨levels2nodes ⍵}

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
    vectorize←{1≥|≡⍵:,⍵ ⋄ ∇¨⍵} ⍝ turn scalars into vectors
    
    rank2depth←{S←↓⍣(¯1+≢⍴⍵) ⋄ 1<|≡⍵:S ∇¨⍵ ⋄ S ⍵}

    WSRoot←{⍵↓⍨-⊥⍨('/\'⊃⍨1+'Win'≡3↑⊃'.'⎕WG'APLVersion')≠⍵}⎕WSID

    ∇ r←Platform
    ⍝ return our best guess for the platform we're running on
      :If 'lin'≡r←#.Strings.lc 3↑⊃'.'⎕WG'APLVersion'
          :If 'armv'≡4↑⎕SH'uname -m'  ⍝!!! warning, could be Android someday
              r←'pi'
          :EndIf
      :EndIf
    ∇
:EndNamespace                       
