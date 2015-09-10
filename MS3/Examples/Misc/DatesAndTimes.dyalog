﻿:Class DatesAndTimes : MiPageSample
⍝ Demonstrate Date, Time and DateTimePickers from SyncFusion

⍝ Date/Time Format codes:
⍝   ss: (seconds)
⍝   mm: (minutes)
⍝   hh: hours(12), HH: hours(24)
⍝   tt: AM or PM
⍝   MMM: Feb, MMMM: February, MM: 05 (month)
⍝   d:7, dd:07, dddd:Monday  (date)
⍝   yyyy: 2015 (year)

    ∇ make0
      :Implements Constructor
      :Access Public
     
      names←'Date' 'Time' 'DateTime'
      values←'Wednesday February 11, 2015' '20:40' '2015-02-09 3:45 PM'
      formats←'dddd MMMM d, yyyy' 'HH:mm' 'yyyy-MM-d h:mm tt'
      controls←{⍎'_SF.ej',⍵,'Picker'}¨names
     
      options←⊂('showRoundedCorner'_true)('enableAnimation'_true)
      options,←⊂('interval' 10)('popupHeight' '100px')
      options,←⊂,⊂('buttonText.now' 'This Instant')⍝('locale' 'da-DK')
      options←↑¨(⊂⊂'width' 250),¨options ⍝ All of them
    ∇

    ∇ Render;f;docn;ops;tbl;hdrs
      :Access Public
      docn←names{⎕NEW _html.a((⍺,'Picker')('href="',⍵.ApiLink,'" target="_blank"'))}¨controls
     
      Add h3'SyncFusion Date and Time Pickers'
      pickers←⎕NEW¨↓controls,⍪↓names,values,⍪formats
      pickers.{Option/⍵}options
      pickers.{On'change' 1(⍵('#',⍵))}names
      ops←{∊(⍵[;1],¨⊂': '),¨(⍕¨⍵[;2]),¨⊂', <br/>'}¨1↓¨options
      hdrs←'b'#.HTMLInput.Enclose¨'Pickers' 'Options' 'SyncFusion Docn'
      tbl←Add #._HTML.Table(hdrs⍪pickers,ops,⍪docn) ⍝ 'padding=5'
      tbl.HeaderRows←1
      'border' 'padding'tbl.Set¨1 5
      tbl.CellAttr←'style="padding:5px"'
      Add br
     
      (Add div).id←'output'
    ∇

    ∇ r←APLJax
      :Access public
      values[names⍳⊂_what]←⊂Get _what
      r←'#output'Replace _HTML.Table(names,⍪values)
    ∇

:EndClass