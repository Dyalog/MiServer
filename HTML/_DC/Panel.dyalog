:Class Panel : #._html.div
⍝ Description:: Panel widget
⍝
⍝ Constructor:: [Message [Type [Title]]]
⍝ Message - the text that will appear in the popup
⍝ Type - one of 'info', 'warn', 'erro[r]', 'succ[ess]', 'warnRed' OR .ClassName for custom styling
⍝ Title - Text of the title (Box is rendered without title-section if no title is specified)
⍝
⍝ Public Fields::
⍝ Value - the message that will appear in the popup
⍝ Type - one of 'info', 'warn', 'erro[r]', 'succ[ess]', 'warnRed' OR .ClassName for custom styling
⍝ Title - Text of the title (Box is rendered without title-section if no title is specified)
⍝ Icon - name of an Icon (as accepted by the Icon-Class) OR a ref to an existing Icon-Object
⍝
⍝ Notes::
⍝ To use custom-styling, provide the "base-name" of your style and add a style-sheet in which
⍝ you use selectors that combine your style with .dc-panel-icon, dc-panel-title to specifically
⍝ style these sections of the panel. (dc-panel-content can be skipped if you specify the others.)
⍝ See the Advanced Example for a practical example.


    :field public Title←''
    :field public Value←''
    :field public Type←'info'    ⍝ info | warn | errorr] | success | warnRed (Warning-Symbol with red colour - if you don't like normal "error"-style)
    :field public Icon←''

    ∇ make
      :Access public
      :Implements constructor :base
    ∇

    ∇ make1 args
      :Access public
      :Implements constructor :base
      (Value Type Title)←args defaultArgs Value Type Title
    ∇

    ∇ r←Render;icon;class;c;cclass
      cclass←'dc-panel-dfltStyle'
      :Access public
      :Select 4↑Type
      :Case 'info' ⋄ icon←'info-circle' ⋄ class←'dc-panel-info'
      :Case 'warn'
          :If 'Red'≡¯3↑Type
              icon←'warning' ⋄ class←'dc-panel-error'
          :Else
              icon←'warning' ⋄ class←'dc-panel-warning'
          :EndIf
      :Case 'erro' ⋄ icon←'times-circle' ⋄ class←'dc-panel-error'
      :Case 'succ' ⋄ icon←'check' ⋄ class←'dc-panel-success'
      :Else
          :If '.'=⍬⍴Type  ⍝ specified custom class
              cclass←1↓Type ⋄ class←''
          :EndIf
      :EndSelect
      c←''
      :If ~0∊⍴Title ⋄ c,←('class="',class,' ',cclass,' dc-panel-title" id="',SetId,'_title"')New _.div Title ⋄ :EndIf
     
      :If Icon≡''
          ic←('.dc-panel-icon ',class)New _.Icon('fa-',icon)
      :ElseIf isInstance Icon
          Icon.SetAttr⊂'class="dc-panel-icon"'
          ic←Icon
      :Else
          ic←('.dc-panel-icon ',class,' ',cclass)New _.Icon Icon
      :EndIf
     
      c,←ic.Render
     
      d←('class="',class,' ',cclass,' dc-panel-content" id="',SetId,'_content"')New _.div Value
      d.Add Content
      Content←c,d
      Use'faIcons'
      Use'dcPanel'
      SetUse
      'class'Set'dc-panel'
      r←⎕BASE.Render
    ∇




:endclass
