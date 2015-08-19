:class Datalist : #._html.datalist
⍝ Description:: Dyalog improved HTML5 datalist element
⍝ Constructor:: [options]
⍝ options - vector of character vectors of values for the selectable list
⍝           or a matrix of [;1] values for the selectable list [;2] content for the option
⍝ Public Fields::
⍝ Options - vector of character vectors of values for the selectable list
⍝ Notes::
⍝ Different browsers render (or support) this element differently

    :field public Options←''
    :field public Input
 

    ∇ make
      :Access public
      :Implements constructor
      (Input←New #._html.input).type←'list'
    ∇

    ∇ make1 args
      :Access public
      :Implements constructor
      Options←args
      (Input←New #._html.input).type←'list'
    ∇

    ∇ r←Render;dl
      :Access public
      SetId
      Content←⍬
      ⍝ perform some magic to set the id/name of the input element to the id
      Input.(id name)←⊂id
      id←id,'_datalist'
      'list'Input.Set id
      :If ~0∊⍴Options
          :If 2=⍴⍴Options
              Add{('value="',⍺,'"')New #._html.option ⍵}/¨↓Options
          :Else
              Add{('value="',⍵,'"')New #._html.option}¨Options
          :EndIf
      :EndIf
      r←(Input.Render),⎕BASE.Render
    ∇

:endclass
