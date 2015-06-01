:class ejButton : #._SF._ejWidget
⍝ Description: Syncfusion Button widget
⍝ Constructor: {id} {text} {type}
⍝ id - the id/name for the button
⍝ text - the text to appear on the button
⍝ type - one of 'submit' (default), 'reset', or 'button'
⍝ Public Fields:
⍝ Text - the text to appear on the button


    :field public shared readonly BaseDoc←'http://help.syncfusion.com/UG/JS_CR/ejButton.html'
    :field public shared readonly MSAPILevel←3
    :field public shared readonly MSDoc←'/Documentation/DyalogAPIs/Syncfusion/ejButtonHelp.html'
    :field public Text←''  ⍝ text on the button
    ∇ make
      :Access public
      JQueryFn←Uses←'ejButton'
      ContainerType←'button'
      :Implements constructor
    ∇
    ∇ make1 args;type;text;i
      :Access public
      args←eis args
      JQueryFn←Uses←'ejButton'
      ContainerType←'button'
      (i text type)←3↑args,(⍴args)↓'' '' ''
      Text←text
      :Implements constructor :base args
      :If ~0∊⍴type
          'type'Option type
      :EndIf
    ∇
    ∇ r←Render;type
      :Access public
      :If ~0∊⍴type←GetOption'type'
          :Select ¯4↑type ⍝ probably match any of 'Button' 'button' 'reset' 'Reset' 'Submit' 'submit'
          :Case 'tton'
              ContainerType←'button type="button"'
          :Case 'eset'
              ContainerType←'button type="reset"'
          :Case 'bmit'
              ContainerType←'button type="submit"'
          :EndSelect
      :EndIf
      Container.Add(⊂Text)
      r←⎕BASE.Render
    ∇
:EndClass