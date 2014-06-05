:Class SQAPLdemo : MiPage

    :Include #.HTMLInput

    :field Public state←''
    :field Public Shared States

    ∇ Render req;html;form;data;chunk
      :Access Public
     
      html←'h2'Enclose'SQAPL/JQuery Demonstration'
      :If 0∊⍴States
          html,←BRA'h3'Enclose'ZipCodes database is not available!  Sorry...'
      :Else
          chunk←BRA'h3'Enclose'Zip Codes by State'
          form←'Select State: ','state'DropDown States state'autofocus="autofocus" onChange="this.form.submit()"'
          chunk,←'action="#"'('post'Form)form
          :If state≢''
              data←#.SQL.Do'ZipCodes' 'select * from ZipCodes where StateAbbr = :a<C2: order by Zipcode'state
              :If 0=data.ReturnCode
                  chunk,←req #.JQO.TableSorter'tab1'data.(Columns⍪Data)'' 1
              :Else
                  chunk←'h3'Enclose'Database query failed? RC = ',⍕data.ReturnCode
              :EndIf
          :EndIf
          html,←chunk
      :EndIf
      req.Return html
    ∇

    ∇ Init;data
      :Implements constructor :base
      :Access public
      States←''
      data←#.SQL.Do'ZipCodes' 'select * from States order by StateName'
      :If data.ReturnCode=0
          States←'' ''⍪data.Data
      :EndIf
    ∇

:EndClass