:class ejListView : #._SF._ejWidget
    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejList.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejList.html' 
    :field public shared readonly IntEvt←'ajaxBeforeLoad' 'ajaxComplete' 'ajaxError' 'ajaxSuccess' 'load' 'loadComplete' 'mouseDown' 'mouseUP' 

    :field public Levels←⍬
    :field public Items←''
    :field public Hrefs←''
    :field public Title←''
    :field public Checkbox←0   
    
   ⍝ A list consists of a series of elements that are Strings or list Items
   ⍝ Each element has an anchor which may or may not have an href
   ⍝ Given the following list structure (level, description, action):
   ⍝ 1 MK       ↓
   ⍝ 2  BB     #loc
   ⍝ 2  DB      ↓
   ⍝ 3   AB    apl.dk
   ⍝ 3   RH    apl.ca
   ⍝ 1 GC       ↓
   ⍝ 2  HB     #accounts
   ⍝ 2  BC     s.r.us
   ⍝ Example:
   ⍝   M←⎕NEW ejListView ((1 2 2 3 3 1 2 2)('MK' 'BB' 'DB' 'AB' 'RH' 'GC' 'HB' 'BC')(⍬ '#loc' ⍬ 'apl.dk' 'apl.ca' ⍬ '#accounts' 's.r.us'))

    ∇ make
      :Access public
      JQueryFn←Uses←'ejListView'
      :Implements constructor     
      InternalEvents←IntEvt
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejListView'
      ⍝:If 2=|≡args ⋄ args←⊂¨args ⋄ :EndIf
      (Level Items Hrefs)←args defaultArgs Level Items Hrefs
      :Implements constructor
      InternalEvents←IntEvt
    ∇

    ∇ r←Render;link;i;li
      :Access public
      Container.Add MakeTree Level Text Href
      r←⎕BASE.Render
    ∇
:EndClass


