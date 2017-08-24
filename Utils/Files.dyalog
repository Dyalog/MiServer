:Namespace Files
⍝ Description::
⍝ The Files library provides cross-platform tools for use with native files.
⍝ It is the successor to the Files workspace that was distributed with Dyalog APL up to version 15.0
⍝
⍝ Overview::
⍝ This namespace is completely stand-alone and requires no other code to run
⍝
⍝ Functions::
⍝
⍝ data Append filename              - appends data to existing file
⍝ text AppendText filename          - appends (single-byte) text to filename
⍝ text AppendTextU filename         - appends unicode text to filename (NB: no validation or transformation of encodings, use responsibly!)
⍝ t←Nopen filename                  - create/open native file
⍝ data Put filename                 - Put data into filename
⍝ text PutText filename             - write (single-byte) text to filename
⍝ text PutTextU filename            - writes unicode text to filename, encoding might be specified as 2nd right arg (UTF-8 is dflt)
⍝ (tn name)←{dcf}CreateTemp pattern - create a temporary-file in specified dir and return tie-number
⍝                                     (if dcf=1, create a dcf-file, otherwise native)
⍝ R←GetBom Filename                 - returns the "byte order mark" of a file
⍝ R←{vtv}ReadText filename       - returns content of file (vtv=1: as a vtv of lines, otherwise simple vector)
⍝
⍝ {protect}Copy (from to)           - copies a file, optionally failing if "protect" is set and "to" exists
⍝ R←Exists path                     - check if file or directory exists
⍝ {z}←Delete path                   - delete file or directory
⍝ Move (from to)                    - move a file from "from" to "to"
⍝
⍝ MkDir path                        - make a directory
⍝ RmDir path                        - remove directory
⍝ R←{types}Dir pattern              - a ⎕NINFO-compatible replacement of the "Dir"-fn which was moved to WinFiles (types matches ⍺ of ⎕NINFO)
⍝ R←{pattern} List path             - a cover for "Dir", compatible with MiServer's Files.List
⍝
⍝ Functions to deal with component files:
⍝ c←idx FREAD filename              - read specified component from file (
⍝ t←RDCIFromTS ts                   - convert ⎕TS style data into ⎕FRDCI timestamp form
⍝ ts←TSFromRDCI ts                  - Convert ⎕FRDCI timestamps to ⎕TS form
⍝ ts←TSOfComp tn                    - Find timestamp of component tie,n
⍝ r←filename Fopen tieno            - opens component file (creating it if necessary) and returns tieno. Optional tieno[2] controls exclusive access.
⍝
⍝ Migrating from MiServer/Utils/Files.dyalog::
⍝ MiServer also included an early version of Files.dyalog, but the focus on this re-implementation was compatibility with Files.dws,
⍝ so a few fns were changed and some taken away. Here's a list of differences to consider when migrating to this new class:
⍝
⍝    * Changed:
⍝        * DirExists w -> 1 Exists w
⍝        * GetText w -> 0 ReadText w
⍝        * GetVTV w -> 1 ReadText w
⍝        * {pattern}List path
⍝            * previously would return '.' and '..' - no longer does!
⍝            * List '/dir' will (as it did before) return info about the DirName, but the casing of the name will be the one from the argument, not "normalized", as used to be (maybe even ⎕NINFO should do this?)
⍝
⍝    * Removed
⍝        * GetCurrentDirectory & SetCurrentDirectory
⍝        * LikelyURL
⍝        * SplitFilename - use ⎕NPARTS instead
⍝        * _Filetime_to_TS -->use  WinFiles._Filetime_to_TS
⍝        * _CMD, _SH
⍝        * isWin
⍝        * unixfix
⍝        * APLVersion

    (⎕IO ⎕ML)←1

    Normalize←∊1∘⎕NPARTS ⍝ normalize a file name
    SplitFilename←1∘⎕NPARTS ⍝ splits a file name
    Filename←{∊1↓1⎕NPARTS ⍵} ⍝ return file name only
    eis←{(,∘⊂)⍣((326∊⎕DR ⍵)<2>|≡⍵),⍵} ⍝ Enclose if simple

    ∇ r←data Append name
    ⍝ Append "data" to file specified by "name", creating the file if needed
    ⍝ r - number of bytes written
      r←data{(⎕NUNTIE ⍵)⊢⍺ ⎕NAPPEND ⍵}Nopen name
    ∇

    ∇ r←text AppendText name;tn
    ⍝ Append single-byte "text" to file specified by "name", creating the file if needed
    ⍝ r - number of bytes written
      r←text{(⎕NUNTIE ⍵)⊢⍺ ⎕NAPPEND ⍵(⎕DR' ')}Nopen name
    ∇

    ∇ {r}←text PutText name_encoding;name;encoding;nl
    ⍝ Write text to file (single byte)
    ⍝ name_encoding - filename [encoding]
    ⍝ text - character scalar, vector, matrix or vtv
    ⍝ r - number of bytes written
      :If 1<≡name_encoding
          (name encoding)←name_encoding
      :Else
          name←name_encoding
          encoding←(1+127∨.<⎕UCS text)⊃'ANSI' 'ASCII'
      :EndIf
      :If 1<⍴⍴text
          text←,text,⎕UCS nl←10
      :Else
          nl←(<\(⎕UCS 10 13)∊text)/10 13
      :EndIf
      r←(text encoding nl)⎕NPUT name
    ∇

    ∇ {r}←text PutTextU name_encoding;name;encoding;nl
    ⍝ Write text to file (unicode)
    ⍝ name_encoding - filename [encoding]
    ⍝ text - character scalar, vector, matrix or vtv
    ⍝ r - number of bytes written
      :If 1<≡name_encoding
          (name encoding)←name_encoding
      :Else
          name←name_encoding
          encoding←'UTF-8'
      :EndIf
      :If 1<⍴⍴text
          text←,text,⎕UCS nl←10
      :Else
          nl←(<\(⎕UCS 10 13)∊text)/10 13
      :EndIf
      r←(text encoding nl)⎕NPUT name
    ∇

    ∇ r←{vtv}ReadText name
    ⍝ Return the contents of a text file (single byte or Unicode)
    ⍝ name - the name of the file
    ⍝ vtv - (optional, default = 0) if 1, return contents as a vector of text vectors
    ⍝ r - the contents of the file as specified by vtv
      vtv←{0::⍵ ⋄ vtv}0    
      ⎕←'Reading ',name,' @ ',,' ',⍕⎕xsi,⎕lc ⍝ temporary to fix ConfReg-Issue
      r←⊃⎕NGET name vtv
    ∇

    ∇ {r}←text AppendTextU name;tn;bom;bytes;num;le;int
    ⍝ Append text to existing file. This will transform the data into the current encoding of the file
    ⍝ but will not modify the file's encoding, i.e. you cannot append unicode to an ASCII-File. (Will throw error)
    ⍝ r=number of bytes written
      int←{¯128+256|128+⍵}
      bom←GetBom name ⋄ bytes←2+2×∨/'32'⍷bom ⋄ le←∨/'LE'⍷bom
      tn←name ⎕NTIE 0
      :Select bom
      :CaseList 'UTF-8' 'UTF-8-NOBOM' ⋄ r←(int'UTF-8'⎕UCS text)⎕NAPPEND tn 83
      :CaseList 'UTF-16BE' 'UTF-16LE' 'UTF-32BE' 'UTF-32LE' 'UTF-16' 'UTF-32'
          num←(bytes⍴256)⊤(6↑bom)⎕UCS text
          num←int,⍉le{⍺:⊖⍵ ⋄ ⍵}num
          {}num ⎕NAPPEND tn 83
      :Else
          ('Unrecognized bom: ',bom)⎕SIGNAL 11 ⍝ issue DOMAIN ERROR if file's bom not recogized
      :EndSelect
      ⎕NUNTIE tn
    ∇

    ∇ r←filename Fopen tn
    ⍝ Ties a component file (creates if not found) and returns tieno.
    ⍝ tn[1] is the tie number (0 to get next available)
    ⍝ tn[2] is optional (default=0) where a value of 1 indicates to tie exclusively
      tn←2↑tn ⍝ default to shared tie
      :Trap 22
          r←filename{⍵[2]:⍺ ⎕FTIE ⍵[1] ⋄ ⍺ ⎕FSTIE ⍵[1]}tn
      :Else
          r←filename{⍵[2]:⍵[3] ⋄ ⍺ ⎕FSTIE ⍵[1]⊣⎕FUNTIE ⍵[3]}tn,filename ⎕FCREATE tn[1]
      :EndTrap
    ∇

    ∇ r←comp FREAD filename
    ⍝ Read component comp from file named filename
    ⍝ FREAD ties, reads the component, and unties
      r←comp{⍺{(⎕FUNTIE ⍵)⊢⎕FREAD ⍵ ⍺}⍵ ⎕FSTIE 0}filename
    ∇

    ∇ r←filename Nopen tn
    ⍝ Opens (ties) a native file (creates if not found) and returns tieno.
    ⍝ tn[1] is the tie number (0 to get next available)
    ⍝ tn[2] is optional (default=0) where a value of 1 indicates to create the file only and fail (returning 0) if it already exists
      tn←2↑tn
      :Trap 0
          r←filename ⎕NCREATE tn[1]
      :Else
          →tn[2]⍴r←0
          r←filename ⎕NTIE tn[1]
      :EndTrap
    ∇

    ∇ {r}←data Put args;name;tn;dontOverwrite
    ⍝ Puts data to a native file, either creating the file or overwriting it if it exists
    ⍝ data - the data to be written
    ⍝ args[1] - the name of the file to write to
    ⍝ args[2] - (optional) is 1 to indicate NOT to overwrite an existing file,
    ⍝           otherwise 0 (or no second argument will cause an existing file to be overwritten
    ⍝ r - number of bytes written or ¯1 if the file exists and was not to be overwritten
      args←eis args
      (name dontOverwrite)←args,(⍴args)↓'' 0
      :If 0≠tn←dontOverwrite Nopen name
          r←data{(⎕NUNTIE ⍵)⊢⍺ ⎕NAPPEND(0 ⎕NRESIZE ⍵)(⎕DR ⍺)}tn
      :Else
          r←¯1
      :EndIf
    ∇

    ∇ r←GetBom Filename;nu;bin2hex
    ⍝ returns the BOM of specified file (matching the file-encodings documented @ http://help.dyalog.com/16.0/Content/Language/System%20Functions/nget.htm#Encodings )
      bin2hex←{(⎕D,⎕A)[1+2⊥⍉((0.25×⍴⍵),4)⍴⍵]}  ⍝ may have a small impact on performance, but improves readability
      nu←Filename ⎕NTIE 0 64  ⍝ asking for the BOM of a non-existent file will cause an error
    ⍝ look at the first bytes and try to determine encoding
      :Select 1
      :Case 'EFBBBF'≡bin2hex ⎕NREAD nu,11 3 0 ⋄ r←'UTF-8'
      :Case '0000FEFF'≡bin2hex ⎕NREAD nu,11 4 0 ⋄ r←'UTF-32BE' ⍝ Big Endian
      :Case 'FFFE0000'≡bin2hex ⎕NREAD nu,11 4 0 ⋄ r←'UTF-32LE' ⍝ Little Endian
      :Case 'FEFF'≡bin2hex ⎕NREAD nu,11 2 0 ⋄ r←'UTF-16BE'     ⍝ Big Endian
      :Case 'FFFE'≡bin2hex ⎕NREAD nu,11 2 0 ⋄ r←'UTF-16LE'     ⍝ Little Endian
      :Else  ⍝ if the file had no BOM
          ⎕NUNTIE nu
          r←2⊃⎕NGET Filename   ⍝ read it with ⎕NGET and get the encoding from its result...
      :EndSelect
      ⎕NUNTIE nu
    ∇

    ∇ {protect}Copy FmTo;nu1;nu2;seg;fSize1;pos
    ⍝ Copies a file
    ⍝ FmTo - 2 element vector of [1] the source file name, [2] the destination file name
    ⍝ protect - optional flag indicating whether to fail if destination file (protect=1) exists, default is 0
      protect←{6::⍵ ⋄ protect}0
      nu1←nu2←0
      ⎕SIGNAL(protect∧Exists 2⊃FmTo)/⊂('EN' 22)('Message' 'Destination file exists')
      :Trap 0
          Delete 2⊃FmTo
          nu1←(1⊃FmTo)⎕NTIE 0
          nu2←(2⊃FmTo)⎕NCREATE 0
          seg←(fSize1←⎕NSIZE nu1)⌊0.2×⎕WA  ⍝ length of segments per pass: use 20% of the free ws
          pos←0  ⍝ start at position 0
          :Repeat
              (⎕NREAD nu1,83,seg,pos)⎕NAPPEND nu2,83
              pos+←seg
          :Until pos≥fSize1
          ⎕NUNTIE nu1,nu2
      :Else
          ⎕NUNTIE nu1,nu2
          ⎕SIGNAL⊂'EN' 'EM' 'Message'{⍺(⍵⍎⍺)}¨⎕DMX
      :EndTrap
    ∇

    ∇ {r}←{x}Delete name
    ⍝ Delete specified file or directory
    ⍝ name - the file or directory name
    ⍝ x - optional Boolean to indicate to NOT signal an error if the file does not exist
    ⍝ r - 1 if a file/directory was deleted, 0 otherwise (file/directory didn't exist)
      x←{6::⍵ ⋄ x}0
      :Trap 0
          r←x ⎕NDELETE name
      :Else
          ⎕SIGNAL⊂'EN' 'EM' 'Message'{⍺(⍵⍎⍺)}¨⎕DMX
      :EndTrap
    ∇

    ∇ r←{types}Dir path;dir
    ⍝ Cover for ⎕NINFO wildcarded file search
    ⍝ path - character vector file path to search (may include wildcards)
    ⍝ types - (optional) the types of information to return, if omitted, just return the matching filenames
    ⍝ r - a vector of vectors, with each element corresponding to an element in types
    ⍝
    ⍝ Note: this function differs in syntax from the Dir utility found in the files workspace in versions of Dyalog old than v16
    ⍝       The old version is available in WinFiles for Windows-only
     
      :If 0=⎕NC'types'
          types←⊢
      :EndIf
      r←,types(⎕NINFO⍠1)path
    ∇


    ∇ r←{pattern}List path;hasPattern;isFolder
    ⍝ path and pattern are related.
    ⍝ If there is no pattern (or pattern is empty)
    ⍝   If path ends with '/' or '\' then return information for the contents of the folder, otherwise, return information about the folder (or file) itself
    ⍝ If a non-empty pattern exists, it is used as a filter on the contents of path (path is treated as a folder name)
    ⍝ Examples:
    ⍝   List '/dir/foo'  ⍝ returns information about /dir/foo
    ⍝   List '/dir/foo/' ⍝ returns information about the contents of /dir/foo/
    ⍝   '*.dyalog' List '/dir/foo'  ⍝ returns information about the .dyalog files in /dir/foo/
    ⍝   List '/dir/foo/*.dyalog'    ⍝ also returns information about the .dyalog files in /dir/foo/
    ⍝ Information returned is:
    ⍝ [;0] Name [;1] Length [;2] LastAccessTime [;3] IsDirectory
    ⍝ (cover for MiServer's Files.List)
     
      path←Normalize path
      hasPattern←~0∊⍴pattern←{6::⍵ ⋄ pattern}''
      isFolder←'/'=¯1↑path
      :If isFolder≠hasPattern
          pattern←'/',pattern,hasPattern↓'*'
      :EndIf
     
      r←⍉↑0 2 3 1(⎕NINFO⍠1)path,pattern
      r[;4]←r[;4]=1           ⍝ flag directories
      r[;1]←Filename¨r[;1]  ⍝ remove paths
    ∇


      Exists←{
      ⍝ test for existence of file or folder
      ⍝ ⍺ - optional flag where 1 indicates test for folder (default is 0)
          ⍺←0 ⋄ ⎕NEXISTS ⍵,⍺/'/'}

    DirExists←1∘Exists

      MkDir←{
      ⍝ create a directory (cover for ⎕MKDIR)
          ⍺←⊢ ⋄ ⍺ ⎕MKDIR ⍵}

    ∇ Move filenames
    ⍝ move/rename file
    ⍝ filenames - [1] source file name [2] destination file name
      :Trap 0
          ⎕NUNTIE(2⊃filenames)⎕NRENAME((1⊃filenames)⎕NTIE 0)
      :Else
          ⎕SIGNAL⊂'EN' 'EM' 'Message'{⍺(⍵⍎⍺)}¨⎕DMX
      :EndTrap
    ∇


    ∇ RmDir path
    ⍝ removes directory specified in path.
    ⍝ path - directory name to remove
      :If 1 Exists path
          :Trap 0
              ⎕NDELETE path
          :Else
              ⎕SIGNAL⊂'EN' 'EM' 'Message'{⍺(⍵⍎⍺)}¨⎕DMX
          :EndTrap
      :Else
          ⎕SIGNAL⊂('EN' 22)('Message' 'Directory does not exist')
      :EndIf
    ∇

    ∇ t←RDCIFromTS ts;s;⎕IO
    ⍝ Accepts a numeric vector or array in ⎕TS format with 7≥¯1↑⍴argument
    ⍝ Returns time and date in ⎕FRDCI format with shape ¯1↓⍴argument
     
      ⎕IO←0 ⋄ s←¯1↓⍴ts ⋄ ts←((1⌈×/s),¯1↑⍴ts)⍴ts
      ts←((1↑⍴ts),7)↑ts ⍝ years<100 are in window 1950-2049
      ts[;0]+←(ts[;0]≤99)×(50/2000 1900)[100|ts[;0]]
      ts[;6]×←6÷100     ⍝ turn milisecs into 1/60th units
      t←¯60 ¯29 ¯1 30 60 91 121 152 183 213 244 274[ts[;1]-1]
      t-←(4|ts[;0])<2≥ts[;1]
      t←(t+⌊365.25×¯60+1900|ts[;0]),0 2↓ts
      t←¯18626112000+s⍴1 1 24 60 60 60⊥⍉t
    ∇

    ∇ ts←TSFromRDCI ts;md;s;sm;yr;z;⎕IO
    ⍝ Returns ⎕TS style timestamps (shape (⍴argument),7) - note that RDCI is UTC, so some Timezone-Conversion might be required...
     
      ⎕IO←0 ⋄ s←⍴ts ⋄ ts←,ts+18626112000
      md←365.2501|1+1461|yr←⌊ts÷5184000
      sm←31 61 92 122 153 184 214 245 275 306 337 366
      z←(,⍉<⍀sm∘.≥md)/,((⍴md),12)⍴⍳12
      md←(1+12|z+2),[0.1]⌈md-(0,sm)[z]
      ts←(1960+⌊(yr+60)÷365.25),md,⍉24 60 60 60⊤ts
      ts[;6]←⌊0.5+ts[;6]×100÷6
      ts←(s,7)⍴ts
    ∇

    ∇ ts←ComponentTS tncomp
    ⍝ Returns ⎕TS-style component timestamp
    ⍝ tncomp - [1] tie number, [2] component number
      ts←TSFromRDCI(2+⎕IO)⊃⎕FRDCI tncomp
    ∇


    ∇ (tn name)←{dcf}CreateTemp pattern;folder;i;cnt;z
    ⍝ Create a temporary file based on pattern e.g. c:\folder\*.ext
    ⍝ pattern - the local
    ⍝ Will create the file as .DCF if dcf=1, native file otherwise.
      dcf←{6::⍵ ⋄ dcf}0
      pattern←Normalize pattern
      ⎕SIGNAL(1≠'*'+.=pattern)/⊂('EN' 11)('Message' 'pattern must contain exactly 1 *')
      folder←⊃SplitFilename pattern
      i←pattern⍳'*'
     
      tn←cnt←0 ⋄ z←⊂''
      :Trap 102 ⋄ z←folder∘,¨Dir pattern ⋄ :EndTrap
     
      :Repeat ⍝ Avoid race conditions
          name←1⊃((⊂((i-1)↑pattern),'temp_',(⍕cnt),'_'),¨(⍕¨⍳1+⍴z),¨⊂i↓pattern)~z
          :If dcf
              :Trap 22 ⋄ tn←name ⎕FCREATE 0 ⋄ :EndTrap
          :Else
              :Trap 22 ⋄ tn←name ⎕NCREATE 0 ⋄ :EndTrap
          :EndIf
          cnt←cnt+1
      :Until (cnt>20)∨tn≠0
      ⎕SIGNAL tn↓⊂('EN' 22)('Message' 'Unable to create temporary file')
    ∇

    :Section Documentation Utilities
    ⍝ these are generic utilities used for documentation

    ∇ docn←ExtractDocumentationSections describeOnly;⎕IO;box;CR;sections;showMe;tit;z;docn∆
    ⍝ internal utility function
      ⎕IO←1
      CR←⎕UCS 13
      box←{{⍵{⎕AV[(1,⍵,1)/223 226 222],CR,⎕AV[231],⍺,⎕AV[231],CR,⎕AV[(1,⍵,1)/224 226 221]}⍴⍵}(⍵~CR),' '}
      docn←1↓⎕SRC ⎕THIS
      docn←1↓¨docn/⍨∧\'⍝'=⊃¨docn ⍝ keep all contiguous comments
      docn←docn/⍨'⍝'≠⊃¨docn     ⍝ remove any lines beginning with ⍝⍝
      sections←{∨/'::'⍷⍵}¨docn
      :If 11=⎕DR'describeOnly'
      :AndIf describeOnly
          (sections docn)←((2>+\sections)∘/¨sections docn)
      :ElseIf (⎕DR' ')=⎕DR'describeOnly'   ⍝ alternate usage: pass a string containing name of sections to show  (or a vtv of names)
          describeOnly←(819⌶)describeOnly
          tit←(819⌶)sections/docn
          docn∆←⍬
          :For showMe :In ,{1=≡⍵:⊂⍵ ⋄ ⍵}describeOnly
              :If ∨/z←∨/¨showMe∘⍷¨tit
                  docn∆,←((z⍳1)=+\sections)/docn
              :EndIf
          :EndFor
          sections←{∨/'::'⍷⍵}¨docn←docn∆
      :EndIf
      (sections/docn)←box¨sections/docn
      docn←∊docn,¨CR
    ∇

    ∇ r←Documentation
    ⍝ return full documentation
      :Access public shared
      r←ExtractDocumentationSections 0
    ∇

    ∇ r←Describe
    ⍝ return description only
      :Access public shared
      r←ExtractDocumentationSections 1
    ∇

    ∇ r←ShowDoc look4
    ⍝ only show section that contain argument in their title
      :Access public shared
      r←ExtractDocumentationSections look4
    ∇

    ∇ R←Version
      :Access public shared
      R←'Files' '1.0.0' '2017-08-08'
    ∇

    :EndSection
:EndNamespace
