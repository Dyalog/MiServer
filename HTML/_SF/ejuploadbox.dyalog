:Class ejUploadbox : #._SF._ejWidget
    :Field Public Shared Readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejUploadBox.html'
    :Field Public Shared Readonly ApiLevel←3
    :Field Public Shared Readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejUploadBox.html'
    :Field Public TargetFolder←''
    :Field Public SaveUrl←'../CommonPages/saveFiles.mipage'
    :Field Public Async←#.JSON.true
     
    ∇ make
      :Access public
      JQueryFn←Uses←'ejUploadbox'
      :Implements constructor
    ∇
    
    ∇ makec args;x
      :Access public          
      args←eis args
      args←2↑args,(⍴args)↓'' ''
      JQueryFn←Uses←'ejUploadbox'
      :Implements constructor :base args                           
      (x TargetFolder)←args
    ∇
    ∇ r←Render;props;i;pre;value;name;fields;var
      :Access public     
      'saveUrl'Option SaveUrl,'?targetfolder=',TargetFolder
      'asyncUpload'Option Async
     
      r←⎕BASE.Render
    ∇
        
:EndClass
