:Namespace APLTreeUtils
⍝ *** Version 4.2.1 ⋄ 2018-05-16 ***
⍝
⍝ ## Overview
⍝ Version 4.0.0 is a major change in two respects:
⍝
⍝ ### Clean-up
⍝ Several functions that turned out to be very rarely used have been removed from `APLTreeUtils`. For a
⍝ full list see further down. Use `Fire` to change any calls to those functions.
⍝
⍝ ### Use the new ⎕N\*-functions introduced in 15.0
⍝ This was a necessary step in order to ensure platform compatability which was the main goal of
⍝ version 15.0 of Dyalog. It means that version 4.0.0 of APLTreeUtils is **not backwards-compatible**,
⍝ something that is normally avoided, but platform compatability is so important that we had to bite the bullet.
⍝
⍝ ## Updating
⍝ Of course this means that you cannot just update, this time you have to check carefully to take action,
⍝ even if you use already 15.0.\\
⍝ However, you can be sure that all members of the APLTree project themselves are ready for this.\\
⍝ Note that `APLTreeUtils` does not work with the Classic edition - it requires Unicode.
⍝
⍝ ## List of removed functions
⍝ Several functions have been removed from APLTreeUtils:
⍝ * `CreateUUID`
⍝ * `DropEmptyZerosAndBlanks`
⍝ * `Enlist`
⍝ * `First`
⍝ * `Mix`
⍝ * `ReadBytesAs8BitSignedIntegersFromFile`
⍝ * `WriteBytesAs8BitSignedIntegersToFile`
⍝
⍝ ## Version History
⍝ * 4.2.1
⍝   * `GoToWebPage` was not clear about "file://" versus "file:///"
⍝   * `GoToWebPage` with "file://" or "file:///" did not work from Ride
⍝ * 4.2.0
⍝   `GoToWebPage` was not clear about "file://" versus "file:///"
⍝ * 4.1.1
⍝   * Very serious performance issue fixed in `WriteUtf8File` with "append".
⍝   Bug fixes:
⍝   * `GoToWebPage` worked on a Mac only when connected to Ride.
⍝   * Test case 998 crashed on the Mac.
⍝ * 4.1.0
⍝   * Now managed by acre 3.
⍝ * 4.0.2
⍝   * Documentation improved.
⍝ * 4.0.1
⍝   * Bug fix: call to `GetOperatingSystem` was incorrectly addressing `APLTreeUtils` relatively.
⍝ * 4.0.0
⍝   * Tidied up: several functions got removed
⍝   * This version uses 15.0-features. **It's not backwards-compatible!**
⍝
⍝ Kai Jaeger - APL Team Ltd.\\
⍝ Homepage: <http://aplwiki.com/APLTreeUtils>

    ∇ array←Uppercase array
    ⍝ Fast uppercasing that excepts scalars, vectors and matrices as well as vectors and
    ⍝ matrices of text vectors.\\
    ⍝ Note that `Uppercase` converts lower case chars well beyond the ANSII character set.
      array←{2::0(819⌶)⍵ ⋄ ¯3 ⎕C ⍵}array
    ∇

    ∇ array←Lowercase array
    ⍝ Fast lowercasing that excepts scalars, vectors and matrices as well as vectors and
    ⍝ matrices of text vectors.\\
    ⍝ Note that `Lowercase` converts upper case chars well beyond the ANSII character set.
      array←{2::1(819⌶)⍵ ⋄ 1 ⎕C ⍵}array
    ∇

    IsChar←{0 2∊⍨10|⎕dr ⍵}

    ∇ r←IsDevelopment;⎕IO;⎕ML
    ⍝ Returns 1 in case the function is running under a Dyalog development (EXE or DLL).
      ⎕ML←⎕IO←1
      r←'Development'≡4⊃'#'⎕WG'APLVersion'
      r∨←'DLL'≡4⊃'#'⎕WG'APLVersion'   ⍝ May be DLLRT instead!
    ∇

    ∇ r←IsUnicode
    ⍝ Returns a 1 if running under Dyalog Unicode.
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
          2=⍴⍴⍵:↑∇¨↓⍵
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

    ∇ r←{flat}ReadUtf8File fileIdentifier;filename;fno;noOfBytes;bytes;⎕IO;⎕ML;b;typeFlag
    ⍝ By default `ReadUtf8File` returns one of:
    ⍝ * A nested vector with each item carrying a record (line) in case any of the common
    ⍝   "newline" definitions (⎕UCS 10 or ⎕UCS 13 ⎕UCS 13 10 depending on the platform) is
    ⍝   found in the file.
    ⍝
    ⍝   Note that the function first tries to find (⎕UCS 13 10) and when it can't ⎕UCS 10
    ⍝   and then, finally, ⎕UCS 13.
    ⍝ * A simple character vector otherwise.
    ⍝ If you want to get a simple stream in any case then specify 'flat' as left argument.\\
    ⍝ `fileIdentifier` can be one of:
    ⍝ * A filename. Then the file is tied, read and untied.
    ⍝ * A file tie number. In this case the file is just read, it remains tied. Use this
    ⍝   to tie a file with certain rights **before** calling `ReadUtf8File`, for example 34
    ⍝   which requests read+write but grants just read to others.
      ⎕IO←⎕ML←1
      r←''
      flat←{900⌶⍬:0 ⋄ 'flat'≡⍎⍵}'flat'
      :If typeFlag←' '=1↑0⍴fileIdentifier
          filename←fileIdentifier
          (('\'=filename)/filename)←'/'
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

    ∇ {r}←{append}WriteUtf8File(fileIdentifier data);filename;fno;fullname;flag;⎕ML;⎕IO;i;max;size;simpleFlag;wasOpenFlag;newline
     ⍝ Note that Dyalog 15.0 comes with the newly introduced system functions `⎕NPUT`
     ⍝ and `⎕NGET`. They offer a powerful, flexible and platform-independent interface
     ⍝ for reading and writing files.\\
     ⍝ However, `ReadUtf8File` and `WriteUtf8File` remain available in `APLTreeUtils`
     ⍝ for two reasons:
     ⍝ * Compatability
     ⍝ * Dealing with slippery networks. `WriteUtf8File` does not give up easily!
     ⍝ * `WriteUtf8File` allows you to append data **to the last record** rather than
     ⍝   appending records if you wish so.
     ⍝
     ⍝   This is not POSIC compatible yet most software packages (~70%) offer this
     ⍝   feature, and there are applications for this.
     ⍝
     ⍝ Writes UTF-8 "data" to "fileIdentifier" (**without** a BOM - UTF8 files do
     ⍝ not have a BOM according to the spec!).\\
     ⍝ If the left argument equals the string "append" then "data" is appended to an
     ⍝ already existing file. If there is no such file yet it is created no matter
     ⍝ what the left argument is.\\
     ⍝ "fileIdentifer" can be one of:
     ⍝ * A filename. In this case `WriteUtf8File` ties the file, writes
     ⍝   it and then unties it.
     ⍝ * A tie number. In this case the data is just written to the file.
     ⍝
     ⍝   Use this to tie a file with certain rights like 34: request read
     ⍝   & write but grant just read.
     ⍝
     ⍝ When the tie fails the function tries a couple of times with an
     ⍝ increasing delay before giving up.
     ⍝
     ⍝ Under Windows `newline` gets `⎕UCS 13 10` and `⎕UCS 10` otherwise.
     ⍝ When a nested vector is passed as data then "newline" is appended to every single
     ⍝ record **but** the last one.\\
     ⍝ That means that there will be **no** "newline" at the end of the file. That
     ⍝ violates  the POSIX recommendations but is in line with the majority of Windows
     ⍝ software. For example, MS Word adds "newline" but Wordpad does not.\\
     ⍝ When "append" is specified, "newline" is also added as a prefix to
     ⍝ the data in case the file does already exist and was not empty yet.\\
     ⍝ That leads to the desired result when you add stuff to a file you have
     ⍝ created with `WriteUTF8File` but not necessarily in other cases - watch out!\\
     ⍝ If a simple string is passed it is written as it is: nothing is
     ⍝ added at all. And yes, this **is** correct! It can only be argued
     ⍝ whether it should be used this way. There are applications for
     ⍝ this in any case.\\
     ⍝ It means **you** are in charge for inserting the correct "newline" characters
     ⍝ (if any) depending on the platform.
      ⎕IO←1 ⋄ ⎕ML←1
      r←''
      'Invalid data: must not be a matrix'⎕SIGNAL 11/⍨2=⍴⍴data
      append←{900⌶⍬:'' ⋄ ⍎⍵}'append'
      'Invalid right argument'⎕SIGNAL 11/⍨~(⊂append)∊'append' 1 0 ''⍬
      append←(⊂append)∊'append' 1
      simpleFlag←0 1∊⍨≡data
      newline←(1+'Win'≡GetOperatingSystem ⍬)⊃(⎕UCS 10)(⎕UCS 13 10)
      data{⍵:(-⍴,newline)↓⊃,/⍺,¨⊂newline ⋄ ⍺}←~simpleFlag
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
              (('\'=filename)/filename)←'/'
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
          data,⍨←newline
      :EndIf
      {}0 ⎕NRESIZE⍣(⊃(~append)∨append∧fno≡⍬)⊣fno
      data←⎕UCS'UTF-8'⎕UCS data             ⍝ Enforce UTF-8
      data ⎕NAPPEND fno
      :If ~wasOpenFlag
          ⎕NUNTIE fno
      :EndIf
    ∇

    ∇ {r}←{browser}GoToWebPage Url;wsh;⎕IO;url;⎕WX;⎕ML;html;title;EncodeBlanksForNix
    ⍝ Fires up the default browser and displays "Url". Exception is when the current
    ⍝ session is connected to Ride: then "Url" is displayed in the Ride browser.\\
    ⍝ Instead of using the default browser you can specify an EXE (Windows) or command
    ⍝ as the left argument. That will then be used to show "Url". Note that the left
    ⍝ argument is ignored in case the current session is connected to Ride.\\
    ⍝ For displaying a local file rather then a url add "file:///".\\
    ⍝ However, note that "file:///" does not work on some systems / with some browsers.\\
    ⍝ Examples:
    ⍝ ~~~
    ⍝ GoToWebPage 'file:///c:/my.html'
    ⍝ GoToWebPage 'file://localhost/c:/my.html'
    ⍝ GoToWebPage 'http://aplwiki.com'
    ⍝ GoToWebPage 'https://en.wikipedia.org/wiki/Main_Page'
    ⍝ ~~~
      ⎕WX←1 ⋄ ⎕IO←0 ⋄ ⎕ML←3
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
      :If 3501⌶⍬ ⍝ Connected to Ride?
          :If 'file://'{⍺≡(⍴⍺)↑⍵}Url
              EncodeBlanksForNix←{0∊⍴w←⍵:w ⋄ 0=+/b←' '=w:w ⋄ (b/w)←⊂'\ ' ⋄ ↑,/w}
              Url←EncodeBlanksForNix Url
              Url←(⍴'file:')↓Url
              Url←{⍵↓⍨+/∧\'/'=⍵}Url
              html←ReadUtf8File Url
              title←'<title'{{⍵↑⍨¯1+⍵⍳'<'}⍵↓⍨(⍴⍺)+1⍳⍨⍺⍷⍵}∊html
              title(3500⌶)∊html
          :Else
              html←'<html>' '<head>'
              html,←⊂'<meta http-equiv="refresh" content="0;url=',Url,'" />'
              html,←'</head>' '</html>'
              Url(3500⌶)∊html
          :EndIf
      :Else
          browser←{2<⎕NC ⍵:⍎⍵ ⋄ ''}'browser'
          :Select GetOperatingSystem ⍬
          :Case 'Win'
              :If 0∊⍴browser
                  'wsh'⎕WC'OLEClient' 'WScript.Shell'
                  {}wsh.Run Url
              :Else
                  {}wsh.Run browser,' ',Url
              :EndIf
          :Case 'Lin'
              :If 0∊⍴browser
                  {}⎕SH'xdg-open ',Url,'</dev/null > /dev/null 2>&1 &'
              :Else
                  {}⎕SH browser,' ',Url,'</dev/null > /dev/null 2>&1 &'
              :EndIf
          :Case 'Mac'
              {}⎕SH'open Safari ',Url
          :EndSelect
      :EndIf
    ∇

      FindPathTo←{
      ⍝ `⍵` is the name of a script (namespace, interface or class).\\
      ⍝ Tries to find `⍵` in:
      ⍝ 1. The same namespace `⎕THIS` is coming from.
      ⍝ 2. The namespace where the class (if instanciated) comes from.
      ⍝ 3. In `#`.
      ⍝ 4. Where it was called from (**not** the same as either 1 or 2!).
      ⍝ If it fails to find `⍵` an empty string is returned.
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

    ∇ r←GetOperatingSystem dummy;⎕ML;⎕IO
   ⍝ Returns one of: "Win", "Mac", "AIX", "Lin"
   ⍝ Note that under Linux you might need more information.
      ⎕IO←0 ⋄ ⎕ML←1
      r←3↑⊃'.'⎕WG'APLVersion'
    ∇

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
      :Select ⊃length
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

:EndNamespace ⍝ APLTreeUtils
