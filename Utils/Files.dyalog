:Namespace Files

⍝ Provides cover functions for many file operations
⍝ Eventually all will be implemented for both Windows and *nix

    (⎕IO ⎕ML)←1

    ∇ r←data Append name
     ⍝ Append data to existing file
      r←{(⎕NUNTIE ⍵)⊢data ⎕NAPPEND ⍵}Nopen name
    ∇

    ∇ r←text AppendText name;tn
     ⍝ Append text to existing file (must be single byte text)
      tn←Nopen name
      r←text ⎕NAPPEND tn(⎕DR' ')
      ⎕NUNTIE tn
    ∇

    ∇ (tn name)←{ext}CreateTemp folder;cnt
     ⍝ Create a temp file
     ⍝ folder - folder to create temp file in
     ⍝ ext - file extension
      :If 0=⎕NC'ext' ⋄ ext←'tmp' ⋄ :EndIf
      :If 0∊⍴ext ⋄ ext←'tmp' ⋄ :EndIf
      cnt←tn←0
      :Repeat
          name←folder,('/\'∊⍨¯1↑folder)↓'/',⎕A[?8⍴⍴⎕A],'.',ext
          :Trap 22 ⋄ tn←name ⎕NCREATE 0 ⋄ :EndTrap
          cnt+←1
      :Until (cnt>20)∨tn≠0
      'Unable to create temporary file'⎕SIGNAL tn↓22
    ∇

    ∇ {protect}Copy FmTo;CopyFileX;GetLastError ⍝ Copy file Fm -> To
      :Select APLVersion
      :Case '*nix'
          ∘
      :Case 'Win'
          :If 0=⎕NC'protect'     ⍝ Copy fails if <protect> and 'To' exists.
              protect←0          ⍝ Default unprotected copy.
          :EndIf
          'CopyFileX'⎕NA'I kernel32.C32∣CopyFile* <0T <0T I'
          :If 0=CopyFileX FmTo,protect
              ⎕NA'I4 kernel32.C32|GetLastError'
              11 ⎕SIGNAL⍨'CopyFile error:',⍕GetLastError
          :EndIf
      :EndSelect
    ∇

    ∇ Delete name;DeleteFileX;GetLastError;FindFirstFile;FindNextFile;FindClose;handle;rslt;ok;next;⎕IO;path
      ⎕IO←0
      :Select APLVersion
      :CaseList '*nix' 'Mac'
          _SH'rm ',unixfix name
      :Case 'Win'
          'DeleteFileX'⎕NA'I kernel32.C32∣DeleteFile* <0T'
          ⎕NA'I4 kernel32.C32|GetLastError'
          :If ∨/'*?'∊name ⍝ wildcards?
              path←{(⌽∨\⌽⍵∊'\/')/⍵}name
              _FindDefine
              handle rslt←_FindFirstFile name
              :If 0=handle
                  :Return ⍝ ('ntdir error:',⍕rslt)⎕SIGNAL 102      ⍝ file not found
              :EndIf
              :If '.'≠⊃6⊃rslt
                  {}DeleteFileX⊂path,6⊃rslt
              :EndIf
              :While 1=0⊃ok next←_FindNextFile handle
                  :If '.'≠⊃6⊃next
                      {}DeleteFileX⊂path,6⊃next
                  :EndIf
              :EndWhile
              :If 0 18∨.≠ok next
                  ('ntdir error:',⍕next)⎕SIGNAL 11   ⍝ DOMAIN
              :EndIf
              {}FindClose handle
          :Else
              :If 0=DeleteFileX⊂name
                  11 ⎕SIGNAL⍨'DeleteFile error:',⍕GetLastError
              :EndIf
          :EndIf
      :EndSelect
    ∇

    ∇ r←DirExists path
      r←0
      :Select APLVersion
      :CaseList '*nix' 'Mac'
          :Trap 11
              r←0<⍴_SH'ls -adl ',unixfix path
          :EndTrap
      :Case 'Win'
          r←{1≠⊃⍴⍵:0 ⋄ ⍵[1;4]}'.'List path
      :EndSelect
    ∇

    ∇ r←Exists name
     ⍝ Does file exist?
      r←1
      :Trap 22
          :Trap 19 ⍝ file access error means file exists
              ⎕NUNTIE(unixfix name)⎕NTIE 0
          :EndTrap
      :Else
          r←0
      :EndTrap
    ∇

    ∇ r←GetCurrentDirectory;GCD;GetLastError
     ⍝ Get Current Directory
      :Select APLVersion
      :CaseList '*nix' 'Mac'
          r←⊃_SH'pwd'
      :Case 'Win'
          'GCD'⎕NA'I kernel32.C32∣GetCurrentDirectory* I4 >0T'
          :If 0≠1⊃r←GCD 256 256
              r←2⊃r
          :Else
              ⎕NA'I4 kernel32.C32|GetLastError'
              11 ⎕SIGNAL⍨'GetCurrentDirectory error:',⍕GetLastError
          :EndIf
      :EndSelect
    ∇

    ∇ Chars←GetText name;nid;signature;nums;sz;b
     ⍝ Read ANSI or Unicode character file
      sz←⎕NSIZE nid←(unixfix name)⎕NTIE 0
      signature←⎕NREAD nid 83 3 0
      :If signature≡¯17 ¯69 ¯65 ⍝ UTF-8?
          nums←⎕NREAD nid 83 sz
          Chars←'UTF-8'⎕UCS 256|nums ⍝ Signed ints
      :ElseIf ∨/b←(2↑signature)∧.=2 2⍴¯1 ¯2 ¯2 ⍝ Unicode (UTF-16)
          Chars←{,⌽(2,⍨2÷⍨⍴⍵)⍴⍵}⍣(⊣/b)⎕NREAD nid 83 sz 2
          Chars←'UTF-16'⎕UCS(2*16)|163 ⎕DR Chars
      :Else ⍝ ANSI or UTF-8
          Chars←{11::⎕UCS ⍵ ⋄ 'UTF-8'⎕UCS ⍵}256|⎕NREAD nid 83 sz 0
      :EndIf
      ⎕NUNTIE nid
    ∇

    ∇ vtv←GetVTV name
     ⍝ Read ANSI or Unicode character file as vector of text vectors
      vtv←{1↓¨(v=n)⊂v←(n←⎕UCS 10),⍵}(GetText name)~⎕UCS 13
    ∇

    ∇ r←LikelyURL w
      →0↓⍨r←(⎕DR w)∊80 82
      r←{(0∊⍴⍵)<∧/⍵∊'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%-._~:/?#[]@!$&''()*+,;='}w ⍝ identify likely URIs
    ∇

    ∇ r←{pattern}List path;z;rslt;handle;next;ok;attrs;⎕IO;FindFirstFileX;FindNextFileX;FindClose;FileTimeToLocalFileTime;FileTimeToSystemTime;GetLastError;isFile;filter;isFolder
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
      ⎕IO←0
      :If 0=⎕NC'pattern' ⋄ pattern←'' ⋄ :EndIf
      isFolder←'/\'∊⍨¯1↑path
      filter←''
      :If isFile←~0∊⍴pattern
          filter←isFolder↓'/',pattern
      :EndIf
     
      r←0 4⍴'' 0 0 0
     
      :Select APLVersion
      :Case '*nix'
          →(0∊⍴rslt←1 _SH'ls -al',isFolder↓'d --time-style=full-iso ',unixfix path,filter)⍴0
          rslt←↑rslt
          rslt←' ',('total '≡6⍴rslt)↓[0]rslt
          r←((1↑⍴rslt),4)⍴0
          z←∧⌿' '=rslt ⍝ entirely blank columns
          z←z∧10>+\z    ⍝ Do not split file names
          rslt←z⊂rslt
          r[;3]←'d'=(0⊃rslt)[;1]                 ⍝ IsDirectory
          r[;1]←(~r[;3])×1⊃⎕VFI,4⊃rslt ⍝ Size
          z←,(5⊃rslt),6⊃rslt ⋄ ((z∊'-:')/z)←' ' ⋄ z←((1↑⍴r),6)⍴1⊃⎕VFI z
          r[;2]←↓⌊z,1000×1|z[;5]                ⍝ Add msec to Timestamp
          r[;0]←{(⌽~∨\⌽⍵='/')/⍵}¨{(-+/∧\' '=⌽⍵)↓¨↓⍵}0 1↓8⊃rslt    ⍝ Name
     
      :Case 'Mac'
          →(0∊⍴rslt←1 _SH'stat -lt "%F %T %z" ',unixfix path,isFolder{0∊⍴⍵:⍺/'*' ⋄ ⍵}filter)⍴0
          r←((1↑⍴rslt),4)⍴0
          rslt←↑{⎕ML←3 ⋄ ⍵⊂⍨~{⍵∧9>+\⍵}' '=⍵}¨rslt
          r[;3]←'d'=0⊃¨rslt[;1]                 ⍝ IsDirectory
          r[;1]←(~r[;3])×1⊃¨⎕VFI¨rslt[;4]       ⍝ Size
          z←↑∊¨↓{w←⍵ ⋄ ((w∊'-:')/w)←' ' ⋄ 1⊃⎕VFI w}¨rslt[;5 6] ⍝
          r[;2]←↓z,0                            ⍝ 0 msec for MacOS to Timestamp
          r[;0]←rslt[;8]                        ⍝ Name
     
      :Case 'Win'
      ⍝ See DirX for explanations of results of _FindNextFile etc
          _FindDefine
          handle rslt←_FindFirstFile path,isFolder{0∊⍴⍵:⍺/'*' ⋄ ⍵}filter
          :If 0=handle
              :Return ⍝ ('ntdir error:',⍕rslt)⎕SIGNAL 102      ⍝ file not found
          :EndIf
          rslt←,⊂rslt
          :While 1=0⊃ok next←_FindNextFile handle
              rslt,←⊂next
          :EndWhile
          :If 0 18∨.≠ok next
              ('ntdir error:',⍕next)⎕SIGNAL 11   ⍝ DOMAIN
          :EndIf
          ok←FindClose handle
          →(0∊⍴rslt←↓[0]↑rslt)⍴0
          r←((1↑⍴0⊃rslt),4)⍴0
          (0⊃rslt)←⍉attrs←(32⍴2)⊤0⊃rslt    ⍝ Get attributes into bits
          r[;3]←(0⊃rslt)[;27]              ⍝ IsDirectory?
          r[;1]←0(2*32)⊥⍉↑4⊃rslt           ⍝ combine size elements
          r[;2]←_Filetime_to_TS¨3⊃rslt     ⍝ As ⎕TS vector
          r[;0]←6⊃rslt                     ⍝ Name
      :EndSelect
      r←r[⍋↑r[;0];]
    ∇

    ∇ MkDir path;CreateDirectory;GetLastError;err
      ⍝ Create a folder
      :Select APLVersion
      :CaseList '*nix' 'Mac'
          :If ~DirExists path
              1 _SH'mkdir ',unixfix path
              ('mkdir error on ',path)⎕SIGNAL 11/⍨~DirExists path
          :EndIf
      :Case 'Win'
          ⎕NA'I kernel32.C32∣CreateDirectory* <0T I4' ⍝ Try for best function
          →(0≠CreateDirectory path 0)⍴0 ⍝ 0 means "default security attributes"
          ⎕NA'I4 kernel32.C32|GetLastError'
          err ⎕SIGNAL⍨'CreateDirectory error:',⍕err←GetLastError
      :EndSelect
    ∇

    ∇ Move filenames;MoveFileX;MoveFileExA;GetLastError;err
    ⍝ Move (from to) - move/rename file
      :Select APLVersion
      :Case '*nix' 'Mac'
          ∘
      :Case 'Win'
          ⎕NA'I kernel32.C32∣MoveFileEx* <0T <0T I4' ⍝ Try for best function
          :If 0≠MoveFileExA filenames,3 ⍝ REPLACE_EXISTING (1) + COPY_ALLOWED (2)
              :Return
          :EndIf
          ⎕NA'I4 kernel32.C32|GetLastError'
          :Select err←GetLastError
          :Case 120                     ⍝ ERROR_CALL_NOT_IMPLIMENTED
              'MoveFileX'⎕NA'I Kernel32.C32∣MoveFile* <0T <0T' ⍝ accept 2nd best - win 95
              :If 0≠MoveFileX filenames
                  :Return
              :EndIf
              err←GetLastError
          :EndSelect
          11 ⎕SIGNAL⍨'MoveFile error:',⍕err
      :EndSelect
    ∇

    ∇ tn←Nopen name
      :Trap 0
          tn←name ⎕NCREATE 0
      :Else
          tn←name ⎕NTIE 0
      :EndTrap
    ∇

    ∇ r←data Put name
     ⍝ Write data to file
      r←{(⎕NUNTIE ⍵)⊢data ⎕NAPPEND(0 ⎕NRESIZE ⍵)(⎕DR data)}Nopen name
    ∇

    ∇ r←text PutText name;tn
     ⍝ Write text to file (must be single byte text)
      tn←Nopen name
      0 ⎕NRESIZE tn
      r←text ⎕NAPPEND tn(⎕DR' ')
      ⎕NUNTIE tn
    ∇

    ∇ RmDir path;RemoveDirectoryA;GetLastError
     ⍝ Remove folder/directory
      :Select APLVersion
      :CaseList '*nix' 'Mac'
          ∘
      :Case 'Win'
          ⎕NA'I kernel32.C32∣RemoveDirectory* <0T'
          →(0≠RemoveDirectory,⊂path)⍴0
          ⎕NA'I4 kernel32.C32|GetLastError'
          11 ⎕SIGNAL⍨'RemoveDirectory error:',⍕GetLastError
      :EndSelect
    ∇

    ∇ SetCurrentDirectory path;SCD;GetLastError
     ⍝ Set Current Directory
      :Select APLVersion
      :CaseList '*nix' 'Mac'
          ∘
      :Case 'Win'
          'SCD'⎕NA'I kernel32.C32∣SetCurrentDirectory* <0T'
          →(0≠SCD,⊂path)⍴0
          ⎕NA'I4 kernel32.C32|GetLastError'
          11 ⎕SIGNAL⍨'SetCurrentDirectory error:',⍕GetLastError
      :EndSelect
    ∇

    ∇ r←{noext}SplitFilename filename;filesep;mask;path;file;ext
    ⍝ splits a filename into: path name ext
      noext←{6::0 ⋄ noext}''
      filesep←(~isWin)↓'\/'
      mask←⌽∨\⌽filename∊filesep
      path←mask/filename
      file←(~mask)/filename
      :If noext
          r←path file
      :Else
          mask←∨\⌽<\⌽'.'=file
          ext←mask/file
          file←(~mask)/file
          r←path file ext
      :EndIf
    ∇


    :Section Windows
    ∇ rslt←_Filetime_to_TS filetime;⎕IO
      :If 1≠0⊃rslt←FileTimeToLocalFileTime filetime(⎕IO←0)
      :OrIf 1≠0⊃rslt←FileTimeToSystemTime(1⊃rslt)0
          rslt←0 0                   ⍝ if either call failed then zero the time elements
      :EndIf
      rslt←1 1 0 1 1 1 1 1/1⊃rslt    ⍝ remove day of week
    ∇

    ∇ _FindDefine;WIN32_FIND_DATA
      :If 0=⎕NC'FindFirstFileX'
          WIN32_FIND_DATA←'{I4 {I4 I4} {I4 I4} {I4 I4} {U4 U4} {I4 I4} T[260] T[14]}'
          'FindFirstFileX'⎕NA'I4 kernel32.C32|FindFirstFile* <0T >',WIN32_FIND_DATA
          'FindNextFileX'⎕NA'U4 kernel32.C32|FindNextFile* I4 >',WIN32_FIND_DATA
          ⎕NA'kernel32.C32|FindClose I4'
          ⎕NA'I4 kernel32.C32|FileTimeToLocalFileTime <{I4 I4} >{I4 I4}'
          ⎕NA'I4 kernel32.C32|FileTimeToSystemTime <{I4 I4} >{I2 I2 I2 I2 I2 I2 I2 I2}'
          ⎕NA'I4 kernel32.C32∣GetLastError'
      :EndIf
    ∇

    ∇ rslt←_FindFirstFile name;⎕IO
      rslt←FindFirstFileX name(⎕IO←0)
      :If ¯1=0⊃rslt                   ⍝ INVALID_HANDLE_VALUE
          rslt←0 GetLastError
      :Else
          (1 6⊃rslt)_FindTrim←0        ⍝ shorten the file name at the null delimiter
          (1 7⊃rslt)_FindTrim←0        ⍝ and for the alternate name
      :EndIf
    ∇

    ∇ rslt←_FindNextFile handle;⎕IO
      rslt←FindNextFileX handle(⎕IO←0)
      :If 1≠0⊃rslt
          rslt←0 GetLastError
      :Else
          (1 6⊃rslt)_FindTrim←0             ⍝ shorten the filename
          (1 7⊃rslt)_FindTrim←0             ⍝ shorten the alternate name
      :EndIf
    ∇

    ∇ name←name _FindTrim ignored;⎕IO
     ⍝ Truncates a character vector at the null delimiting byte.
     ⍝ The null is not included in the result.
      ⎕IO←0
      name↑⍨←name⍳⎕UCS 0
    ∇

    ∇ {r}←{suppress}_CMD cmd
      :If 0=⎕NC'suppress' ⋄ suppress←0 ⋄ :EndIf
      r←''
      :Trap 0
          r←⎕CMD cmd
      :Else
          ('shell command failed: ',cmd)⎕SIGNAL 11/⍨~suppress
      :EndTrap
    ∇

    ∇ r←isWin
      r←'Win'≡APLVersion
    ∇

    :endsection

    :section *nix
    ∇ {r}←{suppress}_SH cmd
    ⍝ SH cover to suppress any error messages
    ⍝ suppress will suppress error from being signaled
      :If 0=⎕NC'suppress' ⋄ suppress←0 ⋄ :EndIf
      r←''
      :Trap 0
          r←⎕SH cmd,' 2>/dev/null'
      :Else
          ('shell command failed: ',cmd)⎕SIGNAL 11/⍨~suppress
      :EndTrap
    ∇

    ∇ f←unixfix f
    ⍝ replaces Windows file separator \ with Unix file separator /
    ⍝ this approach is mindnumbingly simple and probably dangerous
    ⍝ which is why we call unixfix very cautiously
      :If (⊂APLVersion)∊'*nix' 'Mac' ⋄ ((f='\')/f)←'/' ⋄ :EndIf
    ∇

    ∇ r←APLVersion
      :Select 3↑⊃'.'⎕WG'APLVersion'
      :CaseList 'Lin' 'AIX' 'Sol'
          r←'*nix'
      :Case 'Win'
          r←'Win'
      :Case 'Mac'
          r←'Mac'
      :Else
          ∘∘∘ ⍝ unknown version
      :EndSelect
    ∇
    :endsection

    ∇ r←a FREAD w;t
      t←w ⎕FSTIE 0
      r←⎕FREAD t a
      ⎕FUNTIE t
    ∇

    ∇ r←filename Fopen tieno
    ⍝ tieno is tie number and optionally 1 to tie exclusively
      tieno←2↑tieno ⍝ default to shares tie
      :Trap 22
          r←filename{⍵[2]:⍺ ⎕FTIE ⍵[1] ⋄ ⍺ ⎕FSTIE ⍵}tieno
      :Else
          r←filename{⍵[2]:⍵[3] ⋄ ⍺ ⎕FSTIE ⍵[2]⊣⎕FUNTIE ⍵[3]}tieno,filename ⎕FCREATE tieno[1]
      :EndTrap
    ∇
:EndNamespace
