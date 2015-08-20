:class linkSimple: MiPageSample
⍝ Control:: _html.link
⍝ Description:: Include an external resource; here an icon

    ∇ Compose
      :Access public
      :If 0∊⍴Get'nowrapper' ⍝ If there is a wrapper...
          'href="../Data/duck.ico"' 'rel="icon"' 'type="image/x-icon"'Add _.link
          Add _.title'← LOOK HERE'
          Add'Your browser''s tab or window should now have a rubber duck icon.'
      :Else ⍝ No wrapper means embedded without changable title
          Add'Click the above ➚ button to open this page in a new window.'
      :EndIf
    ∇

:endclass