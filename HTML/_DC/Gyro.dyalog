:class Gyro : #._DC.Script
⍝ Description:: create a gyroscopic listener (e.g. for use with mobile phones or tables)
⍝ Constructor:: [interval [page]]
⍝ interval    - the number of milliseconds to wait between requests sent to the server
⍝ page        - the URL of the page to which to send the request
⍝ Public Fields::
⍝ Interval    - the number of milliseconds to wait between requests sent to the server
⍝ Page        - the URL of the page to which to send the request
⍝ Notes::
⍝ returns the following data elements to the server
⍝ event    - "deviceorientation"
⍝ beta     - front/back tilt
⍝ gamma    - left/right tilt

    ⍝∇:require =\Script.dyalog

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
      (Interval Page)←⍕¨arg defaultArgs 250 ''
    ∇

    ∇ r←Render;code
      :Access public
      Use'JQuery'
     
      :If 0∊⍴Page
          :If {6::0 ⋄ ''≢c∘←##.context ⍵}'_Request'
              Page←c._Request.Page
          :EndIf
      :EndIf
     
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
      Code←∊code
      r←⎕BASE.Render
    ∇
:endclass