:Class APL : #._html.pre

    ∇ make
      :Access Public
      :Implements Constructor
    ∇

    ∇ make1 arg
      :Access Public
      :Implements Constructor
      Content←arg
    ∇

    ∇ make2(content attr)
      :Access Public
      :Implements Constructor
      Content←content
      SetAttr attr
    ∇

    ∇ html←Render
      :Access public
      :If style≡UNDEF
          style←'font-family:APL385 Unicode'
      :Else
          style,←(';'=¯1↑style)↓';font-family:APL385 Unicode'
      :EndIf
      :If 1<≢⍴Content
          Content←2↓∊(⎕UCS 13 10)∘,¨↓Content
      :ElseIf 1<≡Content
          Content←2↓∊(⎕UCS 13 10)∘,¨Content
      :EndIf
      html←⎕BASE.Render
    ∇
:EndClass
