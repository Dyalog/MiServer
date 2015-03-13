:Class ejUploadBox : #._SF._ejWidget
    :Field Public Shared Readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejUploadBox.html'
    :Field Public Shared Readonly ApiLevel←3
    :Field Public TargetFolder←''
    :Field Public SaveUrl←'../CommonPages/saveFiles.dyalog'
    :Field Public Async←#.JSON.true
     
    ∇ make
      :Access public
      JQueryFn←Uses←'ejUploadbox'
      :Implements constructor
    ∇
    
    ∇ makec args
      :Access public
      JQueryFn←Uses←'ejUploadbox'
      :Implements constructor                           
      (Selector TargetFolder)←args
    ∇
    ∇ r←Render;props;i;pre;value;name;fields;var
      :Access public     
      'saveUrl'Option SaveUrl,'?targetfolder=',TargetFolder
      'asyncUpload'Option Async
     
      r←⎕BASE.Render
    ∇
        
:EndClass
