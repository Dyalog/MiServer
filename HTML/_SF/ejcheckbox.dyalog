:class ejCheckBox : #._SF._ejWidget

⍝ Description:: Syncfusion Checkbox widget
⍝ Constructor:: [Label [Position [Checked]]]
⍝ Label             - string of text to appear next to the button
⍝ Position of label - to the left (default) or to the right
⍝ Checked           - integer denoting if the box is checked or not (1=yes, 0=no)
⍝ Public Fields::
⍝ Label          - vector of char vectors containing titles to appear on accordion sections
⍝ Sections        - vector of vectors containing HTML content for each section
⍝ Examples::
⍝ ejCheckBox 'Married'
⍝ ejCheckBox 'with children' 'right'
⍝ ejCheckBox 'has granchildren' 'left' ¯1

    :field public shared readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejCheckBox.html'
    :field public shared readonly ApiLevel←2
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejCheckBox.html'
    :field public shared readonly IntEvt←'beforeChange' 'change' 'create' 'destroy'
    :field public Label←''
    :field public LabelPos←'left'  ⍝ valid are 'left' 'right' 

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
      args defaultArgs←'' 'left' 0
      (Label LabelPos Checked)←args
      :If Checked=1
          'checked'Set _true
      :EndIf
    ∇

    ∇ r←Render
      :Access public
      SetId
      r←⎕BASE.Render
      :If Label≢''
          r←r((LabelPos≡'right'){⍺⍺:⍺,⍵ ⋄ ⍵,⍺})(⎕NEW #._html.label(Label('for'id))).Render
      :EndIf
    ∇

:EndClass