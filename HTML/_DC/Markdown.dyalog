:Class Markdown : #.HtmlElement
⍝ Description:: Insert rendered Markdown content (using MarkAPL from APL Team/Kai Jaeger)
⍝ Constructor:: [content]
⍝ content          - the markdown content to render
⍝ Public Fields::
⍝ Content          - the markdown content to render
⍝ File             - the name of a file containing markdown content
⍝ ContentPosition  - Specifies where Content occurs if both Content and File are specified
⍝                    valid values are 'before' and 'after' (default is 'before')
⍝ Tag              - HTML container for the rendered content (default is 'div')

    :field public shared readonly DocBase←'http://aplwiki.com/MarkAPL'

    :field public File←''
    :field public ContentPosition←'before'

    ∇ make
      :Access public
      :Implements constructor  
      Tag←'div'
    ∇

    ∇ make1 arg
      :Access public
      :Implements constructor :base arg
      Tag←'div'
    ∇

    ∇ r←Render;content;file
      :Access public
      content←Content
      :If ~0∊⍴File
          :If #.Boot.isRelPath file←File
              file,⍨←#.Boot.AppRoot
          :EndIf
          :If #.Files.Exists file
              Content←⊃,/('b'≠1↑#.Strings.lc ContentPosition)⌽(#.Strings.vtv Content)(#.Files.GetVTV file)
          :Else
              {0:: ⋄ 1 #.Boot.ms.Log'Markdown file "',⍵,'" not found'}file
          :EndIf
      :Else
          Content←#.Strings.vtv Content
      :EndIf
      Content←⊃#.MarkAPL.Markdown2HTML Content
      r←⎕BASE.Render
      Content←content
    ∇

:EndClass
