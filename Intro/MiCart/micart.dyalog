:Class MiCart : MiPage

    :Include #.HTMLInput
    :Field Public Instance Action←''

⍝ Build the product inventory
⍝ in a real application, this would come from a database of some sort
    products←'Apple' 'Banana' 'Lemon' 'Orange' 'Bear' 'Doll' 'Yoyo' 'Basketball' 'Football' 'Volleyball'
    categories←'Fruits' 'Toys' 'Sporting Goods'
    prices←.5 .6 .7 .8 5.5 4.5 2.5 10 11 12
    prodcats←4 3 3/catids←1 2 3
    productids←#.Strings.lc ¨products
    images←'images/'∘,∘(,∘'.jpg')¨productids
    prodlabels←products,¨' - &euro;'∘,¨1↓¨0 2∘⍕¨prices

⍝ Initialize the shopping cart [;1] product index [;2] quantity [;3] cost
    mycart←0 3⍴0
    totalcost←0

    ∇ Render req;style;html;sections;cart;catalog;cartOptions;id
      :Access Public
      :If ~0∊⍴mycart
      :AndIf 'Buy '≡4↑Action
          ⎕←'Order placed for €',2⍕+/mycart[;3]
          mycart←0⌿mycart
      :EndIf
     
      style←'#products'MakeStyle'float' 'left' 'width' '400px' 'height' '350px' 'margin-right' '2em'
      style,←CRLF,'#cart'MakeStyle'width' '300px' 'float' 'right'
      style req.Style''
     
      catalog←'h1 class="ui-widget-header"'Enclose'Products'
      sections←MakeSection¨catids
      catalog,←req #.JQUI.Accordion'catalog'categories sections'fillSpace: true'
      catalog,←#.JQUI.Draggable'#catalog img'
      catalog←'div id="products"'Enclose catalog
     
      cart←'h1 class="ui-widget-header"'Enclose'My Cart','div style="font-size:50%"'Enclose'Drag Items Here'
      cart,←req('post'Form)'div id="details"'Enclose''
      cart←'div id="cart"'Enclose cart
      cart,←req #.JQUI.Droppable'#cart h1' '#catalog img' '#details'
     
      html←catalog,cart
      req.Return'div style="height: 450px"'Enclose html
    ∇

    ∇ APLJax req;id
      :Access Public
      :If ~0∊⍴id←req.GetData'drag'
          req.Return AddToCart id
      :EndIf
    ∇

    ∇ r←MakeSection catid;alt;img;id;mask;imgs
      ⍝ Return <ul> of <li> wih labels and images for all items in a category
      mask←catid=prodcats
      (alt img id)←(⊂mask)/¨prodlabels images productids
      imgs←'<img id="'∘,¨id,¨'" src="'∘,¨img,¨'" title="'∘,¨alt,¨'" alt="'∘,¨(,∘'"/>')¨alt
      imgs←imgs,¨2 SP¨alt
      r←'ul'Enclose'li'∘Enclose¨imgs
    ∇

    ∇ html←AddToCart id;ind;cartind;fmtcart;stuff
      ind←productids⍳id←⊂id
      cartind←mycart[;1]⍳ind
      :If cartind>⍬⍴⍴mycart
          mycart⍪←ind 0 0
      :EndIf
      mycart[cartind;2 3]+←1,prices[ind]
      totalcost←+/mycart[;3]
      html←BR'Cart Total: &euro;',1↓0 2⍕totalcost
     
      ⍝ Format form with cart contents in a table and a "Buy" button
      fmtcart←mycart
      stuff←⊃fmtcart[;1]←products[fmtcart[;1]]
      :If 1≠1↑⍴mycart ⋄ stuff←'goods' ⋄ :EndIf
      fmtcart←fmtcart[⎕AV⍋↑fmtcart[;1];]
      fmtcart[;3]←'&euro;'∘,¨1↓¨0 2∘⍕¨fmtcart[;3]
      fmtcart←'Item' 'Qty' 'Cost'⍪fmtcart
      fmtcart←'&nbsp;'∘,¨fmtcart,¨⊂'&nbsp;'
      html,←2 BR Table fmtcart'border="1" cellpadding="3"' ''
      html,←BR'Action'Submit'Buy the ',stuff,'!'
      html←'div style="font-size:1.2em;"'Enclose html
    ∇

:EndClass