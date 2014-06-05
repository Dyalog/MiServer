:Class MsAgent : MildPage

    :Include #.HTMLInput            ⍝ Useful functions for creating HTML pages  

    :Field Public AgentCmds←'moveto 100,100;show 1;play Greet;speak Hello, I am Merlin!;play Explain;play DoMagic1;play DoMagic2;play Pleased;Hide 1'
    :Field Public Action←''         ⍝ All our buttons will have this name

    ∇ Render req;html;tbl;btn;UseAgent
      :Access Public
      UseAgent←∨/'MSIE'⍷req.GetHeader'user-agent' ⍝ Internet Explorer available?
     
      req.Title'Drive the  MS Agent'
     
      btn←'Action'Submit'Say It!'   ⍝ ... another button named 'Action'
     
      tbl←2 2⍴⊂''                   ⍝ A 2x2 Table
      tbl[;1]←'Actions:' ''
      tbl[1;2]←⊂'AgentCmds'Edit AgentCmds 100
      tbl[2;2]←⊂btn
     
      html←Table tbl                ⍝ Make into a HTML table
      html←req('submit'Form)html    ⍝ Put a 'submit' form around it
     
      :If UseAgent
          html,←'<object ID=''TruVoice'' width=0 height=0 CLASSID=''CLSID:B8F2846E-CE36-11D0-AC83-00C04FD97575'' CodeBase=''#VERSION=6,0,0,0''></object>',CRLF
          html,←'<object ID=''AgentControl'' Width=0 Height=0 ClassID=''CLSID:D45FD31B-5C6E-11D1-9EC1-00C04FD7081F'' CodeBase=''#VERSION=2,0,0,0''></Object>',CRLF
          html,←JS'AgentDoCmds()'
          'src="/scripts/AgentDoCmds.js"'req.Script''
      :Else
          html,←#.HTML.p'(MS Agent not available; Internet Explorer required)'
      :EndIf
     
      html,←'a href="/"'Enclose'Home'
      html←('h2'Enclose'Agent Demo'),html
      req.Return html
    ∇
                                             
:EndClass