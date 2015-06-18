:class Abbr : #._html.abbr

    :field public title←''
    :field public Text←''

    ∇ Make1 args
      :Access public
      :Implements constructor
      (Text title)←2⍴eis args
    ∇

    ∇ html←Render
      :Access public
      Content←Text
      'title'Set title
      html←⎕BASE.Render
    ∇
:endclass