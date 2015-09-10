:Class ejTabAdvanced : MiPageSample
⍝ Control:: _SF.ejTab
⍝ Description:: Add an advanced tabbed interface

    ∇ Compose;captions;contents;intro;tab
      :Access public
     
      intro←'Frequently used features include the ability to switch between four orientations '
      intro,←'and load content asynchronously from another page.'
     
      Add title'_SF.ejTab - Simple Example '
      Add h2'_SF.ejTab - Syncfusion Tab Control'
      Add _html.p intro
     
      Add h2'Tabs on the left'
      captions←'Tab One' 'Another' 'Third Tab'
      contents←⊂'/Examples/Data/SampleText1.txt' ⍝ First one
      contents,←'These<br/>are<br/>the<br/>contents<br/>of<br/>the<br/>tab<br/>labelled<br/><br/>'∘,¨1↓captions
      tab←Add #._SF.ejTab(captions contents)
      'headerPosition'tab.Set'left'
      tab.IsURL←1 0 0 ⍝ Let it know which are URLs
    ∇

:EndClass