:Class Index : MS3Page


    ∇ Render;ids;tits;sex;t
      :Access Public   
      ids←'abc' 'def' 'ghi'
      tits←'Large' 'Medium' 'Small'
      sex←'Brian' 'Paul' 'Becker'
      (t←Add _SF.ejTab).(Ids Titles Sections Container)←ids tits sex'#mytabs'
      t.Options.showCloseButton←#.JSON.true
    ∇

:EndClass