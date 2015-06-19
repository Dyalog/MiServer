﻿:class Button : #._html.button
⍝ <button name=⍵[2] value=⍵[3] > ⍵[1] </ button>

    :field _content←''

    ∇ Make args;n;v
      :Access public
      :Implements constructor :base
     ⍝ arguments are content [name [value]]
      args←eis⍣(~0∊⍴args)⊢args
      (_content name value)←3↑args,(⍴args)↓'OK' 'button' ''
      id←name
      Set('type' 'button')
    ∇

    ∇ html←Render
      :Access public
      :If 0∊⍴Content
          Content←_content
      :EndIf
      html←⎕BASE.Render
    ∇

:endclass