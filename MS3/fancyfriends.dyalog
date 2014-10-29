:Class FancyFriends : Dyalog14

    :include #.HTMLUtils

    ∇ Render;index;tc;name
      :Access public
      Add Style('.friendly' 'background-color:yellow')
      Add h2'ejTagCloud'
      Add a'Reset'('href'_Request.Page)
      tc←Add _SF.ejTagCloud
      tc.Container←'#tagcloud'
      :If 0∊⍴index←⍬ Get'index'
          SELECTED←⍳≢FRIENDS
          name←'Friend Clouds'
      :Else
          SELECTED←index~⍨index⊃FRIENDS
          name←(index⊃PEOPLE),'''s Friends'
      :EndIf
      tc.Options.titleText←name,' - ',(⍕≢SELECTED),' of ',⍕≢PEOPLE
      tc.Options.(mouseover mouseout)←⊂'onMouse'
      tc.Data←PEOPLE[SELECTED],(≢¨FRIENDS[SELECTED]),⍪(_Request.Page,'?index=')∘,¨⍕¨SELECTED
     
      Add Script ScriptFollows
⍝function onMouse(evt) {
⍝    $.ajax({
⍝        url: "fancyfriends.dyalog",
⍝        cache: false,
⍝        type: "POST",
⍝        dataType: "json",
⍝        data: {
⍝            _event: evt.type,
⍝            _what: evt.url
⍝        },
⍝        success: function (obj) {
⍝            $.each(obj, function (i, d) {
⍝                if (typeof (d.replace) !== "undefined") {$(d.replace).html(d.data);}
⍝                else if (typeof (d.append) !== "undefined") {$(d.append).append(d.data);}
⍝                else if (typeof (d.prepend) !== "undefined") {$(d.prepend).prepend(d.data);}
⍝                else if (typeof (d.execute) !== "undefined") {eval(d.execute);}
⍝            });
⍝        }
⍝    });
⍝}
    ∇

    ∇ Make
      :Access public
      :Implements constructor
      InitData 10
    ∇

    ∇ r←InitData n
      PEOPLE←n⍴'Bob' 'Bill' 'Sue' 'Alice' 'Eve' 'Oscar' 'Dan' 'Mary' 'Jack' 'Jill'
      FRIENDS←friends n
    ∇

      friends←{
  ⍝ random lists of friends for ⍵ people
          ⍵?¨⍨?2*?⍵⍴⌊2⍟⍵
      }

    ∇ r←APLJax;ind
      :Access public
      r←''
      :Select _event
      :Case 'mouseover'
          ind←tonum{1↓⍵/⍨∨\⍵='='}_what ⍝ extract index from URL
          r←Execute(∊{'$("#tagcloud .e-txt").eq(',(⍕⍵),').addClass("friendly");'}¨¯1+ind~⍨ind⊃FRIENDS)
      :Case 'mouseout'
          r←Execute'$("#tagcloud .e-txt").removeClass("friendly");'
      :EndSelect
    ∇

:EndClass