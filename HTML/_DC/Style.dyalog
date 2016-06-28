:class Style : #._html.style
⍝ Description:: Dyalog Style widget - makes for easier programatic setting of CSS styles
⍝ Constructor:: [Styles]
⍝ Styles - pairs of Selector [Style] pairs, where
⍝     Selector is the CSS selector to which to apply styling, and
⍝     Styles is one or more pairs of CSS attributes and values in one of the following formats:
⍝       - single pair ('font' 'APL')
⍝       - vector of pairs (('background-color' 'blue')('font' 'APL'))
⍝       - matrix of [;1] attributes [;2] values  (2 2⍴'background-color' 'blue' 'font' 'APL')
⍝ SelectorStylePairs - pairs of (Selector Styles) (Selector Styles)...
⍝ Styles - pairs of Selector [Style] pairs, where
⍝     Selector is the CSS selector to which to apply styling, and
⍝     Styles is one or more pairs of CSS attributes and values in one of the following formats:
⍝       - single pair ('font' 'APL')
⍝       - vector of pairs (('background-color' 'blue')('font' 'APL'))
⍝       - matrix of [;1] attributes [;2] values  (2 2⍴'background-color' 'blue' 'font' 'APL')
⍝ Notes::
⍝ For more information on CSS Selectors see http://www.w3schools.com/cssref/css_selectors.asp

    :field public Styles←''

    ∇ Make
      :Access public
      :Implements constructor
    ∇

    ∇ Make1 params
      :Access public
      :Implements constructor
      Styles←params
    ∇

    ∇ html←Render
      :Access public
      Content←∊Css∘Pad¨⍣(0<≢∊Styles)eis Styles
      html←⎕BASE.Render
    ∇

    Pad←{{⍵''}⍣(1=≡,⍵)⊢⍵} ⍝ Pad lone selectors with empty style
    Css←⊃,#.HTMLUtils.Styles∘(⊃⌽) ⍝ Make a selector-style pair into a CSS snippet

:endclass
