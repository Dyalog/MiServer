:Namespace _html

    ⍝∇:require =\HtmlElement

    ∇ r←eis w
      r←{2>|≡⍵:,⊂⍵ ⋄ ⍵}w ⍝ Enclose if simple
    ∇

    :class a : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'a'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'a' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'a' content attr
        ∇
    :endclass

    :class abbr : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'abbr'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'abbr' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'abbr' content attr
        ∇
    :endclass

    :class acronym : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'acronym'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'acronym' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'acronym' content attr
        ∇
    :endclass

    :class address : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'address'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'address' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'address' content attr
        ∇
    :endclass

    :class area : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'area'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'area' arg
        ∇

    :endclass

    :class article : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'article'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'article' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'article' content attr
        ∇
    :endclass

    :class aside : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'aside'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'aside' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'aside' content attr
        ∇
    :endclass

    :class audio : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'audio'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'audio' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'audio' content attr
        ∇
    :endclass

    :class b : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'b'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'b' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'b' content attr
        ∇
    :endclass

    :class base : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'base'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'base' arg
        ∇
    :endclass

    :class bdi : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'bdi'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'bdi' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'bdi' content attr
        ∇
    :endclass

    :class bdo : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'bdo'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'bdo' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'bdo' content attr
        ∇
    :endclass

    :class big : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'big'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'big' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'big' content attr
        ∇
    :endclass

    :class blockquote : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'blockquote'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'blockquote' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'blockquote' content attr
        ∇
    :endclass

    :class body : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'body'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'body' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'body' content attr
        ∇
    :endclass

    :class br : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'br'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'br' arg
        ∇
    :endclass

    :class button : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'button'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'button' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'button' content attr
        ∇
    :endclass

    :class canvas : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'canvas'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'canvas' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'canvas' content attr
        ∇
    :endclass

    :class caption : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'caption'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'caption' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'caption' content attr
        ∇
    :endclass

    :class cite : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'cite'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'cite' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'cite' content attr
        ∇
    :endclass

    :class code : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'code'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'code' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'code' content attr
        ∇
    :endclass

    :class col : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'col'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'col' arg
        ∇
    :endclass

    :class colgroup : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'colgroup'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'colgroup' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'colgroup' content attr
        ∇
    :endclass

    :class command : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'command'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'command' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'command' content attr
        ∇
    :endclass

    :class datalist : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'datalist'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'datalist' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'datalist' content attr
        ∇
    :endclass

    :class dd : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'dd'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'dd' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'dd' content attr
        ∇
    :endclass

    :class del : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'del'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'del' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'del' content attr
        ∇
    :endclass

    :class details : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'details'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'details' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'details' content attr
        ∇
    :endclass

    :class dfn : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'dfn'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'dfn' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'dfn' content attr
        ∇
    :endclass

    :class div : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'div'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'div' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'div' content attr
        ∇
    :endclass

    :class dl : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'dl'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'dl' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'dl' content attr
        ∇
    :endclass

    :class dt : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'dt'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'dt' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'dt' content attr
        ∇
    :endclass

    :class em : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'em'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'em' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'em' content attr
        ∇
    :endclass

    :class embed : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'embed'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'embed' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'embed' content attr
        ∇
    :endclass

    :class fieldset : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'fieldset'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'fieldset' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'fieldset' content attr
        ∇
    :endclass

    :class figcaption : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'figcaption'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'figcaption' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'figcaption' content attr
        ∇
    :endclass

    :class figure : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'figure'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'figure' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'figure' content attr
        ∇
    :endclass

    :class footer : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'footer'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'footer' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'footer' content attr
        ∇
    :endclass

    :class form : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'form'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'form' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'form' content attr
        ∇
    :endclass

    :class h1 : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'h1'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'h1' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'h1' content attr
        ∇
    :endclass

    :class h2 : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'h2'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'h2' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'h2' content attr
        ∇
    :endclass

    :class h3 : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'h3'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'h3' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'h3' content attr
        ∇
    :endclass

    :class h4 : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'h4'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'h4' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'h4' content attr
        ∇
    :endclass

    :class h5 : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'h5'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'h5' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'h5' content attr
        ∇
    :endclass

    :class h6 : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'h6'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'h6' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'h6' content attr
        ∇
    :endclass

    :class head : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'head'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'head' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'head' content attr
        ∇
    :endclass

    :class header : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'header'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'header' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'header' content attr
        ∇
    :endclass

    :class hgroup : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'hgroup'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'hgroup' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'hgroup' content attr
        ∇
    :endclass

    :class hr : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'hr'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'hr' arg
        ∇
    :endclass

    :class html : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'html'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'html' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'html' content attr
        ∇
    :endclass

    :class i : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'i'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'i' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'i' content attr
        ∇
    :endclass

    :class iframe : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'iframe'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'iframe' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'iframe' content attr
        ∇
    :endclass

    :class img : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'img'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'img' arg
        ∇
    :endclass

    :class input : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'input'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'input' arg
        ∇
    :endclass

    :class ins : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'ins'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'ins' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'ins' content attr
        ∇
    :endclass

    :class kbd : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'kbd'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'kbd' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'kbd' content attr
        ∇
    :endclass

    :class keygen : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'keygen'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'keygen' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'keygen' content attr
        ∇
    :endclass

    :class label : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'label'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'label' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'label' content attr
        ∇
    :endclass

    :class legend : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'legend'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'legend' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'legend' content attr
        ∇
    :endclass

    :class li : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'li'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'li' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'li' content attr
        ∇
    :endclass

    :class link : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'link'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'link' arg
        ∇
    :endclass

    :class map : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'map'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'map' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'map' content attr
        ∇
    :endclass

    :class mark : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'mark'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'mark' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'mark' content attr
        ∇
    :endclass

    :class menu : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'menu'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'menu' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'menu' content attr
        ∇
    :endclass

    :class meta : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'meta'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'meta' arg
        ∇
    :endclass

    :class meter : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'meter'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'meter' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'meter' content attr
        ∇
    :endclass

    :class nav : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'nav'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'nav' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'nav' content attr
        ∇
    :endclass

    :class noscript : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'noscript'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'noscript' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'noscript' content attr
        ∇
    :endclass

    :class object : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'object'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'object' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'object' content attr
        ∇
    :endclass

    :class ol : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'ol'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'ol' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'ol' content attr
        ∇
    :endclass

    :class optgroup : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'optgroup'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'optgroup' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'optgroup' content attr
        ∇
    :endclass

    :class option : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'option'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'option' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'option' content attr
        ∇
    :endclass

    :class output : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'output'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'output' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'output' content attr
        ∇
    :endclass

    :class p : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'p'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'p' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'p' content attr
        ∇
    :endclass

    :class param : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'param'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'param' arg
        ∇
    :endclass

    :class pre : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'pre'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'pre' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'pre' content attr
        ∇
    :endclass

    :class progress : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'progress'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'progress' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'progress' content attr
        ∇
    :endclass

    :class q : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'q'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'q' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'q' content attr
        ∇
    :endclass

    :class rp : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'rp'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'rp' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'rp' content attr
        ∇
    :endclass

    :class rt : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'rt'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'rt' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'rt' content attr
        ∇
    :endclass

    :class ruby : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'ruby'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'ruby' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'ruby' content attr
        ∇
    :endclass

    :class s : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 's'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 's' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 's' content attr
        ∇
    :endclass

    :class samp : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'samp'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'samp' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'samp' content attr
        ∇
    :endclass

    :class script : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'script'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'script' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'script' content attr
        ∇
    :endclass

    :class section : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'section'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'section' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'section' content attr
        ∇
    :endclass

    :class select : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'select'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'select' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'select' content attr
        ∇
    :endclass

    :class small : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'small'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'small' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'small' content attr
        ∇
    :endclass

    :class source : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'source'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'source' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'source' content attr
        ∇
    :endclass

    :class span : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'span'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'span' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'span' content attr
        ∇
    :endclass

    :class strong : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'strong'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'strong' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'strong' content attr
        ∇
    :endclass

    :class style : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'style'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'style' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'style' content attr
        ∇
    :endclass

    :class sub : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'sub'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'sub' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'sub' content attr
        ∇
    :endclass

    :class summary : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'summary'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'summary' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'summary' content attr
        ∇
    :endclass

    :class sup : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'sup'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'sup' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'sup' content attr
        ∇
    :endclass

    :class table : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'table'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'table' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'table' content attr
        ∇
    :endclass

    :class tbody : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'tbody'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'tbody' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'tbody' content attr
        ∇
    :endclass

    :class td : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'td'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'td' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'td' content attr
        ∇
    :endclass

    :class textarea : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'textarea'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'textarea' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'textarea' content attr
        ∇
    :endclass

    :class tfoot : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'tfoot'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'tfoot' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'tfoot' content attr
        ∇
    :endclass

    :class th : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'th'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'th' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'th' content attr
        ∇
    :endclass

    :class thead : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'thead'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'thead' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'thead' content attr
        ∇
    :endclass

    :class time : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'time'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'time' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'time' content attr
        ∇
    :endclass

    :class title : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'title'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'title' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'title' content attr
        ∇
    :endclass

    :class tr : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'tr'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'tr' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'tr' content attr
        ∇
    :endclass

    :class track : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'track'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'track' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'track' content attr
        ∇
    :endclass

    :class tt : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'tt'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'tt' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'tt' content attr
        ∇
    :endclass

    :class u : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'u'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'u' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'u' content attr
        ∇
    :endclass

    :class ul : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'ul'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'ul' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'ul' content attr
        ∇
    :endclass

    :class var : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'var'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'var' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'var' content attr
        ∇
    :endclass

    :class video : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'video'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'video' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'video' content attr
        ∇
    :endclass

    :class wbr : #.HtmlElement
        ∇ make
          :Access public
          :Implements constructor :Base 'wbr'
        ∇

        ∇ make1 arg
          :Access public
          :Implements constructor :Base 'wbr' arg
        ∇

        ∇ make2(content attr)
          :Access public
          :Implements constructor :Base 'wbr' content attr
        ∇
    :endclass
:EndNamespace