:Namespace XML

    ∇ XML←ToNS x;level;names;values;ns;m;name;i;j;⎕ML;⎕IO;y;n
⍝ Turn XML into a namespace
      ⎕IO ⎕ML←1 3
     
      :If (10|⎕DR x)∊0 2 ⋄ x←⎕XML x ⋄ :EndIf
      level names values←↓[1]x[;1 2 3]
     
      'Single root note required'⎕SIGNAL(1≠0+.=level)/11
      'XML'⎕NS''
      ('XML.',name←(level⍳0)⊃names)⎕NS''
     
      :Select ⌈/level
      :Case 0 ⍝ Done
      :Case 1
          :For n :In {⍵/⍳⍴⍵}1=level
              ('XML.',name,'.',n⊃names)gets n⊃values
          :EndFor
      :Case 2
          'All level 1 names must be the same for <ToNS> with 3 levels'⎕SIGNAL(1≠⍴∪(level=1)/names)/11
          ⍎(name←'XML.',name),'←⍬'
          i←(+\level=1)⊂⍳⍴level
          :For j :In ⍳⍴i
              y←x[j⊃i;] ⋄ y[;1]-←1
              ⍎name,',←(ToNS y).',(level⍳1)⊃names
          :EndFor
      :Else
          'Maximum level of nesting for <ToNS> is 3'⎕SIGNAL 11
      :EndSelect
    ∇

    ∇ XML←ToNS_Deep x;xml;ns;leaves;next;i;switch;name;level;names;values;y;n;ind;l;root
    ⍝ Turn XML into a namespace
    ⍝ XML may be arbitrarily nested
      xml←x
      :If (10|⎕DR x)∊0 2 ⋄ xml←⎕XML x ⋄ :EndIf
      'Single root note required'⎕SIGNAL(1≠0+.=xml[;1])/11
      'XML'⎕NS''
      level names values←↓[1]xml[;1 2 3]
      leaves←level≥next←1↓level,0
      'Only leaf nodes may contain data'⎕SIGNAL(leaves∨.<~0∘∊∘⍴¨values)/11
      ('XML.',name←(level⍳0)⊃names)⎕NS''
      n←{⍵/⍳⍴⍵}1=level
      l←(1↓n,1+⍴level)-n
      :For i :In ⍳⍴n
          :If leaves[ind←n[i]]
              ('XML.',name,'.',ind⊃names)gets2 ind⊃values
          :Else
              y←xml[(ind-1)+⍳l[i];]
              y[;1]-←1
              ⍎('''XML.',name,'.',ind⊃names),''' gets2 (ToNS_Deep y).',ind⊃names
          :EndIf
      :EndFor
    ∇

    ∇ xml←{offset}ToXML ns;msg;n;level1;i;v;d;isRef
⍝ Turn namespace into XML
      isRef←{(0=⍴⍴⍵)∧326=⎕DR ⍵}
      offset←{6::⍵ ⋄ offset}0
      msg←'Invalid structure for <ToXML>'
      xml←0 3⍴0 '' ''
      msg ⎕SIGNAL(1≠⍴n←ns.⎕NL ¯2 ¯9)/11
      n←⊃n
      level1←ns.⍎n
      msg ⎕SIGNAL(~∧/'#.XML.XML.'∘≡¨10∘↑∘⍕¨level1)/11
      :For i :In level1
          xml⍪←offset(10↓⍕i)''
          :For v :In i.⎕NL-2
              d←i⍎v
              :If ∧/isRef¨d
                  :For r :In d
                  :EndFor
              :EndIf
              xml⍪←(2-offset)v(i.⍎v)
          :EndFor
      :EndFor
      xml←⎕XML xml
    ∇

    ∇ r←HTMLtoXHTML html;where;closes;inds;lco;lc;getline;msg;n;dmx;aft;bef;attr;dtb;noclose
      where←{⍵/⍳⍴⍵}
      dtb←{⍵↓⍨-+/∧\' '=⌽⍵}
      lco←{(lc ⍺)⍺⍺(lc ⍵)} ⍝ lower case operator
      getline←{}
      lc←{('abcdefghijklmnopqrstuvwxyzáâãçèêëìíîïðòóôõùúûýàäåæéñöøü',⍵)[('ABCDEFGHIJKLMNOPQRSTUVWXYZÁÂÃÇÈÊËÌÍÎÏÐÒÓÔÕÙÚÛÝÀÄÅÆÉÑÖØÜ',⍵)⍳⍵]}
      closes←where'>'=html
      noclose←'<',¨'area ' 'base ' 'basefont ' 'br>' 'col ' 'frame ' 'hr ' 'hr>' 'img ' 'input ' 'isindex ' 'link ' 'meta ' 'param ' ⍝ elements with no closing tag
      inds←closes[where∨⌿<\(where⊃∨/(noclose(⍷lco)¨⊂html))∘.<closes]
      html[inds[where'/'≠html[inds-1]]]←⊂'/>'
      r←∊html
     loop:
      :Trap 11
          r←⎕XML r
          r[;2]←lc¨r[;2]
          r[;4]←{(lc¨⍵[;1]),⍵[;,2]}¨r[;4]
          →0
      :Else
          dmx←⎕DMX
          msg←dmx.Message
          :Select 6↑msg
          :Case '''='' ex' ⍝ empty attribute
              :If ~0∊⍴n←⊃(//)⎕VFI msg
                  bef aft←r{(⍵↑⍺)(⍵↓⍺)}n-1
                  attr←lc(1-(⌽bef)⍳' ')↑bef←dtb bef
                  r←bef,'="',attr,'" ',aft
                  →loop
              :EndIf
          :Else
              ∘∘∘
          :EndSelect
          dmx.(EM,': ',Message)⎕SIGNAL dmx.EN
      :EndTrap
    ∇

    ∇ a gets w
    ⍝ if the name is already assigned, concatenate
      :If 0=⎕NC a ⋄ ⍎a,'←w'
      :Else ⋄ ⍎a,'← ({2>|≡⍵:,⊂⍵⋄⍵}',a,'),⊂w'
      :EndIf
    ∇

    ∇ a gets2 w
    ⍝ if the name is already assigned, concatenate
      :Select ⍬⍴⌊|⎕NC a
      :Case 0
          ⍎a,'←w'
      :Else
          ⍎a,',←w'
      :EndSelect
    ∇

:EndNamespace