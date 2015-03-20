:Class Databinding1 : MiPageSample
⍝ Demonstrate the SyncFusion ejListBox widget  

    Dyalogers←'Andy Shiers' 'Bjørn Christensen' 'Brian Becker' 'Dan Baronet' 'Fiona Smith' 'Gitte Christensen' 'Geoff Streeter' 'Helene Boesen' 'Jason Rivers' 'Jay Foad' 'John Scholes' 'John Daintree' 'Karen Shaw' 'Morten Kromberg' 'Nadine Paquin' 'Nick Nickolov' 'Nicolas Delcros' 'Richard Smith' 'Roger Hui' 'Vibeke Ulmann' 'Vince Chan'


    ∇ Render
      :Access Public
      sp←Add StackPanel
      (sp.Add EditField'filter').On'input' 'myCallback'('pattern' 'val')
      (sp2←sp.Add StackPanel).Horizontal←1
      sp2.Add ejListBox('whole'(⍪(⊂'text'),Dyalogers)) ⍝ populate the first list box with all names
      filtered←sp2.Add ejListBox('filtered'(⍪,⊂'text')) ⍝ and initialize the second with none
    ∇

    ∇ r←myCallback
      :Access public    
      r←filtered.Refresh Dyalogers/⍨(Get'pattern')∘{(×⊃⍴⍺)∧∨/⍺⍷⍵}¨Dyalogers
    ∇

:EndClass