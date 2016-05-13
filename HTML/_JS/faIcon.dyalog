:Class faIcon : #.HtmlElement
⍝ Description:: FontAwesome Icon widget
⍝ Constructor:: [classes]
⍝ classes - a vector (or vector of vectors) of classes for the icon
⍝
⍝ Public Fields::
⍝ Classes - a vector (or vector of vectors) of classes for the icon.
⍝ AccessibilityText – a character vector of text to display
⍝ Size – one of '1x' 'lg' '2x' '3x' '4x' '5x'
⍝ Icons - this is a vector of HtmlElements that is used to provide access to the individual icons in a stacked icon
⍝
⍝ Notes::
⍝ A class will be prefixed by Prefix unless the class begins with a '.' or Prefix
⍝
⍝ Examples::
⍝       (⎕NEW _.faIcon 'spinner spin fa-3x fw .margin-bottom').Render
⍝ <i class="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
⍝
⍝ If you want a stacked icon, you can specify multiple classes.
⍝ The following examples will all render the same result.
⍝       _.faIcon('square-o 2x' 'flag inverse')
⍝       _.faIcon(('square-o' '2x') 'flag inverse')
⍝       _.faIcon(('square-o' '2x') ('flag' 'inverse'))

    :field public shared readonly DocBase←'http://fontawesome.io/examples/'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←''

    :field public Classes←''
    :field public AccessibilityText←''
    :field public Icons←''
    :field public Size←'' ⍝ can be any of lg 2x 3x 4x 5x

    Prefix←'fa-'
    stacked←0

    ∇ make
      :Access public
      :Implements constructor
      Use'FontAwesome'
      Tag←'i'
      SetUse
    ∇

    ∇ make1 arg
      :Access public
      :Implements constructor
      Use'FontAwesome'
      Tag←'i'
      Classes←arg
      SetUse
    ∇

    ∇ r←Render;oldClass;c;oldContent
      :Access public
      r←''
      :If ~0∊⍴Classes
          oldClass←class
          oldContent←Content
          :If class≡UNDEF
              class←''
          :EndIf
     
          :If ~0∊⍴Size
              class←class,' ',Prefix,Size
          :EndIf
     
          :If stacked
              Icons.Tag←⊂Tag
              Icons.AddClass{∨/∊'-stack-1x' '-stack-2x'⍷¨⊂⍵:⍵ ⋄ ⍵,' ',Prefix,'stack-1x'}¨((Prefix,'(lg|[12345]x)')⎕R{{(¯2↓⍵),'stack-',¯2↑⍵}⍵.Match})classes
              Tag←'span'
              class←Prefix,'lg ',class,' ',Prefix,'stack'
              Add¨Icons
          :Else
              class←⊃classes
          :EndIf
     
          class←#.Strings.deb class
     
          r←⎕BASE.Render
     
          :If ~0∊⍴AccessibilityText
              r,←('.sr-only'New _.span AccessibilityText).Render
          :EndIf
     
          class←oldClass
          Content←oldContent
      :EndIf
    ∇

    ∇ r←makeClasses classes
      :Access public
      r←(¯1↓Prefix),∊#.Strings.deb' '∘,∘(Prefix∘{0∊⍴⍵:⍵ ⋄ '.'=⍬⍴⍵:1↓⍵ ⋄ ⍵ #.Strings.beginsWith ⍺:⍵ ⋄ ⍺,⍵})¨#.Strings.split classes
    ∇

    ∇ UpdateClasses arg;n
      :Implements trigger Classes
      stacked←0
      :Select |≡arg.NewValue
      :CaseList 0 1 ⍝ scalar shouldn't happen, but just in case...
          classes←eis makeClasses Classes
      :Case 2
          :If ∨/' '∊¨Classes
              stacked←1
              classes←makeClasses¨Classes
          :Else
              classes←eis makeClasses⍕Classes
          :EndIf
      :Case 3
          stacked←1
          classes←makeClasses∘⍕¨Classes
      :Else
          'Invalid faIcon argument'⎕SIGNAL 11
      :EndSelect
      Icons←⎕NEW¨(⍴classes)⍴#.HtmlElement
    ∇

:EndClass