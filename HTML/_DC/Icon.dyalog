:class Icon : #._html.i
⍝ Description:: Dyalog Accordion widget
⍝ Constructor:: [spec1 [spec2]] [order]
⍝ spec1 - specification string consisting of a vendor-prefix, dash, icon-name, and optionally space-separated  modifiers
⍝ spec2 - a second specification string indicating which icon is stacked on top of the first icon
⍝ order - when stacking: 0 (the default) for small icon (spec2) overlayed on large icon (spec1), 1 for large icon (spec2) overlayed on small icon (spec1)
⍝ Public Fields::
⍝ Spec  - string or vector of two strings, each consisting of a vendor-prefix, dash, icon-name, and optionally space-separated  modifiers
⍝ Order - when stacking: 0 (the default) for small icon (spec2) overlayed on large icon (spec1), 1 for large icon (spec2) overlayed on small icon (spec1)
⍝ Examples::
⍝ Add _.Icon 'fa-cloud-upload'    ⍝ FontAwesome: http://fontawesome.io/icons/
⍝ Add _.Icon 'md-fingerprint'     ⍝ Google Material Design: https://design.google.com/icons/
⍝ Add _.Icon 'e-delete-column_01' ⍝ Syncfusion Essential JavaScript: http://js.syncfusion.com/demos/web/#!/azure/icon/EJIcons
⍝ '.fa-spin' Add _.Icon 'md-track_changes' ⍝ FontAwesome effects (works on non-FA icons too)
⍝ 'style="color: red;"' Add _.Icon 'e-stop' ⍝ Applying own styling
⍝ Add _.Icon 'fa-square' 'fa-terminal fa-inverse' ⍝ Stacking inverse small on large
⍝ Add _.Icon 'fa-camera' 'fa-ban' 1 ⍝ Stacking large on small
⍝ Notes:: Stacking non-FontAwesome icons is likely to cause misalignment.
⍝ Only Google's icons adhere to HTML5 best practices.

    :field public shared readonly ApiLevel←3
    :Field public Spec←⍬
    :Field public Order←0
    :field public shared readonly DocBase←'http://fontawesome.io/examples/'

    ∇ Make
      :Access public
      :Implements constructor
    ∇

    ∇ Make1 args;numeric
      :Access public
      :Implements constructor
      args,←0
      numeric←2|⎕DR¨args
      Order←⊃numeric/args
      Spec←2↑(eis args/⍨~numeric),⊂''
    ∇

    ∇ r←Render;prefix;spec;icon;classes
      :Access public
      SetUse
      Spec←2↑(eis Spec),⊂''
      :If ''≡⊃⌽Spec ⍝ Simple icon
          (prefix spec)←(⊃Spec)SplitOn1st'-'
          :Select prefix
          :Case 'fa' ⍝ FontAwesome
              Use'faIcon'
              AddClass'fa ',⊃Spec
     
          :Case 'md' ⍝ Google
              Use'mdIcon'
              (icon classes)←(spec,' ')SplitOn1st' '
              AddClass'md-icon material-icons',classes
              Content←1↓icon
     
          :CaseList (,'e')'ej' ⍝ Syncfusion
              Use'ejicon'
              AddClass'e-icon e',spec
                                                          ⍝  !!!NOTE !!!
              ⍝style,←';display: inline-block;'           ⍝ uncomment when style,← and class,← becomes supported
              style←';display: inline-block;',style~⎕NULL ⍝ remove when style,← and class,← becomes supported
     
          :EndSelect
      :Else
          Use'faIcon'
          AddClass'fa-stack'
          Spec(Add _.Icon{⍺ ⍵},)¨⌽⍣(~Order)(' fa-stack-','x',⍨⍕)¨⍳⍴Spec
     
      :EndIf
     
      r←⎕BASE.Render
    ∇

    SplitOn1st←(⌈\1+⍳={⍳⍴⍺}){⎕ml←3⋄⍺⊂⍵}⊣
:endclass
