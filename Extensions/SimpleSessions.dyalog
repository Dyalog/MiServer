﻿:Class SimpleSessions
⍝ Default Session Handler, used by the WebServer sample
⍝ Manages HTTP sessions using cookies
⍝ When a HTTP request arrives, checks to see if the session cookie is included and the session
⍝ is in the list of valid sessions. If it is, assign the Session property of the request.
⍝ If it isn't, create a new session and set the cookie

    :Field Public TimeOut←10 ⍝ Minutes
    :Field Public Sessions ⍝ Should be private, really

    :Class Page
        :Field Public URL←''
        :Field Public State←⎕NS ''
    :EndClass

    :Class Session
        :Field Public ID←0
        :Field Public User←''
        :Field Public LastActive←0
        :Field Public Cookie←''
        :Field Public AuthCookieName←''
        :Field Public TimeOut←0
        :Field Public State←⎕NS ''
        :Field Public Pages←0⍴⎕NEW Page
    :EndClass

    ∇ Start Server;tn;root
      :Access Public
      :Implements Constructor
    ⍝ Initialize Session handler
     
      Sessions←0⍴⎕NEW Session
      root←Server.Root
      timeout←TimeOut÷24×60 ⍝ Convert minutes to fractions of a day
     
      :Trap 22
          tn←(root,'sessions.dcf')⎕FCREATE 0
          (0 ¯1 0)⎕FSTAC tn
          0 ⎕FAPPEND tn ⍝ Session Number
          ⎕FUNTIE tn
      :EndTrap
      tn←(root,'sessions.dcf')⎕FSTIE 0
      NextSession←⎕FREAD tn,1
      ⎕FUNTIE tn
    ∇

    ∇ GetSession req;c;tn;now;session;ns;new;t_out;i;r
      :Access Public
    ⍝ Return session. Right argument is a HTTPRequest.
     
      :Hold 'Sessions'
          session←req.GetCookie'Session'
          now←#.Dates.DateToIDN ⎕TS
     
          :If new←(1⊃⍴Sessions)<i←Sessions.Cookie⍳⊂session ⍝ Cookie is not in the table
              c←SessionCookie NextSession
              Sessions←Sessions,r←⎕NEW Session
              r.(ID User LastActive Cookie)←NextSession''now c
              NextSession←(2*30)|NextSession+1
              tn←(req.Server.Root,'sessions.dcf')⎕FSTIE 0
              NextSession ⎕FREPLACE tn,1
              ⎕FUNTIE tn
              req.SetCookie'Session'c
              req.Session←r
              req.Server.onSessionStart req
     
          :Else ⍝ Old session
              (r←i⊃Sessions).LastActive←now ⍝ Just register activity
              req.Session←r
          :EndIf
     
      :EndHold
    ∇

    ∇ Logout req;session;i;z
      :Access Public Instance
     ⍝ End session due to user request
     
      session←req.GetCookie'Session'
      :If (1⊃⍴Sessions)≥i←Sessions.Cookie⍳⊂session ⍝ Cookie is in the table
          req.Server.onSessionEnd(i⊃Sessions)
          req.DelCookie'Session'
          :If 0≠⍴z←req.Session.AuthCookieName ⋄ req.DelCookie z ⋄ :EndIf
          req.Return'Logged out ...'
      :Else
          req.Return'No session established ...'
      :EndIf
    ∇

    ∇ r←SessionCookie n;⎕RL;z;seed;p
      ⍝ Create Cookie from session ID or vice versa
     
      :If (10|⎕DR n)∊0 2 ⍝ Session ID from Cookie
          z←⎕UCS #.Base64.Decode n
          ⎕RL←256⊥2↑z ⋄ p←30?30
          r←30⍴0 ⋄ r[p]←2↓z
          r←256⊥4↑r
     
      :Else ⍝ Session ID to Cookie
          ⎕RL←10000000|3⊃⎕AI
          ⎕RL←seed←?¯1+256*2 ⋄ p←30?30
          r←#.Base64.Encode #.Base64.Char(256 256⊤seed),((256 256 256 256⊤n),¯1+?26⍴256)[p]
      :EndIf
    ∇

    ∇ HouseKeeping Server;now;m;i;p
    ⍝ Check to see if any sessions have expired due to inactivity
    ⍝ Call the application callback if necessary
     
      :Access Public
      now←#.Dates.DateToIDN ⎕TS
      :If ∨/m←Sessions.LastActive<now-timeout
          :Hold 'Sessions'
              :For i :In m/⍳⍴m
                  Server.onSessionEnd i⊃Sessions
                  :If 0≠⍴p←(i⊃Sessions).Pages ⋄ p.Close i⊃Sessions ⋄ :EndIf
              :EndFor
              Sessions←(~m)/Sessions
          :EndHold
      :EndIf
    ∇

:EndClass