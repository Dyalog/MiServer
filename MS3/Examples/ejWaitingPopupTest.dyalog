:Class waitingpopup : Dyalog14 ⍝ EAWC : MiPage : HtmlPage


    ∇ Render;wp;ct
      :Access public
      ct←Add div'Cool stuff coming <b>very</b> soon...<br>'
      ct.Add img'' 'src="http://js.syncfusion.com/demos/web/themes/default-theme/images/waitingpopup.gif" alt="spinning wheel"'
      wp←Add _SF.ejWaitingPopup'aaa'ct
      'showOnInit'wp.Option True
    ∇

:EndClass
