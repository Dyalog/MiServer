:Class jqDatePicker : #._JQ._jqUIWidget
    :field public shared readonly DocBase←'http://api.jqueryui.com/datepicker/'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/jQuery/jqDatePicker.html'

    :field public Text←''  ⍝ text on the button

    ∇ Make0
      :Access public
      JQueryFn←'datepicker'
      ContainerType←'input'
      :Implements constructor
    ∇

    ∇ Make1 args;i
      :Access public
      JQueryFn←'datepicker'
      ContainerType←'input'
      args←eis args
      (i Text)←2↑args,(⍴args)↓'' ''
      :Implements constructor :base args
    ∇

    ∇ r←Render;type
      :Access public
      Container.type←'text'
      r←⎕BASE.Render
      :If ~0∊⍴Text
          r,⍨←(⎕NEW #._html.label(Text('for'Container.id))).Render
      :EndIf
    ∇



:EndClass