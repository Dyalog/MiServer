:Class SimpleAuth
⍝ Perform Simple Authentication

    :Field Public Users
    :Field Public Folders

    ∇ make Server;path;users;folders;split
      :Access Public
      :Implements Constructor
      ⍝ Users: user password group
      ⍝ Folders: folder groups
     
      split←{1↓¨(x∊',;')⊂x←';',⍵}
      lcud←{⎕ML←1 ⋄ 1<≡⍵:∇¨⍵ ⋄ ⎕SE.Dyalog.Utils.lcase ⍵} ⍝ lower case, to uniform depth
      lco←{(lcud ⍺)⍺⍺ lcud ⍵}                             ⍝ lower case operator
      Users←0 3⍴⊂''
      Folders←0 2⍴⊂''
      :If ~0∊⍴users←'ID'#.Boot.ReadConfiguration'Users'
          Users←(↑users.(ID Pass)),split¨users.Groups
      :EndIf
      :If ~0∊⍴folders←'path'#.Boot.ReadConfiguration'Access'
          Folders←folders.Path,[1.5]split¨folders.Groups
      :EndIf
    ∇

    ∇ Authenticate req;auth;pwd;usr;r;i;groups;folder
      :Access Public Instance
      ⍝ Sets req.Session.User Groups AuthCookieName
      folder←{(-'/'⍳⍨⌽⍵)↓⍵}req.Page
      folder,←(0=⍴folder)⍴'/'
      groups←⊃((Folders[;1]∊lco folder'**')/Folders[;2]),⊂⍬ ⍝ folder search needs to be case insensitive
      →0⍴⍨0∊⍴groups ⍝ if no groups defined, no authenication
      :If ~(⊂,'**')∊groups ⍝ **=Unlimited access: No login required
     
          :If r←'Basic'≡5↑auth←req.GetHeader'Authorization'
              usr pwd←1↓¨2↑{(':'=⍵)⊂⍵}':',#.Base64.Decode 6↓auth
          :AndIf r←pwd≡(i←Users[;1]⍳⊂usr)⊃Users[;2],⊂0
              req.Session.(User Groups AuthCookieName)←Users[i;1 3],⊂'Authorization'
              ⍝ /// AuthCookieName "Authorization" is not correct; This is not done using a cookie
              :If ~r←∨/(req.Session.Groups,⊂,'*')∊groups ⍝ *=all groups have access
                  req.Fail 401 ⍝ Unauthorized (and user is logged in)
                  req.Response.Text←'User "',usr,'" does not have access to folder "',folder,'"'
              :EndIf
              ⍝ Validated OK
          :Else ⍝ Send Challenge
              req.Response.Headers⍪←'WWW-Authenticate' 'Basic realm="Restricted Access"'
              req.Fail 401
          :EndIf
      :EndIf
    ∇

:EndClass