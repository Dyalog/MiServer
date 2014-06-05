
<!--
// MS Agent Handler. Requires that calling page has an object AgentCmds which a
//    value containing commands to be executed (see switch statement for documentation)
// Example: moveto 100,100;show 1;play Greet;speak Hello, I am Merlin!;play Explain;play DoMagic1;play DoMagic2;play Pleased;Hide 1
//
// Calling web page must also define:
// <object ID='TruVoice' width=0 height=0 CLASSID='CLSID:B8F2846E-CE36-11D0-AC83-00C04FD97575' CodeBase='#VERSION=6,0,0,0'></object>'
// <object ID='AgentControl' Width=0 Height=0 ClassID='CLSID:D45FD31B-5C6E-11D1-9EC1-00C04FD7081F' CodeBase='#VERSION=2,0,0,0'></Object>'

function AgentDoCmds()
{
    var cmd; var arg; var buf; var i; var Agent; var AgentACS; var AC;

    Agent = "Agent";
    AgentACS = "merlin.acs";
    AC = document.getElementById("AgentControl");
    AC.Connected = true;
    AC.RaiseRequestErrors = false;
    LoadReq = AC.Characters.Load(Agent, AgentACS);
    AC.RaiseRequestErrors = true;
    if (LoadReq.Status != 1)
    {
      Agent = AC.Characters.Character("Agent");
      Agent.LanguageID = 0x409;
      buffer = document.getElementById("AgentCmds").value;
      while (0<buffer.length)
        {
        cmd = AgentNext(" ").toLowerCase();
        arg = AgentNext(";");
        switch(cmd)
          {
          case "moveto": { i=arg.indexOf(",");
            Agent.MoveTo(arg.substring(0,i),arg.substring(i+1,arg.length));}; break;
          case "speak": Agent.Speak(arg); break;
          case "play": Agent.Play(arg); break;
          case "hide": Agent.Hide(arg); break;
          case "show": Agent.Show(arg); break;
          }
        }
    }
}
     
function AgentNext(str)
{   // Extract from buffer, up to first occurrence of str
    var buf; var i; var r;
    i = buffer.indexOf(str);
    if (i == -1) 
         { r = buffer; buffer = ""; }
    else { r = buffer.substring(0,i);
    buffer = buffer.substring(i+1,buffer.length); }
    return r;
}

// AgentDoCmds();
-->