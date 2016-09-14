:Class Panel : #._html.div
:access public


    :field public Title←''
    :field public Value←''
    :field public Type←'info'    ⍝ info | warn | error | success | warnRed (Warning-Symbol with red colour - if you don't like normal "error"-style)
    :field public pIcon←''

    ∇ make0
      :Access public
      :Implements constructor :base
    ∇

    ∇ make1 arg
      :Access public
      :Implements constructor :base
      Value←arg
    ∇

    ∇ make2(arg1 arg2)
      :Access public
      :Implements constructor :base
      Value←arg1
      Type←arg2
    ∇

    ∇ make3(arg1 arg2 arg3)
      :Access public
      :Implements constructor :base
      Value←arg1
      Type←arg2
      Title←arg3
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
     
      :If pIcon≡''
          ic←('.dc-panel-icon ',class)New _.Icon('fa-',icon)
      :ElseIf isInstance pIcon
          pIcon.SetAttr⊂'class="dc-panel-icon"'
          ic←pIcon
      :Else
          ic←('.dc-panel-icon ',class,' ',cclass)New _.Icon pIcon
      :EndIf
     
      c,←ic.Render
     
     
      d←('class="',class,' ',cclass,' dc-panel-content" id="',SetId,'_content"')New _.div Value
      d.Add Content
      Content←c,d
      Use'faIcons'
      Use'⍕/PlugIns/Dyalog/Panel/panel.css'
      SetUse
      'class'Set'dc-panel'
      r←⎕BASE.Render
    ∇




:endclass
