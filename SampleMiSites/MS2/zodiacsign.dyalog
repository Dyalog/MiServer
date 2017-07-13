:Class ZodiacSign : MS2Page
    :field public name
    :field public birthdate

    :include #.HTMLInput


    ∇ r←Render req
      :Access public
      r←'h2'Enclose'What''s Your Sign'
      r,←2 SPA'Name: ','name'Edit'' 30
      r,←2 SPA'Birth Date: ',req #.JQUI.DatePicker'birthdate'('' 20)'showButtonPanel: true,dateFormat: "yy-mm-dd"'
      r,←2 BRA'go'Button' Go! '
      r,←'div id="answer"'Enclose''
      r,←req #.JQ.On'#go' 'click'(('name' '#name')('birthdate' '#birthdate'))'#answer'
    ∇

    ∇ r←APLJax req;resp
      :Access public         
      :If 0∊⍴name
          resp←'Please enter your name.'
      :ElseIf 0∊⍴birthdate
          resp←name,', please select your birthdate.'
      :ElseIf 0≡date←{0::0 ⋄ 3↑#.Dates.(IDNToDate DateToIDN ⍵)}⊃(//)⎕VFI{⍵{⍵\⍵/⍺}⍵∊⎕D}birthdate
          resp←name,', "',birthdate,'" is not a valid date. Please try again.'
      :Else
          resp←name,', you''re ',{'a',(('A'≠1⊃⍵)↓'n '),⍵}ZodiacSignFor date
      :EndIf
      r←resp
    ∇

    ∇ r←ZodiacSignFor date;signs
      signs←13⍴'Capricorn' 'Aquarius' 'Pisces' 'Aries' 'Taurus' 'Gemini' 'Cancer' 'Leo' 'Virgo' 'Libra' 'Scorpio' 'Sagitarius'
      r←(0 120 219 320 420 521 621 722 822 923 1023 1122 1221+.<100⊥1↓date)⊃signs
    ∇


:EndClass
