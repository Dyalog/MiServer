:Class jqButton : #._JQ._jqUIWidget ⍝!!!
    :field public shared readonly ApiLink←'http://api.jqueryui.com/button/'
    :field public shared readonly ApiLevel←3
    :field public shared readonly Doc←'/Documentation/DyalogAPIs/jQuery/jqButtonHelp.html'

    :field public Text←''  ⍝ text on the button
    :field public Type←'' ⍝ valid types are 'button' 'submit' 'reset' 'checkbox' 'radio' 'anchor' ''

    ∇ Make0
      :Access public
      JQueryFn←'button'
      :Implements constructor
    ∇

    ∇ Make1 args;i
      :Access public
      JQueryFn←'button'
      args←eis args
      (i Text Type)←3↑args,(⍴args)↓'' '' ''
      :Implements constructor :base args
    ∇

    ∇ r←Render;type
      :Access public
      :Select #.Strings.lc Type
      :CaseList 'button' 'submit' 'reset' 'checkbox' 'radio'
          ContainerType←'input'
          Container.type←Type
      :Case 'anchor'
          ContainerType←,'a'
          Container.Add(⊂Text)
      :Else
          ContainerType←'button'
          Container.Add(⊂Text)
      :EndSelect
      r←⎕BASE.Render
      :If 'input'≡ContainerType
          :If ~0∊⍴Text
              r,←(⎕NEW #._html.label(Text('for'Container.id))).Render
          :EndIf
      :EndIf
    ∇
:EndClass