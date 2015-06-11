:Class A3Wticker : MiPageSample
    ∇ Render
      :Access public
      Add h2'Stocks'
      (Add div).id←'d1'
      On'ping' 'update'
      OnLoad←'$("html").trigger("ping")'
    ∇

    ∇ r←update
      :Access public
      {}⎕DL 3
      r←'#d1'Replace Table query
      r,←Execute'$("html").trigger("ping")'
    ∇

    ∇ r←query;z
      r←↑(#.JSON.toAPL 3⊃#.Samples.HTTPGet'127.0.0.1:8080/A3Wservice?stocks=brian,dan,morten').quotes
    ∇
:EndClass