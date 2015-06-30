:Class ejWaitingPopupTestObj : MiPageSample ⍝ EAWC : MiPage : HtmlPage


    ∇ Render;wp;mydiv;myp
      :Access public
     
⍝    <div align="center">
⍝        <img src=waitingpopup.GIF></img>
⍝        <p>Create cutting-edge </p>
⍝        <p><b>HTML5</b> web applications </p>
⍝        <p>with ease </p>
⍝    </div>
     
     
     ⍝ Syntax is ID Content
     
      mydiv←⎕NEW _.div
	  mydiv.Set 'align' 'center'
      'src' 'waitingpopup.GIF'mydiv.Add _.img
      mydiv.Add _.p'Create cutting-edge '
      myp←mydiv.Add _.p
	  myp.Add _.b'HTML5'
      myp.Add' web applications '
      mydiv.Add _.p'with ease'
     
      wp←Add _.ejWaitingPopup''mydiv
     
     ⍝ By default, the pop-up is hidden
      'showOnInit'wp.Set _true
    ∇

:EndClass