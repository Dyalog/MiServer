:class ejDroppable : #._SF._ejWidget

⍝ Description:: Syncfusion Droppable widget
⍝ Constructor:: [Selector]
⍝ Selector - the jQuery/CSS selector to which to apply droppable interaction
⍝ Public Fields::
⍝ Selector - the jQuery/CSS selector to which to apply droppable interaction

    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejDroppable.html'
    :field public shared readonly ApiLevel←1
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejDroppable.html' 
    :field public shared readonly IntEvt←'drop' 'out' 'over'

    ∇ make
      :Access public
      JQueryFn←Uses←'ejDroppable'
      :Implements constructor                               
      InternalEvents←IntEvt
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejDroppable'
      :Implements constructor
      Selector←args
      InternalEvents←IntEvt
    ∇
:EndClass