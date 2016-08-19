:Namespace JQ
    (⎕IO ⎕ML)←1
⍝ == JQ - JQuery Utilities
⍝ For more information:
⍝ * JQuery - http://jquery.com

    CRLF←⎕UCS 13 10

    eis←{(,∘⊂)⍣((326∊⎕DR ⍵)<2>|≡⍵),⍵} ⍝ Enclose if simple
    enlist←{⎕ML←1 ⋄ ∊⍵} ⍝ APL2 style enlist
    quote←{'⍎'=1↑⍵:⍵ ⋄ '"'∊⍵:⍵ ⋄ '"',⍵,'"'}
    ine←{0∊⍴⍺:'' ⋄ ⍵} ⍝ if not empty

    ∇ r←{script}JQueryfn pars;jqfn;sel;jqpars;chain;script;oname;prejs;option
    ⍝ pars -
    ⍝   [1] jquery function name,
    ⍝   [2] selectors,
    ⍝   [3] jquery function parameters,
    ⍝   [4] jquery function chain,
    ⍝   [5] object name for the created object
    ⍝   [6] JavaScript to execute prior to function call
    ⍝   [7] option
    ⍝ for usage examples, see other functions in this namespace
      script←{6::⍵ ⋄ script}⍬  ⍝[1] wrap with <script>? [2]add jQuery onload $(function(){});? [3] 1=use jQuery selector, 0=use JavaScript New
      script←3↑script,(⍴,script)↓1 1 1
      pars←eis pars
      jqfn sel jqpars chain oname prejs option←pars,(⍴pars)↓'' '' '' '' '' '' ''
      chain,←(';'=¯1↑chain)↓';'
      sel←quote ¯2↓enlist{⍵,', '}¨eis sel
      :If 9=|⎕NC'jqpars'
          jqpars←#.JSON.toJQueryParameters jqpars
      :ElseIf '{'≠1↑(+/∧\jqpars∊' ',CRLF)↓jqpars
          jqpars←'{',jqpars,'}'
      :EndIf
      :If ~0∊⍴option
          jqpars,⍨←(quote option),', '
      :EndIf
      r←script[3]{⍺:'$(',sel,').',⍵ ⋄ 'new ',⍵}jqfn,'(',jqpars,')',chain
      r←script[2]{⍺:'$(function(){',⍵,'});' ⋄ ⍵}(prejs ine prejs,(';'=¯1↑prejs)↓';'),(oname ine oname,' = '),r
      r←script[1]{⍺:#.HTMLInput.JS ⍵ ⋄ ⍵}(oname ine'var ',oname,';'),r
    ∇

    ∇ r←page On pars;delegate;selector;event;clientdata;response;script;data;cd;name;id;type;what;dtype;success;ajax;useajax;jquerywrap;scriptwrap;hourglass;hg;removehg;status
    ⍝ pars - [1] selector(s) (delegates), [2] events to bind to,  [3] data to send to server [4] id if the object whose HTML is to be updated
    ⍝ [1] - a simple character vector of selector(s) or a two element vector of (selectors delegates)
    ⍝ [2] - a character vector of events to bind
    ⍝ [3] - data to be sent to the server in the form: (name {id} type what)...
    ⍝
    ⍝       name - the name for the piece of data - if 'serialize', then serialize all form data on the page
    ⍝
    ⍝       id - selector for where to get the data
    ⍝
    ⍝       type - type of data to retrieve.  one of:
    ⍝              attr - data is an attribute of the selected element
    ⍝              css - data is a css setting of the selected element
    ⍝              html - data is the html content of the selected element
    ⍝              val - the value if it's an input element
    ⍝              is - see jQuery.is()
    ⍝              eval - data will be the evaluation of the what parameter
    ⍝              event - the jquery event object
    ⍝              string - just a string
    ⍝              serialize - send form data back in serialized format
    ⍝
    ⍝       what - type and what are related as follows:
    ⍝              type         what                               example of what JQ.On generates
    ⍝              ----         ----                               -------------------------------
    ⍝              attr         attribute name to return           attr("id")
    ⍝              css          css setting to return              css("background-color")
    ⍝              html         (not used - should be '')          html()
    ⍝              val          (not used - should be '')          val()
    ⍝              is           jQuery.on selector                 is(":checked")
    ⍝              eval         javascript expression              eval("confirm('Are you sure?')")
    ⍝              event        the element of the event object to return
    ⍝              string       the string to send back
    ⍝              serialize    the selector for the form whose data is to be serialized
    ⍝
    ⍝ [4] - response handling
    ⍝       if empty, the response is assumed to be a json array of either:
    ⍝       {(replace|append|prepend: selector),(data: "data to replace with, append, or prepend)}
    ⍝       {execute: "javascript expression"}
    ⍝       if non-empty, this parameter is the selector for the element whose content will be replaced by the server response
    ⍝ [5] - script - if non-empty, this is javascript to execute in the browser prior to the AJAX call
    ⍝ [6] - useajax - if 0 don't make an AJAX call, just execute the script
    ⍝ [7] - jQueryWrap - if 0, don't wrap with $(function(){...}
    ⍝ [8] - ScriptWrap - if 0, don't wrap with <script>...</script>
    ⍝ [9] - Hourglass - if 1, display hourglass cursor during AJAX call
     
     
      :Select ⊃⎕NC'page'
      :Case 9 ⋄ page.Use'JQuery' ⋄ page←page.Page ⍝ page is the request object
      :EndSelect
      page←quote page
     
      pars←eis pars
      delegate←''
      selector event clientdata response script useajax jquerywrap scriptwrap hourglass←9↑pars,(⍴pars)↓'' '' '' '' '' 1 1 1 1
      :If 1<|≡selector ⋄ selector delegate←selector ⋄ delegate←', ',quote delegate ⋄ :EndIf
      data←'_event: event.type, _what: '
      data,←'(("undefined" == typeof($(event.currentTarget).attr("name")) ? $(event.currentTarget).attr("id") : $(event.currentTarget).attr("name")))'
      data,←', _value: $(event.currentTarget).val()'
      data,←', _selector: "',selector,'"'
      clientdata←eis clientdata ⍝ :If 2=|≡clientdata ⋄ clientdata←,⊂clientdata ⋄ :EndIf
      :If 0∊⍴clientdata
      :OrIf (1=⍴clientdata)∧'_callback'≡⊃⊃clientdata
          data,←',_serialized: $("form").serialize()'
      :EndIf
      :For cd :In clientdata
          cd←eis cd
          (name id type what)←4↑cd,(⍴cd)↓4⍴⊂''
          :If name≡'serialize'
              (name id type what)←4↑(⊂''),name id type
          :EndIf
          :If (~0∊⍴name)∨(⊂'serialize')∊id type
              :Select id
              :CaseList 'attr' 'css' 'html' 'is' 'val' ⍝ no selector specified, use event.target
                  type what←id type
                  id←'event.target'
              :Case 'serialize'
                  type id←id type
                  :If 0∊⍴id ⋄ id←'form' ⋄ :EndIf
                  id←quote id
              :Case 'eval'
                  type what←id type
                  id←''
              :Case 'event'
                  type what←id type
                  id←''
              :Case 'string'
                  type what←id(quote type)
                  id←''
              :Case ''
                  id←quote'#',name
              :Else
                  id←quote id
              :EndSelect
     
              :Select type
              :Case 'eval'
                  type←what
              :Case 'event'
                  type←type,'.',what
              :Case ''
                  type←'val()'
              :Case 'string'
                  type←what
              :Else
                  :If type≡'serialize'
                      name,←'_serialized'
                  :EndIf
                  type←type,'(',(what ine quote what),')'
              :EndSelect
              data,←',',name,': ',(id ine'$(',id,').'),type
          :EndIf
      :EndFor
     
      (hg removehg)←hourglass∘{⍺:'document.body.style.cursor="',⍵,'";' ⋄ ''}¨'wait' 'default'
     
      :If 0∊⍴response ⍝ if no response element specified
          dtype←'"json"'
          success←'success: function(obj){APLJaxReturn(obj);',removehg,'}'
      :Else
          dtype←'"html"'
          success←'success: function(d){$(',(quote response),').empty().html(d);',removehg,'}'
      :EndIf
     
      status←'statusCode:{ 408: function(){alert("Session timed out");',removehg,'}}'
     
      ajax←script ine script,';'
      ajax,←useajax/hg,'$.ajax({url: ',page,', cache: false, type: "POST", dataType: ',dtype,', data: {',data,'}, ',success,', ',status,'});'
      r←'$(',(quote selector),').on(',(quote event),delegate,', function(event){',ajax,'});'
      :If jquerywrap ⋄ r←'$(function(){',r,'});' ⋄ :EndIf
      :If scriptwrap ⋄ r←#.HTMLInput.JS r ⋄ :EndIf
    ∇

    :section Position

    ∇ r←selector Position args;inds;mask;parameters;my;at;of;collision;within;q;tmp
      ⍝ selector - jQuery selector
      ⍝ args - position information per jQueryUI's Position widget http://api.jqueryui.com/position/
      ⍝        can be in any of the following forms
      ⍝      1) positional (my at of collision within)  N.B. we don't use the "using" parameter
      ⍝         example:  myDiv Position 'left top' 'right bottom' '#otherElement'
      ⍝                   positions myDiv's top left corner at the bottom right corner of the element with id "otherElement"
      ⍝      2) paired
      ⍝                   myDiv Position 'my' 'left top' 'at' 'right bottom' 'of' '#otherElement'
      ⍝                   myDiv Position ('my' 'left top') ('at' 'right bottom') ('of' '#otherElement')
      ⍝                   myDiv Position 3 2⍴'my' 'left top' 'at' 'right bottom' 'of' '#otherElement'
      ⍝ Note: positional arguments are in form horizontal (left center right) vertical (top center bottom)
     
      parameters←'my' 'at' 'of' 'collision' 'within'
      q←{1⌽'''''',{⍵/⍨1+''''=⍵}⍕⍵}
      :If 2=⍴⍴args ⍝ matrix
          args←,args
      :ElseIf 3=≡args
          args←⊃,/args
      :EndIf
      args←eis args
      inds←parameters⍳args
      :If ∨/mask←inds≤⍴parameters
          :If mask≡(2×+/mask)⍴1 0
              parameters←mask/args
              args←(1⌽mask)/args
          :EndIf
      :Else
          parameters←(⍴args)↑parameters
      :EndIf
      tmp←⎕NS''
      parameters(tmp{⍺⍺⍎⍺,'←',q ⍵})¨args
      r←0 JQueryfn'position'selector tmp
    ∇

    :endsection

    :section APLJax helpers (for legacy pages)
    ∇ r←selector Replace content
      r←⊂('replace'selector)('data'content)
    ∇
    ∇ r←selector Append content
      r←⊂('append'selector)('data'content)
    ∇
    ∇ r←selector Prepend content
      r←⊂('prepend'selector)('data'content)
    ∇
    ∇ r←Execute content
      r←⊂('execute'content)
    ∇
    :endsection
:EndNamespace
