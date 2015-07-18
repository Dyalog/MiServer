:Class StackPanel : #._html.table 
⍝ Description: Dyalog control to emulate WPF StackPanel
⍝ Constructor: [items]
⍝ items - vector of content for each cell of the StackPanel
⍝ Public Fields:
⍝ Items      - vector of references to table cell (<td>) containers for each item
⍝ Horizontal - Boolean indicating whether cell orientation is horizontal (1) or vertical (0)
⍝ Public Methods:
⍝ Add   - ref ← Add itemcontent
⍝         ref is a reference to the content
⍝ Usage Notes:
⍝ The table cells that make up the StackPanel may be accessed via Items  
    :Field public Items←⍬
    :Field public Horizontal←0 ⍝ orientation

    ∇ Make0
      :Access public
      :Implements constructor
    ∇

    ∇ Make1 args
      :Access public
      :Implements constructor
      args←eis args
      Items←{⎕NEW #._html.td ⍵}¨args
    ∇

    ∇ {r}←{attr}Add item;td
      :Access public
      attr←{6::⍵ ⋄ attr}''
      r←attr(td←⎕NEW #._html.td).Add item ⍝ #.HtmlElement.Add
      Items,←td
    ∇

    ∇ html←Render
      :Access public
      Items←Itemize¨Items
      :If (,Horizontal)≡,1
          (Content←⎕NEW #._html.tr).Add Items
      :Else
          (Content←⎕NEW¨(⍴Items)⍴#._html.tr).Add Items
      :EndIf
      html←⎕BASE.Render
    ∇

    ∇ r←Itemize item
      :If 0=⍴⍴item
      :AndIf isInstance item
      :AndIf #._html.td≡⊃⊃⎕CLASS item
          r←item
      :Else
          (r←⎕NEW #._html.td).Add item
      :EndIf
    ∇

:endclass