:Class ejwaitingpopuptest : MiPageSample ⍝ EAWC : MiPage : HtmlPage


    ∇ Render;wp
      :Access public 
     
	 ⍝ Syntax is ID Content
      wp←Add _.ejWaitingPopup 'Cool stuff coming soon'
	  
	 ⍝ By default, the pop-up is hidden 
      'showOnInit'wp.Set _true
	  ∇

:EndClass
