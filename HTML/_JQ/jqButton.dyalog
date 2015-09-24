:Class jqButton : #._JQ._jqUIWidget
    :field public shared readonly DocBase←'http://api.jqueryui.com/button/'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/jQuery/jqButtonHelp.html'

    :field public Text←''       ⍝ text on the button
    :field public Type←''       ⍝ valid types are 'button' 'submit' 'reset' 'checkbox' 'radio' 'anchor' ''


    ∇ Make0
      :Access public
      JQueryFn←'button'
      :Implements constructor
      InternalEvents←,⊂'create'
    ∇

    ∇ Make1 args;i
      :Access public
      JQueryFn←'button'
      args←eis args
      (Text Type)←2↑args,(⍴args)↓'' ''
      :Implements constructor
      InternalEvents←,⊂'create'
    ∇

    ∇ r←Render;type
      :Access public
      :Select #.Strings.lc Type
      :CaseList 'button' 'submit' 'reset' 'checkbox' 'radio'
          ContainerTag←'input'
          Container.type←Type
      :Case 'anchor'
          ContainerTag←,'a'
          Container.Add(⊂Text)
      :Else
          ContainerTag←'button'
          Container.Add(⊂Text)
      :EndSelect
      r←⎕BASE.Render
      :If 'input'≡ContainerTag
          :If ~0∊⍴Text
              r,←(⎕NEW #._html.label(Text('for'Container.id))).Render
          :EndIf
      :EndIf
    ∇
:EndClass
