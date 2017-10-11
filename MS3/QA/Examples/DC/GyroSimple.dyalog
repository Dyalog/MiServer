 msg←Test dummy;result
 result←Find¨'alpha' 'beta' 'gamma'
 :If '?'∧.=∊result.Text
     msg←'' ⍝ no gyroscope found
 :Else
     msg←∊∪result WaitFor¨'0'
 :EndIf
