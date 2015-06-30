:Class ejWaitingPopupTestText : MiPageSample ⍝ EAWC : MiPage : HtmlPage


    ∇ Render;wp
      :Access public 
     
	 ⍝ Syntax is ID Content
      wp←Add _.ejWaitingPopup '' 'Cool stuff coming <b>very</b> soon...<br>'
	  
	 ⍝ By default, the pop-up is hidden 
      'showOnInit'wp.Set _true
	  ∇

:EndClass
