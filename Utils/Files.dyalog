:Namespace Files

⍝ Provides cover functions for many file operations
⍝ Eventually all will be implemented for both Windows and *nix

    (⎕IO ⎕ML)←1

    ∇ r←text AppendText name;tn
     ⍝ Append text to existing file (must be single byte text)
      tn←name ⎕NTIE 0
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
      :Case '*nix'
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

    ∇ rslt←{amsk}Dir path;handle;next;ok;⎕IO;attrs;FindFirstFileX;FindNextFileX;FindClose;FileTimeToLocalFileTime;FileTimeToSystemTime;GetLastError
     ⍝ 'FIX ME'⎕SIGNAL 11
     ⍝ Amsk is a 32 element bool attribute mask.
     ⍝ Only files with attributes corresponding to 1-s in the mask will be returned.
     ⍝ '*'s mark default attribute mask.
     ⍝
     ⍝        * [31] <=> READONLY
     ⍝          [30] <=> HIDDEN
     ⍝        * [29] <=> SYSTEM
     ⍝          [28] <=> undocumented
     ⍝        * [27] <=> DIRECTORY
     ⍝        * [26] <=> ARCHIVE
     ⍝          [25] <=> DEVICE
     ⍝        * [24] <=> NORMAL - only set if no other bits are set
     ⍝        * [23] <=> TEMPORARY
     ⍝        * [22] <=> SPARSE FILE
     ⍝        * [21] <=> REPARSE POINT
     ⍝        * [20] <=> COMPRESSED
     ⍝        * [19] <=> OFFLINE
     ⍝        * [18] <=> NOT CONTENT INDEXED
     ⍝        * [17] <=> ENCRYPTED
     ⍝        * rest <=> undocumented (but in the default set so that
     ⍝                   Microsoft can extend them)
    ⍝ rslt is a vector of character vectors of filenames
     
      ⎕IO←0
      :Select APLVersion
      :Case '*nix'
          ∘
      :Case 'Win'
          :If 0=⎕NC'amsk'
              amsk←~(⍳32)∊30 28 25   ⍝ Default attribute mask.
          :EndIf
          _FindDefine
          handle rslt←_FindFirstFile path
          :If 0=handle
              ('ntdir error:',⍕rslt)⎕SIGNAL 102      ⍝ file not found
          :EndIf
          rslt←,⊂rslt
          :While 1=0⊃ok next←_FindNextFile handle
              rslt,←⊂next
          :EndWhile
          :If 0 18∨.≠ok next
              ('ntdir error:',⍕next)⎕SIGNAL 11       ⍝ DOMAIN
          :EndIf
          ok←FindClose handle
          rslt←↓[0]↑rslt
          attrs←(32⍴2)⊤0⊃rslt                        ⍝ Get attributes into bits
          rslt←(amsk∧.≥attrs)⌿6⊃rslt                 ⍝ bin unwanted files and info
      :EndSelect
    ∇

    ∇ r←DirExists path
      r←0
      :Select APLVersion
      :Case '*nix'
          :Trap 11
              r←0<⍴_SH'ls -adl ',unixfix path
          :EndTrap
      :Case 'Win'
          r←0<⍬⍴⍴'.'List path
      :EndSelect
    ∇

    ∇ rslt←{amsk}DirX path;handle;next;ok;attrs;⎕IO;FindFirstFileX;FindNextFileX;FindClose;FileTimeToLocalFileTime;FileTimeToSystemTime;GetLastError
     ⍝ 'FIX ME'⎕SIGNAL 11
     ⍝ Amsk is a 32 element bool attribute mask.
     ⍝ Only files with attributes corresponding to 1-s in the mask will be returned.
     ⍝ Amsk defaults to all attributes.
     ⍝ 0⊃rslt <=> 32 column boolean matrix of attribute bits
     ⍝          [;31] <=> READONLY
     ⍝          [;30] <=> HIDDEN
     ⍝          [;29] <=> SYSTEM
     ⍝          [;28] <=> undocumented
     ⍝          [;27] <=> DIRECTORY
     ⍝          [;26] <=> ARCHIVE
     ⍝          [;25] <=> undocumented
     ⍝          [;24] <=> NORMAL - only set if no other bits are set
     ⍝          [;23] <=> TEMPORARY
     ⍝          [;22] <=> SPARSE FILE
     ⍝          [;21] <=> REPARSE POINT
     ⍝          [;20] <=> COMPRESSED
     ⍝          [;19] <=> OFFLINE
     ⍝          [;18] <=> NOT CONTENT INDEXED
     ⍝          [;17] <=> ENCRYPTED
     ⍝          rest  <=> undocumented
     ⍝ 1⊃rslt <=> 7 column numeric matrix expressing the file creation time in ⎕TS format
     ⍝         if the file system does not support this then all columns are 0
     ⍝ 2⊃rslt <=> 7 column numeric matrix expressing the file last access time in ⎕TS format
     ⍝         if the file system does not support this then all columns are 0
     ⍝ 3⊃rslt <=> 7 column numeric matrix expressing the file last write time in ⎕TS format
     ⍝ 4⊃rslt <=> numeric vector giving the file size accurate up to 53 bits
     ⍝ 5⊃rslt <=> vector of character vectors giving the file names
     ⍝ 6⊃rslt <=> vector of character vectors giving the 8.3 file name for file systems
     ⍝         where it is appropriate and different from the file name
      ⎕IO←0
      :Select APLVersion
      :Case '*nix'
          ∘
      :Case 'Win'
          :If 0=⎕NC'amsk'
              amsk←32⍴1
          :EndIf
          _FindDefine
          handle rslt←_FindFirstFile path
          :If 0=handle
              ('ntdir error:',⍕rslt)⎕SIGNAL 102      ⍝ file not found
          :EndIf
          rslt←,⊂rslt
          :While 1=0⊃ok next←_FindNextFile handle
              rslt,←⊂next
          :EndWhile
          :If 0 18∨.≠ok next
              ('ntdir error:',⍕next)⎕SIGNAL 11   ⍝ DOMAIN
          :EndIf
          ok←FindClose handle
          rslt←↓[0]↑rslt
          (0⊃rslt)←⍉attrs←(32⍴2)⊤0⊃rslt                ⍝ Get attributes into bits
          rslt←(amsk∧.≥attrs)∘⌿¨rslt                ⍝ bin unwanted files and info
          rslt[1 2 3]←↑¨_Filetime_to_TS¨¨rslt[1 2 3]    ⍝ put times into ⎕ts format
          (4⊃rslt)←0(2*32)⊥⍉↑4⊃rslt                    ⍝ combine size elements
          rslt/⍨←5≠⍳8                               ⍝ bin the reserved elements
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
      :Case '*nix'
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

    ∇ r←GetText name;tn
     ⍝ Read a text file as single byte text
      tn←(unixfix name)⎕NTIE 0 ⋄ r←⎕NREAD tn(⎕DR' ')(⎕NSIZE tn) ⋄ ⎕NUNTIE tn
    ∇

    ∇ r←{file}List path;z;rslt;handle;next;ok;attrs;⎕IO;FindFirstFileX;FindNextFileX;FindClose;FileTimeToLocalFileTime;FileTimeToSystemTime;GetLastError;isFile;filter
    ⍝ Return matrix containing
    ⍝ [;0] Name [;1] Length [;2] LastAccessTime [;3] IsDirectory
      ⎕IO←0
      :If isFile←2=⎕NC'file' ⋄ filter←(0<⍴,file)/'/',file ⋄ :Else ⋄ filter←'/*' ⋄ :EndIf
      filter←('/\'∊⍨¯1↑path)↓filter
      r←0 4⍴'' 0 0 0
     
      :Select APLVersion
      :Case '*nix'
          →(0∊⍴rslt←1 _SH'ls -al --time-style=full-iso ',unixfix path,isFile/filter)⍴0
          rslt←↑rslt
          rslt←' ',('total '≡6⍴rslt)↓[0]rslt
          →(0=1↑⍴r←((1↑⍴rslt),4)⍴0)⍴0
          z←∧⌿' '=rslt ⍝ entirely blank columns
          z←z∧10>+\z    ⍝ Do not split file names
          rslt←z⊂rslt
          r[;3]←'d'=(0⊃rslt)[;1]                 ⍝ IsDirectory
          r[;1]←(~r[;3])×1⊃⎕VFI,4⊃rslt ⍝ Size
          z←,(5⊃rslt),6⊃rslt ⋄ ((z∊'-:')/z)←' ' ⋄ z←((1↑⍴r),6)⍴1⊃⎕VFI z
          r[;2]←↓⌊z,1000×1|z[;5]                ⍝ Add msec to Timestamp
          r[;0]←{(⌽~∨\⌽⍵='/')/⍵}¨{(-+/∧\' '=⌽⍵)↓¨↓⍵}0 1↓8⊃rslt    ⍝ Name
     
      :Case 'Win'
      ⍝ See DirX for explanations of results of _FindNextFile etc
          _FindDefine
          handle rslt←_FindFirstFile path,filter
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
          rslt←↓[0]↑rslt
          →(0=1↑⍴r←((1↑⍴0⊃rslt),4)⍴0)⍴0
          (0⊃rslt)←⍉attrs←(32⍴2)⊤0⊃rslt                ⍝ Get attributes into bits
          r[;3]←(0⊃rslt)[;27]              ⍝ IsDirectory?
          r[;1]←0(2*32)⊥⍉↑4⊃rslt          ⍝ combine size elements
          r[;2]←_Filetime_to_TS¨3⊃rslt     ⍝ As ⎕TS vector
          r[;0]←6⊃rslt                     ⍝ Name
      :EndSelect
      r←r[⍋↑r[;0];]
    ∇

    ∇ MkDir path;CreateDirectory;GetLastError;err
      ⍝ Create a folder
      :Select APLVersion
      :Case '*nix'
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
      :Case '*nix'
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

    ∇ r←text PutText name;tn
     ⍝ Write text to file (must be single byte text)
      :Trap 0
          tn←name ⎕NCREATE 0
      :Else
          tn←name ⎕NTIE 0
          0 ⎕NRESIZE tn
      :EndTrap
     
      r←text ⎕NAPPEND tn(⎕DR' ')
      ⎕NUNTIE tn
    ∇

    ∇ RmDir path;RemoveDirectoryA;GetLastError
     ⍝ Remove folder/directory
      :Select APLVersion
      :Case '*nix'
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
      :Case '*nix'
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
      filesep←(~IsWin)↓'\/'
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
      WIN32_FIND_DATA←'{I4 {I4 I4} {I4 I4} {I4 I4} {U4 U4} {I4 I4} T[260] T[14]}'
      'FindFirstFileX'⎕NA'I4 kernel32.C32|FindFirstFile* <0T >',WIN32_FIND_DATA
      'FindNextFileX'⎕NA'U4 kernel32.C32|FindNextFile* I4 >',WIN32_FIND_DATA
      ⎕NA'kernel32.C32|FindClose I4'
      ⎕NA'I4 kernel32.C32|FileTimeToLocalFileTime <{I4 I4} >{I4 I4}'
      ⎕NA'I4 kernel32.C32|FileTimeToSystemTime <{I4 I4} >{I2 I2 I2 I2 I2 I2 I2 I2}'
      ⎕NA'I4 kernel32.C32∣GetLastError'
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

    ∇ r←IsWin
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
      :If '*nix'≡APLVersion ⋄ ((f='\')/f)←'/' ⋄ :EndIf
    ∇

    ∇ r←APLVersion
      :Select 3↑⊃'.'⎕WG'APLVersion'
      :CaseList 'Lin' 'AIX' 'Sol'
          r←'*nix'
      :Case 'Win'
          r←'Win'
      :Else
          ... ⍝ unknown version
      :EndSelect
    ∇
    :endsection

    ∇ r←a FREAD w;t
      t←w ⎕FSTIE 0
      r←⎕FREAD t a
      ⎕FUNTIE t
    ∇
:EndNamespace