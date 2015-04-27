:Class WaitingPopupMonadic : MiPageSample ⍝ EAWC : MiPage : HtmlPage
    ∇ Render;ct
      :Access public 
     
    ⍝ Two objects are added into the page: 1. A division with the content of the pop-up 2. A place-holder with the pop-up itself
     
    ⍝ 1. New division with text and image:
      ct←⎕NEW div'Cool stuff coming <B>very</B> soon...'
      ct.Add img'' 'src="waitingpopup.gif" alt="spinning wheel"'
     
    ⍝ 2. The pop-up:
      'showOnInit'(Add ejWaitingPopup'').Set _true
    ∇

:EndClass

