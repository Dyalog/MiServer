 msg←Test dummy;country

 :If 'Afghanistan'≢('ClassName'Find'sorting_1').Text
     msg←'missing expected data'
 :ElseIf 'Country'≢country←('ClassName'Find'sorting_asc').Text
     msg←'missing expected header'
 :Else
     ('ClassName'Find'sorting_asc').Click
     msg←'sorting failed'/⍨'Zambia'≢('ClassName'Find'sorting_1').Text
 :EndIf
