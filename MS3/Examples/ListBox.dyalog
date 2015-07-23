:Class ListBox : MiPageSample
⍝ Demonstrate the SyncFusion ejListBox widget
    
    ∇ Render;f;docn;foptions;listbox;fruits;groups;fitems;gitems;goptions
      :Access Public
     
      listbox←_SF.ejListBox
     
      goptions←('height' '200px')('width' '100px')('cascadeTo' 'fruits')
      foptions←('height' '200px')('width' '100px')
     
      Add h3 'SyncFusion ListBox'
      Add p  'Click to read <a href="',listbox.DocBase,'" target="_blank">Syncfusion documentation</a>.'
     
      fitems←'parentId' 'text'⍪'other' 'citrus' 'other' 'citrus',⍪'Apples' 'Oranges' 'Pears' 'Lemons'
      gitems←'value' 'parentId' 'text'⍪1 2,'citrus' 'other',⍪'Citrus' 'Other'
     
      groups←New listbox (⊂gitems)
      fruits←New listbox (⊂fitems)
      groups.Set goptions
      'fields.value' groups.Set 'parentId'
      fruits.Set foptions
      Add _HTML.Table (1 2⍴groups fruits)

⍝ somehow this doesn't work and the callback is never made....     
      (groups fruits).On ⊂'selected' '' ('clicked' 'ejModel' 'selectedItemIndex')
      Add br
     
      (Add div).id←'output'
    ∇
    
    ∇ r←APLJax
      :Access public   
      ⍝ Display name of splitter and sizes of sub-panes
      ,r←'#output'Replace,⍕_what(Get'clicked')
    ∇

:EndClass