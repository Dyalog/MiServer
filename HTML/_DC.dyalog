:Namespace _DC ⍝ Dyalog Controls

⍝∇:require =\_HTML.dyalog

    :class Gyro : #._HTML.Script

        :include #.HTMLUtils

        :field public Page←''
        :field public Interval←250

        ∇ Make0
          :Access public
          :Implements constructor
        ∇

        ∇ Make1 arg
          :Access public
          :Implements constructor
          arg←eis arg
          Page Interval←⍕¨2↑arg,(⍴arg)↓'' 250
        ∇

        ∇ r←Render;code
          :Access public
          Use'JQuery'
⍝ create a gyro listener
⍝ page     - the page to signal the event to
⍝ interval - the number of ms to wait between AJAX requests
⍝ returns
⍝ event    - "deviceorientation"
⍝ beta     - front/back tilt
⍝ gamma    - left/right tilt
          code←ScriptFollows
⍝     if (window.DeviceOrientationEvent) {
⍝         var time = 0;
⍝         var newtime = 0;
⍝         window.addEventListener('deviceorientation', function (evt) {
⍝             newtime = new Date().getTime();
⍝             if (⍳ < (newtime - time)) {
⍝                 time = newtime;
⍝                 $.ajax({
⍝                     url: "∆",
⍝                     cache: false,
⍝                     type: "POST",
⍝                     dataType: "json",
⍝                     data: {
⍝                         event: evt.type,
⍝                         beta: Math.round(evt.beta),
⍝                         gamma: Math.round(evt.gamma)
⍝                     },
⍝                 });
⍝             }}, false);
⍝         }
          code[code⍳'⍳∆']←⍕¨Interval Page
          Code←enlist code
          r←⎕BASE.Render
        ∇
    :endclass

    :class Timer : #._HTML.Script
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

    :Class StackPanel : #._html.table
        :Field public Items←⍬
        :Field public Horizontal←0 ⍝ orientation

        ∇ Make0
          :Access public
          :Implements constructor
        ∇

        ∇ Make1 args
          :Access public
          :Implements constructor
          Items←args
        ∇

        ∇ {r}←{attr}Add item;td
          :Access public
          attr←{6::⍵ ⋄ attr}''
          r←attr(td←⎕NEW #._html.td).Add item ⍝ #.HtmlElement.Add
          Items,←td
        ∇

        ∇ html←Render
          :Access public
          :If (,Horizontal)≡,1
              (Content←⎕NEW #._html.tr).Add Items
          :Else
              (Content←⎕NEW¨(⍴Items)⍴#._html.tr).Add Items
          :EndIf
          html←⎕BASE.Render
        ∇

    :endclass

:EndNamespace