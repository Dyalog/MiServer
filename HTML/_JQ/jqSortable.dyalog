:Class jqSortable : #._JQ._jqUIWidget

⍝ Description:: jQueryUI Sortable widget
⍝ Constructor:: [items|selector]
⍝ items     - vector of items to make sortable
⍝ selector - the jQuery/CSS selector to which to apply sortable interaction
⍝ Public Fields::
⍝ Items     - vector of items to make sortable
⍝ Selector - the jQuery/CSS selector to which to apply sortable interaction
⍝ Examples:: 
⍝ Add _.jqSortable '#myul'             ⍝ jqSortable will use the already existing element #myul
⍝ Add _.jqSortable 'One' 'Two' 'Three' ⍝ jqSortable will build a <ul> / <li> structure
⍝ Add _.jqSortable ''                  ⍝ jqSortable will insert an empty <ul> structure where items can be dropped

    :field public shared readonly DocBase←'https://jqueryui.com/sortable/'
    :field public shared readonly ApiLevel←3
    :field public shared readonly IntEvt←'activate' 'beforeStop' 'change' 'create' 'deactivate' 'out' 'over' 'receive' 'remove' 'sort' 'start' 'stop' 'update'
    :Field Public Items←UNDEF         ⍝ vector of items


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
      InternalEvents←IntEvt
      :If 326≠⎕DR arg
      :AndIf ''≢arg
          Selector←arg
      :Else
          Items←arg
      :EndIf
    ∇

    ∇ r←Render
      :Access Public
      r←''
      :If UNDEF≢Items
          :If ''≢Selector
              id←Selector↓⍨'#'=⊃Selector
          :Else
              Selector←'#',SetId
          :EndIf
          r,←(id New _.Ul,⊂⊂Items).Render
      :EndIf
      r,←⎕BASE.Render
    ∇

:EndClass