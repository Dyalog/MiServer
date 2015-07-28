:class datalistSimple: MiPage⍝Sample
⍝ Control:: _html.datalist 
⍝ Description:: this is an example of use of datalist which specifies a list of pre-defined options for an input element
 
    ∇ Compose;mylist
      :Access public 
      Add 'Here is a data list of options:'

    ⍝ Build the list here by adding successive options
      mydatalist←'id' 'opts' Add _.datalist 
      'value' 'First option'      mydatalist.Add _.option
      'value' 'Second choice'     mydatalist.Add _.option
      'value' 'Third possibility' mydatalist.Add _.option

    ⍝ Add them to an input element
      'list' 'opts' Add _.input
    ∇

:endclass
