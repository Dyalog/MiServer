:class Script : #._html.script

    :field public File←''
    :field public Code←''

    ∇ Make0
      :Access public
      :Implements constructor
      Set'type="text/javascript"'
    ∇

    ∇ Make1 params
      :Access public
      :Implements constructor
      params←eis params
      Code File←2↑params,(⍴params)↓'' ''
      Set'type="text/javascript"'
    ∇

    ∇ UpdateContent
      :Implements Trigger Code
      Content←Code
    ∇


    ∇ html←Render
      :Access public
      :If ~0∊⍴File
          Set('src'File)
      :EndIf
      html←⎕BASE.Render
    ∇

:endclass