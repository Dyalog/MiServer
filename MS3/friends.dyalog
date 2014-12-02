:Class Friends : Dyalog14

    :include #.HTMLUtils

    ∇ Render;index;tc;name
      :Access public
      Add h2'ejTagCloud'
      Add a'Reset'('href'_Request.Page)
      tc←Add _SF.ejTagCloud
      tc.Container←'#tagcloud'
      :If 0∊⍴index←⍬ Get'index'
          SELECTED←⍳⍴FRIENDS
          name←'Friend Clouds'
      :Else
          SELECTED←index~⍨index⊃FRIENDS
          name←(index⊃PEOPLE),'''s Friends'
      :EndIf
      tc.Options.titleText←name,' - ',(⍕⍴SELECTED),' of ',⍕⍴PEOPLE
      tc.Data←PEOPLE[SELECTED],(∊⍴¨FRIENDS[SELECTED]),⍪(_Request.Page,'?index=')∘,¨⍕¨SELECTED
    ∇

    ∇ Make
      :Access public
      :Implements constructor
      InitData 10
    ∇

    ∇ r←InitData n
      PEOPLE←n⍴'Bob' 'Bill' 'Sue' 'Alice' 'Eve' 'Oscar' 'Dan' 'Mary' 'Jack' 'Jill'
      FRIENDS←friends n
    ∇

      friends←{
  ⍝ random lists of friends for ⍵ people
          ⍵?¨⍨?2*?⍵⍴⌊2⍟⍵
      }

:EndClass