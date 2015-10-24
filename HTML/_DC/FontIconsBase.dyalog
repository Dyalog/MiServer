:Class FontIconsBase :  #.HtmlElement
    :field public shared readonly DocBase←'http://fontawesome.io/icons/'
    :field public Family←'fa'  ⍝ bt=Blacktie or other prefixes for FontIcons
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

    ∇ {r}←stack arg
      :Access public    
      r←New FontIconsBase arg
      r.Family←Family
      Stack,←r
     
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
     
    ⍝ Brian: unfortunately this usage of "Uses" does not work, if has no effect on the header (also see my email from Oct17th)
      Uses←Resource
     
      :If 0<⍴Stack
          Stack∆←Stack
          Stack←⍳0
          :If 0<⍴icon
              icon←(RemoveSize icon),' stack',GetSize
              r←Render  ⍝ first elem
          :Else
              r←''
          :EndIf
          :For obj :In Stack∆
              obj.icon←(RemoveSize obj.icon),' stack',obj.GetSize
              r∆←obj.Render
              r,←r∆
          :EndFor
          icon←'stack ',StackSize ⋄ Container←'span'
          Content←r
      :EndIf
      Tag←Container
      :If 0<⍴icon ⋄ icon←SetSize ⋄ class←setClass(0=⎕NC'Stack∆') ⋄ :EndIf
      r←⎕BASE.Render
    ∇
    
    ∇ r←GetSize
    ⍝ searches icon for a size-specification
      :Access public
      :If 0=⍴r←('-(lg|[12345]x)'⎕S'\1')icon
          r←'-1x'
      :EndIf
    ∇

    ∇ res←SetSize
    ⍝ searches icon for a size-specification
      :Access public
      res←icon
      :If 0=⍴('-(lg|[12345]x)'⎕S'\1')icon     ⍝ do not use GetSize here - we're interested to see if it has been set or not
          res←icon,' 1x'
      :EndIf
    ∇

    ∇ res←RemoveSize res
    ⍝ remove Size attribute from element
      :Access public
      res←('-(lg|[12345]x)'⎕R'')res
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
      ⍝   :field public readonly family←'%family'
      ⍝   :field public readonly Resource←'%Resource'
      ⍝   ∇ make0
      ⍝     :access public
      ⍝      Resource {6::⍺∇1↓⍵ ⋄ (1⊃⍵).Use ⍺}⎕rsi ⍝ find environment where we can execute "Use"
      ⍝     :implements constructor :base
      ⍝   ∇
      ⍝
      ⍝   ∇ make1 arg
      ⍝     :access public
      ⍝      Resource {6::⍺∇1↓⍵ ⋄ (1⊃⍵).Use ⍺}⎕rsi ⍝ find environment where we can execute "Use"
      ⍝     :implements constructor :base arg
      ⍝   ∇
      ⍝
      ⍝   ∇ make2 (arg1 arg2)
      ⍝     :access public
      ⍝      Resource {6::⍺∇1↓⍵ ⋄ (1⊃⍵).Use ⍺}⎕rsi ⍝ find environment where we can execute "Use"
      ⍝     :implements constructor :base (arg1 arg2)
      ⍝   ∇
      ⍝ :EndClass
      cls←(('%Classname'Classname)('%family'fmly)('%Resource'rsc))Subst cls
     
      ⍝ Morten: ⎕fix did not like to fix the class as vector with NL - perhaps an extension for the future???
      cls←(⎕UCS 13)#.Utils.penclose cls~⎕UCS 10
     
      :If 0=⎕NC'#._' ⋄ '#._'⎕NS'' ⋄ :EndIf ⍝ might not be there yet during boot, when FontAwesome-Class is being set up...
      R←#._.⎕FIX cls
    ∇
    
   ⍝ ideally FontAwesome should be made available right after loading this class...
   ⍝ 'FontAwesome'DeriveClass'FontAwesome' 'fa'
:EndClass
