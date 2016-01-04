:class ejDraggable : #._SF._ejWidget

⍝ Description:: Syncfusion Draggable widget
⍝ Constructor:: [Selector]
⍝ Selector - the jQuery/CSS selector to which to apply draggable interaction
⍝ Public Fields::
⍝ Selector - the jQuery/CSS selector to which to apply draggable interaction

    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejDraggable.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejDraggable.html'
    :field public shared readonly IntEvt←'destroy' 'drag' 'dragStart' 'dragStop' 'helper'


    ∇ Make
      :Access public
      :Implements constructor
      JQueryFn←'ejDraggable'
      InternalEvents←IntEvt
    ∇

    ∇ Make1 arg
      :Access public
      :Implements constructor
      JQueryFn←'ejDraggable'
      Selector←arg
      InternalEvents←IntEvt
    ∇

:EndClass