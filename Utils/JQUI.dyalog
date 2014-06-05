﻿:Namespace JQUI
    ⎕IO ⎕ML ⎕WX←1 0 3
⍝ == JQUI - JQueryUI
⍝ For more information:
⍝ * JQuery - http://jquery.com
⍝ * JQUery UI - http://jqueryui.com

    CRLF←⎕UCS 13 10

⍝ --- Utility functions ---

    ine←{0∊⍴⍺:'' ⋄ ⍵}  ⍝ if not empty
    eis←{0∊⍴⍵:⍵ ⋄ 2>|≡⍵:,⊂⍵ ⋄ ⍵} ⍝ Enclose if simple
    enlist←{⎕ML←2 ⋄ ∊⍵} ⍝ APL2 style enlist
    quote←{'"'∊⍵:⍵ ⋄ '"',⍵,'"'}
    firstAfter←{pos str←⍵ ⋄ pos+1⍳⍨⍺⍷pos↓str} ⍝ return position of first occurrence after a position
    empty←{0∊⍴⍵}
    SignalError←{}∘{0≠1↑⍵: ⍺ ⎕SIGNAL ⍵ ⋄ ⍵}

    ∇ r←class insertClass attrs;m;beg;end;q;f
     ⍝ insert class into a list of attributes, if there's already a class= attribute append class to it
      :If ~∨/m←'class='⍷attrs ⋄ r←'class="',class,'"',(0∊⍴attrs)↓' ',attrs ⋄ :Return ⋄ :EndIf
      q←(6+beg←m⍳1)⊃attrs,' '
      :If q∊'''"' ⋄ end←¯1+q firstAfter(6+beg)attrs ⋄ r←(end↑attrs),' ',class,end↓attrs
      :Else
          f←~(⍴attrs)≥end←¯1+' 'firstAfter(5+beg)attrs
          r←attrs
          r[beg+5]←⊂'="'
          r←enlist((end-f)↑r),(f↓' ',class,'"'),end↓r
      :EndIf
    ∇

⍝ --- Widget functions ---

    ∇ r←{req}Accordion pars;id;hdrs;content;jqpars
    ⍝ req - HTTPRequest object
    ⍝ id - the id for the accordion
    ⍝ jqpars - Accordion parameters
    ⍝ hdrs - n-element array of header names for each accordion folder
    ⍝ content - n-element array of content for each accordion folder
    ⍝ updates req.Response.head and returns html
      pars←eis pars
      id hdrs content jqpars←4↑pars,(⍴pars)↓'' '' '' ''
      :If 0∊⍴id ⋄ id←'myAccordian' ⋄ :EndIf
      :If 9=⎕NC'req' ⋄ req.Use'JQueryUI' ⋄ :EndIf
      hdrs←#.HTML.h3¨('href' '#')∘#.HTML.a¨hdrs
      content←#.HTML.div¨content
      r←'id'id #.HTML.div,hdrs,[1.1]content
      r,←#.JQ.JQueryfn('accordion'id jqpars)
    ∇

    ∇ r←{req}Button pars;id;jqpars;caption;buttonpars
      :If 9=⎕NC'req' ⋄ req.Use'JQueryUI' ⋄ :EndIf
      pars←eis pars
      id caption buttonpars jqpars←4↑pars,(⍴pars)↓'' '' '' ''
      r←(('id'id),{0∊⍴⍵:⍵ ⋄ eis ⍵}buttonpars)#.HTML.button caption
      r,←#.JQ.JQueryfn'button'id jqpars
    ∇

    ∇ r←{req}DatePicker pars;id;editpars;jqpars
    ⍝ req - HTTPRequest object
    ⍝ pars - id editpars jqpars
    ⍝ id - the id for the datepicker
    ⍝ editpars - parameters for the edit field (see HTMLInput.Edit)
    ⍝ jqpars - datepicker parameters
    ⍝ updates req.Response.head and returns html
      :If 9=⎕NC'req' ⋄ req.Use'JQueryUI' ⋄ :EndIf
      pars←eis pars
      id editpars jqpars←pars,(⍴pars)↓''⍬''
      :If 0∊⍴id ⋄ id←'myDatePicker' ⋄ :EndIf
      r←id #.HTMLInput.Edit editpars
      r,←#.JQ.JQueryfn'datepicker'id jqpars
    ∇

    ∇ r←{req}Dialog pars;id;title;innerhtml;jqpars;chain
    ⍝ req - HTTPRequest object
    ⍝ id - the id for the dialog
    ⍝ jqpars - Dialog parameters
    ⍝ title - title for the dialog
    ⍝ innerhtml - body for the dialog
    ⍝ updates req.Response.head and returns html
      pars←eis pars
      id title innerhtml jqpars chain←5↑pars,(⍴pars)↓'' '' '' '' ''
      :If 9=⎕NC'req' ⋄ req.Use'JQueryUI' ⋄ :EndIf
      r←''
      r←((title∘ine¨'title'title),(id∘ine¨'id'id))#.HTML.div innerhtml
      r,←#.JQ.JQueryfn'dialog'id jqpars chain
    ∇

    ∇ r←{req}Draggable pars;id;jqpars
    ⍝ req - HTTPRequest object
    ⍝ id - the selector(s) (generally ids) for items to be dragged
    ⍝ jqpars - Draggable parameters (if supplied, will override the default)
    ⍝ updates req.Response.head and returns html
      pars←eis pars
      id jqpars←2↑pars,(⍴pars)↓'' ''
      :If empty id ⋄... ⋄ :EndIf ⍝ id is required
      :If 9=⎕NC'req' ⋄ req.Use'JQueryUI' ⋄ :EndIf
      :If 0∊⍴jqpars ⋄ jqpars←'appendTo: "body", helper: "clone"' ⋄ :EndIf
      r←#.JQ.JQueryfn('draggable'id jqpars)
    ∇

    ∇ r←page Droppable pars;jqpars;accept;id;update;page;dtype;success
    ⍝ req - HTTPRequest object
    ⍝ id - the selector(s) for the droppable elements
    ⍝ accept - the selectors(s) for what can be dropped on them
    ⍝ update - the selector(s) for the element whose html to update if the server returns data (empty if no data expected)
    ⍝ jqpars - Droppable parameters (if supplied, will override the default)
    ⍝ updates req.Response.head and returns html
    ⍝
    ⍝ NB: the default behavior expects id attributes on both the dragger and droppee
     
      :Select ⊃⎕NC'page'
      :Case 9 ⋄ page.Use'JQueryUI' ⋄ page←page.Page ⍝ page is the request object
      :EndSelect
      page←quote page
     
      pars←eis pars
      id accept update jqpars←4↑pars,(⍴pars)↓'' '' '' ''
     
      'id and accept cannot be empty'SignalError 900×∨/empty¨id accept
     
      :If empty jqpars
          :If 0∊⍴update ⍝ if no response element specified
              dtype←'"json"'
              success←'success: function(obj){$.each(obj,function(i,d){if(typeof(d.replace)!=="undefined"){$(d.replace).html(d.data);}else if(typeof(d.append)!=="undefined"){$(d.append).append(d.data);}else if(typeof(d.prepend)!=="undefined"){$(d.prepend).prepend(d.data);}else if(typeof(d.execute)!=="undefined"){eval(d.execute);}});}'
          :Else
              dtype←'"html"'
              success←'success: function(d){$(',(quote update),').empty().html(d);}'
          :EndIf
          jqpars←'accept: "',accept,'", activeClass: "ui-state-default", hoverClass: "ui-state-hover", '
          jqpars,←'drop: function(evt, ui){$.ajax({url:',page,', cache:false, type:"POST", dataType:',dtype,', data:{event:"drop",drag:ui.draggable.attr("id"),receiver:$(this).attr("id")},',success,'});}'
     
⍝          :If ~empty update
⍝              jqpars,←', function(data){$("',update,'").html(data)}, "html"'
⍝          :EndIf
      :EndIf
      r←#.JQ.JQueryfn('droppable'id jqpars)
    ∇

    ∇ r←{req}Sortable pars;ids;lists;styles;usehd;jqpars;chain;liststyle;itemstyle;style;js;callback;lids;cbcode;cbids;i;update
      pars←eis pars
      usehd ids lists styles jqpars chain callback update←8↑pars,(⍴pars)↓0 '' '' '' '' '' 0 ''
      :If 9=⎕NC'req'
          req.Use'JQueryUI'
          :If 0∊⍴styles ⋄ liststyle←itemstyle←''
          :Else ⋄ liststyle itemstyle←styles
          :EndIf
          liststyle←liststyle,⍨'list-style-type' 'none' 'margin' 0 'padding' 0 'float' 'left' 'margin-right' '10px' 'background' '#eee' 'padding' '5px' 'width' '143px'
          itemstyle←itemstyle,⍨'margin' '5px' 'padding' '5px' 'font-size' '1.2em' 'width' '120px'
          ids←eis ids
          style←⊂('#'∘,¨ids)#.HTMLInput.MakeStyle liststyle
          style,←⊂('#'∘,¨ids,¨⊂' li')#.HTMLInput.MakeStyle itemstyle
          style req.Style''
      :EndIf
     
      lists←eis¨lists
      :If callback
          lids←(⊂¨ids),¨¨'_'∘,∘⍕¨¨⍳∘⍴¨lists ⍝ list IDs
          lids←'li class="ui-state-default" id="'∘,∘(,∘'"')¨¨lids
          lists←lids #.HTMLInput.Enclose¨¨lists
      :Else
          lists←'li class="ui-state-default"'∘#.HTMLInput.Enclose¨¨lists
      :EndIf
      :If usehd
          lists←{w←⍵ ⋄ f←'ui-state-disabled'insertClass 1⊃w ⋄ w[1]←⊂f ⋄ w}¨lists
      :EndIf
      lists←(1∘⌽¨'"ul id="'∘,¨ids)#.HTMLInput.Enclose¨lists
      jqpars←2↓enlist', '∘,¨(⊂'')~⍨((1<⍴lists)/'connectWith: "ul"')(usehd/'items: "li:not(.ui-state-disabled)"')jqpars
      :If callback
          js←{'{',2↓(enlist ⍵),'}'}{', ',⍵,': $("#',⍵,'").sortable("serialize")'}¨ids
          cbcode←', update: function(){$.post("',req.Page,'", ',js
          :If ~empty update
              cbcode,←', function(d){$("',update,'").empty().html(d)}'
          :EndIf
          jqpars,←(2×empty jqpars)↓cbcode,')}'
      :EndIf
      chain←'.disableSelection()',chain
      js←#.JQ.JQueryfn'sortable'ids jqpars chain
      r←(enlist CRLF∘,¨lists),CRLF,js,'div style="clear: both;"'#.HTMLInput.Enclose''
    ∇

    ∇ r←{req}Tabs pars;id;tabnames;content;jqpars;uris;tabids;hrefs
    ⍝ req - HTTPRequest object
    ⍝ id - the id for the tabs
    ⍝ jqpars - Tabs parameters
    ⍝ tabnames - n-element vector of charvec of names to appear on the tabs
    ⍝ content - n-element vector of charvecs with the HTML content for each tab
    ⍝ updates req.Response.head and returns html
      :If 9=⎕NC'req' ⋄ req.Use'JQueryUI' ⋄ :EndIf
      pars←eis pars
      id tabnames content jqpars←4↑pars,(⍴pars)↓'' '' '' ''
      :If 0∊⍴id ⋄ id←'myTabs' ⋄ :EndIf
      tabnames←eis tabnames
      :If 1<|≡id
          tabids←1↓id
          id←1⊃id
      :Else
          tabids←id∘,¨'-'∘,¨⍕¨⍳⍴tabnames
      :EndIf
      content←eis content
      uris←(empty¨content)<{∧/⍵∊'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%-._~:/?#[]@!$&''()*+,;='}¨content ⍝ identify likely URIs
      hrefs←'#',¨tabids
      (uris/hrefs)←uris/content
      hrefs←'a href='∘,¨#.HTMLInput.quote¨hrefs
      r←'ul'#.HTMLInput.Enclose enlist'li'∘#.HTMLInput.Enclose¨hrefs #.HTMLInput.Enclose¨tabnames
      :If ~∧/uris
          r,←enlist('div id="'∘,¨(,∘'"')¨(~uris)/tabids)#.HTMLInput.Enclose¨(~uris)/content
      :EndIf
      r←'id'id #.HTML.div r
      r,←#.JQ.JQueryfn'tabs'id jqpars
    ∇

    ∇ r←{req}Slider pars;id;jqpars;cur;max;min;exec
    ⍝ req - HTTPRequest object
    ⍝ id
    ⍝ min - minimum value
    ⍝ max - maximum value
    ⍝ cur - current value
    ⍝ exec - script to execute when value changes
    ⍝ jqpars - Draggable parameters (if supplied, will override the default)
    ⍝ updates req.Response.head and returns html
      pars←eis pars
      id min max cur exec jqpars←6↑pars,(⍴pars)↓'' 1 10 1 '' ''
      :If empty id ⋄ 'id cannot be empty'⎕SIGNAL 11 ⋄ :EndIf ⍝ id is required
      :If 9=⎕NC'req' ⋄ req.Use'JQueryUI' ⋄ :EndIf
      jqpars,←(0∊⍴jqpars)↓',min: ',(⍕min),', max: ',(⍕max),', value: ',(⍕cur),(~0∊exec)/', slide: function(evt,ui){',exec,(';'=¯1↑exec)↓';}'
      r←#.JQ.JQueryfn'slider'id jqpars
    ∇

:EndNamespace