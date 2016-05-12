:Class faIcon : #.HtmlElement  
⍝ Description:: FontAwesome Icon widget
⍝ Constructor:: [classes]
⍝ classes - a vector (or vector of vectors) of classes for the icon
⍝ Public Fields::
⍝ Prefix  – the FontAwesome prefix (default 'fa-')
⍝ Classes - a vector (or vector of vectors) of classes for the icon.
⍝ AccessibilityText – a character vector of text to display
⍝ Size – one of '1x' 'lg' '2x' '3x' '4x' '5x' 
⍝
⍝ Notes::
⍝ A class will be prefixed by Prefix unless the class begins with a '.' or Prefix
⍝ Examples::
⍝       (⎕NEW _.faIcon 'spinner spin fa-3x fw .margin-bottom').Render
⍝ <i class="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i> 
⍝
⍝ If you want a stacked icon, you can specify multiple classes.
⍝ The following examples will all render the same result.
⍝       _.faIcon('square-o stack-2x' 'flag stack-1x inverse')
⍝       _.faIcon(('square-o' 'stack-2x') 'flag stack-1x inverse')
⍝       _.faIcon(('square-o' 'stack-2x') ('flag stack-1x' 'inverse'))



    :field public shared readonly DocBase←'http://fontawesome.io/examples/'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←''

    :field public Prefix←'fa'
    :field public Classes←''
    :field public AccessibilityText←''
    :field public Size←'' ⍝ can be any of lg 2x 3x 4x 5x

    ∇ make
      :Access public
      :Implements constructor
      Uses←'FontAwesome'
      Tag←'i'
    ∇

    ∇ make1 arg
      :Access public
      :Implements constructor
      Uses←'FontAwesome'
      Tag←'i'
      Classes←arg
    ∇

    ∇ r←Render;oldClass;stacked;classes;c
      :Access public
      r←''
      stacked←0
      Prefix,←'-'↓⍨'-'=¯1↑Prefix
      :If ~0∊⍴Classes
          oldClass←class
          oldContent←Content
          :If class≡UNDEF
              class←''
          :EndIf
          :Select |≡Classes
          :CaseList 0 1 ⍝ scalar shouldn't happen, but just in case...
              class←class,makeClasses Classes
          :Case 2
              :If ∨/' '∊¨Classes
                  stacked←1
                  classes←makeClasses¨Classes
              :Else
                  class←class,makeClasses⍕Classes
              :EndIf
          :Case 3
              stacked←1
              classes←makeClasses∘⍕¨Classes
          :Else
              ∘∘∘
          :EndSelect
     
          :If ~0∊⍴Size
              class←class,' ',Prefix,Size
          :EndIf
     
          :If stacked
              Tag←'span'
              class←class,' ',Prefix,'stack'
              :For c :In classes
                  (Add _.i).class←c
              :EndFor
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

:EndClass