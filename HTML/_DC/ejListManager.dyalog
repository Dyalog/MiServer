:Class ejListManager : #._DC.StackPanel
⍝ Description:: Dyalog ListManager widget using Syncfusion ListBoxes
⍝ Constructor:: [leftItems [rightItems [useButtons]]]
⍝ leftItems       - vector of char vectors
⍝                   or matrix of field definitions with field types as the first row
⍝ rightItems      - vector of char vectors
⍝                   or matrix of field definitions with field types as the first row
⍝ selected        - integer or Boolean vector indicating which items are selected
⍝ Public Fields::
⍝ Items           - vector of char vectors
⍝                   or matrix of field definitions
⍝ Selected        - integer or Boolean vector indicating which items are selected
⍝ Examples::
⍝ ejListBox
⍝ ejListBox ('Item1' 'Item3' 'Item3')

    :Field Public Shared Readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejListBox.html'
    :Field Public Shared Readonly ApiLevel←3
    :Field Public Shared Readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejListBox.html'

    :field public Left
    :field public Right
    :field public UseButtons←0
    :field public width←200
    :field public height←300
    :field public gutterWidth←50

    ∇ make
      :Access public
      JQueryFn←Uses←'ejListBox'
      :Implements constructor
      Left←⎕NEW #._SF.ejListBox
      Right←⎕NEW #._SF.ejListBox
      Horizontal←1
    ∇

    ∇ makec args;x;left;right
      :Access public
      :If 2=≡args ⋄ args←,⊂args ⋄ :EndIf
      args←eis args
      JQueryFn←Uses←'ejListBox'
      ContainerType←'ul'
      :Implements constructor
      (left right UseButtons)←args defaultArgs ⍬ ⍬ 0
      (Left←⎕NEW #._SF.ejListBox left).Side←1
      (Right←⎕NEW #._SF.ejListBox right).Side←2
      (⍕¨width height)∘{'width' 'height'⍵.Set ⍺}¨Left Right
      Horizontal←1
    ∇

    ∇ r←Render;butt
      :Access public
      SetId
      {'allowDragAndDrop'⍵.Set _true}¨Left Right
      Items←1⌽Right,Left,butt←(id,'_Buttons')New #._html.div
      'width'butt.Set gutterWidth
      r←⎕BASE.Render
    ∇

:EndClass