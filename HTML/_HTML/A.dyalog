:class A : #._html.a

    :field public href←''
    :field public Text←''

    ∇ Make1 args
      :Access public
      :Implements constructor
      (Text href)←2⍴eis args
    ∇

    ∇ html←Render
      :Access public
      Content←Text
      'href'Set href
      html←⎕BASE.Render
    ∇
:endclass