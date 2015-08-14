:Class ejListBox : #._SF._ejWidget
⍝ Description:: Syncfusion ListBox widget
⍝ Constructor:: [items [selected]]
⍝ items           - vector of char vectors
⍝                   or matrix of field definitions with field types as the first row
⍝ selected        - integer or Boolean vector indicating which items are selected
⍝ Public Fields::
⍝ Items           - vector of char vectors
⍝                   or matrix of field definitions
⍝ Selected        - integer or Boolean vector indicating which items are selected
⍝ Examples::
⍝ ejListBox
⍝ ejListBox ('Item1' 'Item3' 'Item3')

    :Field Public Shared Readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejListBox.html'
    :Field Public Shared Readonly ApiLevel←3
    :Field Public Shared Readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejListBox.html'

    :Field Public Items←0⍴⊂''
    :Field Public Selected←⍬

⍝ Items can be a vector of character vectors, or a matrix with field names
⍝ in the first row. SubItems *must* be a matrix with field names.
⍝ Field names to be selected from the following, for more info see
⍝ http://helpjs.syncfusion.com/js/api/ejlistbox#members:fields
⍝ value:             not sure what it means to have a value
⍝ parentId:          used to link main and sub-tables (required for cascading)
⍝ category:          the category for data item (if present, will enable grouping)
⍝ sprite:            an image name?
⍝ htmlAttributes:    id, class, styles for the item.
⍝ id:                id for the tag.
⍝ imageAttributes:   height, width, styles and so on.
⍝ imageUrl:          what it says
⍝ selected:          value to be selected initially
⍝ spriteCssClass:    sprite css for the image tag.
⍝ tableName:         table name for tag value or display text while render with remote data.
⍝ text:              content for the tag.
⍝ toolTipText:       tooltip text to be displayed for the data list item.

    ∇ make
      :Access public
      JQueryFn←Uses←'ejListBox'
      ContainerType←'ul'
      :Implements constructor
    ∇

    ∇ makec args;x
      :Access public
      :If 2=≡args ⋄ args←,⊂args ⋄ :EndIf
      args←eis args
      JQueryFn←Uses←'ejListBox'
      ContainerType←'ul'
      :Implements constructor
      (Items Selected)←args defaultArgs ⍬ ⍬
    ∇

    ∇ r←Render;fields;src;items;t;sel;flds;numItems
      :Access public
      SetId
      r←''
      numItems←⍬⍴⍴items←eis Items
      :If 0∊⍴items ⍝ empty vec or mat
          items←⍬
      :EndIf
      :If 1=⍴⍴items ⍝ vector
          items←(⊂'text')⍪⍪items
      :EndIf
      :If 0∊⍴GetOption'fields'
          fields←items[1;]
          'fields'Set'⍎',{'{',⍵,'}'}¯1↓∊{⍵,':"',⍵,'",'}¨fields
      :EndIf
      flds←(('[{,].*:'⎕S{1↓¯1↓⍵.Match})GetOption'fields')
      :If ~(⊂'id')∊flds ⍝ if no id field - make one
          items,←(⊂'id'),{id,'_item_',⍕⍵}¨⍳numItems
      :EndIf
      src←id,'_datasrc'
      'dataSource'Set'⍎',src
      :If ~0∊⍴Selected
          sel←¯1+Selected{11=⎕DR ⍺:{⍵/⍳⍴⍵}⍵↑⍺ ⋄ (⍳⍵)∩⍺}numItems ⍝ adjust for JavaScript origin 0
          'selectedItemlist'Set sel
          :If 1<⍴sel ⋄ 'allowMultiSelection'Set _true ⋄ :EndIf
      :EndIf
      PreJavaScript←'var ',src,' = ',#.JSON.fromAPL flds #.JSON.fromTable 1↓items
      r←⎕BASE.Render
    ∇

    ∇ r←Refresh items;src;script;fields;ri;rI
      :Access public
      r←''
      items←eis items
      :If 0∊⍴src←GetOption'dataSource'
          r,←Selector Replace∊{'<li>',⍵,'</li>'}¨Items←items
          r,←Execute'$("',Selector,'").',JQueryFn,'({dataSource:',src,'});'
      :Else
          :If (1=ri←⍴⍴items)∧(2=rI←⍴⍴Items)
          :AndIf 1=2⊃⍴Items ⋄ ri←⍴⍴items←⍪items ⋄ :EndIf
          :If 2∧.=ri,rI
          :AndIf (2⊃⍴items)=2⊃⍴Items
              src←('⍎'=⊃src)↓src
              Items←(fields←Items[1;])⍪items
              r,←Selector Replace''
              script←';',src,' = ',#.JSON.fromAPL fields #.JSON.fromTable 1↓Items
              script,←';$("',Selector,'").',JQueryFn,'({dataSource:',src,'});'
              r,←Execute script
          :EndIf
      :EndIf
    ∇


    ∇ r←name getSelectedItem x
      :Access public
      r←⊂name'eval' '⍎$("#',(∊id),'").ejListBox("getSelectedItem")'
    ∇
:EndClass