:class Timer : #._DC.Script
⍝ Description:: Dyalog JavaScript Timer
⍝ Constructor:: [delay [autostart [event [prefix]]]]
⍝ delay     - delay (in ms) between event triggers (default 5000)
⍝ autostart - Boolean indicating whether the timer should start automatically (default 1 (yes))
⍝ event     - event to signal to server (default 'tick')
⍝ prefix    - prefix to prepend to function and variable names (default 'MS3_')
⍝ Public Fields::
⍝ Delay     - delay (in ms) between event triggers (default 5000)
⍝ Autostart - Boolean indicating whether the timer should start automatically (default 1 (yes))
⍝ Event     - event to signal to server (default 'tick')
⍝ Prefix    - prefix to prepend to function and variable names (default 'MS3_')
⍝ Notes::
⍝ The following JavaScript functions will be created in your page
⍝ prefixrun  - start the timer
⍝ prefixstop - stop the timer
 :field public _Sessioned←1  ⍝ this will keep globals in the class!

    :field public Prefix←'MS3_'
    :field public Event←'tick'
    :field public Delay←5000
    :field public Autostart←1

    ∇ Make
      :Access public
      :Implements constructor
    ∇

    ∇ Make1 args
      :Access public
      :Implements constructor
      (Delay Autostart Event Prefix)←(,args)defaultArgs Delay Autostart Event Prefix
    ∇


    ∇ r←Render;params
      :Access public
      Uses←'JQuery'
      (params←⎕NS'').(∆Delay ∆Autostart ∆Event ∆Prefix)←Delay Autostart Event Prefix
     
      Code←params Subst ScriptFollows
⍝     var ∆Prefixtimer; var ∆Prefixrunning=0; var ∆Prefixdelay=∆Delay;
⍝     function ∆Prefixnext(){$("body").trigger("∆Event");∆Prefixtimer=setTimeout("∆Prefixnext()",∆Prefixdelay);}
⍝     function ∆Prefixrun(){if (!∆Prefixrunning){∆Prefixrunning=1; ∆Prefixnext();}}
⍝     function ∆Prefixstop(){clearTimeout(∆Prefixtimer); ∆Prefixrunning=0;}
⍝     if (∆Autostart == 1) {$(function(){∆Prefixrun();});}
      r←⎕BASE.Render
    ∇

    ∇r←Stop 
    :access public 
    r←Prefix,'stop();'
    ∇
:endclass