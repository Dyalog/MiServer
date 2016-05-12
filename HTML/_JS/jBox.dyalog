:Class jBox : #._JQ._jqWidget
⍝ Description:: jBox widget
⍝ Constructor:: [content [type]]
⍝ content - the text that will appear in the popup
⍝ type - one of 'Tooltip', 'Mouse', 'Modal', 'Confirm', 'Notice', 'Image'
⍝ Public Fields::
⍝ Content - the text that will appear in the popup
⍝ Type - one of 'Tooltip', 'Mouse', 'Modal', 'Confirm', 'Notice', 'Image' 
⍝ Notes:: 
⍝ For more information see https://github.com/StephanWagner/jBox  
⍝ Type is a public field in the base class     

    :field public shared readonly DocBase←'http://stephanwagner.me/jBox/documentation'
    :field public shared readonly ApiLevel←3

    :field public Content←''

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
      (Content Type)←args defaultArgs'' 'Tooltip'
      ContainerTag←'span'
    ∇

    ∇ r←Render
      :Access public   
      :If BuildHTML←~0∊⍴Content
          'content'Set renderIt Content
      :EndIf
      r←⎕BASE.Render
    ∇
:EndClass