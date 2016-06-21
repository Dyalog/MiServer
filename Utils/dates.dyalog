:Namespace Dates

    (⎕ML ⎕IO)←1

    ∇ r←CookieFmt date;day;date;mon
         ⍝ Format date for cookie expiry
         ⍝ "expires Mon, 09-Dec-2002 13:46:00 GMT"
     
      day←(7 3⍴'MonTueWedThuFriSatSun')[WeekDay date;]
      mon←(12 3⍴'janfebmaraprmayjunjulaugsepoctnovdec')[2⊃date;]
      r←,('<',day,', >,ZI2,<-',mon,'->,ZI4,< >,ZI2,<:>,ZI2,<:>,ZI2,< GMT>')⎕FMT 1 5⍴(6↑date)[3 1 4 5 6]
    ∇

    ∇ r←{minOffset}HttpDate ts;sign;day;mon;ver;⎕USING;t
    ⍝ return RCF 1123/822 compliant date
    ⍝ minOffset is option number of minutes to offset time with (used for HTTP caching expirations)
      minOffset←{0::0 ⋄ minOffset}''
      ts←6↑ts
      :If 0=⎕NC'_UtcOffset'
          :If 'Win'≡ver←3↑1⊃'.'⎕WG'APLVersion'
              :Hold '_UtcOffset'
                  ⎕USING←,⊂''
                  _UtcOffset←¯60×(System.TimeZone.CurrentTimeZone.GetUtcOffset ⎕NEW System.DateTime(ts)).Hours
              :EndHold
          :Else
              :If (⊂ver)∊'Lin' 'AIX' 'Sol'
                  _UtcOffset←¯60×⍎¯2↓{⍵↑⍨-' '⍳⍨⌽⍵}⊃⎕SH'date -R'
              :Else
                  _UtcOffset←0 ⍝ otherwise, assume GMT
              :EndIf
          :EndIf
      :EndIf
      ts←IDNToDate((_UtcOffset+minOffset)÷24×60)+t←DateToIDN ts
      day←(7 3⍴'MonTueWedThuFriSatSun')[1+7|(⌊t)-1;]
      mon←(12 3⍴'JanFebMarAprMayJunJulAugSepOctNovDec')[2⊃ts;]
      r←,('<',day,', >,ZI2,< ',mon,' >,ZI4,< >,ZI2,<:>,ZI2,<:>,ZI2,< GMT>')⎕FMT 1 5⍴ts[3 1 4 5 6]
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

    ∇ r←{opt}DateFormat ymd
    ⍝ opt - 0 dd MMM yyyy
    ⍝       1 dd Month yyyy
      :If 0=⎕NC'opt' ⋄ opt←0 ⋄ :EndIf
      :Select ⊃opt
      :Case 0
          r←(⍕ymd[3]),(1⌽'  ',3↑(3×¯1+ymd[2])↓'JANFEBMARAPRMAYJUNJULAUGSEPOCTNOVDEC'),⍕ymd[1]
      :Case 1
          r←(⍕ymd[3]),(1⌽'  ',ymd[2]⊃'January' 'February' 'March' 'April' 'May' 'June' 'July' 'August' 'September' 'October' 'November' 'December'),⍕ymd[1]
      :Else
          r←⍕ymd
      :EndSelect
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


    ∇ ts←FTT fts;md;shape;tmp;yr;z;⎕IO
     ⍝ *** convert ⎕FRDCI/⎕FHIST timestamp(s) to ⎕ts-format for Dyalog/W ***
     ⍝ right argument: ⎕FRDCI-type timestamp(s) of any shape
     ⍝ result: ⎕ts-type timestamp(s) with shape <(⍴argument),7>
      ⎕IO←0 ⋄ shape←⍴fts ⋄ ts←,fts+18626112000
      md←365.2501|1+1461|yr←⌊ts÷5184000
      tmp←31 61 92 122 153 184 214 245 275 306 337 366
      z←(,⍉<⍀tmp∘.≥md)/,((⍴md),12)⍴⍳12
      md←(1+12|z+2),[0.1]⌈md-(0,tmp)[z]
      ts←(1960+⌊(yr+60)÷365.25),md,⍉24 60 60 60⊤ts
      ts[;6]←⌊0.5+ts[;6]×100÷6
      ts←(shape,7)⍴ts
    ∇

    ∇ r←TTF ts;l;h;d;m;y
       ⍝ convert a ⎕TS style timestamp into 60ths of a second since 1st January 1970 a la ⎕FRDCI
      l←⌈60×ts[7]÷1000                                         ⍝ convert milliseconds to 60ths
      h←3600 60 60⊥ts[4 5 6]                                   ⍝ hours minutes seconds to to the nearest seconds total
      d←ts[3]-1                                                ⍝ days since start of month
      m←(2⊃ts)⊃++\0 31,(28+0=4|⊃ts),31 30 31 30 31 31 30 31 30 ⍝ days in completed months
      y←{{(365×⍵)+⌈4÷⍨⍵-2}⍵-1970}⊃ts                           ⍝ days in years since 1970, leap years since 1972
      r←l+60×h+86400×y+m+d                                     ⍝ sum, convert to seconds, add seconds in the day convert to 60ths, add on 60ths
    ∇

:EndNamespace
