:Class ejListManager : #._DC.StackPanel
⍝ Description:: Dyalog ListManager widget using Syncfusion ListBoxes
⍝ Constructor:: [leftItems [rightItems [useButtons]]]
⍝ leftItems       - vector of char vectors
⍝                   or matrix of field definitions with field types as the first row
⍝ rightItems      - vector of char vectors
⍝                   or matrix of field definitions with field types as the first row
⍝ useButtons      - Boolean indicating whether to use buttons to move things between lists
⍝ Public Fields::
⍝ Left            - the left ejListBox
⍝ Right char vectors
⍝                   or matrix of field definitions
⍝ Selected        - integer or Boolean vector indicating which items are selected
⍝ Examples::
⍝ ejListBox
⍝ ejListBox ('Item1' 'Item3' 'Item3')

    :Field Public Shared Readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejListBox.html'
    :Field Public Shared Readonly ApiLevel←3
    :Field Public Shared Readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejListBox.html'

    :field public Left               ⍝ left ListBox
    :field public Right              ⍝ right ListBox
    :field public UseButtons←0       ⍝ use buttons to move items between lists?
    :field public Width←200          ⍝ width of the ListBoxes
    :field public Height←300         ⍝ height of the ListBoxes
    :field public Gap←50             ⍝ space between the ListBoxes
    :field public Captions←'' ''     ⍝ Captions to appear over the ListBoxex

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
      (⍕¨Width Height)∘{'width' 'height'⍵.Set ⍺}¨Left Right
      Horizontal←1
    ∇

    ∇ r←Render;butt;rgt;lft
      :Access public
      Content←⍬
      SetId
      {'allowDragAndDrop'⍵.Set _true}¨Left Right
      lft rgt←Left Right
      :If ∨/~0∘∊∘⍴¨Captions
          lft rgt←Captions{New #._DC.StackPanel ⍺ ⍵}¨Left Right
      :EndIf
      Add¨lft(butt←New #._html.div)rgt
      'width'(Items[2]).Set Gap
      r←⎕BASE.Render
    ∇

:EndClass