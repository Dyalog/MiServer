:Namespace JQO
    (⎕IO ⎕ML ⎕WX)←1 0 3
⍝ == JQO - JQuery Other Utilities

    CRLF←⎕UCS 13 10
    ine←{0∊⍴⍺:'' ⋄ ⍵}  ⍝ if not empty
    eis←{0∊⍴⍵:⍵ ⋄ 2>|≡⍵:,⊂⍵ ⋄ ⍵} ⍝ Enclose if simple
    enlist←{⎕ML←2 ⋄ ∊⍵} ⍝ APL2 style enlist
    firstAfter←{pos str←⍵ ⋄ pos+1⍳⍨⍺⍷pos↓str} ⍝ return position of first occurrence after a position
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
      r,←#.JQ.JQueryfn'tablesorter'id jqpars(pager/'.tablesorterPager({container: $("#pager")})')
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
      html←{⎕ML←1 ⋄ ∊⍵}html,¨('</ul></li>')∘repeat¨end
      html←('ul id="',id,'"')#.HTMLInput.Enclose html
      html,←#.JQ.JQueryfn'treeview'id jqpars
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
      html←{⎕ML←1 ⋄ ∊⍵}html,¨('</ul></li>')∘repeat¨end
      html←CRLF,('div id="',id,'"')#.HTMLInput.Enclose'ul'#.HTMLInput.Enclose html
      html,←#.JQ.JQueryfn'jstree'id jqpars
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
      html,←#.HTMLInput.JS'$(function(){$("',id,'").fileTree({ root: "',root,'", script: "/JQuery/PlugIns/jqueryFileTree/connectors/jqueryFileTree.dyalog"',(0∊⍴json)↓',',json,'}, function(file){',filefn,'});});'
     
    ∇

⍝ Modal Message
    ∇ r←{req}PopupMessage pars;ih;title;jqpars;modal;id
      req←{6::'' ⋄ req}⍬
      pars←eis pars
      (id title ih modal jqpars)←5↑pars,(⍴pars)↓'' '' '' 1 ''
      :If 0∊⍴id ⋄ id←'dlg' ⋄ :EndIf
      ih←CRLF~⍨'div'#.HTMLInput.Enclose ih
      jqpars,←(0∊⍴jqpars)↓(title ine',title:',(#.HTMLInput.quote title)),(modal/',modal:true'),',onClose:function(){$(this).dialog("destroy");}'
      r←req #.JQUI.Dialog id title ih jqpars
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
      0 #.JQUI.Dialog dlgid'' ''('width: 600, modal: true, close: function(event, ui){$("#',dlgid,'").hide();}')
     
     
     
      ih←CRLF~⍨#.HTMLInput.quote ih
      jqpars,←(0∊⍴jqpars)↓(title ine',title:',(#.HTMLInput.quote title)),(modal/',modal:true'),',onClose:function(){$(this).dialog("destroy");}'
      r←req #.JQUI.Dialog id title ih jqpars
    ∇

⍝ DataTables

    ∇ r←{req}DataTable pars;id;tablepars;jqpars;oname;tab
    ⍝ req - HTTPRequest object
    ⍝ pars - id tablepars jqpars pager
    ⍝ id - the id for the table to be sorted
    ⍝ jqpars - TableSorter parameters
    ⍝ tablepars - parameters for the table (see #.HTMLInput.Table)
    ⍝ updates req.Response.head and returns html
     
    ⍝ Usage Notes:
    ⍝ the table is assigned a class of "tablesorter" by this function
    ⍝ the first row is considered a header row
      :If 9=⎕NC'req'
          req.Use'DataTable'
      :EndIf
     
      pars←eis pars
      id tablepars jqpars oname←4↑pars,(⍴pars)↓'' '' '' ''
      tab←'cellpadding="0" width="100%" cellspacing="0" border="0"'
      :If 0∊⍴id ⋄ id←'myDataTable' ⋄ :EndIf
      :If 0∊⍴tablepars ⋄ r←(tab,' id="',id,'"')#.HTMLInput.Enclose''
      :Else
          :If 2=⍴⍴tablepars ⋄ tablepars←,⊂tablepars ⋄ :EndIf
          tablepars←tablepars,(⍴,tablepars)↓(0 0⍴⊂'')tab'' '' 1 0 1 ⍝ see HTMLInput.Table for
          r←id #.HTMLInput.Table tablepars
      :EndIf
      r,←#.JQ.JQueryfn'dataTable'id jqpars''oname
    ∇

    ∇ r←{DT_RowId}make_aaData data;nrecs;hdr
    ⍝ data[1;] is column name
      DT_RowId←{6::0 ⋄ DT_RowId}0
      nrecs←⍬⍴⍴data
      hdr←⍕¨¯1+⍳2⊃⍴data
      :If DT_RowId
          hdr,⍨←⊂'DT_RowId'
          data,⍨←⍳nrecs
      :EndIf
      r←1↓¯1↓#.JSON.fromNVP('aaData'(#.JSON.fromNVP(⊂⊂∘,¨hdr),¨¨↓⊂∘⍕¨data))
    ∇


    :class dataTable

        :field private data      ⍝ data for the table (not required as the data make come from the server)

        :field private id        ⍝ id for the table - required

        :field private opts      ⍝ allows you to pass options without using fields defined below
                                ⍝ using this you may be able to use new datatables features before we code support for them

        ⍝ fields to mimic DataTables parameters.  See: http://datatables.net/ref
        :field private aaData
        :field private aaSorting
        :field private aaSortingFixed
        :field private aDataSort
        :field private aLengthMenu
        :field private aoSearchCols
        :field private asSorting
        :field private asStripeClasses
        :field private bAutoWidth
        :field private bDeferRender
        :field private bDestroy
        :field private bFilter
        :field private bInfo
        :field private bJQueryUI
        :field private bLengthChange
        :field private bPaginate
        :field private bProcessing
        :field private bRetrieve
        :field private bScrollAutoCss
        :field private bScrollCollapse
        :field private bScrollInfinite
        :field private bSearchable
        :field private bSort
        :field private bSortable
        :field private bSortCellsTop
        :field private bSortClasses
        :field private bStateSave
        :field private bUseRendered
        :field private bVisible
        :field private fnAddData
        :field private fnAdjustColumnSizing
        :field private fnClearTable
        :field private fnClose
        :field private fnCookieCallback
        :field private fnCreatedCell
        :field private fnCreatedRow
        :field private fnDeleteRow
        :field private fnDestroy
        :field private fnDraw
        :field private fnDrawCallback
        :field private fnFilter
        :field private fnFooterCallback
        :field private fnFormatNumber
        :field private fnGetData
        :field private fnGetNodes
        :field private fnGetPosition
        :field private fnHeaderCallback
        :field private fnInfoCallback
        :field private fnInitComplete
        :field private fnIsDataTable
        :field private fnIsOpen
        :field private fnPageChange
        :field private fnPreDrawCallback
        :field private fnRender
        :field private fnRowCallback
        :field private fnServerData
        :field private fnServerParams
        :field private fnSetColumnVis
        :field private fnSettings
        :field private fnSort
        :field private fnSortListener
        :field private fnStateLoad
        :field private fnStateLoaded
        :field private fnStateLoadParams
        :field private fnStateSave
        :field private fnStateSaveParams
        :field private fnTables
        :field private fnUpdate
        :field private fnVersionCheck
        :field private iCookieDuration
        :field private iDataSort
        :field private iDeferLoading
        :field private iDisplayLength
        :field private iDisplayStart
        :field private iScrollLoadGap
        :field private iTabIndex
        :field private mData
        :field private mRender
        :field private oLanguage_oAria_sSortAscending
        :field private oLanguage_oAria_sSortDescending
        :field private oLanguage_oPaginate_sFirst
        :field private oLanguage_oPaginate_sLast
        :field private oLanguage_oPaginate_sNext
        :field private oLanguage_oPaginate_sPrevious
        :field private oLanguage_sInfo
        :field private oLanguage_sInfoEmpty
        :field private oLanguage_sInfoFiltered
        :field private oLanguage_sInfoPostFix
        :field private oLanguage_sInfoThousands
        :field private oLanguage_sLengthMenu
        :field private oLanguage_sLoadingRecords
        :field private oLanguage_sProcessing
        :field private oLanguage_sSearch
        :field private oLanguage_sUrl
        :field private oLanguage_sZeroRecords
        :field private oSearch
        :field private sAjaxDataProp
        :field private sAjaxSource
        :field private sCellType
        :field private sClass
        :field private sContentPadding
        :field private sCookiePrefix
        :field private sDefaultContent
        :field private sDom
        :field private sName
        :field private sPaginationType
        :field private sScrollX
        :field private sScrollXInner
        :field private sScrollY
        :field private sServerMethod
        :field private sSortDataType
        :field private sTitle
        :field private sType
        :field private sWidth


        ∇ make
          :Implements constructor
          :Access public
        ∇

        ∇ make1(id)
          :Implements constructor
          :Access public
        ∇

        ∇ html←Render
          :Access private
        ∇

        ∇ r←foo
          :Access public
          r←⎕NL ¯2.2
        ∇

    :endclass

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

:EndNamespace