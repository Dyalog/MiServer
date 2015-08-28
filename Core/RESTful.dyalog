﻿:Class RESTful

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
      proto←{6::⍵ ⋄ proto}''
      names←eis names
      names←,⍕names
      names←#.Strings.deb names
      :If ' '∊names
          names←{⎕ML←3 ⋄ ⍵⊂⍨⍵≠' '}names
          r←proto∘Get¨names
      :ElseIf 2≠_PageData.⎕NC names
          r←,proto
      :Else
          r←_PageData⍎names
          :If 2≤≡r
              :If 1=⍴,r
                  r←⊃r
              :EndIf
          :EndIf
          :If isString r
              r←#.JSON.toAPL r
          :EndIf
      :EndIf
    ∇

    ∇ r←GetNames str
      :Access public
      →0⍴⍨0∊⍴r←_PageData.⎕NL-2 9
      →0⍴⍨0∊⍴str
      r←r/⍨r #.Strings.beginsWith¨⊂str
    ∇
    
    ∇ r←isChar w
      :Access public shared
      r←0 2∊⍨10|⎕DR w
    ∇

    ∇ r←isString w
      :Access public shared
      :Select ≡w
      :Case 2
          :If 1=⍴,w
              r←{(isChar ⍵)∧1∊⍴⍴1/⍵}⊃w
          :Else
              r←0
          :EndIf
      :CaseList 0 1
          r←{(isChar ⍵)∧1∊⍴⍴1/⍵}w
      :Else
          r←0
      :EndSelect
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

    ∇ r←{a}eis w
      :Access public shared
      r←((,∘⊂)⍣((isString w)∧2>|≡w))w ⍝ enclose if simple character
    ∇

    :section RESTful methods

    ∇ SetStatus arg
      :Access public
      _Request.Fail arg
    ∇

    ∇ {hdr}SetHeader value
      :Access public
      :If 0=⎕NC'hdr'
          _Request.SetHeader value
      :Else
          hdr _Request.SetHeader value
      :EndIf
    ∇

    ∇ r←_Command
      :Access public
      r←_Request.Command
    ∇

    ∇ r←_RESTfulReq
      :Access public
      r←_Request.RESTfulReq
    ∇

    :endsection

:EndClass