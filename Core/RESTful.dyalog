:Class RESTful

⍝  Base class for RESTful web service pages

  :Field Public _PageName←'' ⍝ Page file name
  :Field Public _PageDate←'' ⍝ Page saved date
  :field Public _Request     ⍝ HTTPRequest
  :field Public _PageData    ⍝

  ∇ Make
    :Access public
    :Implements constructor :Base
    _PageData←⎕NS''
  ∇

  ∇ Make1 req
    :Access public
    _Request←req
    :Implements constructor :base
    _PageData←⎕NS''
  ∇

  ∇ r←{proto}Get names
    :Access public
    :If 0=⎕NC'proto' ⋄ proto←'' ⋄ :EndIf
    names←,⍕names
    names←#.Strings.deb names
    :If ' '∊names
      names←{⎕ML←3 ⋄ ⍵⊂⍨⍵≠' '}names
      r←proto∘Get¨names
    :ElseIf 2≠_PageData.⎕NC names
      r←proto
    :Else
      r←_PageData⍎names
      :If 1<|≡r ⋄ r←∊r ⋄ :EndIf
      :If ~0 2∊⍨10|⎕DR proto
        r←{0∊⍴⍵:⍬ ⋄ w←⍵ ⋄ ((w='-')/w)←'¯' ⋄ ⊃(//)⎕VFI w}r
      :EndIf
    :EndIf
  ∇

  ∇ Close session ⍝ Called when the session ends
    :Access Public Overridable
  ∇

  ∇ _init
    :Access public
  ∇

  ∇ Wrap
    :Access public
  ∇

:EndClass