:Class MiPageTemplate : #.MiPage
⍝ This is a template that adds a consistent header to all pages based on it

    ∇ {r}←Wrap;lang;header;home;menu
      :Access Public
     
   ⍝ set the tab/window title to the name of the application defined in Config/Server.xml
      Add _.title _Request.Server.Config.Name
     
   ⍝ add a link to our CSS stylesheet
      _CssOverride←'/Styles/style.css'
     
   ⍝ wrap the content of the body element in two divs
      '#contentblock'Body.Push _.div
      ⍝'#bodyblock'Body.Push _.div
     
   ⍝ add the header to the top of the page
      header←'#banner'Insert _.header
      home←header.Add _.A'[insert the name of your site here]' '/' ⍝ click to go home
      'src="/Styles/Images/duck.png"'home.Insert _.img ⍝ logo
      menu←'#menu'header.Add _.nav
      {menu.Add _.A ⍵('/',⍵)}¨'Products' 'Support' 'Corporate'
     
   ⍝ Add a bar under the menu item that is currently open
      Add _.style('#menu a[href="',_Request.OrigPage,'"] {border-bottom: 0.25em solid;}')
     
   ⍝ call the base class Wrap function
      r←⎕BASE.Wrap
    ∇

:EndClass
