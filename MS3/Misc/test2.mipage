:Class test2 : MiPageSample

    ∇ make;path
      :Implements constructor
      :Access public
      path←'/Examples/Data/'
      numpics←⍬⍴⍴pics←path∘,¨1⌷[2]'pic*.png'#.Files.List #.Boot.AppRoot,path
      pos←1
    ∇


    ∇ Compose;butts;tb
      :Access public
      (Add _.div).Add _.img('id=myimg src=',pos⊃pics)
      tb←Add _.span''(('class' 'ui-widget-header ui-corner-all')('style' 'display:inline-block;padding:3px;margin-top:5px;')) ⍝ add a toolbar
     ⍝ Add 4 buttons to it.
      butts←tb.Add¨4⍴_.jqButton
     ⍝ To use the JQuery buttons we need to set some options.
     ⍝ We can use the Option method or the Set method.
     ⍝ Both are used here as an example.
      butts.name←'b1' 'b2' 'b3' 'b4'
      butts.title←'First' 'Previous' 'Next' 'Last'
      butts.Set⊂'text'_false
      (⊂'icons.primary')butts.Set'ui-icon-seek-start' 'ui-icon-seek-prev' 'ui-icon-seek-next' 'ui-icon-seek-end'
     ⍝ Finally we declare we want to catch click events
     ⍝ Because we don't specify the callback program name, APLJax will be used.
      butts.On⊂'click'
      Add _.Style('button' 'height:30px')
      Add _.Style('#contentblock' 'text-align:center')
    ∇

    ∇ r←APLJax
      :Access public 
      ...
      :Select _what
      :Case 'b1' ⋄ pos←1
      :Case 'b2' ⋄ pos-←1
      :Case 'b3' ⋄ pos+←1
      :Case 'b4' ⋄ pos←numpics
      :EndSelect
      pos←1+numpics|pos-1
      r←Execute'#myimg'#._JSS.Attr'src'(pos⊃pics)
    ∇

:endclass