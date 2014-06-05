:Class jqueryFileTree : MildPage

    :Include #.HTMLInput

    :field public dir

    ∇ html←APLJax req;files;f;fn;e
      :Access public
      files←#.Files.List dir←#.HTTPRequest.ArgXLT dir
      html←''
      :For f :In 2↓↓files
          fn←1⊃f
          :If 4⊃f
              html,←⊃Enclose/'li class="directory collapsed"'('a href="#" rel="',dir,fn,'/"')fn
          :Else
              (f e)←0 1↓¨1↓#.Files.SplitFilename fn
              html,←⊃Enclose/('li class="file ext_',e,'"')('a href="#" rel="',dir,fn,'"')fn
          :EndIf
      :EndFor
      html←'ul class="jqueryFileTree" style="display: none;"'Enclose html
    ∇
:EndClass
