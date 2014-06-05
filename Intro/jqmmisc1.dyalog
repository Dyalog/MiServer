:Class jqmmisc1 : MildPage ⍝ use the jQuery Mobile template

    ∇ r←Render req;f;p;h;rg;fc;t;obj;cl
      :Access Public
      f←#.JQM.Create req                    ⍝ create the JQM page frameworkServer.Config.Resources
      (p←f.AddPage'').UseForm''             ⍝ add a page and specify to use a form
    ⍝ The page header
      (h←p.AddHeader'Build Your Pages').Attr'data-theme' 'b'
    ⍝ The adjacent buttons
      h.(Left Right)←#.JQM.((BackButton'Cancel'('data-theme' 'c'))(SubmitButton'Order'('data-theme' 'c')))
      t←'This page contains various progressive-enhancement driven form controls.'
      t,←' Native elements are sometimes hidden from view, but their values are maintained so the form can be submitted normally.'
      t,←' Browsers that don''t support the custom controls will still deliver a usable experience because all are based on native form elements'
      p.Add t
      t←⎕NEW #.JQM.FieldContain('Name2:'(⎕NEW #.JQM.Text,⊂'placeholder' 'Surname')'surname')
      t.ATTR.Values['class']←⊂'ui-hide-label'
      p.Add t
    ⍝ We can put elements one after the other as in the following:
    ⍝ a label followed by an input element...
      p.Add #.JQM.Label('Another name:' 'LabL')
      p.Add #.JQM.Text('id' 'LabL')
    ⍝ ...or we can group them together in a FieldContain element:
      p.Add #.JQM.FieldContain('Name:'(⎕NEW #.JQM.Text)'name')
      t←,¨12↑⎕A
      p.Add #.JQM.FieldContain('List1:'(⎕NEW #.JQM.Select t)'list1')
      p.Add #.JQM.FieldContain('Large text:'(⎕NEW #.JQM.TextArea,⊂('cols' 40)('rows' 8))'Tarea')
      p.Add #.JQM.FieldContain('Slider:'(⎕NEW #.JQM.Input,⊂'range' ''(('min' 0)('max' 98)))'Sldr')
      p.Add #.JQM.FieldContain('Flip:'(⎕NEW #.JQM.Flip)'Flip1')
      p.Add #.JQM.FieldContain('YN:'(⎕NEW #.JQM.Flip,⊂'Flip2' ''('NO' 'YES'))'Flip2')
      p.Add #.JQM.FieldContain(''(⎕NEW #.JQM.Flip)'')
      p.AddCheckboxGroup'snaks'('Doritos' 'Lays' 'Humpty Dumpty')'Choose as many snacks as you''d like:'
      (p.AddRadioGroup'XYZ'(,¨'xyz')'Pick one:').Horizontal 1
      p.AddRadioGroup'Rad1'('Choco' 'Mars' 'Cadbury')'Pick 1:'
      r←f.Render
    ⍝ We should be able to show more pages but this doesn't seem to work
    ∇


    ∇ r←APLJax req
      :Access Public 
      f←#.JQM.Create req
      p←f.AddPage''
      p.Add'h1'#.HTMLInput.Enclose'OK'
      r←f.Render
      ...
      ⍝ Really clever processing to follow here...
    ∇
:EndClass