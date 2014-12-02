:Namespace JQO
    (⎕IO ⎕ML)←1
⍝ == JQO - JQuery Other Utilities

    CRLF←⎕UCS 13 10
    ine←{0∊⍴⍺:'' ⋄ ⍵}  ⍝ if not empty
    eis←{0∊⍴⍵:⍵ ⋄ 2>|≡⍵:,⊂⍵ ⋄ ⍵} ⍝ Enclose if simple
    enlist←{∊⍵} ⍝ APL2 style enlist
    firstAfter←{pos str←⍵ ⋄ pos+1⍳⍨⍺⍷pos↓str} ⍝ return position of first occurrence after a position
    makeID←{'#'=1↑⍵:⍵ ⋄ '#',⍵}
    empty←0∘∊∘⍴

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

    ∇ r←{req}TableSorter pars;id;tablepars;jqpars;pager;html;sizes;rows;class;stub
    ⍝ req - HTTPRequest object
    ⍝ pars - id tablepars jqpars pager
    ⍝ id - the id for the table to be sorted
    ⍝ jqpars - TableSorter parameters
    ⍝ tablepars - parameters for the table (see HTMLInput.Table)
    ⍝ pager - use the tablesorterPager plug-in?
    ⍝ updates req.Response.head and returns html
     
    ⍝ Usage Notes:
    ⍝ the table is assigned a class of "tablesorter" by this function
    ⍝ the first row is considered a header row
      pars←eis pars
      id tablepars jqpars pager←4↑pars,(⍴pars)↓'' '' '' 0
      :If 0∊⍴id ⋄ id←'myTableSorter' ⋄ :EndIf
      :If 9=⎕NC'req'
          req.Use'jquery.tablesorter',pager/'.pager'
      :EndIf
      class←'class="tablesorter"'
      :If 2=⍴⍴tablepars ⋄ tablepars←,⊂tablepars ⋄ :EndIf
      tablepars←tablepars,(⍴,tablepars)↓(1 1⍴⊂'$nbsp;')'' '' '' 1 ⍝ see HTMLInput.Table for
      :If 1∨.≠5⊃tablepars ⋄ 'TableSorter header row must be 1'⎕SIGNAL 11 ⋄ :EndIf
      (2⊃tablepars)←'tablesorter'insertClass 2⊃tablepars
      r←id #.HTMLInput.Table tablepars
      rows←¯1+⍬⍴⍴1⊃tablepars ⍝ rows of table data
      pager∧←10<rows
      :If pager
          sizes←rows{(⍺+.≥⍵)↑⍵}10 25 50
          sizes←sizes,(rows≠¯1↑sizes)/rows
          sizes←sizes,[1.1](¯1↓sizes),⊂'All'
          :With #.HTMLInput
              stub←'img src="/JQuery/PlugIns/TableSorter/css/pager/'
              html←Tag stub,'first.png" class="first"'
              html,←Tag stub,'prev.png" class="prev"'
              html,←Tag'input type="text" readonly="readonly" class="pagedisplay"'
              html,←Tag stub,'next.png" class="next"'
              html,←Tag stub,'last.png" class="last"'
              html,←(id,'pager')DropDown sizes(⍬⍴sizes)'class="pagesize"'
              r,←'div id="pager" class="pager"'Enclose'form'Enclose html
              jqpars,←(0∊⍴jqpars)↓',widthFixed:true'
          :EndWith
      :EndIf
      r,←#.JQ.JQueryfn'tablesorter'(makeID id)jqpars(pager/'.tablesorterPager({container: $("#pager")})')
    ∇

⍝ treeview
    ∇ html←{req}Treeview pars;id;levels;items;jqpars;diff;isparent;end;repeat;li
      pars←{2>|≡⍵:,⊂⍵ ⋄ ⍵}pars
      id levels items jqpars←4↑pars,(⍴pars)↓''⍬'' ''
      :If 0∊⍴id ⋄ id←'tree' ⋄ :EndIf
      :If 9=⎕NC'req'
          req.Use'jquery.treeview'
      :EndIf
      diff←2-/levels,1↑,levels
      'A child item cannot be more than one level below its parent.'⎕SIGNAL(¯1∨.>diff)/600
      isparent←0>diff
      end←0⌈diff
      repeat←{(⍵×⍴⍺)⍴⍺}
      li←(('<li id="'∘,¨((id,'_')∘,¨⍕¨⍳⍴levels)),¨⊂'">'),¨'<span>'∘repeat¨isparent
      html←li,¨items,¨('</li>' '</span><ul>')[1+isparent]
      html←∊html,¨('</ul></li>')∘repeat¨end
      html←('ul id="',id,'"')#.HTMLInput.Enclose html
      html,←#.JQ.JQueryfn'treeview'(makeID id)jqpars
    ∇

⍝ jsTree

    ∇ html←{req}jsTree pars;id;levels;items;jqpars;diff;isparent;end;repeat;li
      pars←{2>|≡⍵:,⊂⍵ ⋄ ⍵}pars
      id levels items jqpars←4↑pars,(⍴pars)↓''⍬'' ''
      :If 0∊⍴id ⋄ id←'tree' ⋄ :EndIf
      :If 9=⎕NC'req'
          req.Use'jquery.jstree'
      :EndIf
      diff←2-/levels,1↑,levels
      'A child item cannot be more than one level below its parent.'⎕SIGNAL(¯1∨.>diff)/600
      isparent←0>diff
      end←0⌈diff
      repeat←{(⍵×⍴⍺)⍴⍺}
      li←('<li id="'∘,¨((id,'_')∘,¨⍕¨⍳⍴levels)),¨⊂'"><a href="#">'
      html←li,¨items,¨('</a></li>' '</a><ul>')[1+isparent]
      html←∊html,¨('</ul></li>')∘repeat¨end
      html←CRLF,('div id="',id,'"')#.HTMLInput.Enclose'ul'#.HTMLInput.Enclose html
      html,←#.JQ.JQueryfn'jstree'(makeID id)jqpars
    ∇

⍝ jqueryFileTree - server side file tree

    ∇ html←{req}fileTree pars;id;root;json;jqpars;filefn;mask
     ⍝ id - container id
     ⍝ root - root on server to browse from
     ⍝ json - any other fileTree parameters as name/value pairs
     ⍝
      pars←{2>|≡⍵:,⊂⍵ ⋄ ⍵}pars
      id root json filefn←4↑pars,(⍴pars)↓'' '' '' 'alert(file);'
      root←(1+root='\')/root
      :If 0∊⍴id ⋄ id←'filetree' ⋄ :EndIf
      :If 9=⎕NC'req'
          req.Use'jqueryFileTree'
      :EndIf
      html←id #.HTMLInput.Enclose''
      html,←#.HTMLInput.JS'$(function(){$("',(makeID id),'").fileTree({ root: "',root,'", script: "/JQuery/PlugIns/jqueryFileTree/connectors/jqueryFileTree.dyalog"',(0∊⍴json)↓',',json,'}, function(file){',filefn,'});});'
     
    ∇

⍝ Modal Message
    ∇ r←{req}PopupMessage pars;ih;title;jqpars;modal;id
      req←{6::'' ⋄ req}⍬
      pars←eis pars
      (id title ih modal jqpars)←5↑pars,(⍴pars)↓'' '' '' 1 ''
      :If 0∊⍴id ⋄ id←'dlg' ⋄ :EndIf
      ih←CRLF~⍨'div'#.HTMLInput.Enclose ih
      jqpars,←(0∊⍴jqpars)↓(title ine',title:',(#.HTMLInput.quote title)),(modal/',modal:true'),',onClose:function(){$(this).dialog("destroy");}'
      r←req #.JQUI.Dialog(makeID id)title ih jqpars
    ∇

    ∇ r←{req}ModalPopup pars;ih;title;jqpars;modal;id;evt;dlgid
    ⍝ id - id of the triggering object
    ⍝ ih - innerhtml of the dialog
    ⍝ evt - event to trigger dialog
    ⍝ title - title for the dialog
    ⍝ jqpars
      req←{6::'' ⋄ req}⍬
      pars←eis pars
      (id ih evt title jqpars)←5↑pars,(⍴pars)↓'obj' '' 'click' '' ''
      dlgid←id,'dlg'
      0 #.JQUI.Dialog(makeID dlgid)'' ''('width: 600, modal: true, close: function(event, ui){$("#',dlgid,'").hide();}')
     
     
     
      ih←CRLF~⍨#.HTMLInput.quote ih
      jqpars,←(0∊⍴jqpars)↓(title ine',title:',(#.HTMLInput.quote title)),(modal/',modal:true'),',onClose:function(){$(this).dialog("destroy");}'
      r←req #.JQUI.Dialog(makeID id)title ih jqpars
    ∇

⍝ DataTables

    ∇ r←{req}DataTable pars;id;tablepars;jqpars;oname;tab;js
    ⍝ req - HTTPRequest object
    ⍝ pars - id tablepars jqpars object-name
    ⍝ id - the id for the table to be sorted
    ⍝ jqpars - TableSorter parameters
    ⍝ tablepars - parameters for the table (see #.HTMLInput.Table)
    ⍝ oname - the object name for the datatable
    ⍝ js - any additional javascript
    ⍝ updates req.Response.head and returns html
     
      :If 9=⎕NC'req'
          req.Use'DataTable'
      :EndIf
     
      pars←eis pars
      id tablepars jqpars oname js←5↑pars,(⍴pars)↓'' '' '' '' ''
      tab←'cellpadding="0" width="100%" cellspacing="0" border="0"'
      :If 0∊⍴id ⋄ id←'myDataTable' ⋄ :EndIf
      :If 0∊⍴tablepars ⋄ r←(tab,' id="',id,'"')#.HTMLInput.Enclose''
      :Else
          :If 2=⍴⍴tablepars ⋄ tablepars←,⊂tablepars ⋄ :EndIf
          tablepars←tablepars,(⍴,tablepars)↓(0 0⍴⊂'')tab'' '' 1 0 1 ⍝ see HTMLInput.Table for
          r←id #.HTMLInput.Table tablepars
      :EndIf
      r,←#.JQ.JQueryfn'dataTable'(makeID id)jqpars js oname
    ∇

    ∇ r←{DT_RowId}make_aaData data;nrecs;hdr;rows
      :If 0∊⍴data
          rows←'[]'
      :Else
          DT_RowId←{6::0 ⋄ DT_RowId}0
          nrecs←⍬⍴⍴data
          hdr←⍕¨¯1+⍳2⊃⍴data
          :If DT_RowId
              hdr,⍨←⊂'DT_RowId'
              data,⍨←⍳nrecs
          :EndIf
          rows←#.JSON.fromNVP(⊂⊂∘,¨hdr),¨¨↓⊂∘⍕¨data
      :EndIf
      r←1↓¯1↓#.JSON.fromNVP('aaData')rows
    ∇



    ∇ r←{req}JSTimer pars;id;event;delay;autostart
    ⍝ return script to implement a timed loop
    ⍝ pars - [1] id [2] event to trigger [3] delay in ms [4] autostart?
      pars←eis pars
      (id event delay autostart)←4↑pars,(⍴pars)↓'JSTimer' 'ding' 5000 1
      :If 9=⎕NC'req' ⋄ req.Use'JQuery' ⋄ :EndIf
      r←'var timer⍳; var running⍳=0; var delay⍳=',(⍕delay),';',CRLF
      r,←'function next⍳(){$("body").trigger("',event,'"); timer⍳=setTimeout("next⍳()",delay⍳);}',CRLF
      r,←'function run⍳(){if (!running⍳){running⍳=1; next⍳();}}',CRLF
      r,←'function stop⍳(){clearTimeout(timer⍳); running⍳=0;}',CRLF
      :If autostart ⋄ r,←'$(function(){run⍳();});',CRLF ⋄ :EndIf
      ((r='⍳')/r)←⊂id
      r←#.HTMLInput.JS enlist r
    ∇

    ∇ r←{req}sfChart pars;id;titles;data;jqpars;cpars;ctitle;xtitle;ytitle;n;i;points;name;chain;oname;true
    ⍝ pars - [1] id
    ⍝        [2] (chart-title, x-axis-title, y-axis-title)
    ⍝        [3] data (one row per series) [;1] series-name [;2] 2-column matrix of x,y points
    ⍝        [4] jqpars
      :If 9=⎕NC'req' ⋄ req.Use'SyncFusion' ⋄ :EndIf
      pars←eis pars
      (id titles data jqpars chain oname)←6↑pars,(⍴pars)↓''('' '' '')(0 0⍴⊂'')'' '' ''
      (ctitle xtitle ytitle)←{3↑⍵,(⍴⍵)↓'Chart Title' 'X-Axis Title' 'Y-Axis Title'}eis titles
      true←⎕NEW #.JSON.bool 1
      cpars←⎕NS''
      cpars.text←ctitle
      cpars.legend←⎕NS''
      cpars.legend.visible←true
      cpars.primaryXAxis←⎕NS''
      cpars.primaryXAxis.rangePadding←'10px'
      cpars.primaryXAxis.title←⎕NS''
      cpars.primaryXAxis.title.text←xtitle
      cpars.primaryYAxis←⎕NS''
      cpars.primaryYAxis.title←⎕NS''
      cpars.primaryYAxis.title.text←ytitle
      cpars.commonSeriesOptions←⎕NS''
      cpars.commonSeriesOptions.(type marker style)←'line'(⎕NS'')(⎕NS'')
      cpars.commonSeriesOptions.marker.(shape visible size)←'circle'true(⎕NS'')
      cpars.commonSeriesOptions.marker.size.(height width)←10
      cpars.commonSeriesOptions.style.borderwidth←2
      cpars.series←⎕NS¨(n←⊃⍴data)⍴⊂''
      :For i :In ⍳n
          (name points)←data[i;]
          cpars.series[i].name←name
          cpars.series[i].points←⎕NS¨(⊃⍴points)⍴⊂''
          cpars.series[i].points.(x y)←↓points
      :EndFor
      cpars←(1↓¯1↓#.JSON.fromNS cpars),',',jqpars
      r←#.JQ.JQueryfn'ejChart'(makeID id)cpars
    ∇

:EndNamespace