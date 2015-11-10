 msg←Test dummy;result;path;nu
⍝ try to upload ALL files in the Data-directory (sample page will store them in Data\uploaded
 msg←''
→0
 :For f :In (27∊⍨⍳32)#.Files.Dir(path←AppRoot,'Examples\Data\'),'*.*'  ⍝ all files, no directories
     (Find'ipfl').SendKeys⊂path,f  ⍝ must send all at once, otherwise causing Selenium-Exception because of filename...
     Click'submit'
     result←Find'filename'
     {~0∊∊⍴¨result.Text}Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
     :If #.Files.Exists result.Text
         nu←(path,f)⎕NTIE 0 ⋄ c1←⎕NREAD nu,83,⎕NSIZE nu ⋄ ⎕NUNTIE nu
         nu←result.Text ⎕NTIE 0 ⋄ c2←⎕NREAD nu,83,⎕NSIZE nu ⋄ ⎕NUNTIE nu
         msg,←(c1≢c2)/(⎕UCS 13),'Uploaded file ',result.Text,' binary not identical to source ',path,f
     :Else
         msg,←(c1≢c2)/(⎕UCS 13),'Uploaded of file ',path,f,' was not processed!'
     :EndIf
 :EndFor