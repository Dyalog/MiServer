:Class SQAPLUpdate : MildPage

    :Include #.HTMLInput

    :field Public myedit←''
    :field Public Action←''

    ∇ Render req;html;form;data;chunk
      :Access Public
      DoAction
      html←'h2'Enclose'SQAPL/JQuery Demonstration'
      chunk←BRA'h3'Enclose'Update Sample'
      form←'New name for NY: ',('myedit'Edit''),2 SP'Action'Submit'Submit'
      chunk,←'action="#"'('post'Form)form
      html,←chunk
      req.Return html
    ∇

    ∇ DoAction;rc
      :If Action≢''
      :AndIf myedit≢''
          rc←#.SQL.Do'ZipCodes' 'update States set StateName = :a<C35: where StateAbbr = ''NY'''myedit
      :EndIf
    ∇
:EndClass