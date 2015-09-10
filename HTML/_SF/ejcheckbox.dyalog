:class ejCheckBox : #._SF._ejWidget

⍝ Description:: Syncfusion Checkbox widget
⍝ Constructor:: [checked [label [postion]]]
⍝ checked  - integer denoting if the box is checked or not (1=yes, 0=no, ¯1=indeterminate)
⍝ label    - string of text to appear next to the button
⍝ position - position of label relative to the checkbox ('left' (default) or 'right')
⍝ Public Fields::
⍝ Label    - string of text to appear next to the checkbox
⍝ LabelPos - position of label relative to the checkbox ('left' (default) or 'right')
⍝ Checked  - integer denoting if the box is checked or not (1=yes, 0=no (default), ¯1=indeterminate)
⍝ Examples::
⍝ ejCheckBox                              ⍝ plain checkbox
⍝ ejCheckBox ¯1                           ⍝ a tri-state checkbox set to indeterminate 
⍝ ejCheckBox 0 'Married'                  ⍝ a checkbox with label 'Married' to the left
⍝ ejCheckBox 1 'with children' 'right'    ⍝ a checkbox with label 'with children' to the right

    :field public shared readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejCheckBox.html'
    :field public shared readonly ApiLevel←2
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejCheckBox.html'
    :field public shared readonly IntEvt←'beforeChange' 'change' 'create' 'destroy'
    :field public Label←''
    :field public LabelPos←'left'  ⍝ valid are 'left' 'right'
    :field public Checked←0        ⍝ 1=yes, 0=no, ¯1=indeterminate

    ∇ setup
      JQueryFn←Uses←'ejCheckBox'
      ContainerType←'input'
      Container.type←'checkbox'
      InternalEvents←IntEvt
    ∇

    ∇ make
      :Access public
      :Implements constructor
      setup
    ∇

    ∇ make1 args
      :Access public
      :Implements constructor
      setup
      :If 0=≡args ⋄ args←,args ⋄ :EndIf
      (Checked Label LabelPos)←args defaultArgs Checked Label LabelPos
    ∇

    ∇ r←Render
      :Access public
      SetId
     
      :If Checked=¯1
          'checkState' 'enableTriState'Set'Indeterminate'_true
      :ElseIf Checked∊0 1
          'checked'Set(Checked+1)⊃_false _true
      :EndIf
     
      r←⎕BASE.Render
      :If Label≢''
          r←r((LabelPos≡'right'){⍺⍺:⍺,⍵ ⋄ ⍵,⍺})(⎕NEW #._html.label(Label('for'id))).Render
      :EndIf
    ∇

:EndClass