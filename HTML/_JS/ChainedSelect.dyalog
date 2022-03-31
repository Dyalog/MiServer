:class ChainedSelect : #._html.select
⍝ Description:: Implements a hierarchical select across multiple levels
⍝ Constructor:: [options [[selected] [[disabled] [prompt]]]]
⍝ options   - 3 column matrix of displayed[;1] and returned[;2] values and their level/depth [;3]
⍝ selected  - Boolean or integer array indicating pre-selected option (consciously NOT supporting multiple selects)
⍝ disabled  - Boolean or integer array indicating disabled options(s)
⍝ prompt    - first item to display (has no value) (default '[Select]')
⍝
⍝ Public Fields::
⍝ Options   - 3 column matrix of displayed[;1] and returned[;2] values and their level/depth [;3]
⍝ Selected  - Boolean or integer array indicating pre-selected options
⍝ Disabled  - Boolean or integer array indicating disabled options(s)
⍝ Prompt      - first item to display (has no value) (default '[Select]')
⍝

    :field public Options←0 3⍴⊂''     ⍝ vector or matrix [;1] display, [;2] value [;3]=depth
    :field public Selected←⍬          ⍝ either Boolean integer vector indicating
    :field public Prompt←'[Select]'   ⍝ character vector "Prompt" choice - the first choice on the list and does not have a value
    :field public Disabled←⍬          ⍝ either Boolean integer vector indicating
    :field public Horizontal←1        ⍝ Orientation (Hz=0 implies one physical row per "sub-select" - within the same virtual row)
    :field public Labels←⍬            ⍝ Labels[n] is the label for the select on level n (useful if Horizontal=0)

    ∇ make
      :Access public
      :Implements constructor
    ∇

    ∇ make1 args;attr
      :Access public
      :Implements constructor
      args←eis args
      :If (|≡args)∊0 1 2
      :AndIf ~0∊⍴⊃args
          args←,⊂args
      :EndIf
      (Options Selected Disabled Prompt)←args defaultArgs Options Selected Disabled Prompt
    ∇

    parents←{0∊⍴⍵:⍬ ⋄ (⍴⍵),∇({+/∨\⍵<1↑⍵}⌽⍵)↑⍵}


    ∇ r←Render;opts;sel;dsp;rc;rtab
      :Access public
      Use'JQuery'
      Use'⍎/PlugIns/Other/chained/jquery.chained.min.js'
      Use'⍕/PlugIns/Other/chained/ChainedSelect.css'
      SetUse
     
    ⍝ nested/chained selects!
     
     
    ⍝ the control with the id given for this control will be a hidden input!
    ⍝ downside: visual attributes set on the control (in MS) will have no effect!
      value←''  ⍝ consider "Selected" for sensible value. if multiple, build a comma/blank-separated list?
      SetInputName
      id∆←id
      r←((id)('name="',id,'" value="',(1↓∊(⍕¨Selected),¨','),'"')'type=hidden'Add _.input).Render
      →(0∊2↑⍴Options)/0
      Options[;3]←{(∪⍵)[⍋∪⍵]⍳⍵}Options[;3] ⍝ make sure levels are consistently numbered
      Options[;2]←(↓(⍳1↑⍴Options),[1.5]⊂Options){
          (i o)←⍺                   ⍝ index and complete list of options
          0∊⍴o:⍬
          (0<1↑⍴,⍵)∧i=o[;2]⍳⊂⍵:⍵    ⍝ if current row has an id and has the first match, we are fine
          'opt',(⍕i),'_',⍵          ⍝ otherwise prefix with row no...
      }¨Options[;2]
      maxdepth←1↑⌈/Options[;3]
      Options←AddClasses Options maxdepth
      js←((ScriptFollows #.Strings.subst'%maxdepth%'(⍕maxdepth))#.Strings.subst'%prefix%'id∆),'$(function() {'
            ⍝ function changedChainedSelect(event)
            ⍝ {
            ⍝   if($(event.target).is(":visible"))
            ⍝   {
            ⍝     var lvl = $(event.target).data("lvl");
            ⍝     var dat = $(event.target).find('option:selected').data();
            ⍝     var ToHide = Array();
            ⍝     if (dat !== undefined)
            ⍝     { if (dat.hasOwnProperty("hidelevels"))
            ⍝       {
            ⍝         var ToHide = (dat.hidelevels).toString().split(",");
            ⍝       }
            ⍝       if (dat.hasOwnProperty("finalitem"))
            ⍝       {
            ⍝         var newval = $(event.target).find('option:selected').val();
            ⍝         $("#%prefix%").val(newval);
            ⍝         $("#%prefix%").trigger("change");
            ⍝       }
            ⍝     }
            ⍝
            ⍝     for (var i=lvl+1; i<=%maxdepth%; i++) {
            ⍝       var daId = '%prefix%_' + (i);
            ⍝       if (-1==ToHide.indexOf(i.toString())) {
            ⍝         $(".cs" + daId).show();
            ⍝       } else {
            ⍝         $(".cs" + daId).hide();
            ⍝       }
            ⍝     }
            ⍝   }
            ⍝ }
      SelectedOnAllLevels←∊(⊂Options[;3]){parents ⍵↑⍺}¨Selected
      rtab←(2,⍴uo←∪Options[;3])⍴⊂''
      :For level :In uo
          z←Options[;3]=level
          opts←z⌿Options
          sl←({⍵/⍳⍴⍵}z)∊SelectedOnAllLevels
          di←({⍵/⍳⍴⍵}z)∊Disabled
          slid←id∆,'_',⍕level
          dsp←(((0=+/sl)∧level>1)/' style="display:none"'),'>'  ⍝ set display-property and close tag
          :If 0<⍴lvlb←level{2>≡⍵:'' ⋄ ⍺>⍴⍵:'' ⋄ ⍺⊃⍵}Labels
              rtab[1;uo⍳level]←⊂'<label class="cs',slid,'" for="',slid,'"',dsp,lvlb,'</label>'
          :EndIf
          rc←'<select class="cs',slid,'" id="',slid,'" name="',slid,'" data-lvl="',(⍕level),'"'
          rc,←dsp
          rc,←BuildOptions opts sl di
          rc,←'</select>'
          rtab[2;uo⍳level]←⊂rc
          js,←'$("#',slid,'").on("change" , changedChainedSelect);'
          :If level>1
              js,←'$("#',slid,'").chained("#',id∆,'_',(⍕level-1),'"); '
          :EndIf
      :EndFor
      js,←'});'
      rtab←(⌽1,1<⍴∪∊rtab[1;])⌿rtab
      :If ~Horizontal ⋄ rtab←⍉rtab ⋄ :EndIf
      r,←'<table class="ChainedSelectNoBorders">',(∊(⊂'<tr>'),((⊂'<td>'),¨rtab,¨⊂'</td>'),⊂'</tr>'),'</table>'  
      r,←(Add _.Script js).Render
      r,←RenderHandlers
    ∇

    ∇ opts←{id}AddClasses(opts maxdepth);z;j
      opts←6↑[2]opts   ⍝ adds 4th&5th&6th col to Options-Matrix with classnames (for chainedselect: composed of ids from parent-selections [;4] and indicator if lower levels coming [;5] andif this is "final(ly an) item" [;6]
      :If 0=⎕NC'id' ⋄ id←'' ⋄ :EndIf
      :For z :In {⍵/⍳⍴⍵}opts[;3]=⌊/opts[;3]
          j←((z<⍳1↑⍴opts)∧opts[;3]≤opts[z;3])⍳1  ⍝ first entry of a same (or higher level) marks end of lower-level entries
          opts[z;4]←⊂id
          op5←''
          :If z=j-1   ⍝ no more items below
          :AndIf opts[z;3]<maxdepth  ⍝ and not at lowest level...
              op5←¯1↓∊(⍕¨opts[z;3]↓⍳maxdepth),¨','  ⍝ remember that we need to hide these levels...!
          :EndIf
          opts[z;5]←⊂op5
          opts[z;6]←(z=j-1)∨opts[z;3]=maxdepth   ⍝ nothing below or last level anyway...
          opts[z↓⍳j-1;]←(2⊃opts[z;])AddClasses opts[z↓⍳j-1;]maxdepth
      :EndFor
    ∇

    ∇ r←BuildOptions(opts sel dis);v
      r←''
      :If ~0∊⍴opts
          opts←eis opts
          :If 1=⍴⍴opts
              opts←opts,⍪opts
          :EndIf
      :EndIf
     
      v←⍳⍬⍴⍴opts
      (sel dis)←v∘∊∘{∧/⍵∊0 1:⍵/⍳⍴⍵ ⋄ ⍵}∘,¨sel dis
     
     
      :If ~0∊⍴Prompt
          r,←('disabled="disabled" selected="selected"'New #._html.option Prompt).Render
      :EndIf
      r,←FormatOptions(opts sel dis)
    ∇

    ∇ r←FormatOptions(opts sel dis);o;s;d
      :Access Public Shared
      r←''
      :If 1=⍴⍴opts ⋄ opts←opts,⍪opts ⋄ :EndIf
      :For o s d :InEach (↓opts)sel dis
          r,←'<option',({⍵ ine' value="',(HtmlSafeText ⍵),'"'}2⊃o),(s/' selected="selected"'),(d/' disabled="disabled"'),(' class="'{0=1↑⍴,⍵:'' ⋄ ⍺,⍵,'"'}4⊃o)
          r,←(6⊃o)/' data-finalitem="1"'
          r,←(' data-hidelevels="'{0=1↑⍴,⍵:'' ⋄ ⍺,⍵,'"'}⍕5⊃o),'>',(#.HtmlUtils.HtmlSafeText 1⊃o),'</option>'
      :EndFor
    ∇

⍝    ∇ r←{selector}ReplaceOptions args;sel;opts;dis
⍝ Not (yet) implemented...do we need that?
⍝     Replaces select elements options - used by callback functions
⍝ Ex: r←Execute ReplaceOptions ('New Option 1' 'New Option 2') 1
⍝     arg = options [[selected] [disabled]]
⍝      :Access public
⍝      :If 0=⎕NC'selector' ⋄ selector←'#',id ⋄ :EndIf
⍝      args←eis args
⍝      :If (|≡args)∊0 1 2
⍝      :AndIf ~0∊⍴⊃args
⍝          args←,⊂args
⍝      :EndIf
⍝      (opts sel dis)←args defaultArgs Options ⍬ ⍬
⍝      r←selector #.JQ.Replace BuildOptions(opts sel dis)
⍝    ∇
:endclass
