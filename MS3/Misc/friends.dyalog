:Class Friends : MiPageSample

    ∇ Compose;index;tc;name
      :Access public
     
      Add _.h2'ejTagCloud'                ⍝ Add the heading
     
      tc←'tagcloud'Add #._.ejTagCloud       ⍝ Add the Tag Cloud
     
      Add #._.A('Reset'_Request.Page)     ⍝ Add a reset link
     
      :If 0∊⍴index←⍬ Get'index'           ⍝ First time through, select all friends...
          SELECTED←⍳⍴FRIENDS
          name←'Friend Clouds'
      :Else
          SELECTED←index~⍨index⊃FRIENDS  ⍝ once a friend is chosen, limit to their friends
          name←(index⊃PEOPLE),'''s Friends'
      :EndIf
     
      'titleText'tc.Set name,' - ',(⍕⍴SELECTED),' of ',⍕⍴PEOPLE
      'fields.htmlAttributes'tc.Set'target="_self"'
      tc.Data←PEOPLE[SELECTED],(∊⍴¨FRIENDS[SELECTED]),(⍪(_Request.Page,'?index=')∘,∘⍕¨SELECTED),⊂'target=''_self'''
    ∇

    ∇ Make
      :Access public
      :Implements constructor
      InitData 12
    ∇

    ∇ r←InitData n
      PEOPLE←n⍴'David' 'Yvonne' 'Alan' 'Lisa' 'Oscar' 'George' 'Larry' 'Thomas' 'Diane' 'Anne' 'Peter' 'Lynn'
      FRIENDS←friends n
    ∇

      friends←{
          ⍵?¨⍨?2*?⍵⍴⌊2⍟⍵   ⍝ random lists of friends for ⍵ people
      }

:EndClass