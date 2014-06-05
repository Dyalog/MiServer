:Class jquerydemo : MiPage

    :Include #.HTMLInput

    ∇ Render req;tabnames;welcome;datepicker;data;tablesorter;content;headers;accordion;html;list1;list2;sortable;js;style
      :Access Public   
⍝ set up the Tabs widget to display other widgets
      tabnames←'Welcome!' 'DatePicker' 'TableSorter' 'Accordion' 'Sortable'
     
⍝ set up the Welcome tab content
      welcome←BRA'h3'Enclose'Welcome to the JQuery demonstration page!'
      welcome,←BRA'This page contains tabs that demostrate a variety of JQuery widgets and plug-ins.'
      welcome,←BRA'In fact, the tabs themselves are implemented using JQuery''s Tabs widget.'
     
     
⍝ set up the DatePicker tab content
      datepicker←'h2'Enclose'DatePicker'
      datepicker,←BRA'Using Multiple Months and yyyy-mm-dd format'
      datepicker,←2 BRA'Date: ',req #.JQUI.DatePicker'mydate1'('' 20)'numberOfMonths: 3,showButtonPanel: true,dateFormat: "yy-mm-dd"'
      datepicker,←BRA'Using Month and Year Menus and DD, dd MM yyyy format'
      datepicker,←'Date: ',req #.JQUI.DatePicker'mydate2'('' 35)'changeMonth: true,changeYear: true,dateFormat: "DD, d MM yy"'
     
     
⍝ set up the TableSorter tab content
      data←4 3⍴'Name' 'Age' 'Sex' 'Fred' 35 'Male' 'Susan' 50 'Female' 'Chris' 18 'Female'
      tablesorter←(BRA'h2'Enclose'TableSorter'),'Click on column heading to sort by that column'
      tablesorter,←BRA req #.JQO.TableSorter'mytable'(data'' '' '' 1)''
     
     
⍝ set up the Accordion tab content
      content←3⍴⊂''
      content[1]←⊂TextToHTML #.Files.GetText req.Server.Root,'Data/sample1.txt'
      content[2]←⊂'12px'APLToHTML ⎕VR'#.HTMLInput.Attrs'
      content[3]←⊂#.Files.GetText req.Server.Root,'Data/sample.htm'
      headers←'Some Text' 'Some APL Code' 'Some HTML'
      accordion←('h2'Enclose'Accordion'),('style' 'width:600px; height:400px;')#.HTML.div req #.JQUI.Accordion'myaccordion'headers content'fillSpace: true'
     
     
⍝ set up the Sortable tab content
      list1←'To Do' 'Wash Car' 'Vacuum' 'Laundry' 'Cut Grass' 'Clean Garage'
      list2←'Done' 'Go Fishing'
      sortable←(BRA'Drag items between lists'),req #.JQUI.Sortable 1('s1' 's2')(list1 list2)
      sortable←'div style="height:400px"'Enclose('h2'Enclose'Sortable Lists'),sortable
     
     
⍝ set up the Tabs
      html←('h2'Enclose'JQuery Demonstration - Tabs and More!'),req #.JQUI.Tabs'mytabs'tabnames(welcome datepicker tablesorter accordion sortable)''
      req.Return html
    ∇

:EndClass