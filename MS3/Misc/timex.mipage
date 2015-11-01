:Class Timex : MiPageSample

    ∇ Render;index;tc;name;cv
      :Access public
      Add h2'Canvas'
      (cv←Add canvas''('height' 300 'width' 300)).(id style←'canvas' 'border:1px solid #d3d3d3;')
      cv.Content←'Your browser does not support the HTML5 canvas tag.'
      On'tick' 'draw'
      Add div'' 'id=msg'
      Add #.JQO.JSTimer'myTimer' 'tick' 1000
     
      Add _.(Script ScriptFollows)
⍝function draw(xpos, ypos, width, height){
⍝var ctx = document.getElementById("canvas").getContext("2d");
⍝ctx.clearRect(0,0,300,300);
⍝ctx.strokeRect(xpos, ypos, width, height);
⍝}
    ∇

    ∇ r←draw;size;pos
      :Access public  
      pos←?100 100 ⋄ size←?100 100
      ⎕←(≢Handlers),5↓⎕TS
      r←Execute ⎕←'draw(',({w←⍕⍵ ⋄ ((w=' ')/w)←',' ⋄ w}pos,size),')'
    ∇

:EndClass