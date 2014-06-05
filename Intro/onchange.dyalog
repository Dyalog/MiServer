:Class onchange : MiPage

    :Include #.HTMLInput

    :field public event     ⍝ the triggered event - JQ.On supplies this
    :field public what      ⍝ the id, if any, of the element that triggered the event - JQ.On supplies this

    ⍝ define the fields for our calculation
    :field public prin      ⍝ principal field
    :field public rate      ⍝ rate
    :field public term      ⍝ term (years)
    :field public pmt       ⍝ payment


    ∇ html←Render req ⍝ render the initial page
      :Access Public
     
      html←'h2'Enclose'onChange Demonstration'
     
     ⍝ define the input fields and form - the form is never submitted but serves as a container for serialization
      html,←'id="mortgage"'('POST'Form)Table 4 2⍴'Principal'('prin'Edit'')'Interest Rate'('rate'Edit'')'Term (years)'('term'Edit'')'Payment'('pmt'Edit'')
     
     ⍝ define the onchange handler for all input fields in the #mortage form
     ⍝ the first argument to JQ.On is the selector(s) for the handler to apply to
     ⍝ the second argument is the event(s) to listen for
     ⍝ the third argument tells JQ.On what data to send to the server from the browser
     ⍝     in this case, we send back a variable called "formdata" which holds the serialization of the #mortgage form
     ⍝     MiServer understands serialized forms and will populate public fields matching the ids of the input elements
      html,←req #.JQ.On'#mortgage input' 'change'('formdata' '#mortgage' 'serialize')
    ∇


    tonum←{{(,1)≡1⊃⍵:2⊃⍵ ⋄ ''}⎕VFI ⍵} ⍝ very simple check for a single number
    calcpmt←{0::'' ⋄ p r n←⍵÷1 1200 (÷12) ⋄ .01×⌈100×p×r÷1-(1+r)*-n} ⍝ calculate payment based on principal, rate, and term
    calcprin←{0::'' ⋄ r n m←⍵÷1200 (÷12) 1 ⋄ .01×⌈100×m÷r÷1-(1+r)*-n} ⍝ calculate how much you can borrow based on rate, term, and payment

    ∇ resp←APLJax req;p;r;m;n ⍝ respond to AJAX calls
      :Access public
      p r n m←tonum¨prin rate term pmt ⍝ convert input fields to numbers
      resp←''
     
      :Select what ⍝ what field changed?
     
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
      resp←#.JSON.fromNVP resp
    ∇
:EndClass