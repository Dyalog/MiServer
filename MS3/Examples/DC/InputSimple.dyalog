:Class InputSimple : MiPageSample
⍝ Control:: _DC.Input
⍝ Description::

    ∇ Compose;frm;field;prompt;value;fieldset;hello;inputs;tab
      :Access Public
     
      Add _.p ScriptFollows
      ⍝ The Dyalog Control Input enhances the base HTML input element in a number of ways.<br/>
      ⍝ The first argument specifies the type of input field.  HTML5 specifies a wide variety of
      ⍝ input type; however different browsers vary in their support for these additional types.<br/>
      ⍝ The second argument specifies the initial value for the input field.<br/>
      ⍝ The third and fourth arguments specify the label and label position for the input field.
     
      tab←Add _.Table(6 3⍴⊂'')(5 3⍴⊂'')1
      tab.Data[1;]←'Description' 'Input' 'Output'
      (1↓tab.Data[;1])←'Simple text input' 'Text input, label on right' 'Number input' 'Password input (don''t use a real password!)' 'Range input'
      tab.Data[2;2]←('inp1'New _.Input'text' '' 'First Name: ')
      tab.Data[3;2]←('inp2'New _.Input'text' '' ' Last Name' 'right')
      tab.Data[4;2]←('inp3'New _.Input'number' '' 'Age: ')
      tab.Data[5;2]←('inp4'New _.Input'password' '' 'Password: ')
      tab.Data[6;2]←('inp5'('min' 0)('max' 10)New _.Input'range' '' 'Ranking: ')
      tab.CellAttr[;3]←'id=out'∘,¨⍕¨⍳5
     
      Add _.Handler'input' 'change' 'myCallback'
    ∇

    ∇ r←myCallback;content
      :Access public
      r←('#out',3↓_what)Replace'You entered ',_value
    ∇

:EndClass