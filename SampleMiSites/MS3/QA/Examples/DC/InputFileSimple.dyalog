 msg←Test dummy;CR;files;f;result;file;path;stats;s;c
⍝ try to upload a sampling of files in the Data-directory

 msg←''
 CR←⎕UCS 13

 ⍝↓↓↓ remove directories, select one of each file type based on extension
 files←{⍵[(3⌊⍴⍵)?⍴⍵]}∊¨↓{⍵⌷[1]⍨⊂⍵[;3]⍳∪⍵[;3]}↑#.Files.SplitFilename¨{⍵[;1]/⍨~⍵[;4]}#.Files.List path←AppRoot,'examples\data\'
 ⍞←' testing ',(⍕⍴files),' files '
 c←0
 :For f :In files  ⍝ all files, no directories
     (Find'ipfl').SendKeys⊂file←path,f  ⍝ must send all at once, otherwise causing Selenium-Exception because of filename...

     Click'submit'
     ⎕DL 2 ⍝ allow short delay for processing...

     result←Find'output'
     {~0∊∊⍴¨result.Text}Retry ⍬ ⍝ Wait (a bit) to see if it gets populated

     :If ~∨/f⍷result.Text
         msg,←CR,'Upload of file ',file,' failed'
     :ElseIf 2≠⍴stats←⊃(//)⎕VFI result.Text
         msg,←CR,'File ',file,' uploaded but statistics are not found - ',result.Text
     :Else
         s←{t←⍵ ⎕NTIE 0 ⋄ (⎕NUNTIE t)⊢{(⍴⍵),255|+/⍵}⎕NREAD t,83,2↑⎕NSIZE t}file
         :If stats≢s
             msg,←CR,'File ',file,' uploaded but statistics are different - uploaded = ',(⍕stats),', original = ',⍕s
         :EndIf
     :EndIf
     c+←1
     ⍞←⍕10|c
 :EndFor