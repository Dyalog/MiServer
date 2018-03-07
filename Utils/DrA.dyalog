:Namespace DrA

    Version←'2.1' ⍝ This version integrated with MiServer
    (⎕ML ⎕IO)←1
⍝  --- Developer Tools ---

    ∇ r←SetDefaults
   ⍝ Set default values for DrA globals
     
   ⍝ For interactive session:  ⎕TRAP←DrA.TrapGUI
   ⍝ For unattended operation: ⎕TRAP←DrA.TrapServer ⋄ DrA.NoUser←1
   ⍝                           and have a branch destination called RESUME
      TrapGUI←((901 902)'E' '⎕SIGNAL 10+⎕EN')(0 'E' '⍎#.DrA.Start ⍎⎕FX #.DrA.(⎕NR ''_DrA_GetErrorInfo'')')
      TrapServer←(⊂912 'C' '→RESUME'),TrapGUI
     
      GUI_Title←AppName←'My Application'
      Path←{(1-⌊/(⌽⍵)⍳'/\')↓⍵}⎕WSID ⍝ Application root ('DrA/' will be added)
      Mode←1            ⍝ 1=Runtime, 2=Developer Mode, see Start
      NoUser←0          ⍝ 1: Running unattended: Log Error, "Resume" (signals 912)?
                        ⍝ 2: Means attempt to send e-mail
      LogVars←0⍴⊂''     ⍝ List of variables to be included in all logs
     
      SMTP_Gateway←''
      MailMethod←'NONE'
      MailRecipient←''
     
      LogFn←''          ⍝ Set to name of external logging function if relevant
     
      r←'DrA defaults applied'
    ∇

    ∇ {_NS}←{mode}Diagnose _PATH;⎕TRAP;_FILE;_TN;_HDR;_DATA;_Z;_M;_N
   ⍝ Create Diagnosis Namespace from file name or path name
      ⎕TRAP←0 'S'
      :If 0=⎕NC'mode' ⋄ mode←1 ⋄ :EndIf
     
      :If 0=⍴_PATH
          _PATH←Path
          _PATH←#.Files.Normalize _PATH,(('/\'∊⍨¯1↑_PATH)/'\'),'DrA'
      :EndIf
     
      :Trap 0
          _TN←(_FILE←_PATH)⎕FSTIE 0 ⍝ Try to tie the file
      :Else                  ⍝ If that fails, see if it was a path
          :Select ⊃⍴_FILE←⎕FLIB _PATH
          :Case 0 ⋄ ('No error files found in ',_PATH)⎕SIGNAL 11
          :Case 1 ⋄ _FILE←,_FILE
          :Else ⍝ Ask user to select a file
              (⍕((⊃⍴_FILE),1)⍴⍳⊃⍴_FILE),'.',' ',_FILE
              _Z←⎕
              _FILE←_FILE[_Z;]
          :EndSelect
          _TN←_FILE ⎕FSTIE 0
      :EndTrap
     
      _HDR _DATA←⎕FREAD _TN,1
      ⎕FUNTIE _TN
      _Z←↑[0.5]_HDR _DATA
     
      _NS←⎕NS ⍬
     
      :With _NS
          _M←_Z[;1]⍳'⎕XSI' '⎕LC'
          _Z[1⊃_M;2]←⊂,[1.5](⊃_Z[1⊃_M;2]),¨{'[',(⍕⍵),']'}¨⊃_Z[2⊃_M;2]
          _Z←((2⊃_M)≠⍳⊃⍴_Z)⌿_Z
          _Z[_M;2]←⊂↑⊃_Z[_M←_Z[;1]⍳⊂'⎕DM';2]
          _M←_Z[;1]⍳⊂'TimeStamps'
          _Z[_M;2]←⊂{((-5⌊n)↑[1]⍵)⍪(¯1↑⍴⍵)↑'(',(⍕n←1↑⍴⍵),' occurrences)'}'ZI4,<->,ZI2,<->,ZI2,< >,ZI2,<:>,ZI2,<:>,ZI2'⎕FMT(↑⊃_Z[_M;2])[;⍳6]
          _M←_Z[;1]⍳⊂'Variables'
          _Z[_M;2]←⊂{r←⍵ ⋄ r[;5]←40{w←,⍕⍵ ⋄ (⍺↑w),(⍺<⍴w)/'...'}¨r[;5] ⋄ 'Name' 'Shape' 'Depth' 'Bytes' 'Data'⍪r}⊃_Z[_M;2]
          _M←_Z[;1]⍳⊂'Function'
          _Z[_M;2]←⊂⎕FMT⊃_Z[_M;2]
          DrAInfo←_Z
          :If mode=1 ⋄ ⎕←⎕FMT¨DrAInfo
              'Function Fixed: ',⎕FX(_HDR⍳⊂'Function')⊃_DATA
              _Z←(_HDR⍳⊂'Variables')⊃_DATA
              :If ∨/_M←_Z[;2]≡¨⍴¨_Z[;5] ⍝ Snapshot taken
                  _N←2⌈+/_M
                  ⍎(,⍕_N⍴_M/_Z[;1]),'←_N⍴_M/_Z[;5]'
                  'Variables defined: ',,⍕_M/_Z[;1]
              :EndIf
              :If (0≠⍴_M)∧~∨/_M
                  'Variables not defined: ',,⍕(~_M)/_Z[;1]
              :EndIf
          :EndIf
      :EndWith
    ∇

    ∇ r←Entry args
   ⍝ Called on entry to a function which is going to be debugged/monitored
   ⍝ Return Trap setting
   ⍝ Later: Turn on logging, etc...
     
      Show'Entry'(2⊃⎕XSI)args
      r←Trap
    ∇

    ∇ Exit result
   ⍝ Called on exit from a function which is being debugged/monitored
   ⍝ Currently does nothing, will later collect statistics
      'Exit'result
    ∇

 ⍝ --- Error Handling ---

    ∇ ⍙00←_DrA_GetErrorInfo;⎕TRAP;⍙99;⍙98;⍙97;⎕IO;⍙95
   ⍝ Gather information for error logging
     
      ⎕TRAP←0 'C' '→ELSE' ⍝ Forget extra info if we fail
      ⎕TRAP←0 'S'
      '⍙99'⎕NS''     ⍝ Create work NS
      ⍙99.Info←⎕DM(⍕⎕THIS)(1↓⎕XSI)(1↓⎕LC)⎕TS ⎕WA ⎕IO ⎕EN(,⊂⎕TS)⎕WSID('.'⎕WG'APLVersion')
      ⍙99.Hdr←'⎕DM' '⎕THIS' '⎕XSI' '⎕LC' '⎕TS' '⎕WA' '⎕IO' '⎕EN' 'TimeStamps' '⎕WSID' 'APLVersion'
     
      ⎕IO←1
     
      ⍙99.t←(⍙99.t⍳']')↓⍙99.t←2⊃(1⊃⍙99.Info),'' ''         ⍝ Line of code which failed
      ⍙99.t←(¯1+((~≠\⍙99.t='''')∧⍙99.t='⍝')⍳1)↑⍙99.t       ⍝ Without Comments
      ⍙99.t,←' ',{(¯1+⍵⍳'⍝')↑⍵}((⎕CR 2⊃⎕SI,⊂'')⍪' ')[1;]   ⍝ Add header of function which failed (up to comment)
      ⍙99.n←⍙99.t∊⎕A,⎕D,'#.abcdefghijklmnopqrstuvwxyz⍙∆_'  ⍝ Chars which could be part of names
      ⍙99.m←⍙99.n>¯1↓0,⍙99.n                               ⍝ Start of names
      ⍙99.t←∪#.DrA.LogVars,(⎕NL-2),(⍙99.n/⍙99.m)⊂⍙99.n/⍙99.t ⍝ Unique, individual names
     
      :If 0≠⍴⍙99.t←(2=|⌊⎕NC ⍙99.t)/⍙99.t ⍝ Any are variables?
          ⍙99.t←⍙99.t,(↑{6::¯1 ⍬ ⋄ {(⍴⍵)(≡⍵)}⍎⍵}¨⍙99.t),(⎕SIZE ⍙99.t),[1.5]⊂⍬  ⍝ Names, shape, depth, sizes, slots for data
     
          :If 0≠⍴⍙99.n←((100000>⍙99.t[;4])∧(¯1≢¨⍙99.t[;2])∧{6 11 16::1 ⋄ 0⊣⎕CLASS⍎⍵}¨⍙99.t[;1])/⍳⊃⍴⍙99.t ⍝ Log values of vars with size < 100,000 bytes
              ⍙99.t[⍙99.n;5]←⍎¨⍙99.t[⍙99.n;⎕IO]    ⍝ (in 5th column)
          :EndIf
     
          ⍙99.Info,←⊂⍙99.t
      :Else
          ⍙99.Info,←⊂0 5⍴0
      :EndIf
     
      ⍙99.Info,←⊂⎕VR 2⊃⎕SI ⍝ Log the function definition
      ⍙99.Hdr,←'Variables' 'Function'
      ⍙00←⍙99.Hdr ⍙99.Info
      →0
     
     ELSE:
      ⎕←'DrA.GetErrorInfo failed' ⋄ ⎕←↑⎕DM
      →NoUser⍴0
      ⎕TRAP←0 'S'
      '⍙00'⎕WC'MsgBox' 'Trap in GetErrorInfo'⎕DM'Warn' ⋄ ⎕DQ'⍙00' ⋄ ⎕EX'⍙00'
      ⍙00←⍙99.Hdr ⍙99.Info
      ∘
    ∇

    ∇ msg←CallBack msg
   ⍝ Callback function for DrA
     
      :Select 2⊃msg
      :CaseList 'KeyPress' 'KEYPRESS'
          :Select msg[4 6]
          :Case 13 0 ⍝ Unshifted Carriage Return
              ⎕NQ(⊃msg)1001 ⍝ Enqueue 'Execute'
          :Case 27 0 ⍝ Unshifted Escape
              ⎕NQ(⊃msg)1002 '' ⍝ Enqueue 'Exit' (with empty result)
          :EndSelect
      :EndSelect
    ∇

    ∇ _Z←Exec _X;_A;_P
   ⍝ Execute user input in DrA
     
      _X←(+/∧\_X=' ')↓_X
     
      :Select ⊃_X
      :Case '→' ⍝ Branch Arrow
          _Z←⍬
          ⎕NQ'MAIN.IN' 1002 _X ⍝ Branch on
     
      :Case ')' ⍝ )SYSTEM CMD
          _X _A←((_P-1)↑_X)((_P←_X⍳' ')↓_X)
          :Select _X
          :CaseList ')si' ')SI'
              _Z←(2↓⎕XSI),¨'[',¨(⍕¨2↓⎕LC),¨']'
          :CaseList ')ed' ')ED'
              ⎕ED _A ⋄ _Z←0⍴⊂''
          :CaseList ')WSID' ')wsid'
              _Z←,⊂⎕WSID
          :Else
              _Z←,⊂'System command "',_X,'"not supported.'
          :EndSelect
     
      :Else ⍝ Just something to execute
          :Trap 0
              _Z←(2⊃⎕NSI)⍎_X ⍝ Execute in namespace where DrA was called
              _Z←↓⍕,⊂_Z
              _Z←{1↓¨(_A=⎕AV[4])⊂_A←⎕AV[4],⍵}¨_Z
              _Z←⊃,/_Z
          :Else
              _Z←⎕DM
          :EndTrap
     
      :EndSelect
    ∇

    ∇ {r}←{TIT}GuiMessage CTL;c;h;MSG;MSGBOX;TYPE;⎕IO;⎕TRAP;fname
   ⍝ Inform user of message 1⊃CTL with title TIT, box type 2⊃CTL
     
   ⍝ ... TIT    - Caption
   ⍝ ... CTL[1] - Message text
   ⍝ ... CTL[2] - Type: M/I(i)/Q(?)/W(!)/E
   ⍝ ... CTL[3] - Buttons: O/OC/RC/YN/YNC/ARI
   ⍝ ... CTL[4] - Default: 1/2/3
   ⍝ ... r      -  1 ~ Første knap (Ok/Ok    /Retry /Yes/Yes   /Abort)
   ⍝ ...           0 ~ Anden knap  (- /Cancel/Cancel/No /No    /Retry)
   ⍝ ...          ¯1 ~ Tredje knap (- /-     /-     /-  /Cancel/Ignore)
     
      fname←'MSGBOX'
      ⎕IO←1 ⋄ ⍎(0=⎕NC'TIT')/'TIT←GUI_Title'
     
      :If (NoUser≠0)∨LogFn∨.≠' ' ⋄ Log(⊂TIT),{1=≡⍵:⊂⍵ ⋄ ⍵}1⊃CTL ⋄ →0 ⋄ :EndIf
     
      ⍎(1=≡CTL)/'CTL←CTL ''INFO'' ''OK'' 1⋄→DO'
      CTL[2]←('MSG' 'INFO' 'QUERY' 'QUERY' 'WARN' 'WARN' 'ERROR' 'MSG')['MIQ?W!E'⍳''⍴2⊃CTL]
      →(3>⍴CTL)⍴DO
      →(6<h←'O' 'OC' 'RC' 'YN' 'YNC' 'ARI'⍳⊂3⊃CTL)⍴DO
      CTL[3]←(('OK')('OK' 'CANCEL')('RETRY' 'CANCEL')('YES' 'NO')('YES' 'NO' 'CANCEL')('ABORT' 'RETRY' 'IGNORE'))[h]
      →(4>⍴CTL)⍴DO
      CTL[4]←1 2 3 1⍳4⊃CTL
     
     DO:
     
      ⎕TRAP←11 'C' '→ERR'
      :If 1<≡⊃CTL
      :AndIf 15<⍴1⊃CTL
          (1⊃CTL)←(15↑1⊃CTL),⊂'...[',(⍕(⍴1⊃CTL)-15),' more lines removed]...'
      :EndIf
      fname ⎕WC('MSGBOX'TIT),CTL,⊂('EVENT'(61 62 63)1)
      h←⎕WN'.' ⋄ →(0=⍴h←((⊂'FORM')≡¨h ⎕WG¨⊂'TYPE')/h)⍴GO
      →(0=⍴h←(h ⎕WG¨⊂'ONTOP')/h)⍴GO
      h ⎕WS¨⊂'ONTOP' 0
     GO:⍝c←Ptr 0
      r←62-2⊃⎕DQ fname
    ⍝c←Ptr c
      ⎕EX fname
      →(0=⍴h)⍴0 ⋄ h ⎕WS¨⊂'ONTOP' 1
      →0
     
     ERR:'Invalid message parameters'⎕SIGNAL 11
    ∇

    ∇ _F Make _Q;_B;_E;_T;_O;_P
   ⍝ Make the DrA form. _Q: 1=User Mode, 2=Developer Mode
     
      _E←('Event' 'KeyPress' 'CallBack')('Event'(1001 1002)1)
      '#'⎕WS'3D' 'Plinth'
      'MAIN'⎕WC'Form'('Dr. A says ...',(0≠⍴_F)/' [',_F,']')('Size' 600 800)('Coord' 'Pixel')('Font' 'Dyalog Std')('OnTop' 1)('Border' 2)('Event' 'Close' 1),_E
      'MAIN.Tip'⎕WC'TipField'
      'MAIN'⎕WS'TipObj' 'MAIN.Tip'
     
      :If _Q=1 ⍝ User
          'MAIN'⎕WS'Caption' 'System Error'
          _T←⊂'You have encountered an error in ',AppName,'. Please report the following'
          _T,←'information to your Administrator:' ''
          _T,←(80⍴'=')''('Error description: ',⊃_M)''
          :If 1<⍴_M ⋄ _T,←'Expression which failed: '(2⊃_M)'' ⋄ :EndIf
          _T,←(⊂'Stack: '),(2↓⎕XSI,¨'[',¨(⍕¨⎕LC),¨']'),''(80⍴'=')
          _T,←'' 'A diagnostic file has been created with the following name:' ''(_F,'.DCF')'' 'Please include this file when reporting the error.'
          _T,←'' 'Click on RESUME below to end the current Engine call and attempt to resume'
          _T,←'work (you may see this form several times before application execution resumes).' ''
          _T,←⊂'NOTE: Even if the application resumes successfully, it is HIGHLY recommended that '
          _T,←⊂'you restart the Application as soon as possible following an engine failure.'
          _M←_T
      :EndIf
     
      'MAIN.OUT'⎕WC'Edit'_M(10 10)(515 780)('Style' 'Multi')('HScroll' ¯1)('VScroll' ¯1)('Attach' 'Top' 'Left' 'Bottom' 'Right'),_E
     
      _B←(⍬ 100)('Attach' 'Bottom' 'Left' 'Bottom' 'Left')('Event' 'Select' 1),_E ⍝ Common Button Props
      _O←10 ⋄ ⎕FX'_R←_P' '_R←565,_O ⋄ _O←_O+110' ⍝ Position of next button
     
      :If _Q=2 ⍝ Developer
          'MAIN.L1'⎕WC'Label' 'Input:'(535 10)('Attach' 'Bottom' 'Left' 'Bottom' 'Left')
          'MAIN.IN'⎕WC'Edit' ''(535 60)(23 730),_E,('Attach' 'Bottom' 'Left' 'Bottom' 'Right')('Tip' 'Enter APL expressions here and hit ENTER to execute them')
          ⎕NQ'MAIN.IN' 'GotFocus'
          :If 'D'=4 1⊃'.'⎕WG'APLVersion'
              'MAIN.Debug'⎕WC'Button' 'Debug'_P,_B,⊂('Tip' 'Exit from Dr. A to the APL Session')
          :EndIf
          'MAIN.Cont'⎕WC'Button' '→⎕LC'_P,_B,⊂('Tip' 'Resume execution of the suspended function')
          'MAIN.Edit'⎕WC'Button' 'Edit'_P,_B,⊂('Tip' 'Edit the suspended function')
          :If 4≤⍴⎕XSI ⋄ _T←(4⊃⎕XSI),'[',(⍕4⊃⎕LC),']'
              'MAIN.Pop'⎕WC'Button' 'Pop'_P,_B,⊂('Tip'('Signal the error at ',_T))
          :EndIf
      :EndIf
     
      'MAIN.Res'⎕WC'Button' 'Resume'_P,_B,⊂('Tip' 'Attempt to resume execution')
      'MAIN.Copy'⎕WC'Button' 'Copy'_P,_B,⊂('Tip' 'Copy diagnostic message to clipboard')
      'MAIN.Send'⎕WC'Button' 'Send e-Mail'_P,_B,⊂('Tip' 'Send diagnostic e-mail') ⍝ Disabled until further notice
   ⍝ 'MAIN.End'⎕WC'Button' 'Exit'_P,_B,⊂('Tip' 'Terminate ',AppName)')
    ∇

    ∇ F←Info MakeFile Dir;get;Z;D;F;TN;TS;MKDIR;old;⎕TRAP
   ⍝ Create a DrA Error Log file under the installation directory
     
      ⎕TRAP←0 'C' '→ELSE'
      Dir←#.Files.Normalize Dir,((~'/\'∊⍨¯1↑Dir)/'\'),'DrA/'
      get←{(2,(1⊃⍺)⍳⊂⍵)⊃⍺}                     ⍝ Info retrieval function
      F←,'ZI4,ZI2,ZI2'⎕FMT 1 3⍴⎕TS             ⍝ Todays date
      F←F,'_'{(0≠⍴⍵)/⍺,⍵},'[]#'~⍨{(1-(⌽⍵)⍳'.')↑⍵},Info get'⎕THIS' ⍝ Class
      F←F,'_',({(1-(⌽⍵)⍳'.')↑⍵}⊃(Info get'⎕XSI'),⊂''),'_' ⍝ Function Name
      F←F,(,'ZI4'⎕FMT⊃(Info get'⎕LC'),0),'_'   ⍝ Line Number
      F←F,,'ZI4'⎕FMT Info get'⎕EN'             ⍝ Event Number
      :If ~#.Files.DirExists Dir
          #.Files.MkDir Dir
      :EndIf
     
      :If 0≠TN←{0::0 ⋄ ⍵ ⎕FSTIE 0}Dir,F        ⍝ Is there already a file for this error from today?
          TS←(⎕FREAD TN,1)get'TimeStamps'
          ((2,(1⊃Info)⍳⊂'TimeStamps')⊃Info)←TS,Info get'TimeStamps'
          ⎕FDROP TN,-/2↑⎕FSIZE TN              ⍝ We will overwrite it
      :Else
          TN←(Dir,F)⎕FCREATE 0
          (1 3⍴0 ¯1 0)⎕FSTAC TN
      :EndIf
      Info ⎕FAPPEND TN
      ⎕FUNTIE TN
      F←Dir,F
      →0
     
     ELSE:
      F←''
      ⎕TRAP←0 'S' ⍝ 0 'C' '→0'
      'Error Logging System'GuiMessage('Unable to create error log file' ''(Dir,F))'E' 'O'
    ∇

    ∇ _R←Resume;_T;_Q
   ⍝ Determine whether we can resume execution by →ABORT, →0 or another ⎕SIGNAL 902
     
      :If 2<⍴_T←⎕XSI
          _T←⎕CR 3⊃_T                ⍝ Source of calling function
          _Q←((⊃⍴_T),10)↑(':'∊_T)⌿_T ⍝ 1st 10 cols of labelled lines
          _Q←(+/∧\' '=_Q)⌽_Q         ⍝ Remove leading Blanks
     
          :If ∨/_Q[;⍳6]∧.='ABORT:'   ⍝ There is an ABORT: label
              _R←'→ABORT'            ⍝ Try branching to it
          :Else
              :If (3=⍴⎕XSI)∧0≠1↑⍴_T  ⍝ If this is the last function on the stack
                  _Q←('←'∊_Q)/(¯1+_Q⍳'←')↑_Q←_T[1;] ⍝ Name of result
                  _Q←(2≠⎕NC _Q)/_Q                  ⍝ Don't set it if it already has a value
                  _R←((0≠⍴_Q)/_Q,'←¯1 ''Trap'' ''Execution Failed due to a Trapped Error in ',(10↓⊃¯1↑⎕XSI),''''),' ⋄ →0' ⍝ Set result (if any) and →0
              :Else
                  _R←'''POP'' ⎕SIGNAL 902' ⍝ We must pop again
              :EndIf
          :EndIf
     
          :If NoUser=2 ⋄ MailReport _F ⋄ :EndIf ⍝ Unattended with e-mail option
     
      :Else
          _R←'' ⍝ There is no calling function?
      :EndIf
    ∇

    ∇ Show x;Form
      'Form'⎕WC'Form' 'DrA.Show'
      'Form.T'⎕WC'Text'(⍕x)(50 50)
      ⎕DQ'Form'
    ∇

    ∇ _R←Start _INFO;_F;_D;_E;_I;_Z;_N;_X;_M;⎕TRAP;_G;_T;MAIN;CLIP
   ⍝ Main Entry point when errror is trapped
   ⍝ Create a log file, then allow a developer to inspect a problem
   ⍝ Globals: Mode   (0=off, 1=runtime, 2=developer mode)
   ⍝          Path   (Where to create log files)
   ⍝          NoUser (1 means there is no user interface, so don't pop up, 2 means send e-mail)
     
      ⎕TRAP←0 'C' '→_ERR'
      _D _E←(2⊃_INFO)[(1⊃_INFO)⍳'⎕DM' '⎕EN']
      _R←'' ⍝ Return a string to be executed by the calling ⎕TRAP
      LastFile←''
      :If _E≠912 ⍝ If resuming, don't make file
          LastFile←_F←_INFO MakeFile Path
          ⎕←↑LastError←_D ⍝ Display Diagnostic Message in session
      :EndIf
      :If NoUser≠0 ⋄ _R←Resume ⋄ →0 ⋄ :EndIf ⍝ If no user interface, just "Resume"
      :If Mode=2 ⋄ ⎕TRAP←0 'S' ⋄ :EndIf
     
      :Select _E
      :Case 911 ⋄ _M←(⊂'Stack Popped'),¯2↑_D ⍝ Stack Popped one level
      :Case 912 ⋄ _R←Resume ⋄ →0             ⍝ Resume
      :Case 1001 ⋄ _M←(⊂'Stop'),¯2↑_D
      :Else ⋄ _M←_D,(0=⍴_D)/,⊂''
      :EndSelect
     
      _F Make Mode
     
      :Repeat
          'MAIN'⎕WS'Cursor' 0
          _I←⎕DQ'MAIN'
          :If 0≠⍴_I
              'MAIN'⎕WS'OnTop' 0 ⍝ Don't need to be OnTop after user has done anything...
              'MAIN'⎕WS'Cursor' 1
              :Select 2⊃_I
              :Case 1001 ⍝ Execute
                  _Z←Exec _X←'MAIN.IN'⎕WG'Text'
                  _Z←('MAIN.OUT'⎕WG'Text'),(⊂'      ',_X),_Z
                  _N←¯1+⌊(⊃'MAIN.OUT'⎕WG'Size')÷⊃'MAIN.OUT'⎕WG⊂'TextSize' 'xxx'
                  _Z←(-_N⌊⍴_Z)↑_Z
                  'MAIN.OUT'⎕WS'Text'_Z
                  'MAIN.IN'⎕WS'Text' '' ⋄ ⎕NQ'MAIN.IN' 'GotFocus'
              :Case 1002 ⍝ Branch (enqueued by DrAExec)
                  _R←3⊃_I ⋄ :Leave
              :CaseList 'Select' 'SELECT' ⍝ One of the buttons
                  :Select ⊃_I
                  :Case 'MAIN.Debug'
                      _R←'' ⋄ :Leave
                  :Case 'MAIN.Cont'
                      _R←'→⎕LC' ⋄ :Leave
                  :Case 'MAIN.Edit'
                      ⎕ED 2⊃⎕XSI
                  :Case 'MAIN.Copy'
                      'CLIP'⎕WC'ClipBoard'('Text'('MAIN.OUT'⎕WG'Text'))
                  :Case 'MAIN.Send'
                      MailReport _F
                  :Case 'MAIN.Pop'
                      _R←'→⎕SIGNAL 901' ⋄ :Leave
                  :Case 'MAIN.Res'
                      _R←Resume ⋄ :Leave
                  :Case 'MAIN.End'
                      ⎕OFF
                  :EndSelect
              :EndSelect
          :EndIf
      :Until 9≠⎕NC'MAIN'
     
      ⎕EX'MAIN'
      →0
     _ERR:
      ⎕TRAP←0 'S'
      'Internal DrA Error'GuiMessage(⎕DM)'E' 'O'
      _R←Resume
      →0
    ∇

    ∇ Log text;⎕PW
      ⎕PW←255
      :If 1=≡text ⋄ text←,⊂text ⋄ :EndIf
      :If 3=⎕NC LogFn ⋄ (⍎LogFn)text
      :Else ⋄ ⎕←,[1.5]text ⋄ :EndIf
    ∇

⍝ --- Mail Tools ---

    ∇ MailReport _F;_X;_T;_M;_Z
      :Trap 0
          ⎕←_F
          _T←_F ⎕FSTIE 0
          _X←⎕FREAD _T,1
          ⎕FUNTIE _T
          _M←~(⊃_X)∊'Variables' 'Function'
          _X←⍉_M/↑_X
          _X←(_X[;1],¨'='),¨,∘⍕¨_X[;2]
          :If (⊃_Z←(_F,'.dcf')Send _X)∊0 221
              'DrA Message Interface'GuiMessage(,⍕1↓_Z)'I' 'O'
          :Else
              'DrA Message Interface'GuiMessage('Attempt to send message failed:'(,⍕_Z)'Please send the following log file to your application helpdesk:'_F)'E' 'O'
          :EndIf
      :Else
          'DrA Message Interface'GuiMessage'Unable to send message' 'E' 'O'
      :EndTrap
    ∇

    ∇ z←att Send text;⎕TRAP
   ⍝ Send message to MailRecipient
      :If 9=⎕NC'Mailer'
          att Mailer.Send text
      :Else
          'No mailer defined'⎕SIGNAL 11
      :EndIf
    ∇


    ∇ z←{att}SendNetMail text;⎕USING;M;P;PORT
   ⍝ Send
     
      z←0 ''
      :Trap 0
          ⎕USING←'System' 'System.Net,System.dll'
          :If 2=≡text ⋄ text←⊃,/text,¨⎕UCS 13 ⋄ :EndIf
          M←⎕NEW Mail.MailMessage(MailRecipient MailRecipient('DrA Error Report for ',AppName)text)
          M.Attachments.Add ⎕NEW Mail.Attachment(att(⎕NEW Mime.ContentType(⊂'application/binary')))
          P←SMTP_Gateway⍳':'
          PORT←⊃2⊃⎕VFI{⍵,(0=⍴⍵)/'25'}P↓SMTP_Gateway
          (⎕NEW Mail.SmtpClient(((P-1)↑SMTP_Gateway)PORT)).Send M
          M.Dispose
          z←0 'Message sent to ',MailRecipient
     
      :Case 90
          z←90((⎕UCS 10)~⍨'Unable to send message: ',⎕EXCEPTION.Message,(⎕UCS 13),{(⍵⍳⎕UCS 13)↑⍵}⍕⎕EXCEPTION.InnerException)
     
      :Else
          z←1('Unable to send message: ',1⊃⎕DM)
     
      :EndTrap
    ∇

    ∇ z←{att}SendSMTP text
   ⍝ Send message to MailRecipient via SMTP
   ⍝      Left argument is attachments
      'smtp mail library not loaded'⎕SIGNAL(9≠⎕NC'##.SMTPMail')/11
     
      :If 0=⎕NC'att' ⋄ att←⍬ ⋄ :EndIf
      z←att SendSMTPMessage MailRecipient MailRecipient('DrA Error Report for ',AppName)text
    ∇

    ∇ z←{att}SendSMTPMessage ctl;to;from;subj;text;CRLF;atts;a;d;i;tn;smtp
     
      smtp←##.SMTPMail
      to from subj text←ctl
      CRLF←⎕UCS 13 10
      :If 0=⍴smtp.SERVERID←SMTP_Gateway
          z←1('SMTP Gateway not configured') ⋄ →0
      :EndIf
     
      :If (⍴smtp.SERVERID)≥i←smtp.SERVERID⍳':'
          smtp.PORT←⊃2⊃⎕VFI i↓smtp.SERVERID
          smtp.SERVERID←(i-1)↑smtp.SERVERID
      :Else ⋄ smtp.PORT←25 ⍝ Default
      :EndIf
     
      :If 2=≡text ⋄ text←↑text ⋄ :EndIf
     
      :Trap 0
          atts←''
          :If 2=⎕NC'att'
              :If (0≠⍴att)∧1=≡att ⋄ att←,⊂att ⋄ :EndIf
              :For a :In att
                  tn←a ⎕NTIE 0 ⋄ (¯1+⍳256)⎕NXLATE tn
                  d←⎕NREAD tn,(⎕DR'A'),⎕NSIZE tn ⋄ ⎕NUNTIE tn
                  d←smtp.stuff smtp.∆b64enc d ⍝ Encode and stuff
                  a←⌽(¯1+a⍳'\')↑a←⌽a          ⍝ Last fragment of file name
                  atts←atts,⊂a d              ⍝ File name and data
              :EndFor
          :EndIf
      :Else
          z←1('Error processing attachment ',a,': ',⊃⎕DM) ⋄ →0
      :EndTrap
     
      →(0≠⊃z←smtp.logon from)⍴0
      →(0≠⊃z←(,⊂'To: ',to)smtp.sendmail subj(72 smtp.stuff text),atts)⍴0
      {}smtp.logoff
    ∇

⍝ --- HTML Tools ---

    ∇ html←{linkpage}GenHTML file;z;files;r;isChar;subst;i
    ⍝ Generate HTML error report
    ⍝ If file is empty, list files, with links to individual files
    ⍝ If file identifies specific file, show that output
     
      isChar←{(10|⎕DR ⍵)∊0 2}
      subst←{(a b)←⍺ ⋄ w←⍵ ⋄ ((w∊a)/w)←⊂b ⋄ ∊w}
     
      :If 0=⎕NC'linkpage' ⋄ linkpage←'' ⋄ :EndIf
      :If 0≠⍴file ⍝ A file selected
          z←0 Diagnose((~∨/'\/'∊file)/Path,'DrA/'),file
          z←z.DrAInfo
          z[;2]←{2=⍴⍴⍵:,(⍕⍵),⎕UCS 13 ⋄ ⍕⍵}¨z[;2]
          z[;2]←((⎕UCS 13)'<br>')∘subst¨(' ' '&nbsp;')∘subst¨('>' '&gt;')∘subst¨('<' '&lt;')∘subst¨z[;2] ⍝ NL => <br>
          i←z[;1]⍳'⎕DM' 'Function' 'Variables'
          z[i;2]←{'<code>',⍵,'</code>'}¨z[i;2]
          i←'/DrA/',((1-⌊/(⌽file)⍳'/\')↑file),'.dcf'
          z⍪←'LogFile'('<a href="'i,'">',i,'</a>')
          html←'border=1 align="top"'HTMLTable z
      :Else ⍝ List Files
          r←0 2⍴⊂''
          :If 0≠⍴files←{(⍴⍵)↓¨{(-+/∧\' '=⌽⍵)↓¨↓⍵}⎕FLIB ⍵}Path,'DrA/'
              z←{'<a href="',linkpage,'&LogFile=',⍵,'">',(9↓⍵),'</a>'}¨files
              z←({(4↑⍵),'-',(⍵[5 6]),'-',(⍵[7 8])}¨8↑¨files),[1.5]z
              r←r⍪'Date' 'Subject'⍪z[⍒↑z[;1];]
              html←'border=1'HTMLTable r
          :Else
              html←'(no error log files in ',Path,'DrA)'
          :EndIf
      :EndIf
      html←'<font face="APL385 Unicode">',html,'</font>'
    ∇

    ∇ r←{options}HTMLTable data;NL
   ⍝ Format an HTML Table
     
      NL←⎕UCS 13 10 ⍝ CR LF
      :If 0=⎕NC'options' ⋄ options←'' ⋄ :EndIf
     
      r←,∘⍕¨data                     ⍝ make strings
      r←,/(⊂'<td>'),¨r,¨⊂'</td>'     ⍝ enclose cells to make rows
      r←⊃,/(⊂'<tr>'),¨r,¨⊂'</tr>',NL ⍝ enclose table rows
      r←'<table ',options,'>',r,'</table>'
    ∇

:EndNamespace
