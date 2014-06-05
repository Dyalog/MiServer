:Class jqmbuttons : MildPage ⍝ use the jQuery Mobile template
    ⎕io←1

⍝ Display different buttons
⍝ These are the styles that can be applied:

⍝ data-corners    true | false
⍝ data-icon       home | delete | plus | arrow-u | arrow-d | check | gear | grid | star | custom | arrow-r | arrow-l | minus | refresh | forward | back | alert | info | search
⍝ data-iconpos    left | right | top | bottom | notext
⍝ data-iconshadow true | false
⍝ data-inline     true | false
⍝ data-mini       true | false - Compact sized version
⍝ data-shadow     true | false
⍝ data-theme      swatch letter (a-z)

    ∇ r←Render req;f;h;rg;b;type;n;page;t;v;h2;b2
      :Access Public
      f←#.JQM.Create req                    ⍝ create the JQM page
      (page←f.AddPage'' 'p1').UseForm''     ⍝ add a page and specify to use a form with name 'p1'
      f.Title←'Button tests'                ⍝ add a tab title for the form
      (h←page.AddHeader'The Button War').Attr'data-theme' 'd' ⍝ a title for the page
    ⍝ ... and 2 buttons left and right
      h.(Left Right)←#.JQM.((BackButton'Cancel'('data-theme' 'e'))(SubmitButton'Order'('data-theme' 'e')))
    ⍝ Let's define a series of small buttons with each icon:
      n←⍴type←1↓¨(b='|')⊂b←'|home | delete | plus | arrow-u | arrow-d | check | gear | grid | star | custom | arrow-r | arrow-l | minus | refresh | forward | back | alert | info | search'~' '
      page.AddContent¨b←⎕NEW¨#.JQM.Button,¨⊂¨n⍴'a' ⍝ only 'a' has the caption IN the button
      b.InnerHTML←type                      ⍝ add caption
      b.(Attr∘'data-icon')type
      b.{'data-inline'Attr⍨⍵}⊂'true'
      b.{'data-theme'Attr⍨⍵}n↑⎕A
      b.{'data-mini'Attr⍨⍵}'true' 'false'[?n⍴2]
    ⍝ ... and some random buttons on a new page
      page.AddBR
      b2←⎕NEW¨#.JQM.Button,¨⊂¨t←n⍴'a' 'button' 'submit' 'reset' 'image'
      t←type,[1.1]t
    ⍝ ... and define all possible attributes
      .
 ⍝     b2.{'data-icon'Attr⍨⍵}type
⍝      b2.{'data-corners'Attr⍨⍵}'true' 'false'[v←n⍴1 2] ⋄ t,←'c'∘,¨⍕¨v=1
⍝      b2.{'data-iconpos'Attr⍨⍵}t,←'left' 'right' 'top' 'bottom' 'notext'[?n⍴5]
⍝      b2.{'data-iconshadow'Attr⍨⍵}'true' 'false'[v←n⍴2/1 2] ⋄ t,←'ics'∘,¨⍕¨v=1
⍝      b2.{'data-inline'Attr⍨⍵}n⍴'true' 'false'[v←n⍴4/1 2] ⋄ t,←'in'∘,¨⍕¨v=1
⍝      b2.{'data-mini'Attr⍨⍵}n⍴'true' 'false'[v←n⍴8/1 2] ⋄ t,←'m'∘,¨⍕¨v=1
⍝      b2.{'data-shadow'Attr⍨⍵}n⍴'true' 'false'[v←n⍴16/1 2] ⋄ t,←'s'∘,¨⍕¨v=1
⍝      b2.{'data-theme'Attr⍨⍵}t,←⎕A[n?26]
⍝      b2.InnerHTML←↓⍕t
      page.AddContent¨3↑b
      page.AddControlGroup('cg1'(b[3+⍳3])'CG1')
      page.Add(⎕NEW #.JQM.ControlGroup('cg2'(b[6+⍳3])'CG2')).Horizontal 1
      page.Add(⎕NEW #.JQM.FieldSet).AddElement b[10]
      page.Add(⎕NEW #.JQM.FieldSet).AddElement b[10+⍳2]
      page.Add(⎕NEW #.JQM.FieldSet).AddElement b[12+⍳3]
      page.Add(⎕NEW #.JQM.FieldSet).AddElement b[15+⍳4]
      r←f.Render
    ∇


    ∇ APLJax req;r
      :Access Public
      r←⍕'<h1>Congratulations!</h1><br>You just pushed my buttons'
      req.Return ⎕←r
      ⍝ Really clever processing to follow here...
    ∇
:EndClass