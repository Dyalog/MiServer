:class ejRotator : #._SF._ejWidget
    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejRotator.html'
    :field public shared readonly ApiLevel←1
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejRotator.html'
    :field public Urls←''      ⍝ image URLs
    :field public Captions←''  ⍝ image captions

    ∇ make
      :Access public
      JQueryFn←Uses←'ejRotator'
      :Implements constructor
      ContainerTag←'ul'
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejRotator'
      :Implements constructor
      args←eis args
      :If 2=⍴⍴args ⍝ matrix case
          (Captions Urls)←↓[1]args
      :ElseIf 2=|≡args ⍝ vec of vecs
          Urls←args
      :Else ⍝ vector of pairs?
          (Captions Urls)←↓⍉↑args
      :EndIf
      ContainerTag←'ul'
    ∇

    ∇ r←Render;items
      :Access public
      items←{⎕NEW(_.img(''('src'⍵)))}¨Urls
      :If ~0∊⍴Captions
          items.title←Captions
      :EndIf
      Container.Add{_.li ⍵}¨items
      r←∊⎕BASE.Render
    ∇
:EndClass
