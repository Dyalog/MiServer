:class Style : #._html.style
⍝ Description:: Dyalog Style widget - makes for easier programatic setting of CSS styles
⍝ Constructor:: [Selector [Styles]]
⍝ Selector - the CSS selector to which to apply the style
⍝ Styles   - pair or pairs of CSS attributes and values in one of the following formats:
⍝            single pair ('font' 'APL')
⍝            vector of pairs (('background-color' 'blue')('font' 'APL'))
⍝            matrix of [;1] attributes [;2] values  (2 2⍴'background-color' 'blue' 'font' 'APL')
⍝ Public Fields::
⍝ Selector - the CSS selector to which to apply the style
⍝ Styles   - pair or pairs of CSS attributes and values
⍝ Notes::
⍝ For more information on CSS Selectors see http://www.w3schools.com/cssref/css_selectors.asp 

    :field public Selector←''
    :field public Styles←''

    ∇ Make
      :Access public
      :Implements constructor
    ∇

    ∇ Make1 params
      :Access public
      :Implements constructor
      params←eis params
      (Selector Styles)←2↑params,(⍴params)↓'' ''
    ∇

    ∇ html←Render
      :Access public
      Content←Selector,#.HTMLUtils.Styles Styles
      html←⎕BASE.Render
    ∇
:endclass