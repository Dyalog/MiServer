:Class jqondemo : MiPage

    :Include #.HTMLInput

    :field public event     ⍝ the triggered event - JQ.On supplies this
    :field public what      ⍝ the id, if any, of the element that triggered the event - JQ.On supplies this


    ∇ Render req;html;data;tableopts
      :Access Public
     
      html←'h2'Enclose'JQ.On Demonstration'
      html,←'h3'Enclose'Click any table cell...'
      data←'h2'∘Enclose¨2 2⍴'Replace Me' 'Append To Me' 'Prepend To Me' 'Execute Some Javascript'
      tableopts←'border="1"'
      html,←'div id="mydiv" align="center"'Enclose ('mytable'Table data tableopts'' ''⍬ 1),'h3 id="clickme"' Enclose 'Click Me Too!'
      html,←req #.JQ.On('#mytable' 'td')'click'
      html,←req #.JQ.On'#clickme' 'click'
     
      req.Return html
    ∇

    ∇ APLJax req;cellid;resp
      :Access public
     
      cellid←'#',what   ⍝ format the id of the cell
      :Select what      ⍝ do different things based on the cell that was clicked
      :Case 'r1c1'
          resp←⊂(('replace'cellid)('data'(⍕⎕TS)))
      :Case 'r1c2'
          resp←⊂(('append'cellid)('data' (BR (⍕⎕TS))))
      :Case 'r2c1'
          resp←⊂(('prepend'cellid)('data' (BR (⍕⎕TS))))
      :Case 'r2c2'
          resp←⊂(('execute'('$("',cellid,'").css("background-color","yellow")')))
      :Case 'clickme'
          resp←(('append' '#mydiv')('data' (BR ⍕⎕TS)))(('execute' 'alert("Hello world")'))
      :EndSelect
     
      req.Return #.JSON.fromNVP resp
    ∇
:EndClass