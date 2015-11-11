:Class FontIconsBase :  #.HtmlElement
    :field public shared readonly DocBase←'http://fontawesome.io/icons/'
    :field public shared Family←'fa'  ⍝ bt=Blacktie or other prefixes for FontIcons
    :field public Resource←'placeholder'
    :field public Container←'i'
    :field public icon←''   
    :field public StackSize←'1x'    ⍝ only relevant for the outer tag in stacks!
    :field private Args←''  
    :field private Stack←⍳0




    ∇ Make0
    ⍝ empty constructor mostly used for stacks, but possibly for "normal" icons as well (assign icon after construction!)
      :Access public
      :Implements Constructor
    ∇

    ∇ Make1 args
      :Access Public
    ⍝ args is the name of the icon (w/o prefix) and possibly other specs
    ⍝ (such as 2x - again, w/o prefix, space-separated, ie "camera 2x"!)
      icon←args
      Args←args
      :Implements Constructor    :Base args
    ∇

    ∇ Make2(cnt atts)
      :Access public
      Args←cnt atts
      icon←cnt
      :Implements Constructor    :Base'' ('' atts)
      Content←''
    ∇
    
    ∇ r←{size}tla arg
      :Access public shared
      ⍝ create an icon for a TLA (three letter acronym aka "filename" ;-))
      ⍝ I'm a bit undetermined about tla - maybe it should be treated more like an
      ⍝ HtmlElement, so that id/class and other attributes could be set. BUT they could be set for each of the 2 layers of the stack
      ⍝ or for the span-container of the tag - there might be uses for each of these cases.
      ⍝ So I'm really not sure what to do - any comments/ideas, pls. get in touch with me (michael@mbaas.de)
      :If 0=⎕NC'size' ⋄ size←1 :EndIf
      size←⍕size
      (1⊃⎕RSI).Use'⍕https://fonts.googleapis.com/css?family=Fira+Mono'
      r←ScriptFollows
⍝   <span class=" %Family%-%size%x"><span class="%Family%-stack" style="font-size: .5em; vertical-align: -16%;">
⍝     <span class="%Family%-stack-1x filetype-text" style="top: .25em; font-size: .7em;font-weight: 800;  font-family: 'Fira Mono','Monospace';">%TLA%</span>
⍝     <i class="%Family% %Family%-file-o %Family%-stack-2x"></i>
⍝   </span></span>
      r←(('%TLA%'arg)('%size%'size)('%Family%'Family))Subst r
    ∇
    ∇ r←{size_txtcol_bckcol}tla2 arg
      :Access public shared
      ⍝ One way to customize TLA: set icon & bck-Colour with tla2!
      :If 0=⎕NC'size_txtcol_bckcol' ⋄ size_txtcol_bckcol←1 :EndIf
      (size txtcol bckcol)←3↑size_txtcol_bckcol
      :If 80≠⎕DR txtcol ⋄ txtcol←'' ⋄ :Else ⋄ txtcol←' color: ',txtcol,';' ⋄ :EndIf
      :If 80≠⎕DR bckcol ⋄ bckcol←'' ⋄ :Else ⋄ bckcol←' style="color: ',bckcol,'";' ⋄ :EndIf
      size←⍕size
      (1⊃⎕RSI).Use'⍕https://fonts.googleapis.com/css?family=Fira+Mono'
      r←(('%TLA%'arg)('%size%'size)('%Family%'Family)('%txtcol%'txtcol)('%bckcol%'bckcol))Subst ScriptFollows
⍝   <span class=" %Family%-%size%x"><span class="%Family%-stack" style="font-size: .5em; vertical-align: -16%;">
⍝     <i class="%Family% %Family%-file %Family%-stack-2x"%bckcol%></i>
⍝     <span class="%Family%-stack-1x filetype-text" style="%txtcol%top: .25em; font-size: .7em;font-weight: 800;  font-family: 'Fira Mono','Monospace';color:white;">%TLA%</span>
⍝   </span></span>
    ∇
    
    ∇ {r}←stack arg
      :Access public    
      :If 9≠⎕NC'arg'
          arg←New FontIconsBase arg
          arg.Family←Family
      :EndIf
      Stack,←arg
     
    ∇


    ∇ ul items;item;ulCnt;Cnt;atts;iTag
      :Access public
 ⍝ pairs is a nested vector of class/text,
 ⍝ i.e. (('check-square' 'List icons')('check-square' 'can be used')...)
 ⍝ it is also possibly to add attributes after the 1st two elems to assign an id or style to the li
 ⍝ (to add attributes to the inner i-Attribute, nest the 2nd element!)
 ⍝ And when you need to assign id to the content, you'll have to embed it into a span yourself:
 ⍝ ('check-square' '<span id="foo">List Icons</span>')
 ⍝ (NB: it would also be possible to override the class which will ruin the purpose,
 ⍝  but I wasn't sure whether we should take care to avoid that by eliminating '.'-elems
 ⍝  or if it wouldn't be better (and easier) to just create the mess the user asked for ;-))
 ⍝ For discussion: only collect the items here, so that multiple ul-Calls
 ⍝ are possible to add to a single list (so all the "work" should be done in Render instead)
      :If 2=≡items ⋄ items←,⊂items ⋄ :EndIf
      ulCnt←'' ⋄ Content←''
      :For item :In items
          (icon Cnt)←2↑item
          atts←'' ⋄ :If 1<|≡Cnt ⋄ (Cnt atts)←Cnt ⋄ :EndIf
          icon←'li ',icon
          iTag←(New _.i''((⊂'.',setClass 1),eis atts)).Render,Cnt
          ulCnt,←(New _.li iTag(2↓item)).Render
      :EndFor
      icon←''
      Content←ulCnt
      class←'fa-ul'
      Container←'ul'
    ∇


    ∇ r←Render;icon3;i1;i2;Stack∆
      :Access Public
     
      :If 0<⍴Stack
          Stack∆←Stack
          ⎕SE.Dyalog.Utils.display Stack∆
⍝          .
          Stack←⍳0
          :If 0<⍴icon
     
              icon←(RemoveSize icon),' stack-',GetSize'' ⋄ Container←'span'
              r←Render  ⍝ first elem
          :Else
              r←''
          :EndIf
          :For obj :In Stack∆
              :If (⊂' #._DC.FontIconsBase ')∊⍕¨⎕CLASS obj
                  ⎕←'stacking: ',(RemoveSize obj.icon)
                  :If 0<⍴obj.icon
                  :AndIf ~∨/'stack-'⍷obj.icon
⍝                      .
                      ⎕←obj.icon←(RemoveSize obj.icon),' stack-',obj.GetSize''
                  :EndIf
                  r∆←obj.Render
              :Else
⍝                  .
                  r∆←obj
              :EndIf
              r,←r∆
          :EndFor
          :If ~∨/'stack-'⍷icon
              icon←'stack ',StackSize
          :EndIf
          Container←'span'
          Content←r
      :EndIf
      Tag←Container
      :If 0<⍴icon ⋄ icon←SetSize ⋄ class←setClass(0=⎕NC'Stack∆') ⋄ :EndIf
      r←⎕BASE.Render
    ∇
    
    ∇ r←{prefix}GetSize nul
    ⍝ searches icon for a size-specification
      :Access public          
      prefix←{6::⍵ ⋄ prefix}''
      :If 0=⍴r←(prefix,'(lg|[12345]x)'⎕S'\1')icon
          r←'1x'
      :Else ⋄ r←⊃r
      :EndIf
    ∇

    ∇ res←SetSize
    ⍝ searches icon for a size-specification
      :Access public
      res←icon
      :If 0=⍴('(lg|[12345]x)'⎕S'\1')icon     ⍝ do not use GetSize here - we're interested to see if it has been set or not
          res←icon,' 1x'
      :EndIf
    ∇

    ∇ res←RemoveSize arg
    ⍝ remove Size attribute from element
      :Access public
      res←(' (lg|[12345]x)'⎕R'')arg ⍝ preferreably remove size alone
      :If res≡arg
          res←('-(lg|[12345]x)'⎕R'')res    ⍝ remove size appended to icon
      :EndIf
    ∇

    ∇ R←setClass includeFamily
      R←Family{⎕ML←1 ⋄ (includeFamily/⍺),∊(' ',⍺,'-')∘,¨1↓¨(⍵=' ')⊂⍵}' ',icon
    ∇
    
    
    ∇ {R}←Classname DeriveClass(rsc fmly);cls
      :Access public shared
      ⍝ example: 'myfa'DeriveClass'FontAwesome'  'fa'
      ⍝          Add _.myfa'camera'
      :If rsc[1]=':'
          rsc←'⍎https://use.fonticons.com/',(1↓rsc),'.js'
      :EndIf
      cls←ScriptFollows
      ⍝ :Class %Classname : #._DC.FontIconsBase
      ⍝   :field public readonly shared Family←'%family'
      ⍝   :field public readonly shared Resource←'%Resource'
      ⍝   ∇ make0
      ⍝     :access public
      ⍝      Resource {6::⍺∇1↓⍵ ⋄ 0<⍴⍵:(1⊃⍵).Use ⍺}⎕rsi ⍝ find environment where we can execute "Use"
      ⍝     :implements constructor :base
      ⍝   ∇
      ⍝
      ⍝   ∇ make1 arg
      ⍝     :access public
      ⍝      Resource {6::⍺∇1↓⍵ ⋄ 0<⍴⍵:(1⊃⍵).Use ⍺}⎕rsi ⍝ find environment where we can execute "Use"
      ⍝     :implements constructor :base arg
      ⍝   ∇
      ⍝
      ⍝   ∇ make2 (arg1 arg2)
      ⍝     :access public
      ⍝      Resource {6::⍺∇1↓⍵ ⋄ 0<⍴⍵:(1⊃⍵).Use ⍺}⎕rsi ⍝ find environment where we can execute "Use"
      ⍝     :implements constructor :base (arg1 arg2)
      ⍝   ∇
      ⍝ :EndClass
      cls←(('%Classname'Classname)('%family'fmly)('%Resource'rsc))Subst cls
     
      ⍝ Morten: ⎕fix did not like to fix the class as vector with NL - perhaps an extension for the future???
      cls←(⎕UCS 13)#.Utils.penclose cls~⎕UCS 10
     
      :If 0=⎕NC'#._' ⋄ '#._'⎕NS'' ⋄ :EndIf ⍝ might not be there yet during boot, when FontAwesome-Class is being set up...
      R←#._.⎕FIX cls
    ∇
    
   ⍝ ideally FontAwesome should be made available right after loading this class by calling:
   ⍝ 'FontAwesome'DeriveClass'FontAwesome' 'fa'
   ⍝
   ⍝It could happen - see Morten's mail from Oct 28th:
     ⍝ Meanwhile, how about MiServer called pre-initialisers by convention, i.e. if a loaded class has a shared method called 
     ⍝ “ClassConstructor”, then MiServer will call it after everything else has been loaded and before it starts serving content?   
     ⍝ Until then it has to be manually initialised on every page using it...
:EndClass
