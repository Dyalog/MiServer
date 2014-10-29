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
:EndNamespace