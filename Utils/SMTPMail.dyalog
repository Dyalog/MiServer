:NameSpace SMTPMail
⍝ Based on original work by Conrad Hoesle-Kienzlen in 1999
⍝ Updated by Morten Kromberg to use UTF-8 text, 2009
⍝ Updated by Brian Becker in jan2011 to make compatible with Unix and Unicode 

   CRLF←⎕UCS 13 10
   ⎕ML←3

   ∇ R←DTB A
     →(' '≠¯1↑R←,A)⍴0
     R←(1-(' '≠⌽R)⍳1)↓R
   ∇
                                                                                                
   ∇ rc←boundary
   ⍝p Create a unique boundary designator
   ⍝o CHK 31.05.1999 <chk@hoesle-kienzlen.de>
   ⍝d boundaries are used to separate mail text from attachments
    
     rc←(6⍴'-'),(,'ZI4'⎕FMT ⎕TS),'.APL'
   ∇

   ∇ rc←cmd cmd;i;⎕IO;⎕ML
   ⍝p Send a command to an smtp server and retrieve answer
   ⍝o CHK 31.05.1999 <chk@hoesle-kienzlen.de>
   ⍝d cmd: smtp command, or mail body, or empty vector
   ⍝d      If cmd is an empty vector, the function returns a pending answer
   ⍝d      from the server
   ⍝d rc : A 3-element vector with:
   ⍝d      [1]=0 if OK, ≠0 if error
   ⍝d      [2]=status message starting with a 3-digit status number
   ⍝d      [3]=status explanation or data
   ⍝g
   ⍝d Valid commands are:
   ⍝d Name Parameter      Description & return codes (S=success, E=error)
   ⍝d ---- -------------  ------------------------------------------------
   ⍝d HELO <domain>       Make yourself known to the server (use smtp_logon)
   ⍝d                      S: 250; E: 421 500 501 504
   ⍝d EHLO <domain>       Like HELO but request extended smtp services
   ⍝d                      S: 250; E: 421 500 501 504
   ⍝d                      NOTE: apart from code 250, the server answers with
   ⍝d                            a cr/lf delimited list of supported commands
   ⍝d MAIL FROM:<sender>  Start a new mail, <sender> is your mail address
   ⍝d                      S: 250; E: 421 451 452 500 501 552
   ⍝d RCPT TO:<receiver>  Identify the recipients, up to 100 are allowed
   ⍝d                      S: 250 251; E: 421 450 451 452 500 501 503 550-553
   ⍝d DATA                Initialize sending mail body
   ⍝d                      S: 354; E: 451 452 552 554
   ⍝d <maildata>          Send the mail body (use smtp_stuff to prepare it)
   ⍝d                      NOTE: there is no response until "end-of-mail" is sent.
   ⍝d .<cr/lf>            "end-of-mail" command, a line with only a dot and cr/lf
   ⍝d                      S: 250; E: 421 451 500 501 503 554
   ⍝d RSET                Cancel the mail just sent
   ⍝d                      S: 250; E: 421 500 501 504
   ⍝d SEND FROM:<sender>  Obsolete sendmail command, use MAIL instead
   ⍝d SOML FROM:<sender>  Obsolete send-or-mail command, use MAIL instead
   ⍝d SAML FROM:<sender>  Obsolete send-and-mail command, use MAIL instead
   ⍝d VRFY <string>       Verify a recipients mail address (often disabled)
   ⍝d                      S: 250 251; E: 421 500 501 502 504 550 551 553
   ⍝d EXPN <string>       Expand a mailing list (often disabled)
   ⍝d                      S: 250; E: 421 500 501 502 504 550
   ⍝d HELP [<string>]     Return a help message, optionally followed by a command
   ⍝d                      S: 211 214; E: 421 500 501 502 504
   ⍝d NOOP                Returns success or error
   ⍝d                      S: 250; E: 421 500
   ⍝d QUIT                End the smtp session (use smtp_logoff)
   ⍝d                      S: 221; E: 500
   ⍝d TURN                Reverse the roles of client and server (DON't USE!)
   ⍝d                      S: 250; E: 500 502 503
   ⍝d
   ⍝d Meaning of the return codes:
   ⍝d NOTE: If the 3-digit number is followed by "-", there is more data to follow
   ⍝d 211 System status, or system help reply
   ⍝d 214 Help message
   ⍝d 220 <domain> Service ready
   ⍝d 221 <domain> Service closing transmission channel
   ⍝d 250 Requested mail action okay, completed
   ⍝d 251 User not local; will forward to <forward-path> (this is not an error!)
   ⍝d 354 Start mail input; end with <CRLF>.<CRLF>
   ⍝d 421 <domain> Service not available, closing transmission channel
   ⍝d 450 Requested mail action not taken: mailbox unavailable [E.g., mailbox busy]
   ⍝d 451 Requested action aborted: local error in processing
   ⍝d 452 Requested action not taken: insufficient system storage
   ⍝d 500 Syntax error, command unrecognized
   ⍝d 501 Syntax error in parameters or arguments
   ⍝d 502 Command not implemented
   ⍝d 503 Bad sequence of commands
   ⍝d 504 Command parameter not implemented
   ⍝d 550 Requested action not taken: mailbox unavailable
   ⍝d 551 User not local; please try <forward-path>
   ⍝d 552 Requested mail action aborted: exceeded storage allocation
   ⍝d 553 Requested action not taken: mailbox name not allowed (typo?)
   ⍝d 555 Only used by this program to indicate a special error condition
    
     ⎕IO←1 ⋄ ⎕ML←3
     :If 9=⎕NC'smtp'                    ⍝ if the socket exists
        smtp.OK←0                        ⍝ set reply to "not complete"
        '.'⎕WS'Cursor' 1                 ⍝ set cursor to hourglass
        →(0=⍴cmd)/Read_Answer            ⍝ skip sending if no command given
        'smtp'⎕WS'Data' ''               ⍝ empty response buffer
        2 ⎕NQ'smtp' 'TCPSend'cmd         ⍝ send command to the server
        2 ⎕NQ'smtp' 'TCPSend'CRLF        ⍝ send cr/lf (has to be sent separate)
    
    Read_Answer:
        rc←⎕DL 0.1                       ⍝ give it a chance to reply
        :If 0=smtp.OK                    ⍝ reply is not yet complete
           'smtp.tio'⎕WC'Timer' 60000('Event' 'Timer' 1)  ⍝ timeout is 60 secs
           rc←⎕DQ'smtp' 'smtp.tio'        ⍝ wait for an event on either
           ⎕EX'smtp.tio'
        :EndIf
        '.'⎕WS'Cursor' ''                ⍝ set cursor back to standard
        :If 0=⎕NC'smtp' ⋄ rc←1 'socket closed' '' ⋄ →0 ⋄ :EndIf
        :If ('smtp.tio'≡↑rc)∧0=smtp.OK   ⍝ timeout happened, but why?
           i←'smtp'⎕WG'Data'              ⍝ set by tcp_error?
           :If 'TCP/IP'∧.=6↑i             ⍝ if a TCP/IP error happened
              rc←'555 ',i,' at SMTP command ',cmd,CRLF
           :Else
              rc←'555 timeout at SMTP command ',cmd,CRLF
           :EndIf
        :Else
           rc←'smtp'⎕WG'Data'             ⍝ read response buffer
        :EndIf
     :Else                              ⍝ if the socket does not exist
        rc←'555 SMTP server not connected',CRLF
     :EndIf
     rc←((↑rc)∊'45')(¯2↓rc)''           ⍝ check for error and return
   ∇
                                                                                                
   ∇ rc←logoff;x
   ⍝p Log out from an SMTP mail server
   ⍝o CHK 31.05.1999  <chk@hoesle-kienzlen.de>
   ⍝d rc  : the answer from the server, or an error text
   ⍝d       positive answers from the server start with the
   ⍝d       characters '250 ', errors start with '4xx' or '5xx'
   ⍝d NOTE: Mails will not really be sent before this command has completed
    
     →(9≠⎕NC'smtp')/0,⍴rc←1 '555 SMTP server not connected' ''
     :If 'Closed'≢'smtp'⎕WG'CurrentState'
        rc←(cmd'QUIT')~CRLF  ⍝ tell the server we are done
     :EndIf
     ⎕EX'smtp'                   ⍝ erase the socket
   ∇
                                                                                                
   ∇ rc←{org}logon user;⎕IO;⎕ML;sender;dom;rpl;x
   ⍝p Log on to an SMTP mail server.
   ⍝o CHK 31.05.1999  <chk@hoesle-kienzlen.de>
   ⍝d user : the users mail-id and domain, e.g. <conrad@hoesle-kienzlen.de>,
   ⍝d        may optionally be preceeded by the real name of the user, enclosed
   ⍝d        in apostrophes: "Conrad Hoesle-Kienzlen" <conrad@hoesle-kienzlen.de>
   ⍝d        If user contains a slash and after it a second mail address, this
   ⍝d        will be used as a reply-to address: 'aaa@mail1.com / bbb@mail2.com'
   ⍝d org  : an optional character string containing the user's organization
   ⍝d rc   : answer of the SMTP mail server
   ⍝d NOTE: a connection to the ISP must already be established
   ⍝d The function needs two global variables:
   ⍝g smtp_SERVERID - name or IP address of the mail server
   ⍝g smtp_PORT     - the port number of the mailserver, usually 25
   ⍝d The function sets the global variables:
   ⍝g smtp_SENDER   - the mail address of the sender
   ⍝g smtp_USER     - the complete description of the sender
   ⍝g smtp_USERORG  - the organization of the sender (optional)
   ⍝g smtp_REPLYTO  - the reply-to address of the sender
    
     ⎕IO←1 ⋄ ⎕ML←3 ⋄ rpl←''                 ⍝ initialization
     →(2=⎕NC'org')/⎕LC+1 ⋄ org←''           ⍝ default organization to empty
     :If '/'∊user                           ⍝ is a reply-to address given?
        rpl←'<',(∆addr(x←user⍳'/')↓user),'>' ⍝ extract reply-to address
        user←(x-1)↑user                      ⍝ drop reply-to from "user"
     :EndIf
     sender←'<',(∆addr user),'>'            ⍝ mail address of sender
     dom←((sender⍳'@')↓sender)~'<>'         ⍝ extract sender's domain
     →(0≠⍴rpl)/⎕LC+1 ⋄ rpl←sender           ⍝ default rpl to sender's address
     ⎕EX'smtp'                              ⍝ erase the socket if it exists
     x←⊂'RemoteAddrName'SERVERID       ⍝ prepare socket arguments
     x←x,⊂'RemotePort'PORT             ⍝ prepare socket arguments
     x←x,⊂'Event' 'Create' '⍎ smtp.OK←0 ⋄ smtp.end←CRLF'
     x←x,⊂'Event' 'TCPClose' 'tcp_close'    ⍝ react to the close event
     x←x,⊂'Event' 'TCPError' 'tcp_error'    ⍝ display TCP/IP error message
     x←x,⊂'Event' 'TCPRecv' 'receive'  ⍝ read answer from server
     x←x,⊂'Event' 1025 1                    ⍝ terminate ⎕DQ on the socket
     'smtp'⎕WC(⊂'TCPSocket'),x              ⍝ create socket & connect to SMTP
    
     →(0≠↑rc←cmd'')/0                  ⍝ read login message from server
     →(0≠↑rc←cmd'HELO ',dom)/0         ⍝ log on user domain
     SENDER←sender                     ⍝ needed for sending mail
     USER←user                         ⍝ the complete user description
     USERORG←org                       ⍝ store optional organization
     REPLYTO←rpl                       ⍝ store reply-to address
   ∇
                                                                                                
   ∇ receive msg;⎕IO;⎕ML;m;x
   ⍝p Callback to read answer from SMTP server
   ⍝o CHK 31.05.1999  <chk@hoesle-kienzlen.de>
   ⍝d msg[1]: Socket name
   ⍝d msg[2]: Event name
   ⍝d msg[3]: Data
   ⍝d msg[4]: Sender's IP address (not used)
   ⍝d msg[5]: Sender's port number (not used)
   ⍝d NOTE  : SMTP responses start with a 3-digit status code (see smtp_cmd)
   ⍝d         and are followed by a - if there is more data, otherwise a blank
     ⎕IO←1 ⋄ ⎕ML←3
     'smtp'⎕WS'Data'(('smtp'⎕WG'Data'),m←3⊃msg) ⍝ add new data to receive buffer
     x←∨/CRLF⍷m                                 ⍝ cr/lf is the end-of-line signal
     x←x∧~'-'=4⊃m                               ⍝ but if - is present, there is more
     →(~smtp.OK←x)/0                            ⍝ smtp.OK is 1 if data is complete
     ⎕NQ'smtp' 1025                             ⍝ terminate ⎕DQ on smtp
   ∇
                                                                                                
   ∇ rc←reset
   ⍝p Send a RSET command to the SMTP mail account
   ⍝o CHK 31.05.1999  <chk@hoesle-kienzlen.de>
   ⍝d rc  : the answer of the server, or an error text
   ⍝d       positive answers from the server start with the
   ⍝d       characters '250', errors start with '4xx' or '5xx'
   ⍝d NOTE: this command cancels all mail that has been sent previousely
   ⍝d       within the same session (since smtp_logon)
    
     rc←cmd'RSET'
   ∇
                                                                                                
   ∇ rc←to sendmail data;⎕IO;⎕ML;txt;x;log;typ;bnd;nam;att
   ⍝p Send a mail to an SMTP mail server
   ⍝o CHK 31.05.1999  <chk@hoesle-kienzlen.de>
   ⍝d to   : A matrix or vector of vectors with the addresses of the recipients
   ⍝d      : e.g. 'To: <BGates@microsoft.com>' or 'CC: <hugo.miller@hotmail.com>
   ⍝d        Addresses must start with To: CC: or BCC: followed by a blank.
   ⍝d        NOTE: a maximum of 100 addresses is supported!
   ⍝d data : a vector of vectors, at least 2 elements must be there:
   ⍝d        The first element is a string with the subject of the message
   ⍝d        The second element is the body of the message, prepared with
   ⍝d        embedded cr/lf and dot-stuffing (use smtp_stuff),
   ⍝d        optionally followed by more strings containing attachments.
   ⍝d        If attachments are present, they themselves must consist of a
   ⍝d        string of two strings strings each, the first being the name of the
   ⍝d        attachment in the form of a filename (8.3 notation, to be save),
   ⍝d        the second string the attachment proper, Base64-encoded (use ∆b64enc)
   ⍝d        and interspersed with cr/lf every 72 characters (use smtp_stuff)
   ⍝d        An example of the data argument with one attachment:
   ⍝d        '...' smpt_sendmail 'Testmail' '..text..' ('TESTATT.ZIP' '..zipdata..')
   ⍝d rc[1]: numeric error code, 0=OK ≠0=error
   ⍝d rc[2]: Last answer of the SMTP mail server indicating success or failure
   ⍝d rc[3]: A log with all returns of the mail sending process
   ⍝d NOTE : A connection to the ISP must already be established and the user
   ⍝d        must be logged on to it via smtp_logon
   ⍝d The function needs the global variables (set by smtp_logon):
   ⍝g smtp_SENDER  - needed for sending mail
   ⍝g smtp_USER    - the complete user description (may be empty)
   ⍝g smtp_USERORG - user organization (may be empty)
   ⍝g smtp_REPLYTO - the sender's reply-to address
    
     ⎕IO←1 ⋄ ⎕ML←3
     log←''                             ⍝ prepare mail log
     →(~(1=≡to)∧2=⍴⍴to)/⎕LC+1 ⋄ to←∆dtb¨⊂[2]to ⍝ if matrix, make enclosed vector
     →(2=≡to)/⎕LC+1 ⋄ to←,⊂to           ⍝ to must be enclosed
     →(2≤≡data)/⎕LC+1 ⋄ data←''data     ⍝ data must be enclosed
     →(2≤⍴data)/⎕LC+1 ⋄ data←(⊂''),data ⍝ data must have at least 2 elements
   ⍝------------------------------------ prepare the mail header
     txt←'Date: ',∆timestamp,CRLF       ⍝ Internet-conform date first
     txt←txt,'From: ',USER,CRLF    ⍝ the user's name & mail address
     x←REPLYTO
     txt←txt,(0<⍴x)/'Reply-To: ',x,CRLF ⍝ the reply-to address, if given
     x←USERORG
     txt←txt,(0<⍴x)/'Organization: ',x,CRLF  ⍝ the organization, if given
     txt←txt,'X-Mailer: CHK-Mail 1.0 / Dyalog APL/W',CRLF
     txt←txt,'MIME-Version: 1.0',CRLF
     x←('B'≠↑¨to)/to←,to                ⍝ remove BCC's from mail header
     txt←txt,∊x,¨⊂CRLF                  ⍝ the recipients without BCC's
     txt←txt,'Subject: ',(↑data),CRLF   ⍝ the message subject
     bnd←boundary                  ⍝ construct a boundary for attachments
   ⍝------------------------------------ process mail and attachments
     typ←2<⍴data                        ⍝ typ=1 if attachments present
     →(~typ)/Simple_Mail                ⍝ if no attachments, process mail
     x←'Content-Type: multipart/mixed;' ⍝ a mail with attachments
     x←x,' boundary="',(2↓bnd),'"',CRLF ⍝ add the boundary definition
     x←x,CRLF,'This is a multi-part message in MIME format.',CRLF
     txt←txt,x,bnd,CRLF                 ⍝ insert the boundary for the simple mail
   ⍝----------------------------------- simple mail text
    Simple_Mail:
     txt←txt,'Content-Type: text/plain; charset=utf-8',CRLF ⍝ normal text
     txt←txt,'Content-Transfer-Encoding: 8bit',CRLF ⍝ standard encoding
     txt←txt,CRLF                       ⍝ single CRLF separates header from body
     txt←txt,⎕UCS'UTF-8'⎕UCS 2⊃data                     ⍝ add the message text
     txt←txt,typ/bnd,CRLF               ⍝ boundary separates text from attachments
     data←2↓data                        ⍝ drop subject and mail text
     →(~typ)/End_Attach                 ⍝ no attachments? then send it off
   ⍝----------------------------------- attachment processing
     :While 0≠⍴data
        x←↑data                          ⍝ process one attachment
        →(2=≡x)/⎕LC+1 ⋄ x←''x            ⍝ should be name and attachment
        (nam att)←x                      ⍝ split the two parts
        :If 0=⍴nam                       ⍝ no name specified?
           nam←,'4ZI2,<.>,ZI3'⎕FMT 1 5⍴2↓⎕TS  ⍝ make an arbitrary one
        :EndIf
        x←'Content-Type: application/octet-stream; name="',nam,'"',CRLF
        x←x,'Content-Transfer-Encoding: base64',CRLF
        x←x,'Content-Disposition: attachment; filename="',nam,'"'
        txt←txt,x,CRLF,CRLF              ⍝ add attachment header, end with 2 cr/lf
        txt←txt,att                      ⍝ add attachment proper
        x←(0=⍴1↓data)/'--'               ⍝ add -- after boundary, if it's the end
        txt←txt,bnd,x,CRLF               ⍝ boundary separator again
        data←1↓data                      ⍝ process next attachment
     :EndWhile
    End_Attach:
     txt←txt,CRLF,'.'                   ⍝ single dot ends data input for SMTP
   ⍝----------------------------------- send the mail recipients and sender
     rc←cmd'MAIL FROM: ',SENDER  ⍝ tell the server the sender's address
     →(0≠↑rc)/Err_SMTP
     log←log,⊂(2⊃rc)~CRLF               ⍝ save the returncode in the log
   ⍝----------------------------------- process each recipient
     :While 0≠⍴to
        x←∆addr↑to                       ⍝ extract pure mail address
        rc←cmd'RCPT TO: <',x,'>'    ⍝ tell the server the recipient's address
        log←log,⊂(2⊃rc)~CRLF             ⍝ save the returncode in the log
        to←1↓to                          ⍝ drop processed recipient
     :EndWhile
   ⍝----------------------------------- send the actual data, mail and attachments
     rc←cmd'DATA'                  ⍝ tell the server that the mail data follows
     →(0≠↑rc)/Err_SMTP
     rc←cmd txt                    ⍝ send all of the mail text
     →(0≠↑rc)/Err_SMTP
     log←log,⊂(2⊃rc)~CRLF               ⍝ save the returncode in the log
     rc←0(2⊃rc~CRLF)log                 ⍝ return last answer and log
     →0
   ⍝----------------------------------- error handling
    Err_SMTP:
     log←log,⊂2⊃rc~CRLF                 ⍝ save the last returncode in the log
     log←log,⊂(2⊃cmd'RSET')~CRLF   ⍝ clear last message (if any)
     rc←1(2⊃rc~CRLF)log                 ⍝ return last answer and log
   ∇
                                                                                                
   ∇ rc←{len}stuff mat;⎕IO;⎕ML;x;y
   ⍝p Convert a text matrix to a vector with embedded cr/lf plus dot-stuffing
   ⍝o CHK 31.05.1999 <chk@hoesle-kienzlen.de>
   ⍝d mat : A text matrix or vector intended to be sent as mail through SMTP
   ⍝d len : the maximum line length, excluding cr/lf line ends. Defaults to 72,
   ⍝d       as 74 is a safe line length to transmit through SMTP
   ⍝d rc  : A string with cr/lf every len characters and dot-stuffing
   ⍝d NOTE: It is safe to send a Base64-encoded string through this function,
   ⍝d       as those strings do not contain any dots. However, the function does
   ⍝d       not work well if there are cr/lf already present in the input.
   ⍝d Dot-Stuffing: The end of an SMTP mail text is indicated by transmitting
   ⍝d               a line with a single dot. This means, that the original
   ⍝d               mail text must not contain a single dot on a line by itself.
   ⍝d               To prevent this, every line that starts with a dot get's
   ⍝d               preceeded with a second dot, which will be removed by the
   ⍝d               recipients mail client. See pop3_unstuff, the reverse function.
    
     ⎕IO←1 ⋄ ⎕ML←3
     →(2=⎕NC'len')/⎕LC+1 ⋄ len←72    ⍝ default line length, if not given
     →(~(1=⍴⍴mat)∧2>≡mat)/⎕LC+1 ⋄ mat←(1,⍴mat)⍴mat ⍝ if string, make 1-row matrix
     mat←(DTB¨⊂[2]mat),¨⊂CRLF        ⍝ enclose, remove trailing blanks, add crlf
     rc←''                           ⍝ prepare result buffer
    Stuff_Loop:
     →((2+len)≥⍴x←↑mat)/OK_Length    ⍝ is line length ≤ len characters?
     (x y)←((len↑x),CRLF)(len↓x)     ⍝ split line at len character, add cr/lf
     mat←''y,(1↓mat)                 ⍝ put rest back on input buffer
    OK_Length:
     x←(('.'=↑x)/'.'),x              ⍝ dot-stuffing for start of line
     rc←rc,x                         ⍝ one line done
     →(0<⍴mat←1↓mat)/Stuff_Loop
   ∇
                                                                                                
   ∇ r←tcp_close msg
     r←1
   ∇
                                                                                                
   ∇ r←tcp_error msg
     ⎕EX 1⊃msg
     r←0
   ∇
                                                                                                
   ∇ rc←∆addr adr;⎕IO;i;del
   ⍝p extract the mail address from a string
   ⍝o CHK 10.07.1999 <chk@hoesle-kienzlen.de>
    
     ⎕IO←1 ⋄ rc←''
     del←'∧∘"§$%&/\()=?`´+*#,<>|;~ ''' ⍝ delimiter characters
     i←adr⍳'@'                         ⍝ look for the @ character
     →(i>⍴adr)/0                       ⍝ exit if not found
     rc←(adr∊del)/⍳⍴adr                ⍝ look for delimiter characters
     rc←0,rc,1+⍴adr                    ⍝ start & end are delimiters as well
     rc←(¯1↑(i>rc)/rc),↑(i<rc)/rc      ⍝ nearest delimiters surrounding @
     rc←(↑rc)↓(¯1+2⊃rc)↑adr            ⍝ everything between delimiters
   ∇
     
   ∇ rc←∆b64dec txt;⎕IO;⎕ML;p
   ⍝p Decode messages which are encoded in Base64 (MIME)
   ⍝o CHK 31.05.1999 <chk@hoesle-kienzlen.de>
   ⍝d NOTE: for an explanation of base64 see function ∆b64enc
    
     ⎕IO←0 ⋄ ⎕ML←3          ⍝ for once, ⎕IO 0 is useful!
   ⍝ the base 64 alfabet (= is the padding character):
     rc←'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
     txt←(txt∊rc)/txt       ⍝ process only BASE64 characters
     p←-6×+/txt='='         ⍝ the number of padding bits
   ⍝ decode every 6 bits of the BASE64 text into ⎕AV:
     rc←p↓,⍉(6⍴2)⊤rc⍳txt    ⍝ convert index to 6-bit binary
     rc←⍉((⌊(⍴rc)÷8),8)⍴rc  ⍝ make chunks of 8 bits
     rc←⎕UCS[2⊥rc]          ⍝ re-convert to index into ⎕AV
   ∇
                                                                                                
   ∇ rc←∆b64enc txt;⎕IO;⎕ML;p
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
    
     ⎕IO←0 ⋄ ⎕ML←3                   ⍝ for once, ⎕IO 0 is useful!
     ⎕SIGNAL(80≠⎕DR txt)/92
   ⍝ the base 64 alfabet (= is the padding character):
     rc←'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
   ⍝ encode the text into BASE64 characters:
     p←(3×⌈(⍴txt)÷3)-⍴txt            ⍝ number of padding characters
     txt←,⍉(8⍴2)⊤⎕UCS txt            ⍝ convert to 8-bit binary
     txt←2⊥⍉((⌈(⍴txt)÷6),6)⍴txt,5⍴0  ⍝ re-convert every 6 bits to decimal
     rc←(rc,'=')[txt,p⍴64]           ⍝ index into BASE64 alfabet (+ padding)
   ∇
     
   ∇ rc←∆timestamp;⎕IO;⎕ML;time;day;mon;s;x;LOCTIME;TIMEZONE;isWin;isUnicode;twid
   ⍝p returns an internet-conforming (RFC 2822) timestamp
   ⍝o CHK 31.05.1999 <chk@hoesle-kienzlen.de>
   ⍝  updated 11jan11 BPB for Unicode and Unix compatibility
     ⎕IO←1 ⋄ ⎕ML←3
     isWin←'Win'≡3↑↑'.'⎕WG'APLVersion'
     :If isWin
        isUnicode←80=⎕DR'A'
        twid←64 32[1+isUnicode] ⍝ set width for text elements based on unicode or not
        'LOCTIME'⎕NA'KERNEL32.C32|GetLocalTime >{I2[8]}' ⍝ associate GetLocalTime function
        'TIMEZONE'⎕NA'U4 KERNEL32.C32|GetTimeZoneInformation >{I4 T[',(⍕twid),'] {I2[8]} I4 T[',(⍕twid),'] {I2[8]} I4}' ⍝ associate GetTimeZone function
   ⍝ prepare values for time formatting
        day←'Sun,' 'Mon,' 'Tue,' 'Wed,' 'Thu,' 'Fri,' 'Sat,'
        mon←'Jan ' 'Feb ' 'Mar ' 'Apr ' 'May ' 'Jun ' 'Jul ' 'Aug ' 'Sep ' 'Oct ' 'Nov ' 'Dec '
   ⍝ read the local time and format to Internet standard
        time←⊃LOCTIME⊂8⍴1000
        rc←(1+time[3])⊃day
        rc←rc,,'< >,ZI2,< >'⎕FMT time[4]
        rc←rc,time[2]⊃mon
        rc←rc,,'I4,< >,ZI2,<:>,ZI2,<:>,ZI2,< >'⎕FMT 1 4⍴time[1 5 6 7]
   ⍝ call timezone function and calculate offset from GMT
        x←TIMEZONE⊂0(twid⍴' ')(8⍴0)0(twid⍴' ')(8⍴0)0
        x←(↑x),2⊃x
        s←'+-'[1+0>x←(-2⊃x)+-x[(5 8)[↑x]]]
        rc←rc,s,,'ZI4,< (GMT)>'⎕FMT|100×x÷60
     :Else
        rc←(1⊃⎕SH'date -R'),' (GMT)' ⍝ unix - call date command
     :EndIf
   ∇

:EndNamespace                                                                                                