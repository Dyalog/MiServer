:Class waitingpopup : Dyalog14 ⍝ EAWC : MiPage : HtmlPage


    ∇ Render;wp;ct
      :Access public 
     ⍝ Two objects are added into the Body of the page
     
     ⍝ First the text
      ct←⎕NEW div'Cool stuff coming <b>very</b> soon...<br>'
     ⍝ then the image
      ct.Add img'' 'src="waitingpopup.gif" alt="spinning wheel"'
     
     ⍝ Finally we add the Syncfusion object to which is linked
     ⍝ the first object
      wp←Add _SF.ejWaitingPopup''ct
      'showOnInit'wp.Option True
    ∇

:EndClass
