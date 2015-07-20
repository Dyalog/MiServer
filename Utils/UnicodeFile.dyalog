:Class UnicodeFile                          
⍝ clone of ⎕SE.UnicodeFile
⍝ Version 12 compatible version
    
    ⎕ML ⎕IO←0 1
    ⎕avu[4]←13      ⍝ make sure CR is here
    
⍝==============================================================================⍝
⍝     Declaration of Variables                                                 ⍝
⍝     (commented ones are defined later in the file )                          ⍝
⍝==============================================================================⍝
    
  ⍝ Public Variables :
    ⍝ :Property Public NewLine          ⍝ Vector of Unicode Scalar representing the New Line sequence (empty if auto-detected)
    ⍝ :Property Public Raw              ⍝ Unicode scalars of the file
    ⍝ :Property Public Text             ⍝ Encapsulation of Raw in APL text through the translate table
    ⍝ :Property Public NestedText       ⍝ Encapsulation of NestedText
    ⍝ :Property Public Encoding         ⍝ A string to get or set the current unicode encoding
    ⍝ :Property Public Errors           ⍝ Friendly access to error state (write anything = reset)
    :Field Public Malformed←⍬           ⍝ indices of malformed characters in Raw
    :Field Public Illegal←⍬             ⍝ indices of illegal characters in Raw
    :Field Public Untranslatable←⍬      ⍝ indices of untranslatable characters in Text
    :Field Public Shared UnicodeEN←500  ⍝ ⎕EN of the unicode errors when using the public shared Read/Write functions
    
  ⍝ Private counterparts of public variables :
    :Field Private _Raw←⍬               ⍝ Data storage for property Raw
    :Field Private _Replacement←'?'     ⍝ Data storage for property Replacement
    
  ⍝ Private Fields for Errors :
    ⍝ :Field Private _ErrorMessages     ⍝ List of error messages      - See the end
    :Field Private _Errors←⍬            ⍝ Data storage for property Errors
    
  ⍝ Private Fields for New Lines :
    :Field Private _NewLine←⍬           ⍝ New Line sequence currently in use (will be auto-detected if empty)
    :Field Private _NewLineUser←⍬       ⍝ User-defined new line sequence
    :Field Private _NewLines←,¨(13 10)10 13 133    ⍝ Accepted new line sequences for autodetection
    
  ⍝ Private Fields for Encoding - See the end
    ⍝ :Field Private _TableBOM
    ⍝ :Field Private _Encoding
    ⍝ :Field Private _EncodingDefault
    ⍝ :Field Private _EncodingUser
    ⍝ :Property Private _EncodingName
    ⍝ :Property Private _EncodingList
    ⍝ :Property Private _Width
    ⍝ :Property Private _Endian
    ⍝ :Property Private _BOM
    ⍝ :Property Private _BOMlist
    
  ⍝ Misc :
    :Field Private _FileName←''         ⍝ file path
    :Field Private V11←'11.0.'≡5↑2⊃'.' ⎕wg 'APLVersion'
    
    
⍝==============================================================================⍝
⍝     Public Methods of Shared Use                                             ⍝
⍝==============================================================================⍝
    
    ∇ r←ReadRaw arg;u
      :Access Public Shared
    ⍝ ReadRaw 'filename' {'format'}
      :Trap 0                 ⍝ forward errors to user
          r←1 Read arg
      :Else
          (⊃⎕DM)⎕SIGNAL ⎕EN
      :EndTrap
    ∇
    
    ∇ r←ReadText arg;u;err
      :Access Public Shared
    ⍝ ReadText 'filename' {'format'}
      :Trap 0                 ⍝ forward errors to user
          r←2 Read arg
      :Else
          (⊃⎕DM)⎕SIGNAL ⎕EN
      :EndTrap
    ∇
    
    ∇ r←ReadNestedText arg;u
      :Access Public Shared
    ⍝ ReadNestedText 'filename' {'format'}
      :Trap 0                 ⍝ forward errors to user
          r←3 Read arg
      :Else
          (⊃⎕DM)⎕SIGNAL ⎕EN
      :EndTrap
    ∇
    
    ∇ r←type Read arg;u;err
      :Access Private Shared
    ⍝ (type∊1 2 3) Read 'filename' {'format'}
      u←⎕NEW ⎕THIS arg
      :Select type
      :Case 1
          r←u.Raw
      :Case 2
          r←u.Text
      :Case 3
          r←u.NestedText
      :Else
          r←⍬
      :EndSelect
      :If 1=2|⊃u.Errors             ⍝ special case when file does not exist
          'File not found'⎕SIGNAL 22
      :ElseIf 0 4∧.≠1⊃u.Errors      ⍝ signal any error excepted when only unmarked file (correctly read)
          ('UNICODE ERRORS: ',2⊃u.Errors)⎕SIGNAL UnicodeEN
      :EndIf
    ∇
    
    ∇ Write arg;data;u;msg
      :Access Public Shared
    ⍝ Write 'filename' data {'format'}
      msg←'Usage = Write ''filename'' (data) {''encoding''} {(new line sequence)}'
      :If ~(⊃⍴arg←,arg)∊2 3 4
          ('LENGTH ERROR: ',msg)⎕SIGNAL 5           ⍝ length error
      :EndIf
      data←2⊃arg ⋄ arg←(1↑arg),(2↓arg)  ⍝ separate data from other arguments
     
      :Trap 0
          :Trap 11                      ⍝ change the usage message if it pops up
              u←⎕NEW ⎕THIS arg
              {}u.Text                  ⍝ trigger auto-detection of NewLine sequence
          :Else
              ('DOMAIN ERROR: ',msg)⎕SIGNAL 11
          :EndTrap
          u.Errors←0                ⍝ reset errors (we don't care whether reading was OK or not)
          :If istext data           ⍝ Text
              u.Text←data
          :ElseIf 1 3∨.=10|⎕DR data ⍝ Integers (can be boolean)
              u.Raw←data
          :ElseIf ∧/istext¨data     ⍝ Nested Text
              u.NestedText←data
          :Else
              msg←'DOMAIN ERROR: Data (the second element) must be either '
              msg,←'Raw (integer vector), Text (character vector), or Nested Text (vector of character vectors)'
              msg ⎕SIGNAL 11        ⍝ domain error
          :EndIf
          :If 0≠1⊃u.Errors          ⍝ check for unicode errors
              ('UNICODE ERRORS: ',2⊃u.Errors)⎕SIGNAL UnicodeEN
          :EndIf
          u.Export                  ⍝ write if no error
      :Else
          (⊃⎕DM)⎕SIGNAL ⎕EN
      :EndTrap
    ∇
    
⍝==============================================================================⍝
⍝     Public Methods of Instance Use                                           ⍝
⍝==============================================================================⍝
    
    ∇ Make arg;filename;format;msg;i;t
      :Access Public
      :Implements Constructor
      msg←'Arguments should be : ''filename'' {''encoding''} {(new line sequence)}'
      ('DOMAIN ERROR: ',msg)⎕SIGNAL(~istext⊃arg)/11     ⍝ check filename is text
      Encoding NewLine←''⍬         ⍝ initialize to default
      :Trap 0
          :Select |≡arg←,arg
          :Case 1
              _FileName←arg
          :Case 2
              :Select ⊃⍴arg
              :Case 1
                  _FileName←(⊃arg)
              :CaseList 2 3
                  _FileName←⊃arg
                  i←⍋t←2|⎕DR¨arg←1↓arg    ⍝ types of arguments
                  :Select t[i]
                  :Case ,0          ⍝ text : enconding
                      Encoding←⊃arg
                  :Case ,1          ⍝ numbers : new line sequence
                      NewLine←⊃arg
                  :Case 0 1         ⍝ both
                      Encoding NewLine←arg[i]
                  :Else
                      ('DOMAIN ERROR: ',msg)⎕SIGNAL 11
                  :EndSelect
              :Else
                  ('LENGTH ERROR: ',msg)⎕SIGNAL 5
              :EndSelect
          :Else
              ('DOMAIN ERROR: ',msg)⎕SIGNAL 11
          :EndSelect
          Import                ⍝ try to import the unicode file
      :Else
          (⊃⎕DM)⎕SIGNAL ⎕EN     ⍝ file i/o errors
      :EndTrap
    ∇
    
    ∇ Import;bytestream
      :Access Public
    ⍝ refresh the data from the file
      :Trap 0
          ⍝ first, try to read bytestream from the file
          bytestream←readfile _FileName
      :Else
          (⊃⎕DM)⎕SIGNAL ⎕EN     ⍝ file i/o error
      :EndTrap
      :If ~ERR_EXIST∊_Errors
          ⍝ then process the bytestream into unicode scalars
          Raw←decode gather removeBOM getencoding bytestream
      :Else
          Raw←⍬
      :EndIf
    ∇
    
    ∇ Export;bytestream
      :Access Public
    ⍝ refresh the file with the data
    ⍝ be sure to have check for errors before doing this !
      bytestream←addBOM split encode Raw
      :Trap 0
          _FileName writefile bytestream
      :Else
          (⊃⎕DM)⎕SIGNAL ⎕EN     ⍝ file i/o error
      :EndTrap
    ∇
    
    
    
⍝==============================================================================⍝
⍝     Public Properties                                                        ⍝
⍝==============================================================================⍝
    
    :Property Raw           ⍝ legalized Vector of Unicode scalars
    :Access Public
        ∇ r←Get
          r←_Raw
        ∇
        ∇ set args;bytestream;msg;data
          data←,args.NewValue
          msg←'DOMAIN ERROR: Raw data must be an integer vector'
          msg ⎕SIGNAL(1 3∧.≠10|⎕DR data)/11
         
          :If 'Import'≢2⊃2↑⎕SI     ⍝ if writing Raw directly, clear Import errors
              _Errors~←ERR_BADBOM∪ERR_NOBOM∪ERR_MALFORMED
          :EndIf
          :If 'set_Text'≢2⊃2↑⎕SI    ⍝ if writing Raw directly, clear text errors
              _Errors~←ERR_NL∪ERR_UNTRANS
          :EndIf
          _Raw←legalize data
        ∇
    :EndProperty
    
    :Property Text          ⍝ APL Text Vector
    :Access Public
        ∇ r←Get
          r←unicode2apl 1 newlines Raw
        ∇
        ∇ Set args;msg;data
          data←,args.NewValue
          msg←'DOMAIN ERROR: Text must be an character vector'
          msg ⎕SIGNAL(istext data)↓11
          Raw←0 newlines apl2unicode data
        ∇
    :EndProperty
    
    :Property NestedText    ⍝ APL Nested Text Vector (no newline characters)
    :Access Public
        ∇ r←get;NL;txt
          txt←Text                          ⍝ read text and detect NewLine
          :If ~V11
          :OrIf _NewLine∧.∊⊂_Unicode        ⍝ mappable new line
              NL←,unicode2apl _NewLine
          :Else
              NL←,⎕AV[4]                    ⍝ un-mappable new line
          :EndIf
          r←(⍴NL)↓¨(NL⍷txt)⊂txt←NL,txt
        ∇
        ∇ Set args;data;msg;NL
          data←,args.NewValue
          msg←'DOMAIN ERROR: NestedText must be an vector of character vectors'
          msg ⎕SIGNAL(∧/istext¨data)↓11
          :If 0=⍴,_NewLine
              _NewLine←,⊃_NewLines          ⍝ default new line
          :EndIf
          :If ~V11
          :OrIf _NewLine∧.∊⊂_Unicode        ⍝ mappable new line
              NL←,unicode2apl _NewLine
          :Else
              NL←,⎕AV[4]                    ⍝ un-mappable new line
          :EndIf
          Text←(-⍴NL)↓⊃data,.,⊂NL
        ∇
    :EndProperty
      
    :Property Encoding      ⍝ string to get or set the current encoding of the file
    :Access Public
        ∇ r←Get
          r←¯1↓⊃_EncodingName,.,'-'
        ∇
        ∇ Set args;name;names;charset;bool;msg
          name←,args.NewValue
          msg←'DOMAIN ERROR: Encoding must be a character vector'
          msg ⎕SIGNAL(istext name)↓11               ⍝ Must be char
          :If 0=⍴name
              _EncodingUser←⍬
              _Encoding←_EncodingDefault
          :Else
              charset←'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 abcdefghijklmnopqrstuvwxyz0123456789'
              name←' ',charset[1+37|¯1+charset⍳name]    ⍝ go uppercase and replace anything not in charset by spaces
              name←1↓¨(' '=name)⊂name                   ⍝ partition on spaces
              name←(0≠(⊃∘⍴)¨name)/name                  ⍝ remove empty partitions
              bool←(⊂name){(,¨⍺)≡(,¨⍵)}¨_EncodingList   ⍝ names that match
              :If ∨/bool
                  _Encoding←_EncodingUser←bool⍳1        ⍝ first name that match
              :Else
                  msg←'DOMAIN ERROR: Accepted Formats are : ',⊃,/{'''',(¯1↓⊃⍵,.,'-'),''' '}¨_EncodingList
                  msg ⎕SIGNAL 11                            ⍝ no match
              :EndIf
          :EndIf
        ∇
    :EndProperty
    
    :Property Errors         ⍝ friendly access to error state
    :Access Public
        ∇ Set args           ⍝ write anything = reset
          _Errors←ERR_OK
        ∇
        ∇ r←Get;err;n;msg    ⍝ read as a 2-el vector : (scalar error number) (string catenation of error messages)
          err←∪_Errors
          :If 0=+/|err       ⍝ no error (empty or containing zeros)
              r←0 ''
          :Else
              err←err~0
              err←err[⍋err]
              n←2⊥(⌽⍳⍴_ErrorMessages)∊err               ⍝ base-2 encoding of error numbers
              msg←'[',¯2↓⊃_ErrorMessages[err],.,⊂'] ['  ⍝ catenation of the messages
              r←n msg
          :EndIf
        ∇
    :EndProperty
    
    :Property NewLine
    :Access Public
        ∇ Set args;data
          data←,args.NewValue
          :If 1 3∧.≠10|⎕DR data
              'DOMAIN ERROR: NewLine sequence must be a vector of Unicode scalars'⎕SIGNAL 11
          :EndIf
          _NewLine←_NewLineUser←data
        ∇
        ∇ r←Get
          r←_NewLine
        ∇
    :EndProperty
    
⍝==============================================================================⍝
⍝     Private Methods                                                          ⍝
⍝==============================================================================⍝
    
⍝ Private Dataflow of the UnicodeFile Class :
⍝ ┌───────────────────────┬──────────────┬───────────┬──────────────┬───────────────┐
⍝ │ Layer (type of data)  │ Importing    │           │ Exporting    │ Errors        │
⍝ │                       │ process      │           │ process      │ Raised        │
⍝ ├───────────────────────┼──────────────┼───────────┼──────────────┼───────────────┤
⍝ │ File                  │              │           │              │               │
⍝ │                       │ readfile     │           │ writefile    │ ERR_EXIST     │\
⍝ │ Marked Bytestream     │    ↓         │           │    ↑         │               │ |
⍝ │                       │ getencoding  │           │    ↑         │ ERR_NOBOM,ERR_BADBOM
⍝ │                       │    ↓         → _Encoding │    ↑         │               │ |
⍝ │                       │ removeBOM    │           │ addBOM       │               │ | Import/Export
⍝ │ Bytestream            │    ↓         │           │    ↑         │               │ |
⍝ │                       │ gather       │           │ split        │ ERR_ODD       │ |
⍝ │ Coded Wide Characters │    ↓         │           │    ↑         │               │ |
⍝ │                       │ decode       │           │ encode       │ ERR_MALFORMED │/
⍝ │                    /  │    ↓         │ _Raw      ←    ↑         │               │\
⍝ │                   |   │ legalize     │           │ legalize     │ ERR_ILLEGAL   │ | Raw Property
⍝ │ Unicode Scalars   |   │    ↓         → _Raw      │    ↑         │               │/
⍝ │                   |   │ newlines     │           │ newlines     │ ERR_NL        │\
⍝ │                    \  │    ↓         → _NewLine  │    ↑         │               │ |
⍝ │                       │ unicode2apl  │           │ apl2unicode  │ ERR_UNTRANS   │ | Text Property
⍝ │ APL Text              │              → _Text     →              │               │/
⍝ └───────────────────────┴──────────────┴───────────┴──────────────┴───────────────┘
⍝ NB : All functions must accept and then return empty vectors
    
  ⍝ Importing Nested Text when no newline is set put ⎕AV[4] translated to 13, should be the default
  ⍝ When import text and no newline set, ⎕av[4] alone should be mapped to the default
  ⍝   :AndIf ~(~toquadav)∧(old≡,4⊃_Unicode)  ⍝ when from ⎕AV, ⎕AV[4] is accepted as homogeneous to the chosen sequence => no error (unless _NewLine∊_NewLines)
    
  ⍝ specific functions for autodetecting newlines,
  ⍝ getting its unicode representation and APL representation
    
    ∇ r←istext data
    ⍝ Is data text (V12 compatible)
      r←(10|⎕DR data)∊0 2
    ∇
    
    ∇ bytestream←readfile filename;fic
    ⍝ Read file as positive integers ∊ [0;255]
    ⍝ Will signal on any file i/o error excepted FILE NAME ERROR (22)
      fic←0
      bytestream←⍬
      :Trap 22      ⍝ FILE NAME ERROR = file does not exist
          fic←filename ⎕NTIE 0
          bytestream←256|⎕NREAD fic 83(⎕NSIZE fic)0
          ⎕NUNTIE fic
          _Errors~←ERR_EXIST
      :Else
          _Errors∪←ERR_EXIST
      :EndTrap
    ∇
    ∇ name writefile bytestream;fic
    ⍝ Write byte stream to file, creating it or overwriting it
    ⍝ Will signal any file i/o error
      fic←0
      :Trap 22       ⍝ try to create it
          fic←name ⎕NCREATE 0
      :Else          ⍝ else open it
          fic←name ⎕NTIE 0
      :EndTrap
      0 ⎕NRESIZE fic
      :Trap 11 ⍝ there used to be a bug where NAPPEND 83 would accept >127
          bytestream ⎕NAPPEND fic 83
      :Else
          (bytestream-256×bytestream>127)⎕NAPPEND fic 83
      :EndTrap
      ⎕NUNTIE fic
      _Errors~←ERR_EXIST
    ∇
    
    
    ∇ bytestream←getencoding bytestream;header;match
    ⍝ Reads the BOM and deduce the encoding if the user hasn't forced the encoding
      _Errors~←ERR_NOBOM∪ERR_BADBOM      ⍝ clear errors before updating them
      header←(⊃⌈/⍴¨_BOMlist)↑bytestream  ⍝ beginning of the bytestream
      match←⊃¨_BOMlist⍷¨⊂header          ⍝ BOMs that match
      match←match⍳1                      ⍝ first row of table that matches
      :If 0=⍴,_EncodingUser              ⍝ auto-detect
          :If match>⍴_BOMlist            ⍝ nothing detected : default
              _Errors∪←ERR_NOBOM
              _Encoding←_EncodingDefault
          :Else                          ⍝ BOM detected
              _Encoding←match
          :EndIf
      :ElseIf (match≤⍴_BOMlist)∧(match≠_Encoding)  ⍝ user specified one and we detected another
          _Errors∪←ERR_BADBOM
      :EndIf
    ∇
    ∇ bytestream←removeBOM bytestream
    ⍝ Removes the BOM from the bytestream
      :If ⊃_BOM⍷bytestream
          bytestream←(⍴_BOM)↓bytestream
      :EndIf
    ∇
    ∇ bytestream←addBOM bytestream
    ⍝ Adds the BOM to the bytestream
      bytestream←_BOM,bytestream
      _Errors~←ERR_NOBOM∪ERR_BADBOM
    ∇
        
    ∇ wchars←gather bytestream;width;length;encoding
    ⍝ Depending on the width of the encoding, gather bytes into wide characters
      :If _Width>1
          length←(⍴bytestream)÷_Width
          :If length≠⌊length
              length←⌊length                       ⍝ ignore the last word if it is not complete
              _Errors∪←ERR_ODD                     ⍝ indicate file size is odd
          :Else
              _Errors~←ERR_ODD
          :EndIf
          bytestream←⍉(length,_Width)⍴bytestream
          :If _Endian=1                            ⍝ swap only if little endian
              bytestream←⊖bytestream
          :EndIf
          wchars←256⊥bytestream
      :Else
          wchars←bytestream
      :EndIf
    ∇
    ∇ bytestream←split wchars;width;length;encoding
    ⍝ Depending on the width of the encoding, split wide characters into bytes
      _Errors~←ERR_ODD
      :If _Width>1
          bytestream←(_Width⍴256)⊤wchars   ⍝ split wchars into bytes
          :If _Endian=1                    ⍝ swap only if little endian
              bytestream←⊖bytestream
          :EndIf
          bytestream←,⍉bytestream
      :Else
          bytestream←wchars
      :EndIf
    ∇
        
    ∇ codes←decode wchars
    ⍝ Depending of the encoding, decodes the wide characters into Unicode scalars
      codes←wchars   ⍝ by default: empty or other encoding
      :If 0≠⍴,wchars
          :Select Encoding
          :Case 'UTF-8'
              codes←readutf8 wchars
          :CaseList 'UTF-16-LE' 'UTF-16-BE'
              codes←readutf16 wchars
          :EndSelect
      :EndIf
    ∇
    ∇ wchars←encode codes
    ⍝ Depending on the encoding, encode the Unicode scalars into wide characters
      wchars←codes   ⍝ by default: empty or other encoding
      :If 0≠⍴,wchars
          :Select Encoding
          :Case 'UTF-8'
              wchars←writeutf8 codes
          :CaseList 'UTF-16-LE' 'UTF-16-BE'
              wchars←writeutf16 codes
          :EndSelect
      :EndIf
    ∇
        
    ∇ unicode←rdU8 wchars;class;⎕IO;sect;cut;bad;touni;c0;c1;seq;bseq;tmp;todo
      :Access public shared
    ⍝ Get Unicode scalars from UTF-8 characters,
    ⍝ replacing malformed characters by U+FFFD and raising the malformed error flag.
    ⍝ Don't forget to use the legalize function on the output after reading utf
    ⍝          Binary Scalar Value         │                          UTF8 byte sequences [class of byte]                            │
    ⍝                                      │ 1st byte     │ 2nd byte     │ 3rd byte     │ 4th byte     │ 5th byte     │ 6th byte     │
    ⍝ ─────────────────────────────────────┼──────────────┼──────────────┼──────────────┼──────────────┼──────────────┼──────────────┤
    ⍝  00000000 00000000 00000000 0xxxxxxx │ 0xxxxxxx [0] │              │              │              │              │              │
    ⍝  00000000 00000000 00000yyy yyxxxxxx │ 110yyyyy [2] │ 10xxxxxx [1] │              │              │              │              │
    ⍝  00000000 00000000 zzzzyyyy yyxxxxxx │ 1110zzzz [3] │ 10yyyyyy [1] │ 10xxxxxx [1] │              │              │              │
    ⍝  00000000 000uuuzz zzzzyyyy yyxxxxxx │ 11110uuu [4] │ 10zzzzzz [1] │ 10yyyyyy [1] │ 10xxxxxx [1] │              │              │
    ⍝  000000vv uuuuuuzz zzzzyyyy yyxxxxxx │ 111110vv [5] │ 10uuuuuu [1] │ 10zzzzzz [1] │ 10yyyyyy [1] │ 10xxxxxx [1] │              │
    ⍝  0wvvvvvv uuuuuuzz zzzzyyyy yyxxxxxx │ 1111110w [6] │ 10vvvvvv [1] │ 10uuuuuu [1] │ 10zzzzzz [1] │ 10yyyyyy [1] │ 10xxxxxx [1] │
    ⍝ - NB : in square brackets [*] is the class of the byte :
    ⍝        bytes of class 1 are called "continuation bytes", bytes of class >1 are called "start bytes"
    ⍝ - UTF-8 malformed characters must be replaced by U+FFFD. They can be :
    ⍝   ∘ a continuation byte out of a sequence (even if right after a correct sequence)
    ⍝   ∘ a sequence with not enough continuation bytes (including the case of a lonely start byte)
    ⍝   × overlong sequences (a unicode number must be embedded in the shortest possible sequence, else it is an overlong sequence)
    ⍝     NB : we don't care reading overlong sequences because we convert to unicode scalars. It is problematic only if you write UTF-8.
    ⍝   ∘ bytes equal to 0xFE or 0xFF (class 7)
      ⎕IO←0 ⋄ sect←128 64 32 16 8 4 2 2
      c1←~c0←0=class←(sect/⍳8)[wchars]     ⍝ class of each byte according to the table above
      bad←cut/⍨c0∨cut←class>1              ⍝ assume >1 sequences are wrong
      unicode←(~bad)\c0/wchars             ⍝ grab the good ones now
      :If ∨/tmp←bad                        ⍝ check the groups
          bad\←bseq←{(1↓⍵)≢1↓⍵[0]⍴1}¨(seq←c1/cut)⊂c1/class
          (bad/unicode)←65533              ⍝ and mark the string
      :AndIf ∨/todo←~bseq                  ⍝ those to do
          touni←(0,+\sect)∘{64⊥⍵-s↑⍺[s←⍴⍵],6⍴128}
          unicode+←tmp\todo\touni¨todo/seq⊂c1/wchars
      :EndIf
    ∇
  
    ∇ uc←readutf8 ch;bad
    ⍝ This is the private version for this class
      :If 0≠⍴Malformed←bad/⍳⍴bad←65533=uc←rdU8 ch
          _Errors∪←ERR_MALFORMED
      :Else
          _Errors~←ERR_MALFORMED
      :EndIf
    ∇

    ∇ wchars←wrU8 unicode;uni2wchars
      :Access public shared
    ⍝ Get UTF-8 characters from Unicode scalars.
    ⍝ Don't forget to use the legalize function on the input before writing utf.
      ⍝ Range of values in UCS-4        Sequence of octets in UTF-8
      ⍝ x = 0000 0000 .. 0000 007F;     x;
      ⍝ x = 0000 0080 .. 0000 07FF;     C0 + x/2∧6;    80 + x%2∧6;
      ⍝ x = 0000 0800 .. 0000 FFFF;     E0 + x/2∧12;   80 + x/2∧6%2∧6;   80 + x%2∧6;
      ⍝ x = 0001 0000 .. 001F FFFF;     F0 + x/2∧18;   80 + x/2∧12%2∧6;  80 + x/2∧6%2∧6;   80 + x%2∧6;
      ⍝ x = 0020 0000 .. 03FF FFFF;     F8 + x/2∧24;   80 + x/2∧18%2∧6;  80 + x/2∧12%2∧6;  80 + x/2∧6%2∧6;   80 + x%2∧6;
      ⍝ x = 0400 0000 .. 7FFF FFFF;     FC + x/2∧30;   80 + x/2∧24%2∧6;  80 + x/2∧18%2∧6;  80 + x/2∧12%2∧6;  80 + x/2∧6%2∧6;   80 + x%2∧6;
      ⍝ x ≥ 8000 0000                   (ISO 10646-1 does not indicate what to do)
      uni2wchars←{
          ⍵<128:⍵                                                     ⍝ 0000 0000 .. 0000 007F
          ⍵<2048:192 128+64 64⊤⍵                                      ⍝ 0000 0080 .. 0000 07FF
          ⍵<65536:224 128 128+64 64 64⊤⍵                              ⍝ 0000 0800 .. 0000 FFFF
          ⍵<2097152:240 128 128 128+64 64 64 64⊤⍵                     ⍝ 0001 0000 .. 001F FFFF
          ⍵<67108864:248 128 128 128 128+64 64 64 64 64⊤⍵             ⍝ 0020 0000 .. 03FF FFFF
          ⍵<2147483648:252 128 128 128 128 128+64 64 64 64 64 64⊤⍵    ⍝ 0400 0000 .. 7FFF FFFF
          224 128 128+64 64 64⊤65533                                  ⍝ ≥ 8000 000 : replace by U+FFFD.
      }
      wchars←⊃,/uni2wchars¨unicode
    ∇
      
    ∇ ch←writeutf8 uni
      ch←wrU8 uni
      _Errors~←ERR_MALFORMED ⍝ this var cannot be written by <wrU8>
    ∇
    
    
    ∇ unicode←readutf16 wchars;class;malformed;wchars2uni;illegal
    ⍝ Get Unicode scalars from UTF-16 characters,
    ⍝ replacing malformed characters by U+FFFD and raising the malformed error flag.
    ⍝ Don't forget to use the legalize function on the output after reading utf.
      ⍝   16-bit value   │ condition  │ class   │ UTF-16 rule
      ⍝ ─────────────────┼────────────┼─────────┼──────────────────────────────
      ⍝ 110110xxxxxxxxxx │ 54=⌊⍵÷1024 │ class 2 │ must be followed by a class 1
      ⍝ 110111xxxxxxxxxx │ 55=⌊⍵÷1024 │ class 1 │ must follow a class 2
      ⍝ else             │ else       │ class 0 │ no rule
      class←3|55 54⍳⌊wchars÷1024
      wchars class←(⊂(~0,¯1↓2 1⍷class))⊂¨wchars class  ⍝ gather (2 1) sequences, partition others
      malformed←~class∊(,0)(2 1)               ⍝ malformed characters
      wchars2uni←{
          ⍺:65533                              ⍝ malformed characters : put U+FFFD
          2=⍴,⍵:+/65536,1024 1×⍵-55296 56320   ⍝ surrogate pairs
          ⊃⍵                                   ⍝ single characters
      }
      unicode←malformed wchars2uni¨wchars
      Malformed←malformed/⍳⍴malformed
      :If 0≠⍴Malformed
          _Errors∪←ERR_MALFORMED
      :Else
          _Errors~←ERR_MALFORMED
      :EndIf
    ∇
    
    ∇ wchars←writeutf16 unicode;uni2wchars;illegal;add_illegal
    ⍝ Get the UTF-16 characters from Unicode scalars.
    ⍝ Don't forget to use the legalize function on the input before writing utf.
      ⍝ If Scalar > 0xFFFF
      ⍝     H ← (⌊(Scalar-0x10000)÷0x400) + 0xD800
      ⍝     L ← 0x400|(Scalar-0x10000) + 0xDC00
      uni2wchars←{
          ⍵<65536:⍵                                    ⍝  U+0000 →   U+FFFF : single character
          ⍵<1114112:55296 56320+1024 1024⊤⍵-65536      ⍝ U+10000 → U+10FFFF : split into surrogate pairs
          65533                                        ⍝ > U+10FFFF : relpace by U+FFFD
      }
      wchars←⊃,/uni2wchars¨unicode
      _Errors~←ERR_MALFORMED
    ∇
    
    
    ∇ unicode←legalize unicode;ill
    ⍝ Replace illegal Unicode characters by U+FFFD, and raise the illegal error flag.
    ⍝ boolean spotting illegal characters (cf http://www.unicode.org/faq/utf_bom.html#9)
      ill←unicode<0                    ⍝ Unicode scalars cannot be negative
      ill←ill∨32767=32768|⌊unicode÷2   ⍝ Unicode scalars ending in FFFE or FFFF
      ill←ill∨27=⌊unicode÷2048         ⍝ UTF-16 surrogates (range U+D800 - U+DFFF)
      ill←ill∨17≤⌊unicode÷65536        ⍝ Unicode scalars beyond U+10FFFF
      Illegal←ill/⍳⍴ill
      :If 0≠⍴Illegal
          _Errors∪←ERR_ILLEGAL
          unicode[Illegal]←65533        ⍝ replace illegal characters by U+FFFD
      :Else
          _Errors~←ERR_ILLEGAL
      :EndIf
    ∇
    
    
    ∇ unicode←toquadav newlines unicode;masks1;masks2;shiftr;i;written;mask;old;new;NL
    ⍝ Choose what newline sequence will be used (user defined or auto-detected...)
    ⍝ and replace any newline sequence by the chosen one, raising the ERR_NL flag if heterogeneous sequences are found.
    ⍝ When to ⎕AV : if the chosen sequence does not belong to ⎕AV, it will be symbolized by ⎕av[4]
    ⍝ When from ⎕AV : any lonely ⎕AV[4] character will be interpreted as the chosen sequence
      _NewLines←_NewLines∪⊂NL←(⌽⍲\2⍴V11)/13,4⊃_Unicode    ⍝ ⎕AV[4] is necessarily a newline sequence in V11 or else 13
      :If ~toquadav
          _Errors~←ERR_NL                       ⍝ when from ⎕AV : clear NL error before updating it
      :EndIf
     
      :If 0≠⍴_NewLineUser                       ⍝ user-defined newline sequence
          _NewLine←_NewLineUser
      :ElseIf toquadav∨(0=⍴_NewLine)            ⍝ do not auto-detect when from ⎕AV if _NewLine is already set
          masks1←_NewLines⍷¨⊂unicode            ⍝ masks of beginning of newline sequences (ambiguous : there can be several sequences on the same character, eg (13 10) and (,13)
          shiftr←{0∊⍺:⍵ ⋄ (⍴⍵)↑(-⍺+⍴⍵)↑⍵}       ⍝ shift vector to the right, filling with 0
          masks2←(⍴¨_NewLines){⊃(¯1+⍳⍺)∨.shiftr⊂⍵}¨masks1     ⍝ masks of newline characters of each sequence
          masks1←(↑masks1)∧<\[1]↑masks2         ⍝ unambiguous masks of beginning of sequences (priority given to the first ones in _NewLines)
          i←(((∨/[1]masks1)⍳1)⌷[2]masks1,0)⍳1   ⍝ search a match through rows then through columns
          _NewLine←i⊃_NewLines,_NewLines[1]     ⍝ pick the newline sequence, use the first one by default.
      :EndIf
     
      :If V11
      :AndIf toquadav∧(~_NewLine∧.∊⊂_Unicode)   ⍝ when toquadav : if the newline sequence is untranslatable
          new←,4⊃_Unicode                       ⍝ the newline sequence will be outputed as ⎕AV[4]
      :Else
          new←_NewLine
      :EndIf
     
      written←{0}¨unicode                       ⍝ mask of characters that already have been replaced, to prevent overwriting
     
      :For old :In (⊂_NewLine)∪_NewLines        ⍝ replace any newline sequence (old) by the chosen one (new)
          unicode←old,unicode                   ⍝ add a match at the beginning
          written←((⍴old)⍴0),written            ⍝ update written the same way
          mask←(old⍷unicode)>written            ⍝ mask of matching sequences (cannot overwrite)
          unicode written←(⊂mask)⊂¨unicode written  ⍝ partitioned at find points.
          :If toquadav>ERR_NL∊_Errors           ⍝ when getting...
          :AndIf (∨/1↓mask)∧(old≢_NewLine)      ⍝ non-default newline sequence detected
          :AndIf ∧/old∘≢¨,¨13 10                ⍝ CR & LF are accepted as homogeneous to the chosen sequence => no error
              _Errors∪←ERR_NL                   ⍝ raise error
          :EndIf
          unicode←(⍴new)↓⊃,/{new,(⍴old)↓⍵}¨unicode          ⍝ replace NL by _NewLine, and remove the first match
          written←(⍴new)↓⊃,/{((⍴new)⍴1),(⍴old)↓⍵}¨written   ⍝ update written the same way
      :EndFor
    ∇
    
    
    ∇ string←unicode2apl codes;table;index
    ⍝ Translate from Unicode to ⎕AV
      :If V11
          index←_Unicode⍳codes
          string←(⎕AV,_Replacement)[index]
          Untranslatable←(index=1+⍴_Unicode)/⍳⍴codes
          :If 0≠⍴Untranslatable
              _Errors∪←ERR_UNTRANS
          :Else
              _Errors~←ERR_UNTRANS
          :EndIf
      :Else
          string←⎕UCS codes
      :EndIf
    ∇
    ∇ codes←apl2unicode string;index
    ⍝ Translate from ⎕AV to Unicode
      :If V11
          index←⎕AV⍳string
          codes←(_Unicode,65533)[index]
          Untranslatable←(index=1+⍴⎕AV)/⍳⍴string
          :If 0≠⍴Untranslatable
              _Errors∪←ERR_UNTRANS
          :Else
              _Errors~←ERR_UNTRANS
          :EndIf
      :Else
          codes←⎕UCS string
      :EndIf
    ∇
    
    
⍝==============================================================================⍝
⍝     Private Data                                                             ⍝
⍝==============================================================================⍝
    
    
    ⍝ There are currently 4 concurrent mapping from Unicode to ⎕AV :
    ⍝ A - U:\11.0\aplsrc\unicode.h
    ⍝ B - U:\11.0\comp\dyalognet.cs
    ⍝ C - )COPY U:\11.0\aplc\dyalogc.dws Compiler.UNICODE
    ⍝ D - (⎕NEW ⎕SE.UnicodeFile '').Unicode
    ⍝ This one is from A≡C, modified to use 180 96 at [219 237]
    ⍝ B uses the greek Beta (U+03b2) for ß≡⎕AV[140] instead of the german sharp S (U+00df)
    ⍝ D is completely different and as lots of zeros.
    num←{⍎4↓⍵} ⋄ x←⍬
    x,←num '  0:    0     8    10    13    32   12 57344 57345'
    x,←num '  8:   27     9  9014   619    37   39  9082  9077'
    x,←num ' 16:   95    97    98    99   100  101   102   103'
    x,←num ' 24:  104   105   106   107   108  109   110   111'
    x,←num ' 32:  112   113   114   115   116  117   118   119'
    x,←num ' 40:  120   121   122 57346 57347  175    46  9068'
    x,←num ' 48:   48    49    50    51    52   53    54    55'
    x,←num ' 56:   56    57 57348   164   165   36   163   162'
    x,←num ' 64: 8710    65    66    67    68   69    70    71'
    x,←num ' 72:   72    73    74    75    76   77    78    79'
    x,←num ' 80:   80    81    82    83    84   85    86    87'
    x,←num ' 88:   88    89    90 57349 57350  253   183 57351'
    x,←num ' 96: 9049   193   194   195   199  200   202   203'
    x,←num '104:  204   205   206   207   208  210   211   212'
    x,←num '112:  213   217   218   219   221  254   227   236'
    x,←num '120:  240   242   245   123  8866  125  8867  9015'
    x,←num '128:  168   192   196   197   198 9064   201   209'
    x,←num '136:  214   216   220   223   224  225   226   228'
    x,←num '144:  229   230   231   232   233  234   235   237'
    x,←num '152:  238   239   241    91    47 9023    92  9024'
    x,←num '160:   60  8804    61  8805    62 8800  8744  8743'
    x,←num '168:   45    43   247   215    63 8714  9076   126'
    x,←num '176: 8593  8595  9075  9675    42 8968  8970  8711'
    x,←num '184: 8728    40  8834  8835  8745 8746  8869  8868'
    x,←num '192:  124    59    44  9073  9074 9042  9035  9033'
    x,←num '200: 9021  8854  9055  9017    33 9045  9038  9067'
    x,←num '208: 9066  8801  8802   243   244  246   248    34'
    x,←num '216:   35 57352    38   180  9496 9488  9484  9492'
    x,←num '224: 9532  9472  9500  9508  9524 9516  9474    64'
    x,←num '232:  249   250   251    94   252   96  8739   182'
    x,←num '240:   58  9079   191   161  8900 8592  8594  9053'
    x,←num '248:   41    93 57353 57354   167 9109  9054  9059'
    :Field Private _Unicode←x
    
    x←''                                                 ⋄ ERR_OK←⍬
    ⍝ File Errors :
    x,←⊂'File does not exist'                            ⋄ ERR_EXIST←1       ⍝ updated in Import - cleared in Export
    x,←⊂'File Size not a multiple of Encoding Width'     ⋄ ERR_ODD←2         ⍝ updated in Import - cleared in Export
    ⍝ Encoding Errors :
    x,←⊂'Unmarked Encoding : Assuming UTF-8'             ⋄ ERR_NOBOM←3       ⍝ updated in Import - cleared in Export or writing Raw/Text/NestedText
    x,←⊂'Detected Encoding different from specified'     ⋄ ERR_BADBOM←4      ⍝ updated in Import - cleared in Export or writing Raw/Text/NestedText
    x,←⊂'Malformed UTF Characters'                       ⋄ ERR_MALFORMED←5   ⍝ updated in Import - cleared in Export or writing Raw/Text/NestedText
    ⍝ Unicode Errors :
    x,←⊂'Illegal Unicode Characters'                     ⋄ ERR_ILLEGAL←6     ⍝ updated in Import and when writing Raw/Text/NestedText
    ⍝ Text Errors :
    x,←⊂'Non homogeneous New Line sequences'             ⋄ ERR_NL←7          ⍝ updated when writing Text/NestedText - cleared when writing Raw
    x,←⊂'Untranslatable Characters to/from QuadAV'       ⋄ ERR_UNTRANS←8     ⍝ updated when writing Text/NestedText - cleared when writing Raw (not possible in unicode version)
    :Field Private _ErrorMessages←x
    
    
  ⍝ Format of _TableBOM :
    ⍝ 1st column : name : vector of uppercase strings used to retreive the name (See the Encoding property)
    ⍝ 2nd column : width of the encoding, in bytes
    ⍝ 3rd column : endianness : 0=N/A ; 1=Little ; 2=Big
    ⍝ 4th column : BOM (vector of bytes) (see http://en.wikipedia.org/wiki/Byte_Order_Mark)
    ⍝ the first rows pre-empt the following rows (the 1st match is used)
    ⍝ big endian should pre-empt little endian and be used by default according to the Unicode Standard (http://www.unicode.org/faq/utf_bom.html#36)
    ⍝ UTF-16 should pre-empt UTF-32, because this latter is very rarely used. User will have to specify UTF-32 to use it. This is not standard.
    x←0 4⍴''
    x,[1]←('UTF' '8') 1 0 (239 187 191)               ⍝ UTF-8                   ⍝ higher priority
    x,[1]←('UTF' '16' 'BE') 2 2 (254 255)             ⍝ UTF-16-BE
    x,[1]←('UTF' '16' 'LE') 2 1 (255 254)             ⍝ UTF-16-LE
    x,[1]←('UTF' '32' 'BE') 4 2 (0 0 254 255)         ⍝ UTF-32-BE
    x,[1]←('UTF' '32' 'LE') 4 1 (255 254 0 0)         ⍝ UTF-32-LE
    :Field Private _TableBOM←x 
    ⎕ex'x' ⍝ get rid of this
    
    :Field Private _Encoding            ⍝ row of _TableBOM currently in use
    :Field Private _EncodingDefault←1   ⍝ default encoding - if you change it don't forget to change _ErrorMessages[5]
    :Field Private _EncodingUser←⍬      ⍝ encoding forced by the user (empty if none)
    
    :Property _EncodingName             ⍝ current name of encoding (see above)
        ∇ r←get
          r←⊃_TableBOM[_Encoding;1]
        ∇
    :EndProperty
    :Property _EncodingList             ⍝ list of handled encoding names
        ∇ r←get
          r←_TableBOM[;1]
        ∇
    :EndProperty
    :Property _Width                    ⍝ current width (see above)
        ∇ r←get
          r←⊃_TableBOM[_Encoding;2]
        ∇
    :EndProperty
    :Property _Endian                   ⍝ current endianness (see above)
        ∇ r←get
          r←⊃_TableBOM[_Encoding;3]
        ∇
    :EndProperty
    :Property _BOM                      ⍝ current BOM (see above)
        ∇ r←get
          r←⊃_TableBOM[_Encoding;4]
        ∇
    :EndProperty
    :Property _BOMlist                  ⍝ list of handled BOMs (see above)
        ∇ r←get
          r←_TableBOM[;4]
        ∇
    :EndProperty
    
⍝==============================================================================⍝
⍝     Debug stuff                                                              ⍝
⍝==============================================================================⍝
    
    ∇ r←getdebugdata;T;R;mal;ill;unt
      :Access Public
    ⍝ builds a matrix with one line of status below each line of text.
    ⍝ If the newline sequence is multi-char, indices will be messed up.
      T←Text
      R←(⍴T)⍴'·'
      mal ill←Malformed Illegal     ⍝ Text indices of Raw errors (can be moved because of newlines)
      unt←Untranslatable            ⍝ Text indices of Text errors (can not be moved)
      R[mal~mal∩unt]←'∆'
      R[mal∩unt]←'⍋'
      R[ill~ill∩unt]←'○'
      R[ill∩unt]←'⌽'
      R[unt~mal∪ill]←'|'
      T R←(⎕AV[4],T)('·',R)
      T R←(⊂T){1↓¨(⍺∊⎕AV[4 3])⊂⍵}¨T R
     
      r←⍬
      r,←⊂'· = OK ; ∆ = Malformed ; ○ = Illegal ; | = Untranslatable ; ⍋ = Malformed and Untranslatable ; ⌽ = Illegal and Untranslatable'
      r,←⊂''
      r,←,T,[1.5]R
    ∇
    
:EndClass ⍝ UnicodeFile  $Revision: 21539 $ 