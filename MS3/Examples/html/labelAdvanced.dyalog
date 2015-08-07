:class labelAdvanced: MiPageSample
⍝ Control:: _html.label _html.form
⍝ Description:: Allow clicking somewhere else to interact with controls

    ∇ Compose
      :Access public
     
      Add _.p'Click on one of the letters to select the corresponding radio button:'
     
      addradio←{}
      addlabel←{'for'('r',⍕⍵)Add _.label ⍺}
      :With Add _.form
          :For n :In ⍳10
              ('#r',⍕n)('type' 'radio')('name' 'mynumb')('value'n)Add _.input
          :EndFor
          Add¨3/_.br
          :For n :In ⍳10
              'for'('r',⍕n)Add _.label('[',']',⍨n⊃⎕A)
          :EndFor
          Add¨3/_.br
          'type="submit"' 'value="Submit"'Add _.input
      :EndWith
    ∇

:endclass