:Namespace Base64
 
 ⍝ CHK's code, converted to Dyalog Classic+Unicode by MKROM

    ⎕IO←0 ⋄ ⎕ML←3
    CharSet←'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

    ∇ rc←Encode txt;p
  ⍝p Encode messages into Base64 (MIME)
  ⍝o CHK 31.05.1999 <chk@hoesle-kienzlen.de>
  ⍝d How does base64 work? The purpose of the base64 algorithm is to
  ⍝d convert all 256 characters of the character set into the 64 characters
  ⍝d shown below, as those characters are common on all possible machines
  ⍝d through wich a mail message can pass on it's way through the Internet.
  ⍝d To do this, every 24 bits (3 8-bit characters) are split into 4 6-bit
  ⍝d chunks (=24 bits again). Those 6-bit chunks are used as an index into
  ⍝d the base64 alfabet. If the message does not contain a number of
  ⍝d characters divisible by 3, "=" characters are appended as padding after
  ⍝d encoding, to help the decoding function do it's work.
     
      ⎕SIGNAL((⎕DR txt)∊80 82)↓92     ⍝ Single-byte Chars only
      p←(3×⌈(⍴txt)÷3)-⍴txt            ⍝ number of padding characters
      txt←,⍉(8⍴2)⊤Char txt            ⍝ convert to 8-bit binary
      txt←2⊥⍉((⌈(⍴txt)÷6),6)⍴txt,5⍴0  ⍝ re-convert every 6 bits to decimal
      rc←(CharSet,'=')[txt,p⍴64]           ⍝ index into BASE64 alfabet (+ padding)
    ∇

    ∇ rc←Decode txt;p
  ⍝p Decode messages which are encoded in Base64 (MIME)
  ⍝o CHK 31.05.1999 <chk@hoesle-kienzlen.de>
     
  ⍝ the base 64 alphabet (= is the padding character):
      txt←(txt∊CharSet)/txt  ⍝ process only BASE64 characters
      p←-6×+/txt='='         ⍝ the number of padding bits
  ⍝ decode every 6 bits of the BASE64 text into ⎕AV:
      rc←p↓,⍉(6⍴2)⊤CharSet⍳txt    ⍝ convert index to 6-bit binary
      rc←⍉((⌊(⍴rc)÷8),8)⍴rc  ⍝ make chunks of 8 bits
      rc←Char 2⊥rc           ⍝ re-convert to index into ⎕AV
    ∇
    
    ∇ r←Char x
    ⍝ Chars to numbers 0-255 and vice versa
      :If 80=⎕DR' ' ⋄ r←⎕UCS x  ⍝ Unicode
      :ElseIf 82=⎕DR x ⋄ r←83 ⎕DR x ⍝ Classic, Char=>Num
      :Else ⋄ r←82 ⎕DR x           ⍝ Classic, Num=>Char
      :EndIf
    ∇

:EndNamespace