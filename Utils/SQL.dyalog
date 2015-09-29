:Namespace SQL
    (⎕IO ⎕ML)←1

    ∇ r←ConnectTo database;ind;ds;dsn;opts;rc;conx;pwd;user;ms;find
      ms←#.Boot.ms
      find←{(⍴⍺){⍵×⍺≥⍵}⍺⍳⊂⍵}
      r←601 'No datasources defined'
      :If 0<⍴{6::'' ⋄ ⍵.Datasources}ms ⍝ do we have Datasources defined?
          :If 0=ind←ms.Datasources.Name find database ⍝ try to find it
              r←601 ''('Datasource "',database,'" not found')
              :Return
          :Else ⍝ found it
              ds←ind⊃ms.Datasources
              r←601 'SQAPL not available'
              :If 0=⊃#.SQA.Init''
                  (dsn opts user pwd)←{6::'' ⋄ ⍎⍵}¨'ds.'∘,¨'DSN' 'DriverOptions' 'User' 'Password'
                  conx←{⊃('C'∘,¨⍕¨⍳1+⍴⍵)~⍵}⊃¨2 2⊃#.SQA.Tree'.'
                 ⍝:If 0=1⊃rc←#.SQA.Connect conx dsn pwd user('DriverOptions'(opts)) ⋄ r←0 conx
                  :If 1>1⊃rc←#.SQA.Connect conx dsn pwd user('DriverOptions'(opts)) ⋄ r←0 conx
                 ⍝ Baas: warning (¯1) means conn was established, so return ok!
                 ⍝ discussed with BHC in Italy ;-)
                  :Else ⋄ r←601 ''('Unable to connect to "',database,'" due to ',⍕3⊃rc)
                  :EndIf
              :EndIf
          :EndIf
      :EndIf
    ∇

    ∇ r←Do ctl;c;m;z;ns;conx;data
  ⍝ Prepare, Execute, Fetch a statement.
  ⍝       ctl: database sqlstmt {bindvars} {nulls}
      r←⎕NS''
      r.(ReturnCode Data Message)←¯1(0 0⍴0)''
      →(0<1⊃z←ConnectTo(1⊃ctl))⍴l3 ⋄ conx←2⊃z
      →(0<1⊃z←#.SQA.CursorName conx)⍴l3 ⋄ c←2⊃z
      →(0<1⊃z←#.SQA.Prepare c(2⊃ctl))⍴l3
      data←''
      :If 3≤⍴ctl
          :If 1<|≡3⊃ctl ⋄ data←3⊃ctl
              :If 3<⍴ctl ⋄ data←(⊂data),ctl[4] ⋄ :EndIf  ⍝ deal with nulls
          :Else ⋄ data←2↓ctl ⋄ :EndIf
      :EndIf
      →(0<1⊃z←#.SQA.Exec(⊂c),data)⍴l2
      →(0<1⊃z←0 #.SQA.Describe c)⍴l2
      →(0=⍴2 2⊃z)/l2  ⍝ MB: emails with BHC/BPB after err on DELETE
      r.Columns←{(0=(⊂1 3)⊃¨⍵)/(⊂1 1)⊃¨⍵}2 2⊃z
      →(0<2 1 5⊃z)⍴l1        ⍝ Fetch if there are Bind Vars
      r.(ReturnCode Data)←0(0 0⍴0) ⋄ →l2
     l1:
      →(0<1⊃z←1 #.SQA.Fetch c)⍴l2
      r.Data←⊃2⊃z
     l2:
      :If 0<r.ReturnCode←1⊃z ⋄ r.Message←3⊃z ⋄ :EndIf
      →(0<1⊃z←#.SQA.Close conx)↓0
     l3:
      r.ReturnCode←1⊃z
      r.Message←3⊃z
    ∇

    ∇ r←CloseAll
      →(0∊⍴r←2 2⊃#.SQA.Tree'.')⍴0
      r←#.SQA.Close¨1⊃¨r
    ∇

:EndNamespace
