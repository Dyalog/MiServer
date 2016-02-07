:Class jqSortable : #._JQ._jqUIWidget

⍝ Description:: jQueryUI Sortable widget
⍝ Constructor:: [Selector]
⍝ Selector - the jQuery/CSS selector to which to apply sortable interaction
⍝ Public Fields::
⍝ Selector - the jQuery/CSS selector to which to apply sortable interaction

    :field public shared readonly DocBase←'https://jqueryui.com/sortable/'
    :field public shared readonly ApiLevel←3
    :field public shared readonly IntEvt←'activate' 'beforeStop' 'change' 'create' 'deactivate' 'out' 'over' 'receive' 'remove' 'sort' 'start' 'stop' 'update'


    ∇ Make
      :Access public
      :Implements constructor
      JQueryFn←'sortable'
      InternalEvents←IntEvt
    ∇

    ∇ Make1 arg
      :Access public
      :Implements constructor
      JQueryFn←'sortable'
      Selector←arg
      InternalEvents←IntEvt
    ∇


:EndClass