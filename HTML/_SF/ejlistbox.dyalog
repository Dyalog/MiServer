:Class ejListBox : #._SF._ejWidget
    :Field Public Shared Readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejListBox.html'
    :Field Public Shared Readonly ApiLevel←3

    :Field Public Items←0⍴⊂''
    :Field Public Checked←⍬
    :Field Public Selected←⍬

⍝ Items can be a vector of character vectors, or a matrix with field names
⍝ in the first row. SubItems *must* be a matrix with field names.
⍝ Field names to be selected from the following, for more info see
⍝ http://help.syncfusion.com/UG/JS_CR/ejListBox.html#fields
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
      args←eis args
      JQueryFn←Uses←'ejListBox'
      ContainerType←'ul'
      :Implements constructor :base args
      (x Items Selected Checked)←4↑args,(⍴args)↓''⍬ ⍬ ⍬
    ∇

    ∇ r←Render;fields;src
      :Access public
      r←''
      :If 1=⍴⍴Items
          :If 0<⍴Items
              Container.Add∘⎕NEW¨↓#._html.li,⍪Items
          :EndIf
      :Else
          fields←Items[1;]
          :If 0∊⍴GetOption'fields'
              {('fields.',⍵)Option ⍵}¨fields
          :EndIf
          src←'src',⍕rand 10000
          'dataSource'Option'⍎',src
          r←(⎕NEW #._HTML.Script('var ',src,' = ',#.JSON.fromAPL fields #.JSON.formatData 1↓Items)).Render
      :EndIf
      r,←⎕BASE.Render
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
              script←';',src,' = ',#.JSON.fromAPL fields #.JSON.formatData 1↓Items
              script,←';$("',Selector,'").',JQueryFn,'({dataSource:',src,'});'
              r,←Execute script
          :EndIf
      :EndIf
    ∇
:EndClass