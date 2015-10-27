:class Script : #._html.script
⍝ Description:: Dyalog Script widget - embeds JavaScript in page
⍝ Constructor:: [Code [File]]
⍝ Code  - the JavaScript code to embed inline
⍝ File  - the location of the JavaScript file to link to
⍝ Public Fields::
⍝ Code  - the JavaScript code to embed inline
⍝ File  - the location of the JavaScript file to link to
⍝ Notes::
⍝ Code and File are mutually exclusive if both are specified, Code will be used
⍝ This is frequently used with ScriptFollows to embed inline scripts
⍝ Examples::
⍝ Script '' '/Scripts/myJavaScriptFile.js'
⍝ Script 'alert("Hello World!");'

    :field public File←''
    :field public Code←''

    ∇ Make0
      :Access public
      :Implements constructor
    ∇

    ∇ Make1 params
      :Access public
      :Implements constructor
      Code File←params defaultArgs'' ''
    ∇

    ∇ UpdateContent
      :Implements Trigger Code
      Content←Code
    ∇

    ∇ html←Render
      :Access public
      'type'Set'text/javascript'
      :If ~0∊⍴File
      :AndIf 0∊⍴Content ⍝ if inline script, ignore the file
          Set(⊂'src'File)
      :EndIf
      html←⎕BASE.Render
    ∇

:endclass