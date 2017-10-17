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
⍝ Icon currently supports 4 different libraries of icons:
⍝   Library                  Prefix
⍝   -----------------------  ---------
⍝   FontAwesome              fa-
⍝   Syncfusion               e-  or ej-
⍝   Google Material Design   md-
⍝   Bootstrap                bs- or glyphicon-
⍝
⍝ While you may, in theory, mix and match icons from different libraries, it is recommended that you use a single library if possible.
⍝
⍝ If you use a Bootstrap glyphicon, it will force the Bootstrap stylesheet to be used which may affect
⍝ the appearance of other elements in your page.
⍝
⍝
⍝ Examples::
⍝ Add _.Icon 'fa-cloud-upload'              ⍝ FontAwesome: http://fontawesome.io/icons/
⍝ Add _.Icon 'md-fingerprint'               ⍝ Google Material Design: https://design.google.com/icons/
⍝ Add _.Icon 'e-delete-column_01'           ⍝ Syncfusion Essential JavaScript: http://js.syncfusion.com/demos/web/#!/azure/icon/EJIcons
⍝ Add _.Icon 'bs-music'                     ⍝ Bootstrap glyphicon: https://getbootstrap.com/docs/3.3/components/
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
      :If 2|⎕DR last←⊃¯1↑Spec←args
          Order←last ⋄ Spec←¯1↓args
      :EndIf
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
          :Case 'fa' ⍝ FontAwesome
              Use'faIcons'
              AddClass'fa ',Spec
     
          :Case 'md' ⍝ Google
              Use'mdIcons'
              (icon classes)←(spec,' ')SplitOn1st' '
              AddClass'material-icons ',classes
              Content←¯1↓icon
     
          :CaseList (,'e')'ej' ⍝ Syncfusion
              Use'ejIcons'
              AddClass'e-icon e-',spec
              AddStyle'display: inline-block'  ⍝ add this because default Syncfusion is "block"
     
          :CaseList 'bs' 'glyphicon'
              Use'Bootstrap'
              AddClass'glyphicon glyphicon-',spec
     
          :Else
              Content←Spec
     
          :EndSelect
     
      :Else
          Use'faIcons'
          AddClass'fa-stack'
          :For spec :In Spec
              :If isInstance spec
                  spec.AddClass'fa-stack-1x'
                  Add spec
              :Else
                  (Add _.Icon spec).AddClass'fa-stack-1x'
              :EndIf
          :EndFor
      :EndIf
      SetUse
      r←⎕BASE.Render
      (Spec Content class)←origSpec origContent((1+origClass≡UNDEF)⊃origClass'') ⍝ cannot just "unset" class
    ∇

    SplitOn1st←{(l↑⍺)((l←⍺⍳⍵)↓⍺)}
:endclass
