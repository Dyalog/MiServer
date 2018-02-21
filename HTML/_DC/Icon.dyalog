﻿:class Icon : #._html.span
⍝ Description:: Dyalog Icon widget
⍝ Constructor:: [spec]
⍝ spec - either a single or pair of string which specify the icon(s) to use
⍝        each consists of a vendor-prefix, dash, icon-name, and optionally space-separated modifiers
⍝        when two strings are used, it represents a "stacked" icon, with second icon overlayed on the first
⍝        "stacked" icons are a feature of FontAwesome icons - using other icons may or may not have the desired visual effect
⍝
⍝ Public Fields::
⍝ Spec  - either a single or pair of string which specify the icon(s) to use
⍝         each consists of a vendor-prefix, dash, icon-name, and optionally space-separated modifiers
⍝         when two strings are used, it represents a "stacked" icon, with second icon overlayed on the first
⍝         "stacked" icons are a feature of FontAwesome icons - using other icons may or may not have the desired visual effect
⍝
⍝ Usage Notes::
⍝ Icon currently supports 3 different libraries of icons:
⍝   Library                  Prefix
⍝   -----------------------  -------------------
⍝   Syncfusion               e-  or ej-
⍝   Google Material Design   md-
⍝   FontAwesome 5            fas- far- fal- fab- (solid, regular, light, brands)
⍝                            or alternatively "fas fa-{name}" (longer, same result)
⍝ While you may, in theory, mix and match icons from different libraries, it is recommended that you use a single library if possible.
⍝
⍝
⍝
⍝ Examples::
⍝ Add _.Icon 'fa-cloud-upload-alt'          ⍝ FontAwesome: http://fontawesome.com/icons/
⍝ Add _.Icon 'md-fingerprint'               ⍝ Google Material Design: https://design.google.com/icons/
⍝ Add _.Icon 'e-delete-column_01'           ⍝ Syncfusion Essential JavaScript: http://js.syncfusion.com/demos/web/#!/azure/icon/EJIcons
⍝
⍝ '.fa-spin' Add _.Icon 'md-track_changes'  ⍝ FontAwesome effects (works on non-FA icons too)
⍝ 'style="color: red;"' Add _.Icon 'e-stop' ⍝ Applying own styling
⍝ Add _.Icon 'fa-square fa-2x' 'fa-terminal fa-inverse' ⍝ Stacking inverse small on large
⍝ Add _.Icon 'fa-camera' 'fa-ban fa-2x'     ⍝ Stacking large on small

    :field public shared readonly ApiLevel←3
    :Field public Spec←⍬
    :field public shared readonly DocBase←'http://fontawesome.io/examples/'

    ∇ Make
      :Access public
      :Implements constructor
    ∇

    ∇ Make1 args;last
      :Access public
      :Implements constructor
			Spec←args
    ∇

    ∇ r←Render;prefix;spec;icon;classes;n;origContent;origSpec;origClass
      :Access public
      (origSpec origContent origClass)←Spec Content class
      Spec←eis Spec
      :If ~0∊⍴Content ⋄ Spec,←eis Content ⋄ :EndIf
      Content←⍬
      :If 1=⍴Spec ⍝ Simple icon
          Spec←{⊃⍣(1<≡⍵)⊢⍵}Spec ⍝ Disclose if nested (eis⍣¯1)
          :If isInstance Spec
              Spec←Spec.Spec
          :EndIf
          (prefix spec)←Spec SplitOn1st'-'
          :Select ¯1↓prefix
          :Case 'fa' ⍝ try to support old-style FA4-Codes by replacing with fas
                     ⍝ and spit out some warning into the session!
              Use'faIcons5svg'
              AddClass'fas ',Spec
              ⍝ :if Debugging ^ DevelopmentSys
              ⍝    echo warning about use of fa-
              ⍝ :endif
          :CaseList 'far' 'fas' 'fal' 'fab'
              Use'faIcons5svg'
              Tag←'i'
              AddClass(¯1↓prefix),' fa-',spec  ⍝ change fab-name into "fab fa-name"
          :Case 'md' ⍝ Google
              Use'mdIcons'
              (icon classes)←(spec,' ')SplitOn1st' '
              AddClass'material-icons ',classes
              Content←¯1↓icon
     
          :CaseList (,'e')'ej' ⍝ Syncfusion
              Use'ejIcons'
              AddClass'e-icon e-',spec
              AddStyle'display: inline-block'  ⍝ add this because default Syncfusion is "block"
     
          :Else
              :If (⊂3↑prefix)∊'far' 'fas' 'fal' 'fab'  ⍝ 'fas fa-{name}' is direct use of FA5-Tags
                  Use'faIcons5svg'
                  AddClass prefix,spec
              :Else
                  Content←Spec
              :EndIf
          :EndSelect
     
      :Else
          Use'faIcons5svg'
          AddClass'fa-layers fa-fw'
          :For spec :In Spec
              :If isInstance spec
          ⍝        spec.AddClass
                  Add spec
              :Else
                  Add _.Icon spec
              :EndIf
          :EndFor
      :EndIf
      SetUse
      r←⎕BASE.Render
      (Spec Content class)←origSpec origContent((1+origClass≡UNDEF)⊃origClass'') ⍝ cannot just "unset" class
    ∇

    SplitOn1st←{(l↑⍺)((l←⍺⍳⍵)↓⍺)}
:endclass
