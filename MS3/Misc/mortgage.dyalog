:Class mortgage : MiPageSample
    
    ⍝ define the fields that MiServer will keep up-to-date using form data
    :Field Public prin←'100000' ⍝ principal field
    :Field Public rate←'4.5'    ⍝ rate
    :Field Public term←'30'     ⍝ term (years)
    :Field Public pmt←''        ⍝ payment

    tonum←{{(,1)≡1⊃⍵:2⊃⍵ ⋄ ''}⎕VFI ⍵} ⍝ very simple check for a single number

  ⍝ ↓ calculate payment based on principal, rate, and term
    calcpmt←{0::'Error' ⋄ p r n←⍵÷1 1200 (÷12) ⋄ .01×⌈100×p×r÷1-(1+r)*-n}

  ⍝ ↓ calculate how much you can borrow based on rate, term, and payment
    calcprin←{0::'Error' ⋄ r n m←⍵÷1200 (÷12) 1 ⋄ .01×⌈100×m÷r÷1-(1+r)*-n}

    ∇ Render;f;inputs;labels;h ⍝ render the initial page
      :Access Public
     
      :If 0=⍴pmt ⋄ pmt←calcpmt tonum¨prin rate term ⋄ :EndIf ⍝ First calculation
     
      Add h2'Mortgage Calculator'
      Add'Modify principal, rate or term to recalculate payment.'
      Add¨br,(⊂'Change payment to recalculate the principal'),2⍴br
     
      (frm←Add Form).id←'mtg'
      (ig←frm.Add InputGrid).Border←0
      ig.Labels←'Principal' 'Interest Rate' 'Term (years)' 'Payment'
      ig.Inputs←EditField,¨{⊂⍵(⍎⍵)}¨'prin' 'rate' 'term' 'pmt'
     
      h←Add _JQ.Handler                         ⍝ add an event handler
      h.Callback←'Calc'                         ⍝ specify the callback function to run
      h.Events←'change'                         ⍝ listen for the "change" event
      h.Selectors←'#mtg input'                  ⍝ on the input elements within the form with id "mtg"
    ∇

    ∇ resp←Calc;p;r;n;m    ⍝ callback function for the handler defined in Render
      :Access public
      p r n m←tonum¨prin rate term pmt ⍝ convert input fields to numbers
      resp←''
     
      :Select _what ⍝ what field changed?
     
      :CaseList 'prin' 'rate' 'term' ⍝ one of prin rate or term changed, calculate payment
          :If ~∨/{0∊⍴⍵}¨p r n ⍝ if we have values for all inputs...
          ⍝ ... calculate the payment and replace the value attribute in the input element
              resp←Execute'#pmt'_JSS.Val calcpmt p r n
          :EndIf
     
      :Case 'pmt' ⍝ payment changed, calculate principal
          :If ~∨/{0∊⍴⍵}¨r n m ⍝ if we have values for all inputs...
          ⍝ ... calculate the principal and replace the value attribute in the input element
              resp←Execute'#prin'_JSS.Val calcprin r n m
          :EndIf
     
      :EndSelect
    ∇

:EndClass