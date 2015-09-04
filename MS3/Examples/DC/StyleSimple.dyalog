:Class StyleSimple : MiPageSample
⍝ Control:: _DC.Style
⍝ Description:: Red H2 Headers and some explanation of the Style control

    ∇ Compose
      :Access Public
     
      Add _.h2'Adding Style to a Page'
     
      Add _.p ScriptFollows
     ⍝ Most of the styling for your page should be done using the default style sheet for your site,
     ⍝ Possibly overriden by other specialised style sheets for groups of pages. However, sometimes
     ⍝ you need a one-off modification which doesn't justify the creation of a new sheet. The _.Style
     ⍝ object makes it easy to add styles on the fly, for example to colour the following h2 headers
     ⍝ red on this page.
     
      Add _.Style'h2'('color' 'red')
      Add _.h2'Other Reading'
     
      Add _.p ScriptFollows
     ⍝ Also look up the <a href="/Examples/DC/StyleSheetSimple">Simple StyleSheet Example</a>, which shows how to add an external style sheet, and
     ⍝ take a look at the <a href="/Examples/DC/TableAdvanced">Advanced Table Example</a> which uses a combination of
     ⍝ the raw html _.style control and the ScriptFollows to add a significant quantity of style in-line.
    ∇

:EndClass