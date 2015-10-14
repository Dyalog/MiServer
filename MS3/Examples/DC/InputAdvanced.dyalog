:Class InputAdvanced : MiPageSample
⍝ Control:: _DC.Input
⍝ Description:: Some more unusual and advanced Input elements

    ∇ Compose;frm;field;prompt;value;fieldset;hello;inputs;tab
      :Access Public
     
      Add ScriptFollows
      ⍝ <p>The Dyalog Control Input enhances the base HTML input element in a number of ways.</p>
      ⍝ <p>The first argument specifies the type of input field. Here are some of the more unusual, but
      ⍝ powerful input types; however different browsers vary in their support for these. E.g. Firefox
      ⍝ and Internet Explorer do not provide the interactive date & time picker.</p>
      ⍝ <p>The second argument specifies the initial value for the input field.</p>
      ⍝ <p>The third and fourth arguments specify the label and label position for the input field.</p>
     
      frm←Add _.form
      tab←frm.Add _.Table(6 2⍴⊂'')(6 2⍴⊂'')1
      tab.Data[1;]←'Description' 'Input'
      (1↓tab.Data[;1])←'Date & time (interactive picker)' 'E-mail (has validation)' 'URL (has validation)' 'File box pop-up' ''
      tab.Data[2;2]←('inp1'New _.Input'datetime-local' '' 'Date of birth: ')
      tab.Data[3;2]←('inp2'New _.Input'email' '' 'E-mail address:')
      tab.Data[4;2]←('inp3'New _.Input'url' '' 'Homepage: ')
      tab.Data[5;2]←('inp4'New _.Input'file' '' 'Photo: ')
      tab.Data[6;2]←('inp5'New _.Input'submit' 'Done' 'Validate and Submit: ')
     
    ∇
    
:EndClass