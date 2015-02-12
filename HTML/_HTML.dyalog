:Namespace _HTML

  :class Form : #._html.form

    :field public Method←'post'
    :field public Action←''
    :field public Serialize←0

    ∇ make;c
      :Access public
      :Implements constructor
      :If {6::0 ⋄ ''≢c∘←##.context ⍵}'_Request'
        Action←c._Request.Page
      :EndIf
    ∇

    ∇ make1 action
      :Access public
      :Implements constructor
      Action←action
    ∇

    ∇ r←Render
      :Access public
      Attr['action' 'method']←Action Method
      r←⎕BASE.Render
    ∇
  :endclass

  :class InputSubmit : #._html.input

    ∇ Make
      :Access public
      :Implements constructor :base
      (name value)←'submit' 'submit'
      SetAttr('type' 'submit')
    ∇

    ∇ Make1 args;n;v
      :Access public
      :Implements constructor :base
      args←eis args
      (n v)←2↑args,(⍴args)↓'submit' 'submit'
      (name value)←n v
      SetAttr('type' 'submit')
    ∇
  :endclass

  :class Input : #._html.input

    :field public Label←''

    ∇ Make1 args;l;n;t;v
      :Access public
      :Implements constructor
      args←eis args
      t n v l←4↑args,(⍴args)↓'text' '' '' ''
      (type value Label)←t v l
      :If ~0∊⍴n ⋄ name←id←n ⋄ :EndIf
    ∇

    ∇ html←Render
      :Access public
      html←''
      :If ~0∊⍴Label
        :If id≡⎕NULL ⋄ id←'gen',⍕?1000 ⋄ :EndIf
        html,←'<label for="',(⍕id),'">',Label,'</label>'
      :EndIf
      html,←⎕BASE.Render
    ∇
  :endclass

  :class InputGrid : #._html.table

    :field public Border←0
    :field public Labels←''
    :field public Inputs←''
    :field public Headings←''

    ∇ html←Render;cells;rows
      :Access public
      cells←{⎕NEW #._html.td(⍵)}¨renderIt¨Labels,[1.1]Inputs
      cells[;1].style←⊂'text-align:right'
      rows←⎕NEW¨(⊃⍴cells)⍴#._html.tr
      rows.Add↓cells
      Content←rows.Render
      SetAttr'border'(⍕Border)
      html←⎕BASE.Render
    ∇
  :endclass

  :class EditField : #._html.input

    ∇ make1 nm
      :Access public
      :Implements constructor
      name←nm
      id←name
      type←'text'
    ∇
    ∇ make2(nm val)
      :Access public
      :Implements constructor
      :If ~1=≡name←nm val    ⍝ handle 2-character names
        (name value)←nm val
      :EndIf
      id←name
      type←'text'
    ∇
    ∇ make3(nm val att)
      :Access public
      :Implements constructor
      :If ~1=≡name←nm val att    ⍝ handle 3-character names
        (name value)←nm val
        SetAttr att
      :EndIf
      id←name
      type←'text'
    ∇
  :endclass

  :class Button : #._html.button

    :field _content←''

    ∇ Make0
      :Access public
      :Implements constructor :base
      SetAttr('type' 'button')
    ∇

    ∇ Make args;n;v
      :Access public
      :Implements constructor :base
          ⍝ arguments are name value {content}
      args←eis args
      (n v _content)←3↑args,(⍴args)↓'button' 'button' ''
      :If 0∊⍴_content ⋄ _content←v ⋄ :EndIf
      (name value)←n v
      id←name
      SetAttr('type' 'button')
    ∇

    ∇ html←Render
      :Access public
      :If 0∊⍴Content
        Content←_content
      :EndIf
      html←⎕BASE.Render
    ∇

  :endclass

  :class Script : #._html.script

    :field public File←''
    :field public Code←''

    ∇ Make0
      :Access public
      :Implements constructor
      SetAttr'type="text/javascript"'
    ∇

    ∇ Make1 params
      :Access public
      :Implements constructor
      params←eis params
      Code File←2↑params,(⍴params)↓'' ''
      SetAttr'type="text/javascript"'
    ∇

    ∇ html←Render
      :Access public
      :If ~0∊⍴File
        SetAttr('src'File)
      :ElseIf ~0∊⍴Code
        Content←Code
      :EndIf
      html←⎕BASE.Render
    ∇

  :endclass

  :class Style : #._html.style

    :field public Selector←''
    :field public Styles←''

    ∇ Make1 params
      :Access public
      :Implements constructor
      params←eis params
      (Selector Styles)←2↑params,(⍴params)↓'' ''
    ∇

    ∇ html←Render
      :Access public
      Content←Selector,#.HTMLUtils.Styles Styles
      html←⎕BASE.Render
    ∇
  :endclass

  :class StyleSheet : #._html.link

    :field public href←''

    ∇ Make1 params
      :Access public
      :Implements constructor
      href←params
    ∇

    ∇ html←Render
      :Access public
      SetAttr(('href'href)('rel' 'stylesheet')('type' 'text/css'))
      html←⎕BASE.Render
    ∇
  :endclass

  :class Table : #._html.table
    :field public Data←0 0⍴⊂''
    :field public CellAttr←''
    :field public HeaderRows←0
    :field public HeaderAttr←''
    :field public MakeCellIds←0
    :field public MakeRowIds←0

    ∇ Make0
      :Access public
      :Implements constructor
    ∇

    ∇ Make1 data
      :Access public
      :Implements constructor
      :If 1<⍴⍴data ⋄ data←,⊂data ⋄ :EndIf
      (Data CellAttr HeaderRows HeaderAttr MakeCellIds MakeRowIds)←6↑data,(⍴data)↓Data CellAttr HeaderRows HeaderAttr MakeCellIds MakeRowIds
    ∇

    ∇ html←Render;data;atts;tda;tha;hdrrows;cellids;rowids;rows;x;head;body;table;thead;tbody
      :Access public
      data tda tha hdrrows cellids rowids←Data CellAttr HeaderAttr HeaderRows MakeCellIds MakeRowIds
      hdrrows←⍬⍴hdrrows
      data←((rows←×/¯1↓⍴data),¯1↑⍴data)⍴data
      head←body←(0 1×⍴data)⍴⊂''
      :If 0≠hdrrows
        head←{⎕NEW #._html.th ⍵}¨hdrrows↑data
        :If cellids
          head.id←{∊'rc',¨⍕¨⍵}¨⍳⍴head
        :EndIf
        :If ~0∊⍴tha
          head.SetAttr¨(⍴head)⍴⊂¨eis tha
        :EndIf
      :EndIf
      :If 0<(⊃⍴data)-hdrrows
        body←{⎕NEW #._html.td ⍵}¨hdrrows↓data
        :If cellids
          body.id←{∊'rc',¨⍕¨⍵}¨hdrrows↓⍳⍴data
        :EndIf
        :If ~0∊⍴tda
          body.SetAttr¨(⍴body)⍴⊂¨eis tda
        :EndIf
      :EndIf
      (table←⎕NEW¨rows⍴#._html.tr).Add↓head⍪body
      :If rowids
        table.id←{'row',⍕⍵}⍳rows
      :EndIf
      thead←tbody←''
      :If 0≠hdrrows
        (thead←⎕NEW #._html.thead).Add hdrrows↑table
      :EndIf
      :If 0<(⊃⍴data)-hdrrows
        (tbody←⎕NEW #._html.tbody).Add hdrrows↓table
      :EndIf
      Content←thead,tbody
      html←⎕BASE.Render
    ∇
  :endclass

:EndNamespace