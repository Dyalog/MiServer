    :class Timer : #._DC.Script
        :field public Id
        :field public Event←'tick'
        :field public Delay←5000
        :field public Autostart←1
        :field public Block←1
        ∇ r←Render
    ⍝ return script to implement a timed loop
    ⍝ pars - [1] id [2] event to trigger [3] delay in ms [4] autostart?
          pars←eis pars
          (id event delay autostart)←4↑pars,(⍴pars)↓'JSTimer' 'ding' 5000 1
          :If 9=⎕NC'req' ⋄ req.Use'JQuery' ⋄ :EndIf
          r←'var timer⍳; var running⍳=0; var delay⍳=',(⍕delay),';',CRLF
          r,←'function next⍳(){$("body").trigger("',event,'"); timer⍳=setTimeout("next⍳()",delay⍳);}',CRLF
          r,←'function run⍳(){if (!running⍳){running⍳=1; next⍳();}}',CRLF
          r,←'function stop⍳(){clearTimeout(timer⍳); running⍳=0;}',CRLF
          :If autostart ⋄ r,←'$(function(){run⍳();});',CRLF ⋄ :EndIf
          ((r='⍳')/r)←⊂id
          r←#.HTMLInput.JS enlist r
        ∇
    :endclass