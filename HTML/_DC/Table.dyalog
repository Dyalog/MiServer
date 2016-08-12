:Class Table : #._html.table
⍝ Description:: Improved html table - accepts matrix of data
⍝ Constructor:: [Data [CellAttr [HeaderRows [HeaderAttr [MakeCellIds [MakeRowIds]]]]]
⍝
⍝ Public Fields::
⍝ Data        - matrix of data to display in the table
⍝ CellAttr    - Cell Attributes
⍝ HeaderRows  - # of header rows
⍝ HeaderAttr  - Header attributes
⍝ MakeCellIds - 1 to generate IDs      <td id="tableId_r2c3">
⍝ MakeRowIds  - 1 to generate Row IDs  <tr id="tableId_row2">

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
      :If 1≥|≡data ⋄ data←,⊂1 1⍴⊂data ⋄ :EndIf
      (Data CellAttr HeaderRows HeaderAttr MakeCellIds MakeRowIds)←data defaultArgs Data CellAttr HeaderRows HeaderAttr MakeCellIds MakeRowIds
    ∇

    ∇ html←Render;data;tda;tha;hdrrows;cellids;rowids;table;body;head;headids;headattrs;bodyids;bodyattrs;rows;tbody;thead;cols;size;bodyrows
      :Access public
      SetId
      data tda tha hdrrows cellids rowids←Data CellAttr HeaderAttr HeaderRows MakeCellIds MakeRowIds
      hdrrows←⍬⍴hdrrows
      data←((rows←×/¯1↓⍴data),cols←¯1↑⍴data)⍴data
      head←body←(0 1×⍴data)⍴⊂table←''
      :If 0≠hdrrows
          headids←headattrs←⊂''
          size←hdrrows,cols
          :If cellids
              headids←{' id="',(id,'_',∊'rc',¨⍕¨⍵),'"'}¨⍳size
          :EndIf
          :If ~0∊⍴tha
              headattrs←size⍴{∊FormatAttr/¨1 ParseAttr ⍵}∘fmtAttr¨tha
          :EndIf
          head←(eis headids,¨headattrs){'<th',⍺,'>',(renderIt ⍵),'</th>'}¨hdrrows↑data
      :EndIf
      :If 0<bodyrows←(⊃⍴data)-hdrrows
          bodyids←bodyattrs←⊂''
          size←bodyrows,cols
          :If cellids
              bodyids←{' id="',(id,'_',∊'rc',¨⍕¨⍵),'"'}¨⍳size
          :EndIf
          :If ~0∊⍴tda
              bodyattrs←size⍴{∊FormatAttr/¨1 ParseAttr ⍵}¨fmtAttr¨tda
          :EndIf
          body←(eis bodyids,¨bodyattrs){'<td',⍺,'>',(renderIt ⍵),'</td>'}¨hdrrows↓data
      :EndIf
      :If rows>0
          (table←⎕NEW¨rows⍴#._html.tr).Add↓head⍪body
          :If rowids
              table.id←{id,'_row',⍕⍵}¨⍳rows
          :EndIf
      :EndIf
      thead←tbody←''
      :If 0≠hdrrows
          (thead←⎕NEW #._html.thead).Add hdrrows↑table
      :EndIf
      (tbody←⎕NEW #._html.tbody).Add hdrrows↓table
      Content←thead,tbody
      html←⎕BASE.Render
    ∇

    ∇ attr←fmtAttr attr                                             
      :If 2=⍴,attr  ⍝ 'attr' 'value' is never shorthanded (e.g. given special treatment for id/class)
      :AndIf 1∧.≥≡¨attr
      :AndIf ~∧/'='∊¨attr
          attr←,⊂attr
      :EndIf
    ∇

:EndClass
