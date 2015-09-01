:class jqDroppable : #._JQ._jqUIWidget

⍝ Description:: jQueryUI Droppable widget
⍝ Constructor:: [Selector [Accept]]
⍝ Selector - the jQuery/CSS selector to which to apply droppable interaction
⍝ Accept   - the jQuery/CSS selector for items which can be dropped here
⍝ Public Fields::
⍝ Selector - the jQuery/CSS selector to which to apply droppable interaction
⍝ Accept   - the jQuery/CSS selector for items which can be dropped here

    :field public shared readonly DocBase←'https://jqueryui.com/droppable/'
    :field public shared readonly ApiLevel←3
    :field public shared readonly IntEvt←'activate' 'create' 'deactivate' 'drop' 'out' 'over'
    :field public Accept←'*'

    ∇ Make
      :Access public
      :Implements constructor
      JQueryFn←'droppable'
      InternalEvents←IntEvt
    ∇

    ∇ Make1 arg
      :Access public
      :Implements constructor
      JQueryFn←'droppable'
      (Selector Accept)←arg defaultArgs'' '*'
      InternalEvents←IntEvt
    ∇

    ∇ r←Render
      :Access public
      'accept'Set Accept
      r←⎕BASE.Render
    ∇


:EndClass