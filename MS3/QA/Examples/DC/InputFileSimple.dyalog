 msg←Test dummy;result;path;nu;c1;c2;f;files
⍝ try to upload a sampling of files in the Data-directory

 msg←''
 →0 ⍝ temporarily disabled

 ⍝↓↓↓ remove directories, select one of each file type based on extension
 files←path∘,¨∊¨↓{⍵⌷[1]⍨⊂⍵[;3]⍳∪⍵[;3]}↑#.Files.SplitFilename¨{⍵[;1]/⍨~⍵[;4]}#.Files.List path←AppRoot,'examples\data\'
 :For f :In files  ⍝ all files, no directories
     (Find'ipfl').SendKeys⊂path,f  ⍝ must send all at once, otherwise causing Selenium-Exception because of filename...
     Click'submit'
     result←Find'output'
     {~0∊∊⍴¨result.Text}Retry ⍬ ⍝ Wait (a bit) to see if it gets populated

     :If #.Files.Exists result.Text
         nu←(path,f)⎕NTIE 0 ⋄ c1←⎕NREAD nu,83,⎕NSIZE nu ⋄ ⎕NUNTIE nu
         nu←result.Text ⎕NTIE 0 ⋄ c2←⎕NREAD nu,83,⎕NSIZE nu ⋄ ⎕NUNTIE nu
         msg,←(c1≢c2)/(⎕UCS 13),'Uploaded file ',result.Text,' binary not identical to source ',path,f
     :Else
         msg,←(c1≢c2)/(⎕UCS 13),'Uploaded of file ',path,f,' was not processed!'
     :EndIf
 :EndFor