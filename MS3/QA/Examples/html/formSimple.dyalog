 msg←Test dummy;q;t;MatchText;sampleText
 CR2HTML←{∊'<br />'@((⎕UCS 13)∘=)⍵}
 MatchText←{q←Find'SI',⍵ ⋄ t←q.Text~⎕UCS 10 ⋄ ⍺≡t←1↓(1=+\t='"')/t:'' ⋄ 'Field "',⍵,'" did not contain expected value "',(CR2HTML ⍺),'" but "',(CR2HTML t),'"'}    ⍝ return the text that was output after form submission

 sampleText←'This sample text shows umlauts äöüÄÖÜ',Selenium.Keys.Enter,'as well as APL-symbols: ⌸⍣⍥⍤⍨←⍸⍴'
 ClearInput'user' ⋄ 'user'SendKeys'morten'
 ClearInput'text' ⋄ 'text'SendKeys sampleText
 ClearInput'number' ⋄ 'number'SendKeys'4243'
 q←'TagName'Find'form'
 q.Submit

 msg←'morten'MatchText'user'
 sampleText←(⎕UCS 13)@((Selenium.Keys.Enter∘=))sampleText
 msg,←sampleText MatchText'text'
 msg,←'4243'MatchText'number'
 q←Find'SInumber'
 t←{2⊃⎕VFI(⍵⍳':')↓⍵}q.Text
 msg,←(t≠4243)/'0 Get''number'' did not return expected value 4243, but ',⍕t
