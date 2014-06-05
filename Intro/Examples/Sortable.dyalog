:Class Sortable : MiPage

    :Include #.HTMLInput

    ∇ Render req;html;list1;list2
      :Access Public   
    ⍝ set up the Sortable content
      list1←'To Do' 'Wash Car' 'Vacuum' 'Laundry' 'Cut Grass' 'Clean Garage'
      list2←'Done' 'Go Fishing'

      html←2 BRA'Drag items between lists'

      html,←req #.JQUI.Sortable 1('s1' 's2')(list1 list2)

      html←'div style="height:400px"'Enclose('h2'Enclose'Sortable Lists'),html

      req.Return html
    ∇

:EndClass
