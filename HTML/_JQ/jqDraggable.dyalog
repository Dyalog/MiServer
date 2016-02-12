:class jqDraggable : #._JQ._jqUIWidget

⍝ Description:: jQueryUI Draggable interaction
⍝ Constructor:: [Selector]
⍝ Selector - the jQuery/CSS selector to which to apply draggable interaction
⍝ Public Fields::
⍝ Selector - the jQuery/CSS selector to which to apply draggable interaction

    :field public shared readonly DocBase←'https://jqueryui.com/draggable/'
    :field public shared readonly ApiLevel←3
    :field public shared readonly IntEvt←'create' 'drag' 'start' 'stop'


    ∇ Make
      :Access public
      :Implements constructor
      JQueryFn←'draggable'
      InternalEvents←IntEvt
    ∇

    ∇ Make1 arg
      :Access public
      :Implements constructor
      JQueryFn←'draggable'
      Selector←arg
      InternalEvents←IntEvt
    ∇

:EndClass