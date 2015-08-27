:Class A : #._html.a
⍝ Description:: Dyalog Hyperlink widget based on HTML <a> tag
⍝ Constructor:: [content [href]]
⍝ content - the displayed content for the link
⍝ href    - the URL for the link (default is '#')
⍝ Public Fields::
⍝ Href    - the URL for the link (default is '#')
⍝ Notes::
⍝ If the content begins with 'http' and the Href is not specifed then the content is used as the URL as well 

    :field public Href←''

    ∇ make
      :Access public                                                  
      :Implements constructor
    ∇

    ∇ make1 args
      :Access public
      :Implements constructor
      (Content Href)←args defaultArgs'' ''
    ∇

    ∇ r←Render
      :Access public
      :If 0∊⍴Href
          :If 'http'≡#.Strings.lc 4↑Content
              'href'Set Content
          :Else
              'href'Set'#'
          :EndIf
      :Else
          'href'Set Href
      :EndIf
      r←⎕BASE.Render
    ∇

:EndClass