:class ejCheckBox : #._SF._ejWidget
⍝!!!!!!!!!!!!!!!!!!!!!!!!! FINISH ME !!!!!!!!!!!!!!!!!!!!!!!!!!!!
⍝ ADD Checked and Position to constructor


⍝ Description:: Syncfusion Checkbox widget
⍝ Constructor:: [titles [sections]] | [titles_sections]
⍝ titles          - vector of char vectors containing titles to appear on accordion sections
⍝ sections        - vector of vectors containing HTML content for each section
⍝ titles_sections - 2-column matrix of titles [;1] and sections [;2] as above
⍝                   or vector of 2 element title/section vectors
⍝ Public Fields::
⍝ Titles          - vector of char vectors containing titles to appear on accordion sections
⍝ Sections        - vector of vectors containing HTML content for each section
⍝ Examples::
⍝ ejAccordion 'Title1' 'Title2'
⍝ ejAccordion ('Title1' 'Title2')('Section1' 'Section2')
⍝ ejAccordion 2 2⍴'Title1' 'Section1' 'Title2' 'Section2'

    :field public shared readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejCheckBox.html'
    :field public shared readonly ApiLevel←2
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejCheckBox.html'
    :field public shared readonly IntEvt←'beforeChange' 'change' 'create' 'destroy'
    :field public Label←''
    :field public LabelPos←'left'  ⍝ valid are 'left' 'right'
    ∇ make
      :Access public
      JQueryFn←Uses←'ejCheckBox'
      ContainerType←'input'
      :Implements constructor
      Container.type←'checkbox'
      InternalEvents←IntEvt
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejCheckBox'
      ContainerType←'input'
      :Implements constructor
      Container.type←'checkbox'
      InternalEvents←IntEvt
      Label←args
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