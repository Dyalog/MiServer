 msg←Test dummy;expect;ok;dp
 expect←,'ZI4,</>,ZI2,</>,ZI2'⎕FMT 1 3⍴⎕TS
 dp←Find'dp'
 ok←{expect≡dp.GetAttribute⊂'value'}Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 msg←(~ok)/'Datepicker not rendered'