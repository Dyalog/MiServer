:Class Slider : MiPage

    :Include #.HTMLInput

    ∇ html←Render req
      :Access Public
     
      html←'h2'Enclose'jQueryUI''s Slider'
     
      html,←'h4'Enclose'Simple Slider using Min and Max'
     
      html,←'p'Enclose'For more information see: ',Anchor 2⍴⊂'http://jqueryui.com/slider/'
     
      ⍝ ∇Slider id {min} {max} {current} {code to execute on update}
      html,←req #.JQUI.Slider'#myslider' 100 200 150 '$("#showvalue").val(ui.value)'
     
      ⍝ create an edit field to display the slider value
      html,←BRA'Value: ','showvalue'Edit'150' 3
     
      ⍝ create the div to contain the slider
      html,←'div id="myslider"'Enclose''
     
    ∇

:EndClass