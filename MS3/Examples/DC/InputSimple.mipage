:Class InputSimple : MiPageSample
⍝ Control:: _DC.Input
⍝ Description:: Five different variations of Input elements

    ∇ Compose;frm;field;prompt;value;fieldset;hello;inputs;tab
      :Access Public
     
      Add ScriptFollows
      ⍝ <p>The Dyalog Control Input enhances the base HTML input element in a number of ways.</p>
      ⍝ <p>The first argument specifies the type of input field.  HTML5 specifies a wide variety of
      ⍝ input type; however different browsers vary in their support for these additional types.</p>
      ⍝ <p>The second argument specifies the initial value for the input field.</p>
      ⍝ <p>The third and fourth arguments specify the label and label position for the input field.</p>
     
      tab←Add _.Table(6 3⍴⊂'')(5 3⍴⊂'')1
      tab.Data[1;]←'Description' 'Input' 'Output'
      (1↓tab.Data[;1])←'Text input' 'Text input (label on right) ' 'Number input' 'Password input' 'Range input'
      tab.Data[2;2]←('inp1'New _.Input'text' '(optional)' 'First Name: ')
      tab.Data[3;2]←('inp2'New _.Input'text' '' ' Last Name' 'right')
      tab.Data[4;2]←('inp3'New _.Input'number' '' 'Age: ')
      tab.Data[5;2]←('inp4'New _.Input'password' '' 'Password: ')
      tab.Data[6;2]←('inp5'('min' 0)('max' 10)New _.Input'range' '' 'Ranking: ')
      tab.CellAttr[;3]←'id=out'∘,¨⍕¨⍳5
     
      Add _.Handler'input' 'change' 'myCallback'
    ∇

    ∇ r←myCallback;content
      :Access public
      :If _what≡'inp4' ⋄ _value←'(that''s a secret)' ⋄ :EndIf
      r←('#out',3↓_what)Replace'Entered: ',_value
    ∇

:EndClass