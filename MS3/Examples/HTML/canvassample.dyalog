:class canvassample: MiPage⍝Sample
⍝ Control:: _html.canvas 
⍝ Description:: this is an example of use of canvas which is only a container for graphics (you must use a script to actually draw the graphics)

    ∇ Compose
      :Access public 
      Add 'Nice painting:'
      Add _.br
      'id' 'mycanvas' Add _.canvas
     
     ⍝ We need JavaScript to paint on the canvas:
      Add _.script 'var canvas = document.getElementById("mycanvas");'
      Add _.script 'var ctx = canvas.getContext("2d");'
      Add _.script 'ctx.fillStyle = "#FF0000";'
      Add _.script 'ctx.fillRect(0, 0, 80, 80);'

      Add _.br
      Add 'That''s it.'
    ∇
    
:endclass
