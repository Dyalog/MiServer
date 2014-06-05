:Class Dialog : MiPage

    :Include #.HTMLInput

    ∇ Render req;opts;html;content
      :Access Public
     
    ⍝ set up the Accordion content
      opts←'modal: true,'
      opts,←'buttons:{Okay: function() {alert("You clicked Okay");$(this).dialog("close");},'
      opts,←'Cancel: function(){alert("You clicked Cancel");$(this).dialog("close");}}'
     
      content←'This is a sample dialog, it can contain almost any HTML content.'
     
      html←'h2'Enclose'jQueryUI Dialog Widget Demo'
      html,←#.HTMLInput.Button'Click To Display Dialog' 'onclick="$(''#mydialog'').dialog(''open'');"'
     
      html,←req #.JQUI.Dialog'mydialog' 'Sample jQueryUI Dialog'content opts
     
      req.Return html
    ∇

:EndClass