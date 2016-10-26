:class InputGrid : #._html.table
⍝ Description:: Dyalog Widget - produce a 2-column (or 2-row) grid of labels and inputs
⍝ Constructor:: [labels inputs | ;labels inputs]
⍝ labels   - a vector of labels
⍝ inputs   - a vector of input objects
⍝ N.B. - labels and inputs must be of equal length
⍝ Public Fields::
⍝ Border        - 1 to draw borders around grid cells
⍝ Flip          - 0 for labels on the left (vertical) or top (horizontal)
⍝                 1 for labels on the right (vertical) or bottom (horizontal)
⍝ Horizontal    - 0 for vertical layout (2-column) or 1 for horizontal layout (2-row)
⍝ Inputs        - vector of inputs
⍝ Labels        - vector of labels
⍝ Notes::
⍝ label cells are assigned a class of (id,'_label')
⍝ input cells are assigned a class of (id,'_input')
⍝ This facilitates being able to easily assign styling to the cells
⍝ Examples::
⍝ ipg←'myIpg' Add _.InputGrid ('lab1' 'lab2')(('inp1' New _.input)('inp2' New _.input))
⍝ Add _.Style '.myIpg_label' 'background-color:aliceblue' ⍝ set the label background color

    :field public Border←0
    :field public Labels←''
    :field public Inputs←''
    :field public Flip←0
    :field public Horizontal←0 ⍝ default is vertical

    ∇ make
      :Access public
      :Implements constructor :base
    ∇

    ∇ make1 args;data;sel
      :Access public
      :Implements constructor
      :If 2=⍴⍴args
          (Labels Inputs)←↓[1]args
      :Else
          args←eis args
          (Labels Inputs)←args
      :EndIf
    ∇

    ∇ html←Render;cells;rows
      :Access public
      SetId 
      Inputs←{isClass ⊃⍵:⎕NEW∘{2<⍴,⍵:(⊃⍵)({eis ⍵}(1↓⍵)) ⋄ ⍵}⍵ ⋄ ⍵}¨Inputs
      {1:⍵.id←GenId⊣⍣(⎕NULL≡⍵.id)⊢⍵.id}¨Inputs ⍝ shyly create ids where missing
      Labels←Inputs.id{'<label for="',⍺,'">',(renderIt ⍵),'</label>'}¨Labels
      cells←{⎕NEW #._html.td(⍵)}¨(,Labels),[1.1],Inputs
      cells[;1].class←⊂id,'_label'
      cells[;2].class←⊂id,'_input'
      :If Horizontal
          cells←(⌽⍣Flip)cells
          cells←⍉cells
      :ElseIf Flip
          cells←⌽cells
      :Else
          cells[;1].style←⊂'text-align:right'
      :EndIf
      rows←⎕NEW¨(⊃⍴cells)⍴#._html.tr
      rows.Add↓cells
      Content←rows.Render
      Set(⊂'border'(⍕Border))
      html←⎕BASE.Render    
    ∇
:endclass
