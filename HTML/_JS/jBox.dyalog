:Class jBox : #._JQ._jqWidget
⍝ Description:: JS-Widget for Tooltips
⍝ Constructor:: [[Selector] [Feature]]
⍝ Selector          - a valid jQuery-Selector (default: '.tooltip')
⍝ Feature           - what to build (Tooltip | Image)
⍝ Public Fields::
⍝ none
⍝ Examples::
⍝ jBoxSimple
⍝ jBoxAdvancedTips


    :field public shared readonly DocBase←'http://stephanwagner.me/jBox/documentation'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/jQuery/blabla.html'  ⍝ does this have any effect???
     
    :field public Selector ← '.tooltip'
    :field private Feature ← 'Tooltip'
     

    ∇ make
      :Implements constructor :base 
      :Access public
    ∇

    ∇ make1 args
      ⍝ arg: selector for elements that should be converted to tooltips
      ⍝ will do no harm if not needed..
      :Implements constructor :base 
      :Access public
      Selector←args
    ∇

    ∇ make2(arg1 arg2)
      :Implements constructor :base 
      :Access public
      (Selector Features)←arg1 arg2
    ∇

    ∇ r←Render
      :Access public
      Use'jBox'
			SetUse
			
      r←'<script>$(function(){ $('
      r,←({0<⍴⍵:'"',⍵,'").' ⋄ ' New ')}Selector),'jBox("',Feature,'"'
      opts←Options
      :If 326=⎕DR Options
          opts←#.JSON.toJQueryParameters Options
      :EndIf
      r,←(2<⍴opts)/',',opts
      r,←');});</script>'
      ⍝ Probably I could and should use
      ⍝ r←⎕Base.Render
      ⍝ but I could not figure out how get it to Render the call for $('.tooltip').jBox('Feature'[,Options]) 

    ∇

:EndClass