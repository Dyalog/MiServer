:Class siikaranta : MiPageSample
⍝ Demonstrate the SyncFusion ejListBox widget  

    :Field Public Filter←''

    DyalogNames←'Andy Shiers' 'Bjørn Christensen' 'Brian Becker' 'Dan Baronet' 'Fiona Smith' 'Gitte Christensen' 'Geoff Streeter' 'Helene Boesen' 'Jason Rivers' 'Jay Foad' 'John Scholes' 'John Daintree' 'Karen Shaw' 'Morten Kromberg' 'Nadine Paquin' 'Nick Nickolov' 'Nicolas Delcros' 'Richard Smith' 'Roger Hui' 'Vibeke Ulmann' 'Vince Chan'

    ∇ Render
      :Access Public
      spv←Add StackPanel ⍝ Vertical Stack Panel: Filter at the top, lists below
      filter←spv.Add EditField'filter'
      filter.On'input' 'myCallback'('Filter' 'val')  ⍝ Return "val" using the nae "Filter"
     
      (sph←spv.Add StackPanel).Horizontal←1          ⍝ For side-by-side list boxes
      left←sph.Add ejListBox('left'(⍪(⊂'text'),DyalogNames)) ⍝ populate the first list box with all names
      right←sph.Add ejListBox('right'(⍪,⊂'text')) ⍝ and initialize the second with none
    ∇

    ∇ r←myCallback
      :Access public   
      FilteredList←{⍵/⍨{∨/Filter⍷⍵}¨⍵}DyalogNames ⍝ /// This should be enough
      r←right.Refresh FilteredList
    ∇

:EndClass