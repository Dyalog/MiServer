:Class jqm : MildPage ⍝ use the jQuery Mobile template

⍝ Set the the choices

    Breads←'White' 'Wheat' 'Pumpernickle' 'Rye'
    Meats←'Roast Beef' 'Ham' 'Turkey'
    Cheese←'Swiss' 'Provolone' 'Monterey Jack' 'Mozzarella'
    Toppings←'Lettuce' 'Tomato' 'Onion' 'Sweet Peppers' 'Hot Peppers' 'Mayo'

⍝ Define the fields that APLJax will populate

    :field public bread
    :field public meat
    :field public cheese
    :field public toppings

    ∇ r←Render req;f;p;h;rg
      :Access Public
      f←#.JQM.Create req ⍝ create the JQM page framework
      (p←f.AddPage'').UseForm'' ⍝ add a page and specify to use a form
      (h←p.AddHeader'Build Your Sandwich').Attr'data-theme' 'b'
      h.(left right)←#.JQM.((BackButton'Cancel'('data-theme' 'c'))(SubmitButton'Order'('data-theme' 'c')))
      (p.AddRadioGroup'bread'Breads'Bread').Horizontal 1
      (p.AddRadioGroup'meat'Meats'Meat').Horizontal 1
      (p.AddRadioGroup'cheese'Cheese'Cheese').Horizontal 1
      (p.AddCheckboxGroup'toppings'Toppings'Toppings').Horizontal 0
      r←f.Render
    ∇


    ∇ APLJax req
      :Access Public
      ∘∘∘
      order←bread meat cheese toppings
      ⍝ Really clever processing to follow here...
    ∇
:EndClass