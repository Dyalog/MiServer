:Class UlSimple : MiPageSample
⍝ Control:: _HTML.Ul
⍝ Description:: Insert an unordered list based on an array 

    ∇ Compose;frm;single;multi;btn
      :Access public
     
      intro←'This control puts a very thin cover on top of the basic HTML ul '
      intro,←' (unordered list) element, just adding a '
      intro,←'constructor that makes it easy to specify the item contents '
      intro,←'and optionally a list of URLs to be navigated to.'
     
      Add _.title'_HTML.Ul - Simple Example '
      Add _.h2'_HTML.Ul - Unordered List'
      Add _.p intro
     
     ⍝ --- Add a simple list of fruits ---
      Add _.h3'Fruits'       ⍝ Put a heading before it
      fruits←'Apples' 'Bananas' 'Grapes' 'Oranges' 'Plums'
      Add _.Ul fruits   ⍝ Construct Ul with a vector of vectors
     
     ⍝ --- Add a list of interesting web pages ---
      Add _.h3'Useful Links'
      text←'Dyalog Home' 'Dyalog Forums' 'Dyalog Blog'
      urls←'http://'∘,¨'www.dyalog.com' 'forums.dyalog.com' 'www.dyalog.com/blog'
      Add _.Ul(text urls) ⍝ Construct Ul with texts and urls
    ∇

:EndClass