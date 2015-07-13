:Class ejWaitingPopupSample : MiPageSample ⍝ EAWC : MiPage : HtmlPage


    ∇ Compose
      :Access public
     
     ⍝ WaitingPopup is vertically adjusted to be centered over the line where it is added
      Add¨4/_.br
     
      wp←Add _.ejWaitingPopup
      wp,←Add _.ejWaitingPopup'Cool stuff coming soon'
      wp,←Add _.ejWaitingPopup'Cool stuff<br>coming <b>very</b> soon...'
     
     ⍝ More spaceing so the popup will not cover the buttons and prevent clicking
      Add¨4/_.br
     
      Add _.p'There are three hidden TogglePopups on this page.'
      Add _.p'You can switch between them with the below buttons.'
     
      bn←Add¨_.button,¨'No argument' 'Simple text' 'Text with html' 'Hide'
      bn.id←'ABCX'
      bn.On⊂'click'
    ∇

    ∇ js←APLJax
      :Access public
      js←⊃,/(⊂'showOnInit')wp.Update _false
      :If 'X'≠_what
          js,←'showOnInit'(wp⊃⍨'ABC'⍳_what).Update _true
      :EndIf
     
    ∇



:EndClass