:Class mortgageMS2 : MS2Page

    :Include #.HTMLInput

    ⍝ define the fields for our calculation
    :field public prin←100000      ⍝ principal field
    :field public rate←4.5         ⍝ rate
    :field public term←30          ⍝ term (years)
    :field public pmt←⍬            ⍝ payment

    tonum←{{(,1)≡1⊃⍵:2⊃⍵ ⋄ ''}⎕VFI ⍕⍵} ⍝ very simple check for a single number

  ⍝ ↓ calculate payment based on principal, rate, and term
    calcpmt←{0::'' ⋄ p r n←⍵÷1 1200 (÷12) ⋄ .01×⌈100×p×r÷1-(1+r)*-n}

  ⍝ ↓ calculate how much you can borrow based on rate, term, and payment
    calcprin←{0::'' ⋄ r n m←⍵÷1200 (÷12) 1 ⋄ .01×⌈100×m÷r÷1-(1+r)*-n} 

    ∇ html←Render req ⍝ render the initial page
      :Access Public  
     
      pmt←calcpmt prin rate term
     
      html←'h2'Enclose'Mortgage Calculator'
      html,←'Modify principal, rate or term to recalculate payment.'
      html,←BR 2 BRA'Change payment to recalculate the principal'
     
     ⍝ define the input fields and form - the form is never submitted but serves as a container for serialization
      html,←'id="mortgage"'('POST'Form)Table 4 2⍴'Principal'('prin'Edit prin)'Interest Rate'('rate'Edit rate)'Term (years)'('term'Edit term)'Payment'('pmt'Edit pmt)
     
     ⍝ define the onchange handler for all input fields in the #mortage form
     ⍝ the first argument to JQ.On is the selector(s) for the handler to apply to
     ⍝ the second argument is the event(s) to listen for
     ⍝ the third argument tells JQ.On what data to send to the server from the browser
     ⍝     in this case, we send back a variable called "formdata" which holds the serialization of the #mortgage form
     ⍝     MiServer understands serialized forms and will populate public fields matching the ids of the input elements
      html,←req #.JQ.On'#mortgage input' 'change'('formdata' 'mortgage' 'serialize')
    ∇

    ∇ resp←APLJax req;p;r;m;n ⍝ respond to AJAX calls
      :Access public 
     
      p r n m←tonum¨prin rate term pmt ⍝ convert input fields to numbers
      resp←''
     
      :Select req.GetData'_what' ⍝ what field changed?
     
      :CaseList 'prin' 'rate' 'term' ⍝ one of prin rate or term changed, calculate payment
          :If ~∨/{0∊⍴⍵}¨p r n ⍝ if we have values for all inputs...
          ⍝ ... calculate the payment and replace the value attribute in the input element
              resp←('execute'('$("#pmt").val("',(⍕calcpmt p r n),'")'))
          :EndIf
     
      :Case 'pmt' ⍝ payment changed, calculate principal
          :If ~∨/{0∊⍴⍵}¨r n m ⍝ if we have values for all inputs...
          ⍝ ... calculate the principal and replace the value attribute in the input element
              resp←('execute'('$("#prin").val("',(⍕calcprin r n m),'")'))
          :EndIf
     
      :EndSelect
    ∇
:EndClass