:class datalistsample: MiPage⍝Sample
⍝ Control:: HTML.datalist 
⍝ Description:: this is an example of use of datalist 
    ∇ Compose;mylist
      :Access public 
      Add'Here is a data list of options:'
      mydatalist←'id' 'opts' Add _.datalist 
      'value' 'First option' mydatalist.Add _.option
      'value' 'Second choice' mydatalist.Add _.option
      'value' 'Third possibility' mydatalist.Add _.option
      'list' 'opts' Add _.input
    ∇
:endclass
