:Class UlSimple : MiPageSample

    ∇ Compose;frm;single;multi;btn
      :Access public
     
      intro←'This control puts a very thin cover on top of the basic HTML ul '
      intro,←' (unordered list) element, just adding a '
      intro,←'constructor that makes it easy to specify the item contents '
      intro,←'and optionally a list of URLs to be navigated to.'
     
      Add title'_HTML.Ul - Simple Example '
      Add h2'_HTML.Ul - Unordered List'
      Add _html.p intro
     
        ⍝ --- Add a simple list of fruits ---
      Add h3'Fruits'       ⍝ Put a heading before it
      fruits←'Apples' 'Bananas' 'Grapes' 'Oranges' 'Plums'
      Add _HTML.Ul fruits   ⍝ Construct Ul with a vector of vectors
     
        ⍝ --- Add a list of interesting web pages ---
      Add h3'Useful Links'
      text←'Dyalog Home' 'Dyalog Forums' 'Dyalog Blog'
      urls←'http://'∘,¨'www.dyalog.com' 'forums.dyalog.com' 'www.dyalog.com/blog'
      Add _HTML.Ul(text urls) ⍝ Construct Ul with texts and urls
    ∇

:EndClass