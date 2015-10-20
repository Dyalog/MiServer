 msg←Test dummy;label
 label←'CssSelector'Find'label'
 'Click'MoveToElement'btn1' 10 10
 msg←label WaitFor'That was a BOLD move!' 'First toggle did not happen'
 →(0≠⍴msg)⍴0
 'Click'MoveToElement'btn1' 10 10
 msg←label WaitFor'Toggle me if you dare...' 'Second toggle did not happen'