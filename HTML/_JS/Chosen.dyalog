:class Chosen : #._JQ._jqWidget
⍝ Description:: Enhanced HTML selects with search-box and improved multi-select
⍝ Constructor:: [options [[selected] [prompt]]]
⍝ options   - vector of options or 2 column matrix of displayed[;1] and returned[;2] values
⍝ selected  - Boolean or integer array indicating pre-selected options(s)
⍝ prompt      - first item to display (has no value) (default '[Select]')
⍝
⍝ Public Fields::
⍝ Options   - vector of options or 2 column matrix of displayed[;1] and returned[;2] values
⍝ Selected  - Boolean or integer array indicating pre-selected options(s)
⍝ Disabled  - Boolean or integer array indicating disabled options(s)
⍝ Prompt      - first item to display (has no value) (default '[Select]')
⍝ options   - a namespace that collects the various options (see doc)
⍝
⍝ Examples::
⍝ Chosen  ('Choice 1' 'Choice 2' 'Choice 3')
⍝ Chosen  (3 2⍴'One' 'c1' 'Two' 'c2' 'Three' 'c3')
⍝ Chosen ((3 2⍴'One' 'c1' 'Two' 'c2' 'Three' 'c3') 2) ⍝ second item is selected
⍝ Chosen ((3 2⍴'One' 'c1' 'Two' 'c2' 'Three' 'c3') (0 1 0)) ⍝ second item is selected
⍝ Chosen ((3 2⍴'One' 'c1' 'Two' 'c2' 'Three' 'c3') 2 3 'Pick One') ⍝ second item is selected, third item is disabled
⍝ Chosen ((3 2⍴'One' 'c1' 'Two' 'c2' 'Three' 'c3') (2 3) 1) ⍝ second and third items are selected, first item is disabled

    :field public shared readonly DocBase←'https://harvesthq.github.io/chosen/options.html'

 ⍝   :field public Options←0 2⍴⊂''     ⍝ vector or matrix [;1] display, [;2] value
 ⍝   :field public Selected←⍬          ⍝ either Boolean integer vector indicating
 ⍝   :field public Prompt←'[Select]'   ⍝ character vector "Prompt" choice - the first choice on the list and does not have a value
 ⍝   :field public options←⎕ns''

    ∇ make
      :Access public
      :Implements constructor :Base
      ContainerTag←'select'
      Container←⎕NEW #._DC.Select
      JQueryFn←Uses←'chosen'
    ∇

    ∇ make1 args
      :Access public
      :Implements constructor
      ContainerTag←'select'
      Container←⎕NEW #._DC.Select args
      JQueryFn←Uses←'chosen'
    ∇

    ∇ make2(arg1 arg2)
      :Access public
      :Implements constructor
      ContainerTag←'select'
      Container←⎕NEW #._DC.Select(arg1 arg2)
      JQueryFn←Uses←'chosen'
    ∇

    ∇ r←Render
      :Access public
      r←⎕BASE.Render
    ∇

    ∇ r←{selector}ReplaceOptions args;sel;opts;dis
      :Access public
      :If 2=⎕NC'selector' ⋄ r←selector Container.ReplaceOptions args
      :Else ⋄ r←Container.ReplaceOptions args
          selector←'#',id
      :EndIf
      r,←⊂'execute'('$("',selector,'").trigger("chosen:updated")')
    ∇

:endclass
