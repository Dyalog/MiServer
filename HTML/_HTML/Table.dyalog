﻿:class Table : #._html.table
⍝ Description: Improved html table
⍝ Constructor: {Data} {CellAttr} {HeaderRows} {HeaderAttr} {MakeCellIds} {MakeRowIds}
⍝ data - matrix of data to display in the table
⍝ cellAttr - the id/name for the button
⍝ headerRows - the id/name for the button
⍝ headerAttr - the id/name for the button
⍝ makeCellIds - the text to appear on the button
⍝ makeRowIds - one of 'submit' (default), 'reset', or 'button'
⍝ Public Fields:
⍝ Text - the text to appear on the button
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
          head←{z⊣(z←⎕NEW #._html.th).Add ⍵}¨hdrrows↑data
          :If cellids
              head.id←{∊'rc',¨⍕¨⍵}¨⍳⍴head
          :EndIf
          :If ~0∊⍴tha
              head.Set¨(⍴head)⍴⊂¨eis tha
          :EndIf
      :EndIf
      :If 0<(⊃⍴data)-hdrrows
          body←{z⊣(z←⎕NEW #._html.td).Add ⍵}¨hdrrows↓data
          :If cellids
              body.id←{∊'rc',¨⍕¨⍵}¨hdrrows↓⍳⍴data
          :EndIf
          :If ~0∊⍴tda
              body.Set¨(⍴body)⍴⊂¨eis tda
          :EndIf
      :EndIf
      :If rows>0
          (table←⎕NEW¨rows⍴#._html.tr).Add↓head⍪body
          :If rowids
              table.id←{'row',⍕⍵}⍳rows
          :EndIf
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