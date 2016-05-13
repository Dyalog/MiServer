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
⍝
⍝ Notes::
⍝ For more information see https://github.com/StephanWagner/jBox
⍝ Type is a public field in the base class

    :field public shared readonly DocBase←'http://stephanwagner.me/jBox/documentation'
    :field public shared readonly ApiLevel←3

    :field public shared readonly Types←'Tooltip' 'Mouse' 'Modal' 'Confirm' 'Notice' 'Image'
    :field public Content←''
    :field public Message←''

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
      r←⎕BASE.Render
    ∇
:EndClass