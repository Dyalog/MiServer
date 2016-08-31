:class ejRTE : #._SF._ejWidget
⍝ Description:: Syncfusion Rich-Text Editor
⍝ Constructor:: [content]
⍝ content      - initial content for the editor
⍝ Public Fields::
⍝ Content      - initial content for the editor
    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejRTE.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejRTE.html'
    ∇ make
      :Access public
      JQueryFn←Uses←'ejRTE'
      ContainerTag←'textarea'
      :Implements constructor
    ∇
    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejRTE'
      ContainerTag←'textarea'
      :Implements constructor
      Content←args
    ∇

    ∇ r←Render
      :Access public
      Container.Content←renderIt Content
      r←⎕BASE.Render
    ∇
:EndClass
