:Class ListBox : Dyalog14 
⍝ Demonstrate the SyncFusion ejSplitter widget
    
    ∇ Render;f;docn;options;listbox
      :Access Public
     
      listbox←_SF.ejListBox
     
      options←↑('height' '200px')('width' '200px')
     
      Add h3'SyncFusion ListBox'
      Add p'Click to read <a href="',listbox.ApiLink,'" target="_blank">Syncfusion documentation</a>.'
     
      items←'Apples' 'Oranges' 'Pears' 'Lemons'
      Add l1←⎕NEW listbox('l1'items)
      l1.Option/options
     
      l1.On'selected' 'APLJax'('stuff' 'ejModel')
      Add br
     
      (Add div).id←'output'
    ∇
    
    ∇ r←APLJax
      :Access public   
      ⍝ display name of splitter and sizes of sub-panes
     
      r←'#output'Replace,⍕'selected:'_PageData.stuff.model.selectedItemIndex
    ∇

:EndClass