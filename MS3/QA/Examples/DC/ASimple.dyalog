 msg←Test dummy;link

 :If 0≡link←Find'link'                       ⍝ find the link
     msg←'link not found'
 :ElseIf link.TagName≢,'a'                   ⍝ is it an <a> ?
     msg←'wrong tag'
 :ElseIf 'here'≢link.Text                    ⍝ saying "here"
     msg←'wrong text'
 :ElseIf '.png'≢¯4↑link.GetAttribute,⊂'href' ⍝ linking to the picture?
     msg←'wrong link'
 :Else                                       ⍝ everything is OK
     msg←''
 :EndIf
