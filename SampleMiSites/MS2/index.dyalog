:Class index : MS2Page

    :Include #.HTMLInput

    ∇ html←Render req;items
      :Access Public
     
      html←'h2'Enclose'MiServer 2.1 Compatability MiSite'
      html,←'This MiSite is a minimal template intended to help MiServer 2 users migrate to using MiServer 3 without having to completely rewrite their pages.'
      html,←2 BR'h4'Enclose'The steps to migrate are:'
      items←⊂'Copy the folder structure of this sample MiSite (MS2).  It''s important that you include the /Code/ folder.'
      items,←⊂'Change any of your pages that are based on the MiPage class to be based on the MS2Page'
      items,←⊂'Change any references to Server.Root to Server.Config.AppRoot'
      html,←List items
      html,←BR Anchor'Mortgage calculation sample page' '/mortgagems2'
      html,←BR Anchor'What''s your sign?' '/zodiacsign'
    ∇
:EndClass
