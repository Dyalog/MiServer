:Class ejTextBoxSimple : MiPageSample
⍝ Control:: _SF.ejTextBox
⍝ Description:: Validate numbers, currency and percentages

    ∇ Compose;tb1;p;c;n
      :Access Public
     
      (n c p)←'num' 'cur' 'pct'{⍺ Add _.ejTextBox ⍵}¨'Numeric' 'Currency'('Percentage' 99.9)
     
      'watermarkText' 'width'n.Set'Enter a 3-digit Number' 200
      'minValue' 'maxValue'n.Set 100 999
     
     ⍝ 'validationRules' 'validationMessage'c.Set'⍎{required:true}' 'The currency value is required.'
     
      'decimalPlaces' 'enableStrictMode' 'showSpinButton'p.Set 1 _true _false
     
      (n c p).On⊂'change' 'myCallBack'('value' 'argument' 'value')
      'message'Add _.div
    ∇

    ∇ r←myCallBack
      :Access Public   
      ∘∘∘
      r←'#message'Replace'You entered: ',Get'tb1'
    ∇


:EndClass

