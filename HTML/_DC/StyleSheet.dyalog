:class StyleSheet : #._html.link
⍝ Description:: Dyalog StyleSheet widget - creates a link to a stylesheet
⍝ Constructor:: [href]
⍝ href   - the URL to the CSS file
⍝ Public Fields::
⍝ href   - the URL to the CSS file
⍝ Notes:: The primary utility of this widget is that it specifies
⍝         all the other required attributes for the link

    :field public href←''

    ∇ Make
      :Access public
      :Implements constructor
    ∇

    ∇ Make1 params
      :Access public
      :Implements constructor
      href←params
    ∇

    ∇ html←Render
      :Access public
      Set(('href'href)('rel' 'stylesheet')('type' 'text/css'))
      html←⎕BASE.Render
    ∇
:endclass