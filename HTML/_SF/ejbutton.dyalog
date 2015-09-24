:class ejButton : #._SF._ejWidget
⍝ Description:: Syncfusion Button widget
⍝ Constructor:: [text [type]]
⍝ text - the text/content to appear on the button
⍝ type - one of 'submit' (default), 'reset', or 'button'
⍝ Public Fields::
⍝ Text - the text/content to appear on the button


    :field public shared readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejButton.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejButtonHelp.html'
    :field public shared readonly IntEvt←'click' 'create' 'destroy'
    :field public Text←''  ⍝ text on the button

    ∇ make
      :Access public
      JQueryFn←Uses←'ejButton'
      ContainerTag←'button'
      :Implements constructor
      InternalEvents←IntEvt
    ∇

    ∇ make1 args;type;text
      :Access public
      args←eis args
      JQueryFn←Uses←'ejButton'
      ContainerTag←'button'
      (text type)←args defaultArgs '' ''
      Text←text
      :Implements constructor
      :If ~0∊⍴type
          'type'Option type
      :EndIf
      InternalEvents←IntEvt
    ∇
    ∇ r←Render;type;copy
      :Access public
      :If ~0∊⍴type←GetOption'type'
          :Select ¯4↑type ⍝ probably match any of 'Button' 'button' 'reset' 'Reset' 'Submit' 'submit'
          :Case 'tton'
              ContainerTag←'button type="button"'
          :Case 'eset'
              ContainerTag←'button type="reset"'
          :Case 'bmit'
              ContainerTag←'button type="submit"'
          :EndSelect
      :EndIf
      Container.Add(⊂Text)
      r←⎕BASE.Render
    ∇
:EndClass