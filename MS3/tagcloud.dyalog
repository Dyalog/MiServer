:Class TagCloud : Dyalog14

    ∇ Render;tc
      :Access public
      Add style'#tagcloud{width:600px;}'
      Add h2'ejTagCloud'
      tc←Add _SF.ejTagCloud
      tc.Container←'#tagcloud'
      tc.Options.(titleText maxFontSize)←'State Zip Codes' '30px'
      tc.Data←QueryStateZipcodes
    ∇

    ∇ r←QueryStateZipcodes;query
      :Access public
      query←'SELECT States.StateName, Count(*) FROM States INNER JOIN ZipCodes ON States.[StateAbbr] = ZipCodes.[StateAbbr] GROUP BY States.StateName'
      :Trap 6
          r←(#.SQL.Do'ZipCodes'query).Data
      :Else
          r←⍪⊂'Data not found'
      :EndTrap
    ∇

:EndClass