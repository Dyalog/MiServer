:Namespace JQ
    ⎕IO ⎕ML ⎕WX←1 0 3
⍝ == JQ - JQuery Utilities
⍝ For more information:
⍝ * JQuery - http://jquery.com

    CRLF←⎕UCS 13 10

    eis←{2>|≡⍵:,⊂⍵ ⋄ ⍵} ⍝ Enclose if simple
    enlist←{⎕ML←2 ⋄ ∊⍵} ⍝ APL2 style enlist
    quote←{'"'∊⍵:⍵ ⋄ '"',⍵,'"'}
    ine←{0∊⍴⍺:'' ⋄ ⍵} ⍝ if not empty

    ∇ r←{script}JQueryfn pars;jqfn;sel;jqpars;chain;script;oname
    ⍝ pars - [1] jquery function name,
    ⍝        [2] selectors,
    ⍝        [3] jquery function parameters,
    ⍝        [4] jquery function chain
    ⍝        [5] object name for the created object
    ⍝ for usage examples, see other functions in this namespace
      script←{6::1 ⋄ script}⍬
      pars←eis pars
      jqfn sel jqpars chain oname←pars,(⍴pars)↓'' '' '' '' ''
      chain,←(';'=¯1↑chain)↓';'
      sel←quote ¯2↓enlist{⍵,', '}¨eis sel
⍝      sel←quote ¯2↓enlist{'''".#'∊⍨1↑⍵:⍵,', ' ⋄ '#',⍵,', '}¨eis sel
      jqpars←#.JSON.toJQueryParameters jqpars
⍝      jqpars←{'{}'≡⊃∘(↑∘⍵)¨1 ¯1:⍵ ⋄ '{',⍵,'}'}jqpars
      r←(#.HTMLInput.JS⍣script)(oname ine'var ',oname,';'),'$(function(){',(oname ine oname,'='),'$(',sel,').',jqfn,'(',jqpars,')',chain,'});'
    ∇

    ∇ r←{script}JQuery pars;jqfn;sel;jqpars;chain;script;oname
    ⍝ pars - [1] jquery function name, [2] selectors, [3] jquery function parameters, [4] jquery function chain [5] object name for the created object
    ⍝ for usage examples, see other functions in this namespace
      script←{6::1 ⋄ script}⍬
      pars←eis pars
      jqfn sel jqpars chain oname←pars,(⍴pars)↓'' '' '' '' ''
      chain,←(';'=¯1↑chain)↓';'
      sel←quote ¯2↓enlist{⍵,', '}¨eis sel
⍝      sel←quote ¯2↓enlist{'''".#'∊⍨1↑⍵:⍵,', ' ⋄ '#',⍵,', '}¨eis sel
      r←(#.HTMLInput.JS⍣script)(oname ine'var ',oname,';'),'$(function(){',(oname ine oname,'='),'$(',sel,').',jqfn,'(',jqpars,')',chain,'});'
    ∇

    ∇ r←page On pars;delegate;selector;event;clientdata;response;script;data;cd;name;id;type;what;dtype;success;ajax;useajax
    ⍝ pars - [1] selector(s) (delegates), [2] events to bind to,  [3] data to send to server [4] id if the object whose HTML is to be updated
    ⍝ [1] - a simple character vector of selector(s) or a two element vector of (selectors delegates)
    ⍝ [2] - a character vector of events to bind
    ⍝ [3] - data to be sent to the server in the form: (name {id} type what)...
    ⍝
    ⍝       name - the name for the piece of data
    ⍝
    ⍝       id - selector for where to get the data
    ⍝
    ⍝       type - type of data to retrieve.  one of:
    ⍝              attr - data is an attribute of the selected element
    ⍝              css - data is a css setting of the selected element
    ⍝              html - data is the html content of the selected element
    ⍝              is - see jQuery.is()
    ⍝              eval - data will be the evaluation of the what parameter
    ⍝              evt - the jquery event object
    ⍝              string - just a string
    ⍝              serialize - send form data back in serialized format
    ⍝
    ⍝       what - type and what are related
    ⍝              type         what                               example of what JQ.On generates
    ⍝              attr         attribute name to return           attr("id")
    ⍝              css          css setting to return              css("background-color")
    ⍝              html         what is not used and should be ''  html()
    ⍝              is           jQuery.on selector                 is(":checked")
    ⍝              eval         javascript expression              eval("confirm('Are you sure?')")
    ⍝              evt          the element of the event object to return
    ⍝              string       the string to send back
    ⍝              serialize    the selector for the form whose data is to be serialized
    ⍝
    ⍝ [4] - response handling
    ⍝       if empty, the response is assumed to be a json array of either:
    ⍝       {(replace|append|prepend: selector),(data: "data to replace with, append, or prepend)}
    ⍝       {execute: "javascript expression"}
    ⍝       if non-empty, this parameter is the selector for the element whose content will be replaced be the server response
    ⍝ [5] - script - if non-empty, this is javascript to execute in the browser prior to the AJAX call
    ⍝ [6] - useajax - if 0 don't make an AJAX call, just execute the script
     
      :Select ⊃⎕NC'page'
      :Case 9 ⋄ page.Use'JQuery' ⋄ page←page.Page ⍝ page is the request object
      :EndSelect
      page←quote page
     
      pars←eis pars
      delegate←''
      selector event clientdata response script useajax←6↑pars,(⍴pars)↓'' '' '' '' '' 1
      :If 1<|≡selector ⋄ selector delegate←selector ⋄ delegate←', ',quote delegate :EndIf
      data←'_event: evt.type, _what: $(evt.currentTarget).attr("id")'
      :If 2=|≡clientdata ⋄ clientdata←,⊂clientdata ⋄ :EndIf
      :For cd :In clientdata
          cd←eis cd
          name id type what←4↑cd,(⍴cd)↓4⍴⊂''
          :If ~0∊⍴name
              :Select id
              :CaseList 'attr' 'css' 'html' 'is' 'serialize' 'val' ⍝ no selector specified, use evt.target
                  type what←id type
                  id←'evt.target'
              :Case 'eval'
                  type what←id type
                  id←''
              :Case 'evt'
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
              :Case 'evt'
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
     
      :If 0∊⍴response ⍝ if no response element specified
          dtype←'"json"'
          success←'success: function(obj){$.each(obj,function(i,d){if(typeof(d.replace)!=="undefined"){$(d.replace).html(d.data);}else if(typeof(d.append)!=="undefined"){$(d.append).append(d.data);}else if(typeof(d.prepend)!=="undefined"){$(d.prepend).prepend(d.data);}else if(typeof(d.execute)!=="undefined"){eval(d.execute);}});}'
      :Else
          dtype←'"html"'
          success←'success: function(d){$(',(quote response),').empty().html(d);}'
      :EndIf
     
      ajax←(script ine script,';'),useajax/'$.ajax({url: ',page,', cache: false, type: "POST", dataType: ',dtype,', data: {',data,'}, ',success,'});'
      r←#.HTMLInput.JS'$(function(){$(',(quote selector),').on(',(quote event),delegate,', function(evt){',ajax,'});});'
    ∇

:EndNamespace