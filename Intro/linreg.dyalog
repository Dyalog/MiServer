:Class LinReg : MiPage    

    :Include #.HTMLInput

    :Field Public Degree←,'1'          ⍝ Initial data
    :Field Public X←10⍴⊂''
    :Field Public Y←10⍴⊂''
    :Field Private Z←10⍴⊂''
    :Field Public Action←''            ⍝ Action buttons 
    :Field Public Upload←''            ⍝ File Upload?
    
    getnum←{⊃2⊃⎕VFI ⍵}                 ⍝ Extract 1 number from string
    bold←{'b'∘Enclose¨⍵}                  ⍝ Bold strings


    ∇ Render req;html;tbl;btns;z
      :Access Public
     
      DoAction
     
      btns←'Action'∘Submit¨'Regress' 'Graph' 'Reset'
     
      tbl←(bold'Degree...' 'Observations:' 'File to Upload:'),[1.5]⊂''  ⍝ Bold Labels
      tbl[1;2]←⊂('Degree'DropDown(,¨'123')Degree),' ... of polynomial'  ⍝ 3 Degrees to chose from
      z←(10 2⍴'XY')Edit¨(⊂∘,¨X,[1.5]Y),¨6       ⍝ Edits for X & Y
      z←z,Z,¨⊂'&nbsp'                  ⍝ Display fitted values
      tbl[2;2]←⊂Table((bold'x' 'observed' 'f(x)')⍪z)'border="1"'        ⍝ insert a table into this cell
      tbl[3;2]←⊂'Upload'File 40                                         ⍝ File Upload, 40 chars wide
      tbl←tbl[1 2;]
      html←Table tbl⍪''btns            ⍝ Add btns, make into a HTML table
      html←req('post'Form)html         ⍝ Put a 'post' form around it
     
      html←Table(1 3⍴html(20⍴'&nbsp')('<br/>',Equation,GraphHtml)) ⍝ Graph and Equation on the right
     
      html←('h2'Enclose'Linear Regression'),html   ⍝ Header
     
      req.Return html
    ∇
   
    ∇ DoAction;m;data;xy;coeffs;degree;fit;file;title;x
     
      ExtractData Upload ⍝ Extract data from uploaded file
     
      m←∨/(data←X,[1.5]Y)∨.≠¨' '
      xy←getnum¨m⌿data
      Equation←GraphHtml←''
     
      :Select Action
      :Case 'Reset'
          Degree←,'1'
          X←Y←Z←10⍴⊂''
     
      :CaseList 'Regress' 'Graph'
          :If 0=1↑⍴xy
              Equation←'(no data entered)'
          :Else
              GraphHtml←''
     
              degree←getnum Degree
              coeffs←xy[;2]⌹xy[;1]∘.*0,⍳degree ⍝ Find polynomial coeffs
              Z←m\2⍕¨fit←coeffs+.×⍉xy[;1]∘.*0,⍳degree ⍝ Compute fitted f(x)
     
              Equation←1↓enlist⌽coeffs{' ',((2+×⍺)⊃'-++'),' ',(⍕|0.001×⌊0.5+1000×⍺),(⍵≠0)/'x',(⍵>1)/'<sup>',(⍕⍵),'</sup>'}¨0,⍳degree
              Equation←'p'Enclose'f(x) = ',('+'=1↑Equation)↓Equation
     
              :If Action≡'Graph'
                  title←(degree⊃'Linear' 'Quadratic' 'Cubic'),' Fit'
                  file←title Plot{⍵[⍋⍵[;1];]}xy,fit
                  GraphHtml←'<embed width="350" height="275" src="',file,'" type="image/svg+xml" />' ⍝ HTML fragment to go in output
              :EndIf
          :EndIf
     
      :EndSelect
    ∇

    ∇ file←title Plot data;ch;PostScrp;prop;svg;tn
    ⍝ Produce a graph as a SVG embedded in HTML using RainPro
      (↑'ch' 'PostScrp' 'svg')⎕CY'rainpro' ⍝ Bring in rainpro
      prop←('STYLE' 'BOXED,XYPLOT')('HEAD'title)
      prop,←('Key' 'Observed,Fitted')('KStyle' 'Boxed')('Nib' 1.2)
      ch.Set prop
      ch.Plot data[;1 2]
      ch.Set'CURVES'
      ch.Plot data[;1 3]
     
      (tn file)←'svg'#.Files.CreateTemp req.Server.TempFolder
      file svg.PS ch.Close
      file←(⍴req.Server.Root)↓file ⍝ relative file name
    ∇
    
    ∇ ExtractData Upload;file;data;wb;tn
      ⍝ If data was uploaded, Upload[1] is file name and [2] the data
     
      :If 0≠⍴Upload
          file data←Upload
      :AndIf 0≠⍴file←(1-⌊/(⌽file)⍳'\/')↑file
      :AndIf '.xls'≡#.Strings.lc ¯4↑file         ⍝ Is it an Excel file?
          (tn file)←'xls'#.Files.CreateTemp req.Server.TempFolder ⍝ Create Temp file
          data ⎕NAPPEND tn ⋄ ⎕NUNTIE tn          ⍝ Write data
          :If 0=⎕NC'#.XL' ⋄ '#.XL'⎕WC'OleClient' 'Excel.Application' ⋄ :EndIf
          wb←#.XL.Workbooks.Add⊂file             ⍝ Open using Excel
          data←wb.Sheets[1].UsedRange.Value2     ⍝ Read data
          :If 2=2⊃⍴data
              X Y←↓[1]⍕¨data
          :EndIf
          wb.(Close Saved←1)                     ⍝ Close book
          #.Files.Delete file                    ⍝ Delete file
      :EndIf
    ∇
 
:EndClass