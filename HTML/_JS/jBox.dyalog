:Class jBox : #._JQ._jqWidget
⍝ Description:: jBox widget
⍝
⍝ Constructor:: [type [message [content]]]
⍝ type - one of 'Tooltip', 'Mouse', 'Modal', 'Confirm', 'Notice', 'Image'
⍝ message - the text that will appear in the popup
⍝ content - the content for the target element
⍝
⍝ Public Fields::
⍝ Type - one of 'Tooltip', 'Mouse', 'Modal', 'Confirm', 'Notice', 'Image'
⍝ Message - the text that will appear in the popup
⍝ Content - the content for the target element
⍝ Theme - name of a jBox-Theme (one of 'ModalBorder','NoticeBorder','TooltipBorder' or 'TooltipDark')
⍝
⍝ Shared Methods:
⍝ {optionsORcolour} Notice [message] - displays a popup-msg.
⍝ {options} Modal [message] - modal popup
⍝
⍝ Notes::
⍝ For more information see https://github.com/StephanWagner/jBox
⍝ Documentation of options can be found @ http://stephanwagner.me/jBox/options
⍝ see advanced example for sample of using the shared methods.
⍝ Type is a public field in the base class

    :field public shared readonly DocBase←'http://stephanwagner.me/jBox/documentation'
    :field public shared readonly ApiLevel←3

    :field public shared readonly Types←'Tooltip' 'Mouse' 'Modal' 'Confirm' 'Notice' 'Image'
    :field public Content←''
    :field public Message←''
    :field public Theme←''

    ∇ make
      :Access public
      JQueryFn←Uses←'jBox'
      :Implements constructor
      Type←'Tooltip'
      ContainerTag←'span'
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'jBox'
      :Implements constructor
      args←eis args
      (Type Message Content)←args defaultArgs'Tooltip'Message Content
      ContainerTag←'span'
    ∇

    ∇ r←Render;ind
      :Access public
      ind←Types⍳⊂#.Strings.firstCap Type
      'Invalid jBox Type'⎕SIGNAL(ind>⍴Types)/11
      Type←ind⊃Types
      Container.Content←Content
      'content'Set renderIt Message
      BuildHTML←~0∊⍴Content
      :If 0<⍴Theme
          'theme'Set Theme
          Use'⍕/jBox/themes/',Theme,'.css'
      :EndIf
      SetUse
      r←⎕BASE.Render
    ∇

    ∇ r←{ColorOrOpts}Notice txt;jb
      :Access public shared
      jb←New _.jBox'Notice'txt
      jb.ScriptOptions←0 0 0
      :If 2=⎕NC'ColorOrOpts'     ⍝ if ⍺ is a regular variable
      :AndIf 0=2|⎕DR ColorOrOpts ⍝ if it is a string
      :AndIf ~0∊⍴ColorOrOpts     ⍝ and has a length > 0
         'color'jb.Set ColorOrOpts
      :ElseIf 9=⎕NC'ColorOrOpts'
          jb.Options←ColorOrOpts
      :EndIf
      r←jb.Render                 ⍝ set the JavaScript
    ∇


    ∇ r←{opts}Modal txt;jb
      :Access public shared
      jb←New _.jBox'Modal'
      jb.ScriptOptions←0 0 0
      :If 9=⎕NC'opts'
          jb.Options←opts
      :EndIf
      'onInit'jb.Set'function() { this.open(); }'
      'content'jb.Set (renderIt txt)
      r←jb.Render
    ∇



:EndClass
