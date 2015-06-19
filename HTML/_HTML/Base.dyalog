:class Base: #._html.base
⍝ <base href=⍵></ base>

    :field public href←''

    ∇ Make1 args
      :Access public
      :Implements constructor
      href←args
    ∇

    ∇ html←Render
      :Access public
      'href'Set href
      'target' Set '_blank'
      html←⎕BASE.Render
    ∇
:endclass