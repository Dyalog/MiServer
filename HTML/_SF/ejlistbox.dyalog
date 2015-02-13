:Class ejListBox : #._SF._ejObject
    :Field Public Shared Readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejListBox.html'
    :Field Public Shared Readonly ApiLevel←3
    
    :Field Public Items←0⍴⊂''
    :Field Public SubItems←0⍴⊂''
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
        
    ∇ makec args
      :Access public
      JQueryFn←Uses←'ejSplitter'
      ContainerType←'ul'
      :Implements constructor                           
      (Selector Items Selected Checked SubItems)←args,(5-⍴args)⍴⊂⍬
    ∇

    ∇ r←Render;props;i;pre;value;name;l1
      :Access public
     
      :If 1=⍴⍴Items
          Container.Add∘⎕NEW¨↓#._html.li,⍪Items
      :Else
          ∘
      :EndIf
     
      r←⎕BASE.Render
    ∇

:EndClass