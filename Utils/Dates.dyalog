:Namespace Dates

    (⎕ML ⎕IO)←1 1

    ∇ r←CookieFmt date;day;date;mon
         ⍝ Format date for cookie expiry
         ⍝ "expires Mon, 09-Dec-2002 13:46:00 GMT"
     
      day←(7 3⍴'MonTueWedThuFriSatSun')[WeekDay date;]
      mon←(12 3⍴'janfebmaraprmayjunjulaugsepoctnovdec')[2⊃date;]
      r←,('<',day,', >,ZI2,<-',mon,'->,ZI4,< >,ZI2,<:>,ZI2,<:>,ZI2,< GMT>')⎕FMT 1 5⍴(6↑date)[3 1 4 5 6]
    ∇

    ∇ r←{minOffset}HttpDate ts;utcOffset;sign;day;mon;ver;⎕USING
    ⍝ return RCF 1123 compliant date
    ⍝ minOffset is option number of minutes to offset time with (used for HTTP caching expirations)
      minOffset←{0::0 ⋄ ⍎⍵}'minOffset'
      ts←6↑ts
      :If 'Win'≡ver←3↑1⊃'.'⎕WG'APLVersion'
          ⎕USING←,⊂''
          r←((⎕NEW System.DateTime ts).AddMinutes minOffset).ToUniversalTime.GetDateTimeFormats'R'
      :Else
          :If (⊂ver)∊'Lin' 'AIX' 'Sol'
              utcOffset←⊃¯1↑({1↓¨{(⍵=⊃⍵)⊂⍵}' ',⍵}⊃⎕SH'date -R')~⊂''
          :Else
              utcOffset←'GMT'
          :EndIf
          ts[4 5]+←0 60⊤minOffset
          ts←IDNToDate(minOffset÷24×60)+DateToIDN ts
          day←(7 3⍴'MonTueWedThuFriSatSun')[WeekDay ts;]
          mon←(12 3⍴'JanFebMarAprMayJunJulAugSepOctNovDec')[2⊃ts;]
          r←,('<',day,', >,ZI2,< ',mon,' >,ZI4,< >,ZI2,<:>,ZI2,<:>,ZI2,< ',utcOffset,'>')⎕FMT 1 5⍴(6↑ts)[3 1 4 5 6]
      :EndIf
    ∇

    ∇ SM←DateToIDN TS                  ⍝ Convert date format
      SM←2 ⎕NQ'.' 'DateToIDN'(3↑TS)
      :If 3<⍴TS
          SM+←(24 60 60 1000⊥4↑3↓TS)÷86400000
      :EndIf
    ∇

    ∇ TS←IDNToDate SM                ⍝ Convert IDN to date format : 3↑⎕TS ← IDN (akd TS_SM)
      TS←3↑2 ⎕NQ'.' 'IDNToDate'(⌊SM)
      TS,←⌊0.5+24 60 60 1000⊤86400000×1|SM
    ∇

    ∇ new←ts IdnAdd t
    ⍝ T is D HH MM SS
      new←ts+(0 24 60 60 1000⊥¯5↑t,0)÷86400000
    ∇

    ∇ r←Now
      r←DateToIDN ⎕TS
    ∇

    ∇ r←TSFmt ts
      r←,'ZI4,<->,ZI2,<->,ZI2,< >,ZI2,<:>,ZI2'⎕FMT 1 5⍴ts
    ∇

    ∇ r←TSFmtNice ts;now;yday;today;z;i;m;idn;s
    ⍝ Format a vector of IDN's nicely
      s←⍴ts
      yday←¯1+today←⌊now←DateToIDN ⎕TS
      r←↑IDNToDate¨,ts←,ts ⍝ Make matrix
      r←'ZI4,<->,ZI2,<->,ZI2,< >,ZI2,<:>,ZI2'⎕FMT 5↑[2]r
      :If 0≠⍴i←((ts≥yday)∧~m←ts≥today)/⍳⍴ts
          r[i;]←r[i;11+⍳5],' ',((⍴i),10)⍴10↑'Yesterday'
      :EndIf
      :If 0≠⍴i←m/⍳⍴ts
          r[i;]←r[i;11+⍳5],' ',((⍴i),10)⍴10↑'Today'
      :EndIf
      :If 0≠⍴i←(100>z←⌊(now-ts)×24×60)/⍳⍴ts
          r[i;]←16↑[2]↑(⍕¨⌊z[i]),¨(' minutes ago' ' minute ago')[1+1=z[i]]
      :EndIf
      :If 0≠⍴i←(z<1)/⍳⍴ts
          r[i;]←((⍴i),16)⍴16↑'Now'
      :EndIf
      r←(s,¯1↑⍴r)⍴r
    ∇

    ∇ r←WeekDay Date
    ⍝ Return weekday (Monday=1, Sunday=7)
      r←1+7|(DateToIDN 3↑Date)-1
    ∇

    ∇ r←LogFmtNow;ver
    ⍝ returns now UTC adjusted, and formatted for log files (Common Log Format)
      :If 'Win'≡ver←3↑1⊃'.'⎕WG'APLVersion'
          r←((⍎⎕NA'kernel32|GetSystemTime >{U2 U2 U2 U2 U2 U2 U2 U2}')⊂8⍴0)[4 2 1 5 6 7]
          r[2]←⊂(12 3⍴'JanFebMarAprMayJunJulAugSepOctNovDec')[,2⊃r;]
          r←,'< [>,ZI2,</>,3A1,</>,ZI4,<:>,ZI2,<:>,ZI2,<:>,ZI2,< +0000] >'⎕FMT r
      :Else
          r←1⊃⎕SH'date +" [%d/%b/%Y:%T %z] "'
      :EndIf
    ∇

    ∇ r←LogFmt ymdhms
      r←ymdhms[3 2 1 4 5 6]
      r[2]←⊂(12 3⍴'JanFebMarAprMayJunJulAugSepOctNovDec')[,2⊃r;]
      r←,'< [>,ZI2,</>,3A1,</>,ZI4,<:>,ZI2,<:>,ZI2,<:>,ZI2,< +0000] >'⎕FMT r
    ∇


:EndNamespace