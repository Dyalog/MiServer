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
⍝ {optionsORcolor} Notice [message] - displays a popup-msg.
⍝ {options} Modal [message] - modal popup
⍝
⍝ Notes::
⍝ For more information see https://github.com/StephanWagner/jBox
⍝ Documentation of options can be found @ http://stephanwagner.me/jBox/options
⍝ Type is a public field in the base class

    :field public shared readonly DocBase←'http://stephanwagner.me/jBox/documentation'
    :field public shared readonly ApiLevel←3

    :field public shared readonly Types←'Tooltip' 'Mouse' 'Modal' 'Confirm' 'Notice' 'Image'
    :field public Content←''
    :field public Message←''
    :field public Theme←''


      VarExists←{
        ⍝ ⎕NC might be 0, but the var (field of parent class) was assigned a value
        ⍝ so we're using this check to check whether it was used or not.
          0::0
          0<≢0,⍎⍵
      }

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
⍝      args←eis args       ⍝ harmful after recent changes to defaultargs
      (Type Message Content)←args defaultArgs'Tooltip'Message Content
      ContainerTag←'span'
    ∇

    ∇ r←Render;ind
      :Access public
      ind←Types⍳⊂#.Strings.firstCap Type
      'Invalid jBox Type'⎕SIGNAL(ind>⍴Types)/11
      Type←ind⊃Types
      Container.Content←Content
      :If 0<≢Message  ⍝ do not overwrite content if Message is empty!
          'content'Set renderIt New _.span Message
      :EndIf
      BuildHTML←0<≢Content
      :If ind∊4 6 ⍝ Confirm & Image
      :AndIf 0=VarExists'ScriptOptions'
         ⍝===ScriptOptions===
         ⍝[1] Wrap in <script>?
         ⍝[2] wrap in $(function(){});?
         ⍝[3] use jQuery Selector syntax (1) or JavaScript new (0)
          ScriptOptions←1 1 0
      :EndIf
      :If 0<⍴Theme
          'theme'Set Theme
          Use'⍕/jBox/themes/',Theme,'.css'
      :EndIf
      r←⎕BASE.Render
    ∇

    ∇ r←{ColorOrOpts}Notice txt;jb
      :Access public shared
      jb←New _.jBox'Notice'txt
      jb.ScriptOptions←0 0 0
      :If 2=⎕NC'ColorOrOpts'
      :AndIf isString ColorOrOpts
      :AndIf ~0∊⍴ColorOrOpts
          jb.Options.color←ColorOrOpts
      :ElseIf 9=⎕NC'ColorOrOpts'
          jb.Options←ColorOrOpts
      :EndIf
      r←jb.Render            ⍝ set the JavaScript
    ∇


    ∇ r←{opts}Modal txt;jb
      :Access public shared
      jb←New _.jBox'Modal'txt
      jb.ScriptOptions←0 0 0
      :If 9=⎕NC'opts'
          jb.Options←opts
      :EndIf
      'onInit'jb.Set⊂'function() { this.open(); }'
      r←jb.Render
    ∇



:EndClass
