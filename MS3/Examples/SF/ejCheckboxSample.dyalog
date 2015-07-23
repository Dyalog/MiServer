:Class ejCheckboxSample : MiPageSample

⍝ This example shows a single check box with a label to its left.
⍝ When the box is ticked a message apears telling us it was un/ticked.

    ∇ Compose;cb1
      :Access Public
    ⍝ We create a SyncFusion check box with caption 'Check Me!'
      cb1←Add _.ejCheckBox 'Check Me!'

    ⍝ We tell the server to call program 'myCallback' when it changes and to set the name
    ⍝ 'state' to TRUE if it (the "model") is checked (FALSE otherwise):
      cb1.On 'change' 'myCallback' ('state' 'model' 'checked')
    ∇

    ∇ r←myCallback;st
      :Access public
    ⍝ To show the alert properly we need to know if the box is checked. 'state' will tell us.
      st←(2×'true'≡Get 'state')↓'unticked'
    ⍝ When the user ticks the check box we display an alert showing the state of the box:
      r←Execute'alert(" ',st,' ") ' 
    ∇

:EndClass