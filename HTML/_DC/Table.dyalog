:Class Table : #._html.table
⍝ Description:: Improved html table - accepts matrix of data
⍝ Constructor:: [data [cellAttr [headerRows [headerAttr [makeCellIds [makeRowIds]]]]]
⍝ data        - matrix of data to display in the table
⍝ cellAttr    - Cell Attributes
⍝ headerRows  - # of header rows
⍝ headerAttr  - Header attributes
⍝ makeCellIds - 1 to generate IDs      <td id="tableId_r2c3">
⍝ makeRowIds  - 1 to generate Row IDs  <tr id="tableId_row2">
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

    ∇ html←Render;data;rows;cols;hdrrows;head;body;headids;size;headattrs;rowids;bodyrows;bodyids;bodyattrs
      :Access public
      SetId
      data←Data
      data←((rows←×/¯1↓⍴data),cols←¯1↑⍴data)⍴data
      hdrrows←rows⌊⍬⍴HeaderRows
      head←body←''
     
      :If 0<hdrrows
          headids←headattrs←⊂''
          size←hdrrows,cols
          :If MakeCellIds
              headids←{' id="',(id,'_',∊'rc',¨⍕¨⍵),'"'}¨⍳size
          :EndIf
          :If ~0∊⍴HeaderAttr
              headattrs←size⍴{∊FormatAttr/¨1 ParseAttr ⍵}∘fmtAttr¨eis HeaderAttr
          :EndIf
          head←(eis headids,¨headattrs){('th',⍺)enc renderIt ⍵}¨hdrrows↑data
          rowids←⊂''
          :If MakeRowIds
              rowids←{' id="',id,'_row',(⍕⍵),'"'}¨⍳hdrrows
          :EndIf
          head←∊'thead'enc rowids{('tr',⍺)enc∊⍵}¨↓head
      :EndIf
     
      :If 0<bodyrows←(⊃⍴data)-hdrrows
          bodyids←bodyattrs←⊂''
          size←bodyrows,cols
          :If MakeCellIds
              bodyids←{' id="',(id,'_',∊'rc',¨⍕¨⍵),'"'}¨(⊂hdrrows,0)+¨⍳size
          :EndIf
          :If ~0∊⍴CellAttr
              bodyattrs←size⍴{∊FormatAttr/¨1 ParseAttr ⍵}¨fmtAttr¨eis CellAttr
          :EndIf
          body←(eis bodyids,¨bodyattrs){'<td',⍺,'>',(renderIt ⍵),'</td>'}¨hdrrows↓data
          rowids←⊂''
          :If MakeRowIds
              rowids←{' id="',id,'_row',(⍕⍵),'"'}¨hdrrows+⍳bodyrows
          :EndIf
          body←∊'tbody'enc rowids{('tr',⍺)enc∊⍵}¨↓body
      :EndIf
      Content←head,body
      html←⎕BASE.Render
    ∇

    ∇ attr←fmtAttr attr
      :If 2=⍴,attr  ⍝ 'attr' 'value' is never shorthanded (e.g. given special treatment for id/class)
      :AndIf 1∧.≥≡¨attr
      :AndIf ~∧/'='∊¨attr
          attr←,⊂attr
      :EndIf
    ∇

    enc←{'<',⍺,'>',⍵,'</',(⍺⍴⍨¯1+⍺⍳' '),'>'}

:EndClass
