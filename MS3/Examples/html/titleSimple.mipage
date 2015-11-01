:class titleSimple: MiPageSample
⍝ Control:: _html.title
⍝ Description:: Set the document title in the browser's tab or title bar

    ∇ Compose
      :Access public
      :If 0∊⍴Get'nowrapper' ⍝ If there is a wrapper...
          Add _.title'CHANGED TITLE' ⍝ change the title
          Add'The title of this window (or tab) should have changed.'
      :Else ⍝ No wrapper means embedded without changable title
          Add'Click the above ➚ button to open this page in a new window.'
      :EndIf
    ∇

:endclass