:Class saveFiles : MiPage  
⍝ This page is used by the _SF.ejUploadbox widget, which posts to it in order to upload
⍝ Files to the server. See Examples\Uploadbox for an example of its use.

    ∇ Render;names;value;n;t;target;file;data;tn
      :Access public
     
      names←_PageData.⎕NL-2 ⍝ Names found in input data
     
      ⍝ Establish target folder for upload ('' means dummy upload)
      ⍝ Target is based from the MiServer root
     
      :If (t←⊂'targetfolder')∊names
          target←_PageData.targetfolder
          target←(0≠⍴target)/_Request.Server.Config.Root,'/',target
          names←names~t
      :Else
          target←''
      :EndIf
     
      ⍝ For each input, see if it looks like a file upload and process it
      :For n :In names
          :Trap 0
              value←_PageData⍎n
              :If (1=⍴value)∧(2=⍴⊃value)∧3=≡value ⍝ /// work-around for JSON bug?
                  value←⊃value
              :EndIf
     
              :If (2=⍴value)∧2=≡value
                  (file data)←value
                  :If 0≠⍴target
                      file←target,'/',file
                      :Trap 0
                          tn←file ⎕NCREATE 0
                          data ⎕NAPPEND tn,80
                          ⎕NUNTIE tn
                          ⎕←'*** saveFiles:',(⍕⍴data),' bytes written to file "',file,'"'
                      :Else
                          ⎕←'*** saveFiles: Unable to create upload file "',file,'"'
                      :EndTrap
                  :Else
                      ⎕←'*** saveFiles: Dummy upload of ',(⍕⍴data),' bytes to file "',file,'"'
                  :EndIf
              :EndIf
          :Else
              ⎕←'*** saveFiles: Bad input:'n(⎕DMX.DM)
          :EndTrap
      :EndFor
    ∇
    
:EndClass