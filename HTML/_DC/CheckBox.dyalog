:class CheckBox : #._html.input
⍝ Description:: Dyalog tristate checkbox widget
⍝ Constructor:: [tristate [value [label [labelpos]]]]
⍝ tristate - whether the checkbox allows 'indeterminate' value ('false' (default) or 'true')
⍝ value    - initial value for the checkbox ('unchecked' (default) or 'checked')
⍝ label    - string of text to appear next to the checkbox
⍝ labelpos - position of label relative to the checkbox ('left' (default) or 'right')
⍝ Public Fields::
⍝ TriState - whether the checkbox allows 'indeterminate' value ('false' (default) or 'true')
⍝ Label    - string of text to appear next to the input field
⍝ LabelPos - position of label relative to the input field ('left' (default) or 'right')

    :field public TriState←'false'
    :field public Label←''
    :field public LabelPos←'left'

    ∇ Make0
      :Access public
      :Implements constructor
      type←'checkbox'
      value←'unchecked'
    ∇

    ∇ Make1 args
      :Access public
      :Implements constructor
      args←eis args
      type←'checkbox'
      (TriState value Label LabelPos)←args defaultArgs'false' 'unchecked' '' 'left'
    ∇

    ∇ r←Render
      :Access public
      SetInputName
     
      r←''
      :Select value
      :Case 'checked'
          Set'checked='
      :Case 'indeterminate'
          r,←'<script>function si(cb) {cb.readOnly=cb.indeterminate=true;};si(',id,');</script>'
      :EndSelect
     
      Set'onclick="',(1↑'bt'↓⍨'t'=1↑TriState),'s(this)"'
     
      r,⍨←⎕BASE.Render
      :If ~0∊⍴Label
          r←r((LabelPos≡'right'){⍺⍺:⍺,⍵ ⋄ ⍵,⍺})(⎕NEW #._html.label(Label(,⊂'for'id))).Render
      :EndIf
     
      :If 'true'≡TriState
          r,←(⎕NEW #._html.script ScriptFollows).Render
⍝ function ts(cb) {
⍝     if (cb.readOnly) {
⍝         cb.checked=cb.readOnly=false;
⍝         cb.value="unchecked";
⍝     } else if (!cb.checked) {
⍝         cb.readOnly=cb.indeterminate=true;
⍝         cb.value="indeterminate";
⍝     } else {
⍝         cb.value="checked";
⍝     }
⍝ }
      :Else ⍝ BiState
          r,←(⎕NEW #._html.script ScriptFollows).Render
⍝ function bs(cb) {
⍝     if (cb.checked) {
⍝         cb.value="checked";
⍝     } else {
⍝         cb.value="unchecked";
⍝     }
⍝ }
      :EndIf
     
    ∇
:endclass