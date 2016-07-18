:class ejToggleButton : #._SF._ejWidget
⍝ Description:: Syncfusion ToggleButton widget
⍝ Constructor:: [defaultText [activeText]]
⍝ defaultText     - HTML content of button face when toggled off
⍝ activeText      - HTML content of button face when toggled on
⍝ Public Fields::
⍝ Text            - 2 element vector of char vectors containing defaultText activeText
⍝ Examples::
⍝ ejToggleButton
⍝ ejToggleButton 'Click to Toggle'
⍝ ejToggleButton 'Click to Activate' 'Click to Disable'

    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejToggleButton.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejToggleButton.html'
    :field public Text←''

    ∇ make
      :Access public
      JQueryFn←Uses←'ejToggleButton'
      ContainerTag←'input'
      :Implements constructor
      Container.type←'checkbox'
      Text←2⍴⊂'Button'
    ∇

    ∇ make1 args
      :Access public
      args←eis args
      JQueryFn←Uses←'ejToggleButton'
      ContainerTag←'input'
      :Implements constructor
      Container.type←'checkbox'
      Text←2⍴args
    ∇

    ∇ r←Render
      :Access public
      Container.NoEndTag←1
      'defaultText' 'activeText'Set 2⍴eis Text
      r←⎕BASE.Render
    ∇
:EndClass