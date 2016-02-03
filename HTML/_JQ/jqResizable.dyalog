:Class jqResizable : #._JQ._jqUIWidget

⍝ Description:: jQueryUI Resizable widget
⍝ Constructor:: [Selector]
⍝ Selector - the jQuery/CSS selector to which to apply resizable interaction
⍝ Public Fields::
⍝ Selector - the jQuery/CSS selector to which to apply resizable interaction

    :field public shared readonly DocBase←'https://jqueryui.com/resizable/'
    :field public shared readonly ApiLevel←3
    :field public shared readonly IntEvt←'create' 'resize' 'start' 'stop'


    ∇ Make
      :Access public
      :Implements constructor
      JQueryFn←'resizable'
      InternalEvents←IntEvt
    ∇

    ∇ Make1 arg
      :Access public
      :Implements constructor
      JQueryFn←'resizable'
      Selector←arg
      InternalEvents←IntEvt
    ∇

:EndClass