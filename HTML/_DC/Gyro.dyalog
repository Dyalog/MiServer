:class Gyro : #._DC.Script
⍝ Description:: create a gyroscopic listener (e.g. for use with mobile phones or tables)
⍝ Constructor:: [callback [interval [page]]]
⍝ interval    - the number of milliseconds to wait between requests sent to the server
⍝ page        - the URL of the page to which to send the request
⍝ Public Fields::
⍝ Interval    - the number of milliseconds to wait between requests sent to the server (default is 250ms)
⍝ Page        - the URL of the page to which to send the request (default is calling page)
⍝ Callback    - the name of the callback function to execute (default is 'APLJax')
⍝ Notes::
⍝ returns the following data elements to the server
⍝ event    - "deviceorientation"
⍝ alpha    - direction
⍝ beta     - front/back tilt
⍝ gamma    - left/right tilt

    ⍝∇:require =\Script.dyalog

    :include #.HTMLUtils

    :field public Page←''
    :field public Interval←250
    :field public Callback←'APLJax'

    ∇ Make0
      :Access public
      :Implements constructor
      Uses←'JQuery'
    ∇

    ∇ Make1 arg
      :Access public
      :Implements constructor
      arg←eis arg
      (Callback Interval Page)←⍕¨arg defaultArgs Callback Interval Page
      Uses←'JQuery'
    ∇

    ∇ r←Render;code;params
      :Access public
      :If 0∊⍴Page
          :If {6::0 ⋄ ''≢c∘←##.context ⍵}'_Request'
              Page←c._Request.Page
          :EndIf
      :EndIf
     
      (params←⎕NS'').(∆interval ∆page ∆callback)←Interval Page Callback
     
      Code←params Subst #._DC.ScriptFollows
⍝     if (window.DeviceOrientationEvent) {
⍝         var time = 0;
⍝         var newtime = 0;
⍝         window.addEventListener('deviceorientation', function (evt) {
⍝             newtime = new Date().getTime();
⍝             if (∆interval < (newtime - time)) {
⍝                 time = newtime;
⍝                 $.ajax({
⍝                     url: "∆page",
⍝                     cache: false,
⍝                     type: "POST",
⍝                     dataType: "json",
⍝                     data: {
⍝                         _event: evt.type,
⍝                         _callback: "∆callback",
⍝                         alpha: Math.round(evt.alpha),
⍝                         beta: Math.round(evt.beta),
⍝                         gamma: Math.round(evt.gamma)
⍝                     },
⍝                     success: function(obj){APLJaxReturn(obj);}
⍝                 });
⍝             }}, false);
⍝         }
⍝     else {alert("This device/browser does not support the deviceorientation event");}
     
      r←⎕BASE.Render
    ∇
:endclass