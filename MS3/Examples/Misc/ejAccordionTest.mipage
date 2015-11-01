:Class ejAccordionTest: MiPageSample
⍝ Control:: _SF.ejAccordion
⍝ Description:: Insert a flexible accordion which alerts upon opening and closing sections

    ∇ Compose;ac;path;menu;style
      :Access public
      ac←Add _SF.ejAccordion      ⍝ add the accordion widget
      ac.Titles←'First' 'Second'  ⍝ headings for each of two sections
      style←''
      style,←'.submenu {max-height:75px;overflow-y:scroll;background-color:white;border:2px groove threedface;}'
      style,←'.menuitem {margin-bottom:0;margin-left:0px;padding-left:2px;cursor:pointer;} '
      style,←'.menuitem:hover {background-color:lightblue;} '
     
      Add _.style style
      menu←'.submenu'New Add _.div
      (((⊂¨'NodeA'∘,¨⍕¨⍳8),¨⊂⊂'.menuitem')menu.Add¨_.p,¨↓8 3⍴⎕A).On⊂'click' 'OnApp'
     
     
      ac.Sections←menu menu  ⍝ content for each of 2 sections
      ⍝'enableMultipleOpen'ac.Set _true
      'heightAdjustMode'ac.Set'Content'
      ⍝'showRoundedCorner'ac.Set _true
      ac.On'activate' 'myCallback'('opened' 'argument' 'activeIndex')
      ac.On'inActivate' 'myCallback'('closed' 'argument' 'inActiveIndex')
    ∇

    ∇ r←myCallback
      :Access public
      r←Execute #._JSS.Alert'You ',_event,'d section ',(''Get'opened closed')
    ∇
    ∇ r←OnApp
      :Access public
      r←Execute #._JSS.Alert'You clicked item ',_what
    ∇
  

:EndClass