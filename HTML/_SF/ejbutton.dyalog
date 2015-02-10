  :class ejButton : #._SF._ejObject
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejButton.html'
    :field public shared readonly ApiLevel←3

    :field public Text←''

    ∇ make
      :Access public
      JQueryFn←Uses←'ejButton'
      ContainerType←'button'
      :Implements constructor
    ∇

    ∇ make1 text
      :Access public
      JQueryFn←Uses←'ejButton'
      ContainerType←'button'
      Text←text
      :Implements constructor
    ∇

    ∇ r←Render;type
      :Access public
      :If ~0∊⍴type←GetOption'type'
        :Select ¯4↑type ⍝ probably match any of 'Button' 'button' 'reset' 'Reset'
        :Case 'tton'
          ContainerType←'button type="button"'
        :Case 'eset'
          ContainerType←'button type="reset"'
        :EndSelect
      :EndIf
      ControlContent.Add(⊂Text)
      r←⎕BASE.Render
    ∇

  :EndClass