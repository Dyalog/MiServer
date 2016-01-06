:class ejCheckBox : #._SF._ejWidget

⍝ Description:: Syncfusion Checkbox widget
⍝ Constructor:: [checked [label [labelpos [tristate]]]]
⍝ checked  - integer denoting if the box is checked or not (1=yes, 0=no, ¯1=indeterminate)
⍝ label    - string of text to appear next to the button
⍝ labelpos - position of label relative to the checkbox ('left' (default) or 'right')
⍝ tristate - Boolean indicating whether the checkbox allows 3 states ('indeterminate' 'false' (default) or 'true')
⍝ Public Fields::
⍝ Label    - string of text to appear next to the checkbox
⍝ LabelPos - position of label relative to the checkbox ('left' (default) or 'right')
⍝ TriState - Boolean indicating whether the checkbox allows 3 states ('indeterminate' 'false' (default) or 'true')
⍝ Notes::
⍝ If Checked is ¯1, TriState is automatically set to _true
⍝
⍝ Examples::
⍝ ejCheckBox                              ⍝ plain checkbox
⍝ ejCheckBox ¯1                           ⍝ a tri-state checkbox set to indeterminate
⍝ ejCheckBox 0 'Married'                  ⍝ a checkbox with label 'Married' to the left
⍝ ejCheckBox 1 'with children' 'right'    ⍝ a checkbox with label 'with children' to the right

    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejCheckBox.html'
    :field public shared readonly ApiLevel←2
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejCheckBox.html'
    :field public shared readonly IntEvt←'beforeChange' 'change' 'create' 'destroy'
    :field public Label←''
    :field public LabelPos←'left'  ⍝ valid are 'left' 'right'
    :field public Checked←0        ⍝ 1=yes, 0=no, ¯1=indeterminate
    :field public TriState←0

    ∇ setup
      JQueryFn←Uses←'ejCheckBox'
      ContainerTag←'input'
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
      (Checked Label LabelPos TriState)←args defaultArgs Checked Label LabelPos TriState
    ∇

    ∇ r←Render
      :Access public
      SetId
     
      :If TriState∨Checked=¯1
          'enableTriState'Set _true
          'checkState'Set(2+Checked)⊃'indeterminate' 'uncheck' 'check'
      :EndIf
     
      :If Checked∊0 1
          'checked'Set(Checked+1)⊃_false _true
      :EndIf
     
      r←⎕BASE.Render
      :If Label≢''
          r←r((LabelPos≡'right'){⍺⍺:⍺,⍵ ⋄ ⍵,⍺})(⎕NEW #._html.label(Label(⊂'for'id))).Render
      :EndIf
    ∇

:EndClass