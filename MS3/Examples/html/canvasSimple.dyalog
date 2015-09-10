:class canvasSimple: MiPageSample
⍝ Control:: _html.canvas _html.script
⍝ Description:: Embed a bitmap canvas and draw a square on it using JavaScript

    ∇ Compose
      :Access public 
      Add 'Nice painting:'
      Add _.br
      'id' 'mycanvas' Add _.canvas
     
     ⍝ We need JavaScript to paint on the canvas:
      Add _.script 'var canvas = document.getElementById("mycanvas");'
      Add _.script 'var ctx = canvas.getContext("2d");'
      Add _.script 'ctx.fillStyle = "#D4A106";'
      Add _.script 'ctx.fillRect(0, 0, 80, 80);'

      Add _.br
      Add 'That''s it.'
    ∇
    
:endclass
