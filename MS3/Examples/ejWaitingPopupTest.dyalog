:Class waitingpopup : Dyalog14 ⍝ EAWC : MiPage : HtmlPage


    ∇ Render;wp
      :Access public
      wp←Add _SF.ejWaitingPopup '' 'Cool stuff coming <b>very</b> soon...'
	  'showOnInit' wp.Option True
    ∇

:EndClass
