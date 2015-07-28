﻿:Class UploadBox : MiPageSample 
⍝ Demonstrate the SyncFusion ejUploadBox widget
    
    ∇ Render;control;options;ub;targetfolder
      :Access Public
     
      options←('height' '50px')('width' '100px')
     
      ⍝ targetfolder←'Data'   ⍝ Would put files in the Data folder
      targetfolder←''         ⍝ If empty, demo page will not save a server-side file
     
      Add h3'SyncFusion UploadBox'
      Add p'Click to read <a href="',_SF.ejUploadBox.ApiLink,'" target="_blank">Syncfusion documentation</a>.'
     
      ub←Add ⎕NEW _SF.ejUploadBox('myUpload'targetfolder)
      ub.Option/↑options
     
      ⍝ The saveUrl option controls where data is posted to.
      ⍝ By default, a demo page is used, uncommend and modify the following line to use your own page
      ⍝ ub.SaveUrl←'../CommonPages/saveFiles.dyalog'
     
      ub.On'complete' 'APLJax'('ejModel' 'ejModel')
      ⍝ ub.On'begin' 'APLJax'('ejModel' 'ejModel') ⍝ /// Unable to have 2 callbacks // BPB
     
      Add br
      (Add div).id←'output'
    ∇
    
    ∇ r←APLJax;txt
      :Access public   
     
      :Select _event
      :Case 'begin'
          ∘ ⍝ /// See above
      :Case 'complete'
          txt←(⊃_PageData.ejModel.files).((⍕size),' bytes uploaded from "',name,'"')
          txt,←'<br>Posted to ',(⊃_PageData.ejModel.model).saveUrl
          r←'#output'Replace txt
      :EndSelect
    ∇

:EndClass