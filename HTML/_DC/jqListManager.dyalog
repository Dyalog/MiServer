:Class jqListManager : #._JQ._jqObject
    :field public LeftItems←⍬  ⍝ vec of vecs
    :field public RightItems←⍬ ⍝ vec of vecs
    :field public ListStyle←''
    :field public ItemStyle←''



    ∇ Make0
      :Access public
      :Implements constructor
      Uses←'JQueryUI'
    ∇

    ∇ r←Render
      :Access public
      SetId
      leftid←id,'_left'
      rightid←id,'_right'
      r←Sortable(leftid rightid)(LeftItems RightItems)(ListStyle ItemStyle)
    ∇

    ∇ r←Sortable pars;ids;lists;styles;usehd;jqpars;chain;liststyle;itemstyle;style;js;callback;lids;cbcode;cbids;i;update;CRLF
      CRLF←⎕UCS 13
     
      r←''
      pars←eis pars
      ids lists styles←3↑pars,(⍴pars)↓⍬ ⍬ ⍬
      :If 0∊⍴styles ⋄ liststyle←itemstyle←''
      :Else ⋄ liststyle itemstyle←styles
      :EndIf
      liststyle←liststyle,⍨'list-style-type' 'none' 'margin' 0 'padding' 0 'float' 'left' 'margin-right' '10px' 'background' '#eee' 'padding' '5px' 'width' '143px'
      itemstyle←itemstyle,⍨'margin' '5px' 'padding' '5px' 'font-size' '1.2em' 'width' '120px'
      ids←eis ids
      style←⊂('#'∘,¨ids)#.HTMLInput.MakeStyle liststyle
      style,←⊂('#'∘,¨ids,¨⊂' li')#.HTMLInput.MakeStyle itemstyle
      r,←style
     
      lists←eis¨lists
      lids←(⊂¨ids),¨¨'_'∘,∘⍕¨¨⍳∘⍴¨lists ⍝ list IDs
      lids←'li class="ui-state-default" id="'∘,∘(,∘'"')¨¨lids
      lists←lids #.HTMLInput.Enclose¨¨lists
      lists←(1∘⌽¨'"ul id="'∘,¨ids)#.HTMLInput.Enclose¨lists
      jqpars←2↓∊', '∘,¨(⊂'')~⍨((1<⍴lists)/'connectWith: "ul"')
      chain←'.disableSelection()'
      js←#.JQ.JQueryfn'sortable'ids jqpars chain
      r,←(∊CRLF∘,¨lists),CRLF,js,'div style="clear: both;"'#.HTMLInput.Enclose''
    ∇

:EndClass