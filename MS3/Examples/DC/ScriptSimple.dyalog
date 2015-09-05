:Class ScriptSimple : MiPageSample
⍝ Control:: _DC.Script
⍝ Description::

    ∇ Compose
      :Access Public
     
      'p1'Add _.p ScriptFollows
      ⍝ The Dyalog Control Script enhances the base HTML script element in a number of ways.<br/>
      ⍝ The first argument, if nonempty, is treated as inline content for the script.
      ⍝ The second argument, specifies the type of input field.  HTML5 specifies a wide variety of
      ⍝ input type; however if nonempty, it treated a file name to link to.<br/>
      ⍝ Note: the first and second arguments are mutually exclusive.
     
      Add _.Script ScriptFollows
      ⍝ function bgChange(){$("#p1").css("background-color","orange")}
     
      'onclick="bgChange()"'Add _.Button'Click Me!'
    ∇

    ∇ r←myCallback;content
      :Access public
      r←('#out',3↓_what)Replace'You entered ',_value
    ∇

:EndClass