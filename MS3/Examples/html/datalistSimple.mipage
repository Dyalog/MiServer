:class datalistSimple: MiPageSample
⍝ Control:: _html.datalist _html.input _.option
⍝ Description:: Add a predefined list of options for later use in a control
 
    ∇ Compose;mylist
      :Access public 
      Add'Here is a data list of options:'
     
    ⍝ Build the list here by adding successive options
      mydatalist←'#opts'Add _.datalist
      'value=First option'mydatalist.Add _.option
      'value=Second choice'mydatalist.Add _.option
      'value=Third possibility'mydatalist.Add _.option
     
    ⍝ Add them to an input element
      'list=opts'Add _.input
    ∇

:endclass
