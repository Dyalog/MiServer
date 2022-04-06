:Class Panel : #._html.div
⍝ Description:: Panel widget
⍝
⍝ Constructor:: [Message [Type [Title]]]
⍝ Message - the text that will appear in the popup
⍝ Type - one of 'info', 'warn', 'erro[r]', 'succ[ess]', 'warnRed' OR .ClassName for custom styling
⍝ Title - Text of the title (Box is rendered without title-section if no title is specified)
⍝
⍝ Public Fields::
⍝ Message - the text that will appear in the popup
⍝ Type - one of 'info', 'warn', 'erro[r]', 'succ[ess]', 'warnRed' OR .ClassName for custom styling
⍝ Title - Text of the title (Box is rendered without title-section if no title is specified)
⍝ Icon - name of an Icon (as accepted by the Icon-Class) OR a ref to an existing Icon-Object
⍝ Radius - (0=square,1=defaults, any other number is measure, unit given in RadiusUnit)
⍝ RadiusUnit - defaults to "em", but you can also specify a different unit
⍝ Radius and RadiusUnit can be defined a single elements or up to 4 elements (for each corner).
⍝ If less than 4 elems are supplied, missing elems will be filled according to CSS-Rules
⍝  Four values: first value applies to top-left, second value applies to top-right, third value applies to bottom-right, and fourth value applies to bottom-left corner
⍝  Three values: first value applies to top-left, second value applies to top-right and bottom-left, and third value applies to bottom-right
⍝  Two values: first value applies to top-left and bottom-right corner, and the second value applies to top-right and bottom-left corner
⍝  One value: all four corners are rounded equally
⍝
⍝ Notes::
⍝ To use custom-styling, provide the "base-name" of your style and add a style-sheet in which
⍝ you use selectors that combine your style with .dc-panel-icon, dc-panel-title to specifically
⍝ style these sections of the panel. (dc-panel-content can be skipped if you specify the others.)
⍝ See the Advanced Example for a practical example.


    :field public Message←''
    :field public Type←'info'       ⍝ info | warn | errorr] | success | warnRed (Warning-Symbol with red color - if you don't like normal "error"-style)
    :field public Title←''
    :field public Icon←''
    :field public Radius←1          ⍝ boolean or width (up to 4 elements)
    :field public RadiusUnit←'em'   ⍝ unit of radius


    ∇ make0
      :Access public
      :Implements constructor :base
      Uses←'dcPanel'
    ∇

    ∇ make1 arg
      :Access public
      :Implements constructor :base
      (Message Type Title)←(eis arg)defaultArgs Message Type Title
      Uses←'dcPanel'
    ∇

    ∇ r←Render;icon;class;c;cclass;d;ic;theStyle;i
      :Access public
      cclass←'dc-panel-dfltStyle'
      SetId
      SetUse
      :Select ∪,Radius
      :Case ,0 ⋄ class←'dc-panel-s'
      :Case ,1 ⋄ class←'dc-panel-r'
      :Else
          class←'dc-panel-c',GenId  ⍝ create a custom class
          :Select ≢Radius
          :CaseList 1 2 ⋄ Radius←4⍴Radius
          :Case 3 ⋄ Radius←Radius,Radius[2]
          :EndSelect
          :Select ≢RadiusUnit←,eis RadiusUnit
          :CaseList 1 2 ⋄ RadiusUnit←4⍴RadiusUnit
          :Case 3 ⋄ RadiusUnit←RadiusUnit,RadiusUnit[2]
          :EndSelect
     
          theStyle←ScriptFollows
⍝ .%class% {
⍝  border-top-left-radius:     %Radius1%%RadiusUnit1%;
⍝  border-top-right-radius:    %Radius2%%RadiusUnit2%;
⍝  border-bottom-left-radius:  %Radius3%%RadiusUnit3%;
⍝  border-bottom-right-radius: %Radius4%%RadiusUnit4%;
⍝}
⍝ .%class%  > .dc-panel-icon  + .dc-panel-content
⍝{
⍝  border-top-left-radius:     %Radius1%%RadiusUnit1%;
⍝  border-top-right-radius:    %Radius2%%RadiusUnit2%;
⍝  border-bottom-left-radius:  %Radius3%%RadiusUnit3%;
⍝  border-bottom-right-radius: %Radius4%%RadiusUnit4%;
⍝}
⍝ .%class% > .dc-panel-title {
⍝  border-top-left-radius:     %Radius1%%RadiusUnit1%;
⍝  border-top-right-radius:    %Radius2%%RadiusUnit2%;
⍝}
⍝.%class% > .dc-panel-title +.dc-panel-icon +.dc-panel-content {
⍝  border-top-left-radius: 0em;
⍝  border-top-right-radius: 0em;
⍝  border-bottom-left-radius:  %Radius3%%RadiusUnit3%;
⍝  border-bottom-right-radius: %Radius4%%RadiusUnit4%;
⍝}
     
     
     
          :For i :In ⍳4
              theStyle←(theStyle #.Strings.subst('%Radius',(⍕i),'%')(⍕Radius[i]))#.Strings.subst('%RadiusUnit',(⍕i),'%')(i⊃RadiusUnit)
          :EndFor
          theStyle←theStyle #.Strings.subst'%class%'class
          _PageRef.Head.Add _.style theStyle
          class,←' dc-panel-c'
      :EndSelect
      AddClass(class,' dc-panel')
      :Select 4↑Type
      :Case 'info' ⋄ icon←'info-circle' ⋄ class←'dc-panel-info'
      :Case 'warn'
          :If 'Red'≡¯3↑Type
              icon←'times-circle' ⋄ class←'dc-panel-error'
          :Else
              icon←'exclamation-circle' ⋄ class←'dc-panel-warning'
          :EndIf
      :Case 'erro' ⋄ icon←'times-circle' ⋄ class←'dc-panel-error'
      :Case 'succ' ⋄ icon←'check' ⋄ class←'dc-panel-success'
      :Else
          :If '.'=⍬⍴Type  ⍝ specified custom class
              cclass←1↓Type ⋄ class←''
          :EndIf
      :EndSelect
      c←''
      :If ~0∊⍴Title ⋄ c,←('class="',class,' ',cclass,' dc-panel-title" id="',id,'_title"')New _.div Title ⋄ :EndIf
     
      :If Icon≡''
          ic←('.dc-panel-icon ',{(' '⎕R' .')' ',#.Strings.deb ⍵}class,' ')New _.Icon('fa-',icon)
      :ElseIf isInstance Icon
          Icon.SetAttr⊂'class="dc-panel-icon"'
          ic←Icon
      :Else
          ic←('.dc-panel-icon',{(' '⎕R' .')' ',#.Strings.deb ⍵}class,' ',cclass)New _.Icon Icon
      :EndIf
      ic._PageRef←_PageRef        ⍝ hack!!!!! shouldn't we do Add and not New?
      c,←ic.Render
      d←('class="',class,' ',cclass,' dc-panel-content" id="',id,'_content"')New _.div Message
      d.Add savedContent←Content   ⍝ save original content
      Content←c,d
      r←⎕BASE.Render       ⍝ restore original content to avoid issues
      Content←savedContent ⍝ when re-rendering (as in MetaControl)
    ∇




:endclass