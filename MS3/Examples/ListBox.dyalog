:Class ListBox : MiPageSample
⍝ Demonstrate the SyncFusion ejListBox widget
    
    ∇ Render;f;docn;foptions;listbox;fruits;groups;fitems;gitems;goptions
      :Access Public
     
      listbox←_SF.ejListBox
     
      goptions←↑('height' '200px')('width' '100px')⍝('cascadeTo' 'fruits')
      foptions←↑('height' '200px')('width' '100px')
     
      Add h3'SyncFusion ListBox'
      Add p'Click to read <a href="',listbox.ApiLink,'" target="_blank">Syncfusion documentation</a>.'
     
      fitems←'parentId' 'text'⍪'not' 'citrus' 'not' 'citrus',⍪'Apples' 'Oranges' 'Pears' 'Lemons'
      gitems←'value' 'parentId' 'text'⍪1 2,'citrus' 'other',⍪'Citrus' 'Other'
     
      groups←New listbox('groups'gitems)
      fruits←New listbox('fruits'fitems)
      groups.Option/goptions
      fruits.Option/foptions
      Add _HTML.Table(1 2⍴groups fruits)
     
      (groups fruits).On⊂'selected' 'APLJax'('stuff' 'ejModel')
      Add br
     
      (Add div).id←'output'
    ∇
    
    ∇ r←APLJax
      :Access public   
      ⍝ display name of splitter and sizes of sub-panes
      r←''
      ∘∘∘
     
      r←'#output'Replace,⍕_what _PageData.stuff.model.selectedItemIndex
    ∇

:EndClass