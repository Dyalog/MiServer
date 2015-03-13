  :Class DataTable : #._JQ._jqWidget
    :field public Data←''
    ∇ Make0
      :Access public
      :Implements constructor :base
      JQueryFn←'dataTable'
    ∇
    ∇ Make01 pars
      :Access public
      pars←eis pars
      :Implements constructor :base pars
     
    ∇
    ∇ r←{req}DataTable pars;id;tablepars;jqpars;oname;tab;js
    ⍝ req - HTTPRequest object
    ⍝ pars - id tablepars jqpars object-name
    ⍝ id - the id for the table to be sorted
    ⍝ jqpars - TableSorter parameters
    ⍝ tablepars - parameters for the table (see #.HTMLInput.Table)
    ⍝ oname - the object name for the datatable
    ⍝ js - any additional javascript
    ⍝ updates req.Response.head and returns html
     
      :If 9=⎕NC'req'
        req.Use'DataTable'
      :EndIf
     
      pars←eis pars
      id tablepars jqpars oname js←5↑pars,(⍴pars)↓'' '' '' '' ''
      tab←'cellpadding="0" width="100%" cellspacing="0" border="0"'
      :If 0∊⍴id ⋄ id←'myDataTable' ⋄ :EndIf
      :If 0∊⍴tablepars ⋄ r←(tab,' id="',id,'"')#.HTMLInput.Enclose''
      :Else
        :If 2=⍴⍴tablepars ⋄ tablepars←,⊂tablepars ⋄ :EndIf
        tablepars←tablepars,(⍴,tablepars)↓(0 0⍴⊂'')tab'' '' 1 0 1 ⍝ see HTMLInput.Table for
        r←id #.HTMLInput.Table tablepars
      :EndIf
      r,←#.JQ.JQueryfn'dataTable'(makeID id)jqpars js oname
    ∇
  :EndClass