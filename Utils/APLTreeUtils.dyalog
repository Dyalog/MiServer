:Namespace APLTreeUtils
⍝
⍝ *** Version 3.2.0 ⋄ 2016-04-?? ***
⍝
⍝ ## Version History
⍝
⍝ * 3.2.2:
⍝ * `GoToWebPage` did not deal with `\` and multiple `//`. I had no problems with that but it seems that 
⍝   some browser do not like this. "\" is no converted into "/" and all "//" are reduced to a single one.
⍝ * 3.2.1:
⍝   * `Split` could cause an unneccesary WS FULL under certain circumstances.
⍝ * 3.2.0:
⍝ * Lowercase and Uppercase both attempt to make use of the 819 ⌶ now. This is a 15.0-feature which was
⍝   brought into both 14.0 and 14.1 via DSS. If you use one of those but it was not updated or for any
⍝   reason you cannot update it then it will fall back to the old mechanism.
⍝
⍝   **Attention**: No matter wheather the ⌶ is used or not, 3.2 converts a ⍬ into ''!
⍝
⍝ * 3.1.0:
⍝   * APLTreeUtils is now platform independent.\
⍝   * Documentation converted to Markdown. Requires ADOC 5.0.
⍝   * New method `GetOperatingSystem` introduced.
⍝   * Note that with version 15.0 APLTreeUtils will stop to support (ignore) zeros in "array", the argument
⍝     to Lowercase and Uppercase. If you have a true 0 (the number, not the digit) or a ⍬ in a "string" (it
⍝     is actually a mixed array then) you try to uppercase or lowercase then you have a bug to fix.
⍝ * 3.0.6: Comments and code (cosmetic) in WriteUTF8File and ReadUTF8File improved.
⍝ * 3.0.5: "https" was not handled by `GoToWebPage`.
⍝ * 3.0.4: Bug fix in `GoToWebPage`.
⍝ * 3.0.3: `ReadBytesAs8BitSignedIntegersFromFile` did carry a statement `:Access Public Shared`.
⍝ * 3.0.2:
⍝   * `ReadBytesAs8BitSignedIntegersFromFile` did not accept a file tie number.
⍝   * Documentation amended to fit to latest ADOC syntax.
⍝ * 3.0.1: Documentation fixed for `FormatDateTime` (floats).
⍝
⍝ From version 1.32 on all fns in this script are tested for being independent from `⎕IO` and `⎕ML`
⍝ except when noted otherwise. See `Where` as an example for an exemption.
⍝
⍝ Needs at least Dyalog Version 13.2 and also Unicode for `WriteUtf8File` & `ReadUtf8File`
⍝
⍝ Kai Jaeger - APL Team Ltd.\\
⍝ Homepage: <http://aplwiki.com/APLTreeUtils>

    ∇ array←{noIbeamFlag}Uppercase array;ToUpper;⎕ML;⎕IO;bool
    ⍝ Fast uppercasing that excepts scalars, vector, matrices as well as vectors and
    ⍝ matrices of text vectors.\\
    ⍝ Notes:
    ⍝ * `Uppercase` converts lower case chars well beyond the ANSII character set.
    ⍝ * The optional left argument is for test cases only.
      ⎕IO←⎕ML←1
      noIbeamFlag←{0<⎕NC ⍵:⍎⍵ ⋄ 0}'noIbeamFlag'
      :If 14≤⊃(//)⎕VFI⊃'.'Split(1+⎕IO)⊃'#'⎕WG' APLVersion'
      :AndIf 0=noIbeamFlag
          :Trap 11
              array←1(819⌶)array
          :Else
              →∆Fallback
          :EndTrap
      :Else
     ∆Fallback:
          :If 'Win'≡GetOperatingSystem ⍬
              'ToUpper'⎕NA'I4 USER32.C32|CharUpper',('*A'⊃⍨1+12>{⍎⍵↑⍨¯1+⍵⍳'.'}2⊃'.'⎕WG'APLVersion'),' =0T'
          :Else
              ToUpper←{⍬(⊃'.'⎕R'\u&'⍠('IC' 1)⊣⍵)}
          :EndIf
          :If ~0 1∊⍨≡array
              array←(⍕ToUpper Trans)¨array
          :Else
              array←(⍕ToUpper Trans)array
          :EndIf
      :EndIf
    ∇

    ∇ array←{noIbeamFlag}Lowercase array;ToLower;⎕ML;⎕IO;bool
    ⍝ Fast lowercasing that excepts scalars, vector, matrices as well as vectors and
    ⍝ matrices of text vectors.\\
    ⍝ Notes:
    ⍝ * `Lowercase` converts upper case chars well beyond the ANSII character set.
    ⍝ * The optional left argument is for test cases only.
      ⎕IO←⎕ML←1
      noIbeamFlag←{0<⎕NC ⍵:⍎⍵ ⋄ 0}'noIbeamFlag'
      :If 14≤⊃(//)⎕VFI⊃'.'Split(1+⎕IO)⊃'#'⎕WG' APLVersion'
      :AndIf 0=noIbeamFlag
          :Trap 11
              array←0(819⌶)array
          :Else
              →∆Fallback
          :EndTrap
      :Else
     ∆Fallback:
          :If 'Win'≡GetOperatingSystem ⍬
              'ToLower'⎕NA'I4 USER32.C32|CharLower',('*A'⊃⍨1+12>{⍎⍵↑⍨¯1+⍵⍳'.'}2⊃'.'⎕WG'APLVersion'),' =0T'
          :Else
              ToLower←{⍬(⊃'.'⎕R'\l&'⍠('IC' 1)⊣⍵)}
          :EndIf
          :If ~0 1∊⍨≡array
              array←(⍕ToLower Trans)¨array
          :Else
              array←(⍕ToLower Trans)array
          :EndIf
      :EndIf
    ∇

      Trans←{⎕IO←1
      ⍝ This operator can produce a WS FULL that often disappears when →⎕LC is executed.
      ⍝ This is dues to the fact that a workspace compaction in between might solve the probem.
      ⍝ Therefore it calles itself via a WS FULL guard but just once.\\
      ⍝ The operator is used by `Lowercase` and `Uppercase` and has no independent use.
          ⍺←0                   ⍝ The default.
          ⍺>2:⎕SIGNAL ⎕EN       ⍝ If ⍺ is greater than 2 then we have already tried once.
          1::1 ∇ ⍵              ⍝ In case of a WS FULL call itself with a 1 as left argument.
          b←,⍵≠⎕UCS 0
          (0=+/~b):(⍴⍵)⍴2⊃⍺⍺⊂,⍵ ⍝ Does not contain ⎕UCS 0?
          r←b\2⊃⍺⍺⊂b/,⍵         ⍝ Execute it.
          ((~b)/r)←⎕UCS 0       ⍝ Bring ⎕UCS 0 back
          (⍴⍵)⍴r
      }

    IsChar←{0 2∊⍨10|⎕dr ⍵}  ⍝ Version 12 compatible: is 82=⎕dr in V11

    ∇ r←IsDevelopment;⎕IO;⎕ML
    ⍝ Returns 1 in case the function is running under a Dyalog development (EXE or DLL).
      ⎕ML←⎕IO←1
      r←'Development'≡4⊃'#'⎕WG'APLVersion'
      r∨←'DLL'≡4⊃'#'⎕WG'APLVersion'   ⍝ May be DLLRT instead!
    ∇

    ∇ r←IsUnicode
    ⍝ Return a 1 if running under Dyalog Unicode.
      r←80=⎕DR' '
    ∇

      SplitPath←{
      ⍝ `'C:\Buffer\' 'my.txt' ←→ SplitPath 'C:\Buffer\my.txt'`
      ⍝ `(,¨'1.2.3.4.') (,'5') ←→ '.' SplitPath '1.2.3.4.5'`
          ⎕ML←⎕IO←1
          ⍺←'/\'
          l←1+-⌊/⍺⍳⍨⌽⍵
          (l↓⍵)(l↑⍵)
      }

      Split←{
      ⍝  `'First' 'Second' ←→ Split 'First',(⎕UCS 13 10),'Second'`
      ⍝ `(,¨'1' '2' '3') ←→ '.' Split '1.2.3'`
          ⎕ML←⎕IO←1
          ⍺←⎕UCS 13 10 ⍝ Default is CR+LF
          b←(1↑⍨⍴⍺),⍺⍷⍵     ⍝ This is more efficient in terms of memory then doing it one one line
          (⍴,⍺)↓¨b⊂⍺,⍵
      }

      Nest←{
      ⍝ `0 1 1 2 3 ←→ ≡¨ '1' (,'1') (1 2)((1 2)(3 4))(1(2 3(4 5)))`
      ⍝ `0 1 1 2 3 ←→ ≡¨ Nest  '1' (,'1') (1 2)((1 2)(3 4))(1(2 3(4 5)))`
          ⎕ML←⎕IO←1
          (⊂∘,⍣(0 1∊⍨≡⍵))⍵
      }

    Where←{⎕IO←(⎕IO⊃⎕RSI).⎕IO ⋄ ⍵/⍳⍴,⍵}        ⍝ Return indices for Boolean ⍵; depends on ⎕IO in caller's space

      Last←{
      ⍝ `(,¨'3') ←→ Last '1.2.3'`
          ⎕ML←⎕IO←1
          ⍺←'.'
          (⍴,⍵)=where←¯1+⌊/⍺⍳⍨⌽,⍵:0⍴⍵
          0 1∊⍨≡r←(-where)↑⍵:r
          ''⍴r
      }

      dmb←{
      ⍝ Delete leading, trailing and multiple blanks. Accepts scalar, vector and matrix as argument.
          ⍺←' '
          ⎕ML←⎕IO←1
          ~0 1∊⍨≡⍵:∇¨⍵
          2=⍴⍴⍵:Mix ∇¨↓⍵
          (,⍺)≡,⍵:''
          w←1↓¯1↓⍺{⍵/⍨~(2⍴⍺)⍷⍵}⍺,⍵,⍺
          (0=⍴⍴⍵)∧1=⍴w:⍬⍴⍵
          w
      }

      dlb←{
      ⍝ Delete leading blanks. Accepts scalar, vector and matrix as argument.
          ⎕IO←1 ⋄ ⎕ML←1
          (2=|≡⍵):∇¨⍵
          (1=⍴⍴⍵):(+/∧\' '=⍵)↓⍵                 ⍝ Vectors (main application)
          (2=⍴⍴⍵):(+/∧\' '=⍵)⌽⍵                 ⍝ Matrix
          (0=⍴⍴⍵):(⎕IO+' '≡⍵)⊃⍵''               ⍝ Scalar
          'Invalid argument'⎕SIGNAL 11
      }

      dtb←{
      ⍝ Delete trailing blanks. Accepts scalar, vector and matrix as argument.
          ⎕IO←1 ⋄ ⎕ML←1
          (2=|≡⍵):∇¨⍵
          (1=⍴⍴⍵):⌽{(+/∧\' '=⍵)↓⍵}⌽⍵            ⍝ Vectors (main application)
          (2=⍴⍴⍵):(-+/∧⌿∧\' '=⌽⍵)↓[2]⍵          ⍝ Matrix
          (0=⍴⍴⍵):(⎕IO+' '≡⍵)⊃⍵''               ⍝ Scalar
          'Invalid argument'⎕SIGNAL 11
      }

    ∇ r←{length}FormatDateTime ts;ts2;formatstring;bool;⎕IO;⎕ML;buffer
    ⍝ Formats the right argument (defaults to `⎕TS` if empty) as a string with:\\
    ⍝ 'YYYY-MM-DD HH:MM:SS.MILLISECOND\\
    ⍝ The right argument can be one of:
    ⍝ * A single float (like 20120102030405) representing date and time.
    ⍝ * A simple vector of length 6 or 7 representing a timestamp (`⎕TS`).
    ⍝ * A matrix of either floats or vectors (length 6 or 7) representing a DateTime.
    ⍝ Note that you cannot mix floats and time stamps.\\
    ⍝ If the right argument has not 7 but 6 or 3 elements, formatting is done accordingly.\\
    ⍝ Via the left argument the length of the right argument can be set to
    ⍝ ⍬, 3, 6 or 7; default is 6; ⍬ Accepts any length of the right argument which is 3, 6 or 7.\\
    ⍝ If the right argument is a...
    ⍝ * simple vector, a string is returned.
    ⍝ * matrix, a matrix is returned.
      ⎕IO←⎕ML←1
      :If 645≡⎕DR ts
          :If (⍴⍴ts)∊0 1
              :If 1=⍴,ts
                  ts←{0∊⍴,⍵:⍬ ⋄ ⎕ML←3 ⋄ ⍎¨(4 2 2 2 2 2/⍳6)⊂14 0⍕⍵}ts
              :EndIf
          :Else
              ts←↑,{0=⍵:6⍴0 ⋄ v←14 0⍕⍵ ⋄ ⎕ML←3 ⋄ ⍎¨(4 2 2 2 2 2/⍳6)⊂v}¨ts
          :EndIf
      :EndIf
      :If ⍬≡length←{2=⎕NC ⍵:⍎⍵ ⋄ 6}'length'
          length←''⍴¯1↑⍴ts
      :EndIf
      :If ~0∊⍴ts
          :If 2=⍴⍴ts
              buffer←{⍵/⍨0<⊃∘⍴¨⍵~¨⊂' ' 0}↓ts
              'Invalid right argument: must be integer'⎕SIGNAL 11/⍨~326 163∊⍨∪⎕DR¨buffer
              'Invalid right argument: must not be negative'⎕SIGNAL 11/⍨∨/¯1∊¨×¨buffer
              'Invalid right argument: must be simple'⎕SIGNAL 11/⍨1≠∪≡¨buffer
          :Else
              'Invalid right argument: must be integer'⎕SIGNAL 11/⍨~326 163∊⍨⎕DR ts
              'Invalid right argument: must not be negative'⎕SIGNAL 11/⍨¯1∊×,ts
              'Invalid right argument: must be simple'⎕SIGNAL 11/⍨1≠≡ts
          :EndIf
      :EndIf
      :If 2=⍴⍴ts
          ts2←length↑[2]ts
      :Else
          ts2←,[0.5]length↑{0∊⍴⍵:⎕TS ⋄ ts}ts
      :EndIf
      :Select First length
      :Case 3
          formatstring←'ZI4,<->,ZI2,<->,ZI2'
      :CaseList 6 7
          formatstring←'ZI4,<->,ZI2,<->,ZI2,< >,ZI2,<:>,ZI2,<:>,ZI2'
      :Else
          'Invalid left argument'⎕SIGNAL 11
      :EndSelect
      bool←(ts2∨.≠' ')∧ts2∨.≠0
      r←bool⍀formatstring ⎕FMT(6⌊length)↑[2]bool⌿ts2
      :If 7=2⊃⍴ts2
          r←⊃(↓r),¨{0=⍵:'' ⋄ 0∊⍴⍵~' ':'' ⋄ '.',⍕⍵}¨ts2[;7]
      :EndIf
      :If 2≠⍴⍴ts
          r←,r
      :EndIf
    ∇

    ∇ R←CreateUUID;∆UuidCreate;⎕ML;⎕IO;value;rc
    ⍝ Returns a UUID (https://www.wikiwand.com/en/Universally_unique_identifier)
      ⎕ML←⎕IO←1
      'Not on this platform'⎕SIGNAL 16/⍨'Win'≢GetOperatingSystem ⍬
      '∆UuidCreate'⎕NA'I RPCRT4|UuidCreate >{I1[4] I1[2] I1[2] I1[2] I1[6]}'
      (rc value)←∆UuidCreate 1
      :If 0≠rc
          11 ⎕SIGNAL⍨'Creating UUID failed, rc='⍕rc
      :Else
          R←'0123456789ABCDEF{-'[1+∊16 17 17 17 17,¨∊¨⍉¨16 16∘⊤¨value],'}'
      :EndIf
    ∇

    ∇ r←{flat}ReadUtf8File fileIdentifier;filename;fno;noOfBytes;bytes;⎕IO;⎕ML;b;typeFlag
    ⍝ This function works also with the Classic version if the file to be read does not
    ⍝ contain any "real" Unicode data.\\
    ⍝ By default `ReadUtf8File` returns one of:
    ⍝ * A nested vector with each item carrying a record (line) in case any of the common
    ⍝   "newline" definitions (CR+LF, CR or LF) is found in the file.
    ⍝ * A simple character vector otherwise.
    ⍝ If you want to get a simple stream in any case then specify 'flat' as left argument.\\
    ⍝ `fileIdentifier` can be one of:
    ⍝ # A filename. Then the file is tied, read and untied by `ReadUtf8File`.
    ⍝ # A file tie number. In this case the file is just read, it reamains tied. Use this
    ⍝   to tie a file with certain rights ''before'' calling `ReadUtf8File`, for example 34
    ⍝   which requests read+write but grants to others just read.
      ⎕IO←⎕ML←1
      r←''
      flat←{0=⎕NC ⍵:0 ⋄ 'flat'≡⍎⍵}'flat'
      :If typeFlag←' '=1↑0⍴fileIdentifier
          filename←fileIdentifier
          :Trap 19 22
              fno←(filename~'"')⎕NTIE 0
          :Else
              ('Could not read file: ',filename)⎕SIGNAL ⎕EN
          :EndTrap
      :Else
          fno←fileIdentifier
      :EndIf
      noOfBytes←⎕NSIZE fno
      bytes←⎕NREAD fno 83,noOfBytes,0
      :If typeFlag
          ⎕NUNTIE fno
      :EndIf
      bytes+←256×bytes<0                 ⍝ Make sure it is unsigned
      bytes↓⍨←3×239 187 191≡3⍴bytes      ⍝ drop a potential UTF-8 marker
      r←'UTF-8'⎕UCS bytes
      :If ~flat
          :If ∨/(⎕UCS 13 10)⍷r
              r←Split r
          :ElseIf ∨/r=⎕UCS 10
              r←(⎕UCS 10)Split r
          :ElseIf ∨/r=⎕UCS 13
              r←(⎕UCS 13)Split r
          :EndIf
      :EndIf
    ∇

    ∇ r←ReadBytesAs8BitSignedIntegersFromFile fileIdentifier;filename;⎕IO;⎕ML;wasOpenFlag;fno;size;flag
    ⍝ Read contents of "filename" as 8-bit signed integers.
    ⍝ `fileIdentifier` can be one of:
    ⍝ # A filename. Then the file is tied, read and untied by `ReadUtf8File`.
    ⍝ # A file tie number. In this case the file is just read, it reamains tied. Use this _
    ⍝   to tie a file with certain rights ''before'' calling `ReadUtf8File`, for example 34 _
    ⍝   which requests read+write but grants to others just read.
      ⎕IO←1 ⋄ ⎕ML←3
      :If wasOpenFlag←0=1↑0⍴fileIdentifier
          fno←fileIdentifier
      :Else
          filename←fileIdentifier~'"'
          fno←filename ⎕NTIE 0,66
      :EndIf
      size←⎕NSIZE fno
      r←⎕NREAD fno,83,size,0
      ⎕NUNTIE(~wasOpenFlag)/fno
    ∇

    ∇ {r}←WriteBytesAs8BitSignedIntegersToFile(fileIdentifier integers);⎕IO;⎕ML;max;fno;size;flag;i;wasOpenFlag;filename
     ⍝ Write 8-bit integers to "fileIdentifier".\\
     ⍝ Existing files are replaced.\\
     ⍝ "fileIdentifer" can be one of:
     ⍝ # A filename. In this case `WriteBytesAs8BitSignedIntegersToFile` ties the file, writes
     ⍝   it and then unties it.
     ⍝ # A tie number. In this case the file just written to. Use this to
     ⍝   tie a file with certain rights like 34 before calling `WriteBytesAs8BitSignedIntegersToFile`:\
     ⍝   request read & write but grant just read.
     ⍝ When the tie fails the function tries a couple of times with an
     ⍝ increasing delay before giving up.
      ⎕IO←⎕ML←1
      r←''
      max←5 ⋄ fno←0⍴i←size←flag←0
      :Repeat
          ⎕DL 1×i>0
          :If wasOpenFlag←0=1↑0⍴fileIdentifier
              fno←fileIdentifier
              size←⎕NSIZE fno
              flag←1
          :Else
              filename←fileIdentifier
              :Trap 19 22
                  fno←(filename~'"')⎕NTIE 0 17  ⍝ Open exclusively
                  size←⎕NSIZE fno
                  flag←1
              :Case 22
                  fno←(filename~'"')⎕NCREATE 0
                  flag←1
              :Else
                  ('Could not open file ',filename)⎕SIGNAL ⎕EN
              :EndTrap
          :EndIf
      :Until flag∨max<i←i+1
      0 ⎕NRESIZE fno
      integers ⎕NAPPEND fno 83
      ⎕NUNTIE(~wasOpenFlag)/fno
    ∇

    ∇ {r}←{append}WriteUtf8File(fileIdentifier data);filename;fno;fullname;flag;⎕ML;⎕IO;i;max;size;simpleFlag;wasOpenFlag
     ⍝ Writes UTF-8 "data" to "fileIdentifier" (''without'' a BOM!).\\
     ⍝ If the left argument equals the string "append" then "data" is appended
     ⍝ to an already existing file. If there is no such file yet
     ⍝ it is created no matter what the left argument is.\\
     ⍝ "fileIdentifer" can be one of:
     ⍝ * A filename. In this case `WriteUtf8File` ties the file, writes
     ⍝   it and then unties it.
     ⍝ * A tie number. In this case the data is just written to the file.
     ⍝   Use this to tie a file with certain rights like 34: request read
     ⍝   & write but grant just read.
     ⍝
     ⍝ When the tie fails the function tries a couple of times with an
     ⍝ increasing delay before giving up.
     ⍝
     ⍝ Note that when a nested vector is passed as data then
     ⍝ CR+LF are injected as separators between ite items. That means that
     ⍝ there will be no CR&LF at the end of the file. That violates the
     ⍝ POSIX recommendations but is in line with the majority of Windows
     ⍝ software. For example, MS Word adds CR&LF to the end, Wordpad does not!
     ⍝
     ⍝ When "append" is specified, CR+LF are also added as a prefix to
     ⍝ the data in case the file does already exist and was not empty yet.\\
     ⍝ That leads to desired result when you add stuff to a file you have
     ⍝ created with WriteUTF8File but not necessarily in other cases - watch out!
     ⍝
     ⍝ If a simple string is passed it is written as it is: nothing is
     ⍝ added at all. And yes, this IS correct! It can only be argued
     ⍝ whether it should be used this way. There are applications for
     ⍝ this in any case.
      ⎕IO←1 ⋄ ⎕ML←1
      r←''
      'Invalid data: must not be a matrix'⎕SIGNAL 11/⍨2=⍴⍴data
      append←{2=⎕NC ⍵:⍎⍵ ⋄ ''}'append'
      'Invalid right argument'⎕SIGNAL 11/⍨~(⊂append)∊'append' 1 0 ''⍬
      append←(⊂append)∊'append' 1
      simpleFlag←0 1∊⍨≡data
      data{⍵:¯2↓⊃,/⍺,¨⊂⎕UCS 13 10 ⋄ ⍺}←~simpleFlag
      max←5
      fno←0⍴i←size←flag←0
      :Repeat
          ⎕DL 1×i>0
          :If wasOpenFlag←0=1↑0⍴fileIdentifier
              fno←fileIdentifier
              size←⎕NSIZE fno
              flag←1
          :Else
              filename←fileIdentifier
              :Trap 19 22
                  fno←(filename~'"')⎕NTIE 0 17  ⍝ Open exclusively
                  size←⎕NSIZE fno
                  flag←1
              :Case 22
                  fno←(filename~'"')⎕NCREATE 0
                  flag←1
              :Else
                  ('Could not open file ',filename)⎕SIGNAL ⎕EN
              :EndTrap
          :EndIf
      :Until flag∨max<i←i+1
      :If append
      :AndIf (0<size)∧~simpleFlag
          data,⍨←⎕UCS 13 10
      :EndIf
      {}0 ⎕NRESIZE⍣(⊃(~append)∨append∧fno≡⍬)⊣fno
      data←⎕UCS'UTF-8'⎕UCS data             ⍝ Enforce UTF-8
      data ⎕NAPPEND fno
      ⎕NUNTIE(~wasOpenFlag)/fno
    ∇

    ∇ {r}←GoToWebPage Url;wsh;⎕IO;url;⎕WX;⎕ML
    ⍝ Fires up the default browser and goes to "url"\\
    ⍝ For displaying a file rather then a url add "file://".\\
    ⍝ However, note that "file://" does not work on some systems.\\
    ⍝ Examples:
    ⍝ ~~~
    ⍝ GoToWebPage 'file:///c:/my.html'
    ⍝ GoToWebPage 'file://localhost/c:/my.html'
    ⍝ GoToWebPage 'http://aplwiki.com'
    ⍝ GoToWebPage 'https://en.wikipedia.org/wiki/Main_Page'
    ⍝ ~~~
    ⍝ The to calls are equivalent
      ⎕WX←1 ⋄ ⎕IO←0 ⋄ ⎕ML←3
      'Not on this platform'⎕SIGNAL 16/⍨'Win'≢GetOperatingSystem ⍬
      r←⍬
      url←Lowercase Url
      :If ∨/'file:'{⍺≡(⍴⍺)↑⍵}url
          Url←'file://'{⍺,(⍴⍺)↓⍵}Url
      :ElseIf ∨/'https:'{⍺≡(⍴⍺)↑⍵}url
          Url←'https://'{⍺,(⍴⍺)↓⍵}Url
      :ElseIf ∨/'http:'{⍺≡(⍴⍺)↑⍵}url
          Url←'http://'{⍺,(⍴⍺)↓⍵}Url
      :Else
          :If ∨/'//:'∊Url  ⍝ Any protocol at all?!
              ⍝ ? No idea what that protocol is, so we just allow it going through.
          :Else
              Url←'http://',Url    ⍝ That's the default
          :EndIf
      :EndIf
      (('\'=Url)/Url)←'/'
      Url←{l←3+1⍳⍨'://'⍷⍵ ⋄ (l↑⍵),{(~'//'⍷⍵)/⍵}l↓Url}Url
      'wsh'⎕WC'OLEClient' 'WScript.Shell'
      {}wsh.Run Url
    ∇

      DropEmptyZerosAndBlanks←{
      ⍝ `⍵` is supposed to be a vector of simple vectors. If it is a
      ⍝ simple vector instead it will simply survive while a scalar
      ⍝ will become a one-item vector.\\
      ⍝ Removes items from ⍵ that are...
      ⍝ * empty
      ⍝ * consist of one or more zeros only
      ⍝ * consist of one or more blanks only
      ⍝ There are faster ways to get rid of empty items but ''not''
      ⍝ of the blank(s) and zero(s) as well!\\
      ⍝ Examples:
      ⍝ ~~~
      ⍝ 0 ←→ ⍴DropEmptyZerosBlanks '' ⍬ 0 ' ' (0 0) '  '
      ⍝ ('A' 'PL') ←→ DropEmptyZerosBlanks '' ⍬ 0 ' ' (0 0) '  ' 'A' 'PL'
      ⍝ ~~~
          ⎕ML←0
          ~∘∊⍨⍵
      }

      FindPathTo←{
      ⍝ `⍵` is the name of a script (namespace, interface or class).\\
      ⍝ Tries to find `⍵` in:
      ⍝ 1. The same namespace `⎕THIS` is coming from.
      ⍝ 2. The namespace where the class (if instanciated) comes from.
      ⍝ 3. In `#`.
      ⍝ 4. Where it was called from (**not** the same as 1 and 2).
      ⍝ If it fails to find `⍵`, an empty string is returned.
          ⎕IO←1 ⋄ ⎕ML←1
          base←⎕THIS.##                        ⍝ were are we coming from?
          base{11::0 ⋄ 9=⍺.⎕NC ⍵}⍵:base        ⍝ Is it in that namespace?
          base←{11::⍬ ⋄ (1⊃∊⎕CLASS ⍵).##}⍵     ⍝ Where stems the class from?
          base{11::0 ⋄ 9=⍺.⎕NC{Last ⍵}⍕1⊃⊃⎕CLASS ⍵}⍵:base  ⍝ Is it in that namespace?
          9={11::0 ⋄ #.⎕NC ⍵}⍵:#               ⍝ Is it in root?
          path←1⊃⎕RSI~⎕THIS                    ⍝ From where got we called?
          0<path.⎕NC ⍵:path                    ⍝ May be it's there?
          ''                                   ⍝ Give up
      }

⍝ Defines ⎕IO and ⎕ML independent aliases for {first}, {mix} and {enlist}:
    First←{⎕ML←3 ⋄ ↑⍵}
    Mix←{⎕ML←0 ⋄ ↑⍵}
    Enlist←{⎕ml←3 ⋄ ∊⍵}

      GetOperatingSystem←{
   ⍝ Returns one of: "Win", "Mac", "AIX", "Lin"
   ⍝ Note that under Linux you might need more information.
          3↑First'.'⎕WG'APLVersion'
      }

:EndNamespace ⍝ APLTreeUtils