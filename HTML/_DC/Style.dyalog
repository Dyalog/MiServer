:class Style : #._html.style
⍝ Description:: Dyalog Style widget - makes for easier programatic setting of CSS styles
⍝ Constructor:: [styles]
⍝ styles - pairs of Selector [Style] pairs, where
⍝     Selector is the CSS selector to which to apply styling, and
⍝     Styles is one or more pairs of CSS attributes and values in one of the following formats:
⍝       - single pair ('font' 'APL')
⍝       - vector of pairs (('background-color' 'blue')('font' 'APL'))
⍝       - matrix of [;1] attributes [;2] values  (2 2⍴'background-color' 'blue' 'font' 'APL')
⍝ Public Fields::
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

    ∇ html←Render;i;sel;t;buffer
      :Access public
      Content←parseStyles vectify Styles
      html←⎕BASE.Render
    ∇

    ∇ html←parseStyles styles;s;i;n;t;d
      :Access public shared
      styles←eis,styles
      html←''
      i←0
      :While i<n←⍴styles
          i+←1
          t←i⊃styles
          :If 0 1∊⍨≡t ⍝ scalar or vector
              :If n=i ⍝ last element?
                  html,←t #.HTMLUtils.Styles''
                  t←s←''
              :Else
                  :If 0 1∊⍨≡d←(i+1)⊃styles ⍝ next item is also scalar or vector
                      html,←t #.HTMLUtils.Styles''
                  :ElseIf 2 3∊⍨≡d
                      html,←t #.HTMLUtils.Styles d
                      i+←1
                  :Else
                      html,←t #.HTMLUtils.Styles''
                      html,←parseStyles d
                      i+←1
                  :EndIf
              :EndIf
          :Else
              html,←parseStyles t
          :EndIf
      :EndWhile
    ∇                                  

    vectify←{0=≡⍵:,⍵ ⋄ 1<|≡⍵: ∇¨⍵ ⋄ ⍵ }

:endclass
