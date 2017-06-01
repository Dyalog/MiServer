:class Textarea : #._html.textarea
⍝ Description:: Dyalog widget to enhance the HTML textarea element
⍝ Constructor:: [content [label [labelpos]]]
⍝ label    - string of text to appear next to the textares
⍝ labelpos - [horizonal] and/or [vertical] position of label relative to the textarea
⍝            horizontal can be 'left' (the default) or 'right'
⍝            vertical can be 'top' (the default) or 'bottom'
⍝            if both horizontal and vertical are specified, they need to be separated by a space
⍝ Public Fields::
⍝ Label    - string of text to appear next to the textares
⍝ LabelPos - [horizonal] and/or [vertical] position of label relative to the textarea
⍝            horizontal can be 'left' (the default) or 'right'
⍝            vertical can be 'top' (the default) or 'bottom'
⍝            if both horizontal and vertical are specified, they need to be separated by a space
⍝ Examples::
⍝       Add _.Textarea 'this is my content.'                            ⍝ no label
⍝       Add _.Textarea 'this is my content.' 'My Label'                 ⍝ label at left top
⍝       Add _.Textarea 'this is my content.' 'My Label' 'right bottom'  ⍝ label at right bottom
⍝
⍝ Notes::
⍝ We set the rows and cols attributes to 4 and 60 respectively.
⍝ This can be overidden by setting the attributes to other settings
⍝    (('rows' 10)('cols' 80)) Add _.Textarea 'this is the content'
⍝    ta←Add _.Textarea 'this is the content' ⋄ 'rows' 'cols' ta.Set 10 80

    :field public Label←''
    :field public LabelPos←'left'

    ∇ Make0
      :Access public
      :Implements constructor
      Set('rows'(,4))('cols'(,60)) ⍝ set the default rows and cols
    ∇

    ∇ Make1 args
      :Access public
      :Implements constructor
      args←eis args
      (Content Label LabelPos)←args defaultArgs'' '' 'left top'
      Set('rows'(,4))('cols'(,60)) ⍝ set the default rows and cols
    ∇

    ∇ r←Render
      :Access public
      SetInputName
      r←⎕BASE.Render
      :If ~0∊⍴Label
          r←r((∨/'right '≡6↑LabelPos){⍺⍺:⍺,⍵ ⋄ ⍵,⍺})(⎕NEW #._html.label(Label((⊂'for'id),(' bottom'≢¯7↑LabelPos)/⊂('style' 'vertical-align:top')))).Render
      :EndIf
    ∇
:endclass
