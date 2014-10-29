:Namespace JQM

⍝ JQuery Mobile namespace. V1.08 Dyalog 2012
⍝ This namespace contains classes to deal with JQuery Mobile.

    ⎕IO ⎕ML←1 ⋄ CRLF←⎕av[4 3]

    Create←{⎕NEW JQM ⍵}

    :class JQM ⍝ JQuery Mobile WebPage class

    ⍝ An instance can only have a body which can have 0 or more pages only.
    ⍝ Page(s) are basepages, like Dialog(s).
    ⍝ A basePage contains header, contents and footer.

        :field public Request
        :field public Title←''  ⍝ application Title
        :field public Body

        ∇ Make req
          :Implements constructor
          :Access public
          Request←req
          Request.Use'JQueryMobile'
          Body←⎕NEW HtmlElement
          :Trap 6 ⋄ ⎕DF Title←req.Server.Config.Name ⋄ :EndTrap
        ∇

        ∇ r←Render
          :Access public
          :If 0<⍴Title ⋄ Request.Response.HTMLHead,←'title'#.HTMLInput.Enclose Title ⋄ :EndIf
          r←Body.Render
        ∇

        ∇ {p}←AddPage t;title;name;id ⍝ individual page Title and name
        ⍝ Typical use: <div data-role="page"...>
          :Access public
          t←⊂⍣(2>|≡t)+t
          (title name id)←3↑t,'' ''
          :If 0∊⍴id
              id←name{0∊⍴⍺:'Form',⍕⍵ ⋄ ⍺}1+⍴Body.InnerHTML
          :EndIf
          p←⎕NEW Page(('data-title'title)('id'id),(0<⍴name)/⊂'name'name)
          Body.Add p
        ∇

    :EndClass  ⍝ JQM

    :section HE
    ⍝ HtmlElement(s) are the ultimate building blocks of pages.

    :class HtmlElement             ⍝ this is the most basic element of a page
        :field public TAG←''       ⍝ this is the tag, ex: <ul...>, can contain attributes
        :field public InnerHTML←'' ⍝ this is a series of strings/instances/class+parms
        :field public ATTR         ⍝ these are all the secondary attributes

        ∇ Make0
          :Implements constructor
          :Access public
          ATTR←⎕NEW #.ValuePairs
        ∇
        ∇ Make1 t    ⍝ this can be any length
          :Implements constructor
          :Access public
          TAG←t ⋄ ATTR←⎕NEW #.ValuePairs
        ∇
        ∇ Make2(t elem)            ⍝ elements can be added here
          :Implements constructor
          :Access public
          TAG←t ⋄ ATTR←⎕NEW #.ValuePairs
          Add elem
        ∇
        ∇ Make3(t elem a)          ⍝ elements and attributes added here
          :Implements constructor
          :Access public
          TAG←t ⋄ ATTR←⎕NEW #.ValuePairs a
          Add elem
        ∇

⍝ ----- Rendering code -------

        ∇ r←RenderElements InnerHTML
          :Access public
        ⍝ This fn is used to avoid replacing the Field InnerHTML
          r←Render ⍝ Render uses global 'InnerHTML'
        ∇

        ∇ r←Render;av;t;vs
          :Access public
        ⍝ Render by first constructing the TAG, complete with attributes, if any
          av←''
          :If 0<⍴vs←ATTR.Pairs[]
              av←∊{' ',⍺,'=',Quote,⍕⍵}/¨vs
          :EndIf
          t←TAG,(0<⍴,TAG)/av
          r←t Enclose Compose InnerHTML
        ∇

        ∇ r←postrender r
          :Access overridable
        ∇

        ∇ r←Compose list;x
          :Access public
        ⍝ This is the fn that does the bulk of the rendering work
        ⍝ It lays down the look of each element
          r←''
          →0↓⍨⍴,list
          :For x :In eis list
              r,←{326=⎕DR ⍵:postrender ⍵.Render ⋄ ⍕⍵⊣÷≡⍵}x ⍝ ** TEMP: ÷≡⍵ to detect simple scalars: there should be none
          :EndFor
        ∇

⍝ ----- Utilities ---------

        ∇ r←a Enclose w;nl
          :Access public
          r←(a #.HTMLInput.Enclose w,⍨(~0∊⍴w)/nl),⍨(~0∊⍴a)/nl←⎕AV[4 3]
        ∇

        ∇ r←eis w
          :Access public
          r←⊂⍣((326∊⎕DR w)<2>|≡w),w ⍝ enclose if simple and not mixed
        ∇

        ∇ r←Quote a;b
          :Access public
          b←1↓<⌿¯1 0⌽'\"'∘.=';',a ⍝ keep \" as is
          (b/a)←⊂'&quot;'
          r←1⌽'""',∊a
        ∇

        ∇ {r}←Add args;t;i
        ⍝ add "something" to the InnerHTML
        ⍝ args can be an instance, a class, or just html/text
          :Access public
          :If ~0∊⍴args
              InnerHTML,←⎕NEW∘{2<⍴,⍵:(⊃⍵)(1↓⍵) ⋄ ⍵}⍣(isClass⊃args)eis args
          :EndIf
          r←⎕THIS
        ∇

        ∇ {r}←Last
          :Access public
          r←⊃⌽InnerHTML
        ∇

        ∇ r←isClass ao
          :Access public
          r←9.4∊⎕NC⊂'ao'
        ∇

⍝ ------ Attributes ------

⍝ Notes about attributes:
⍝ To make HTML attributes more easily accessible from APL, and to not encumber this implementation
⍝ trying to approach a complete HTML implementation we've done the following:
⍝ - we are NOT attempting to model every valid HTML attribute name, we've tried to implement a subset that addresses the vast majority of common usage patterns
⍝ - while HTML attributes are case insensitive, APL names aren't, so attrs.(this THIS) are two separate APL variables

        ∇ {vals}Attr atts;mask
          :Access Public
          →0↓⍨⍴,atts ⍝ anything to do?
          :If 0=⎕NC'vals'
              :Select |≡atts
              :Case 2 ⍝ name/value pairs in a simple list
                  mask←(⍴atts)⍴1 0
                  ⎕SIGNAL(¯1↑mask)/5
                  vals←(~mask)/atts
                  atts←mask/atts
              :Case 3 ⍝ a list of name/value pairs
                  ⎕SIGNAL(2∨.≠∊⍴¨atts)/5
                  (atts vals)←↓⍉↑atts
              :Else ⋄ ⎕SIGNAL 36 ⍝ incompatible array
              :EndSelect
          :EndIf
          ATTR.Values[atts]←eis vals
        ∇

    :endclass  ⍝ HtmlElement
    :endsection

  ⍝ The following 2 classes can be added to a JQM instance

    :Class Page : basePage
        :Field public readonly MyAttrs←'data-add-back-btn' 'data-back-btn-next' 'data-back-btn-theme' 'data-dom-cache' 'data-overlay-theme' 'data-url' 'data-theme' 'data-content-theme' 'data-overlay-theme'

        ∇ Make0
          :Access public
          :Implements constructor :Base 'div data-role="page"'
         ⍝ ATTR.Values['']←⊂'page'
        ∇

        ∇ Make1 args
          :Access public
          :Implements constructor :Base  'div data-role="page"' '' args
         ⍝ ATTR.Values['data-role']←⊂'page'
        ∇
    :EndClass  ⍝ Page

    :Class Dialog : basePage
        :Field public readonly MyAttrs←'data-close-btn-text' 'data-dom-cache' 'data-overlay-theme' 'data-theme' 'data-title'

        ⍝ This class requires an arg coming from Page or Dialog
        ∇ Make1 args
          :Access public
          :Implements constructor :Base 'div data-role="dialog"' '' args
        ∇
    :EndClass  ⍝ Dialog

    :Class basePage : HtmlElement
    ⍝ see Page and Dialog which are derived from this class

    ⍝ A page is made up of a Header, some Contents and a Footer
    ⍝ It has no other HTML element as such. Any element should go into the Contents.
    ⍝ It may also support a submission Method

        :Field public Head
        :Field public Foot
        :Field public Contents
        :Field public FormMethod←'post'  ⍝// the only other method is GET
        :field public FormAction←''
        :field public Name←''

        ∇ Make0
          :Access Public
          :Implements Constructor
        ∇

        ∇ Make1 args
          :Access Public
          :Implements Constructor :Base args
        ∇

        ∇ {r}←AddFooter ih
          :Access public
          :If {6::0 ⋄ 1⊣Foot}0
              Foot.InnerHTML,←ih
          :Else
              Foot←⎕NEW Footer ih
          :EndIf
          r←Foot
        ∇

        ∇ {r}←AddHeader ih
          :Access public
          :If {6::0 ⋄ 1⊣Head}0
              Head.InnerHTML,←ih
          :Else
              Head←⎕NEW Header ih
          :EndIf
          r←Head
        ∇

        ∇ {r}←Add ih ⍝ override the base fn, add to contents only
          :Access public
          r←AddContent ih
        ∇

        ∇ {r}←AddContent ih
          :Access public
          ih←⎕NEW⍣(isClass⊃ih)+ih
          :If {6::0 ⋄ 1⊣Contents}0
              Contents.InnerHTML,←ih
          :Else
              Contents←⎕NEW Content ih
          :EndIf
          r←Contents
        ∇

        ∇ {r}←AddControlGroup arg ⍝ arg is 3 things: ID, choices (many), label
          :Access public
          AddContent r←⎕NEW ControlGroup arg
        ∇

        ∇ {r}←AddRadioGroup arg ⍝ arg is 3 things: ID, choices (many), label
          :Access public
          AddContent r←⎕NEW RadioGroup arg
        ∇

        ∇ {r}←AddCheckboxGroup arg
          :Access public
          AddContent r←⎕NEW CheckboxGroup arg
        ∇

        ∇ {r}←AddBR ⍝ HTMLInput has a fn (BR) to do this but it requires an argument.
          :Access public
          r←AddContent⊂'<br/>',##.CRLF ⍝ this won't work under Classic Unix
        ∇

        ∇ {r}←UseForm action
          :Access public
          FormAction←action ⍝ why not an attribute?
          r←⎕THIS
        ∇

        ∇ r←Render;action
          :Access public
         ⍝ This is a basePage rendering fn.
          r←,{6::'' ⋄ Head.Render}⍬ ⍝ InnerHTML is always there but will be empty
          r,←{6::'' ⋄ Contents.Render}⍬
          r,←{6::'' ⋄ Foot.Render}⍬
          action←'form method="',FormMethod,'"',{(0<⍴⍵)/' action="',⍵,'"'}FormAction   ⍝ using an action?
         ⍝ The form must be within the page otherwise there will be 2 postings when a button is pressed
          r←RenderElements action Enclose r ⍝ add remaining tag
        ∇

    :EndClass ⍝ basePage

    :Class Header : pageAnnotation

        ∇ Make0
          :Access public
          :Implements constructor :Base 'div data-role="header"'
        ∇

        ∇ Make1 t
          :Access public
          :Implements constructor :Base 'div data-role="header"'
          Title←t
        ∇

        ∇ Make2(t a)
          :Access public
          :Implements constructor :Base 'div data-role="header"'
          Title←t
          Attr a
        ∇
    :EndClass

    :Class Footer : pageAnnotation

        ∇ Make0
          :Access public
          :Implements constructor :Base 'div data-role="footer"'
        ∇

        ∇ Make1 t
          :Access public
          :Implements constructor :Base 'div data-role="footer"'
          Title←t
        ∇

        ∇ Make2(t a)
          :Access public
          :Implements constructor :Base 'div data-role="footer"'
          Title←t
          Attr a
        ∇
    :EndClass


    :Class pageAnnotation : HtmlElement
        :Field public readonly MyAttrs ← 'data-id' 'data-position' 'data-fullscreen' 'data-theme'
        :Field public Left←''
        :field public Title←''
        :field public Right←''
        :field public HLevel←1

        ∇ Make1 args
          :Access public
          :Implements constructor :Base args
        ∇

        ∇ r←Render;t
          :Access public
          t←Title
          :If HLevel≠0
              t←('h',⍕HLevel)Enclose Title
          :EndIf
          InnerHTML←''
          (Add Left).(Add t).Add Right
          r←⎕BASE.Render
        ∇
    :endclass


⍝ ------- Groups --------

⍝ Label has a for-attribute, which uses the id of your input to link this label to your input (when you click the label, the button is checked)

    :class Group: HtmlElement
        :Field public readonly MyAttrs←,⊂'data-mini'
        :field public ID
        :field public Label
        :field public Choices
        :field public ButtonType

       ⍝ These 2 are not public
        :field private Container  ⍝ this will contain the group
        :field private Set        ⍝ this will contain the individual buttons

        _horizontal←0

        ∇ Make(i c l)
          :Access public
          :Implements constructor
          (ID Choices Label)←i c l
          Container←⎕NEW FieldContain
          Set←⎕NEW FieldSet ⍝ this will contain the choices
        ∇

        ∇ {r}←Horizontal onoff
          :Access Public
          _horizontal←onoff
          r←⎕THIS
        ∇

        ∇ r←Render;c;cnt;n;v;nv;input
          :Access public
        ⍝ A group consists of a Legend section followed by a series
        ⍝ of labels made of input items as in
        ⍝ <legend>Bread</legend>
        ⍝ <label><input type="radio" id="bread-1" name="bread" value="White"></input>White</label>
         
          Container.InnerHTML←''
          :If _horizontal ⋄ 'horizontal'Set.Attr'data-type' ⋄ :EndIf
          :If 2=⍴⍴c←Choices ⋄ nv←⊂[1]c
          :ElseIf 2=≡c ⋄ nv←c c ⍝ name=value
          :Else ⋄ nv←↓⍉↑c
          :EndIf
          Set.InnerHTML←⊂'legend'Enclose Label  ⍝ the legend
          cnt←1
          :For (n v) :InEach nv
              :If 326∊⎕DR n ⋄ n←n.Render ⋄ :EndIf
              input←(⎕NEW Input(ButtonType''(↓3 2⍴'id'(ID,'-',⍕cnt)'name'ID'value'v))).Render
              Set.InnerHTML,←⊂'label'Enclose input,n
              cnt+←1
          :EndFor
          Container.Add Set
          r←RenderElements Container
        ∇
    :endclass

    :class CheckboxGroup: Group

        ∇ Make(i c l)
          :Access public
          :Implements constructor  :base  i c l
          ButtonType←'checkbox'
          ⎕DF'CG ',i
        ∇

    :endclass  ⍝ RadioGroup

    :class RadioGroup: Group

        ∇ Make(i c l)
          :Access public
          :Implements constructor  :base  i c l
          ButtonType←'radio'
          ⎕DF'RG ',i
        ∇

    :endclass  ⍝ RadioGroup

    :class ControlGroup: Group

        ∇ Make(i c l)
          :Access public
          :Implements constructor  :base  i c l
          ButtonType←'button'
         ⍝ TAG←'div data-role="controlgroup"'
          ⎕DF'CG ',i
        ∇

    :endclass  ⍝ ControlGroup

    :Class FieldContain : HtmlElement
        :Field public readonly MyAttrs←,⊂'data-mini'
       ⍝ :field public LabelTxT
        :field public LabelPos←'before' ⍝ before or after

        ∇ Make0
          :Access public
          :Implements constructor :Base 'div data-role="fieldcontain"'
        ∇

        ∇ make3(label object forid);args;b;add
        ⍝ 3 args are: label, the object to add and its id
          :Access public
          :Implements constructor :Base 'div data-role="fieldcontain"'
        ⍝ Find the id of the object, it may be different from the one specified
          :If object.ATTR.exists'id'
              forid←⊃object.ATTR.Values[⊂'id']   ⍝#.ValuePairs
          :EndIf
          :If ~0∊⍴label
              Add ⎕NEW Label(label forid) ⍝ the label
          :EndIf
          Add object
        ⍝ We default name and id to 'forid'
          add←(~object.ATTR.exists'name' 'id')/('name'forid)('id'forid)
          object.Attr add
        ∇

        ∇ r←Render;elem
          :Access public
          :If {6::0 ⋄ 1⊣Label}elem←InnerHTML
              elem←(LabelPos≢'before')⌽elem
          :EndIf
          r←RenderElements elem
        ∇
    :EndClass ⍝ FieldContain


    :Class FieldSet : HtmlElement ⍝ This is a container. It may have the attribute class="ui-grid-solo/a/b/c/d".

        :field public readonly MyAttrs←'data-mini' 'data-type'
        :field public Legend

        ∇ Make0
          :Access public
          :Implements constructor :Base 'fieldset data-role="controlgroup"'
        ∇

        ∇ Make1 args
          :Access Public
          :Implements Constructor :Base (⊂'fieldset data-role="controlgroup"'),eis args
        ∇

        ∇ {r}←AddElement e;n
          :Access public
          n←5⌊⍴InnerHTML←InnerHTML,e
          TAG←1⌽'"fieldset class="ui-grid-',n⊃(⊂'solo'),'abcd'
          r←⎕THIS
        ∇

 ⍝       ∇ r←postrender r
⍝          :Access public override
⍝          r←'div class="ui-block-a"'Enclose r
⍝        ∇

⍝        ∇ r←Render;t
⍝          :Access public
⍝          t←''
⍝          :If {6::0 ⋄ 1⊣Legend}0
⍝              t←⊂'legend'Enclose Legend
⍝          :EndIf
⍝          InnerHTML←t,InnerHTML
⍝          r←⎕BASE.Render
⍝        ∇
    :EndClass ⍝ FieldSet

    :section Lists

⍝ Lists (ordered or not) are made of listitems.
⍝ Lists come in many flavours
⍝ Listitems may be simple hrefs or other lists

⍝ Ex: L←(page.Add Ul).Last ⍝ add an unordered list

    :Class List : HtmlElement
        :Field public Items←''
        :Field public ListType

        ∇ AddTo args
          :Access Public
          Items,←args
        ∇

        ∇ r←Render
          :Access Public
          r←RenderElements Items
        ∇
    :EndClass

    :Class Ul : List
        Tag←'ul data-role="listview"'

        ∇ Make0
          :Access public
          :Implements constructor :base Tag
        ∇

        ∇ Make1 args
          :Access public
          :Implements constructor :Base (⊂Tag),eis args
        ∇

    :EndClass  ⍝ Ul

    :Class Ol : List
        Tag←'ol data-role="listview"'

        ∇ Make0
          :Access public
          :Implements constructor :base Tag
        ∇
        ∇ Make1 args
          :Access public
          :Implements constructor :Base (⊂Tag),eis args
        ∇
    :EndClass  ⍝ Ol

    :endsection ⍝ lists

⍝ ------ Elements ------

    :Class Li : HtmlElement
        ∇ Make0
          :Access public
          :Implements constructor :base 'li'
        ∇

        ∇ Make1 args
          :Access public
          :Implements constructor :Base args
          TAG←'li'
        ∇
    :EndClass

    :Class Label : HtmlElement
        ∇ Make0
          :Access public
          :Implements constructor :Base ('label')
        ∇

        ∇ Make1 ih
          :Access Public
          :Implements Constructor :Base ('label' ih)
        ∇

        ∇ Make2(att for)
          :Access Public
          :Implements Constructor :Base ('label' att ('for' for))
        ∇
    :EndClass  ⍝ Label

    :Class DialogLink : HtmlElement
        :Field public readonly MyAttrs←,⊂'data-transition'

        ∇ Make2(href ih)
          :Access public
          :Implements constructor :Base ('a' ih (('href' href)('data-rel' 'dialog')))
        ∇
    :EndClass  ⍝ DialogLink


    :Class Button : HtmlElement
        :Field public readonly MyAttrs← 'data-corners' 'data-icon'  'data-iconpos'  'data-iconshadow'  'data-inline'  'data-mini'  'data-shadow' 'data-theme'

        ∇ Make1 Type ⍝ type is one of: a, button, submit, reset, image
          :Access public
          :Implements constructor
          Build Type
        ∇

        ∇ Make2(Type args)
          :Access public
          :Implements constructor :Base '' '' args
          Build Type
        ∇

        ∇ Build Type
          :If (,Type)≡,'a'
              TAG←'a data-role="button"'
          :Else
              TAG←'input type="',Type,'"'
          :EndIf
        ∇
    :EndClass  ⍝ Button


    :Class BackButton : Button

        ∇ Make1 cap
          :Access public
          :Implements constructor :Base 'a'
          Attr'data-rel' 'back' 'data-icon' 'delete'
          InnerHTML←cap
        ∇

        ∇ Make2(cap attr)
          :Access public
          :Implements constructor :Base 'a'
          Attr'data-rel' 'back' 'data-icon' 'delete'
          Attr attr
          InnerHTML←cap
        ∇
    :endclass  ⍝ BackButton

    :Class SubmitButton : HtmlElement

        ∇ Make1 cap
          :Access public
          :Implements constructor :Base 'a'
          Attr'data-icon' 'check' 'onclick' '$(this).parentsUntil(''form'').submit();return false'
          InnerHTML←cap
        ∇

        ∇ Make2(cap attr)
          :Access public
          :Implements constructor :Base 'a'
          Attr'data-icon' 'check' 'onclick' '$(this).parentsUntil(''form'').submit();return false'
          Attr attr
          InnerHTML←cap
        ∇
    :endclass  ⍝ SubmitButton


    :class Input : HtmlElement  ⍝?
        :field public readonly MyAttrs←'data-mini' 'data-theme'
       ⍝ :field public Type←'text' ⍝ HTML5 <input type="...">
        :field public Text←''
        :field public LabelPos←'after' ⍝ valid = 'before' | 'after'

        ∇ Make arg
        ⍝ The argument may be simple, it is then an ID; otherwise it is multiple arguments
          :If 1≠≡Type←arg
              (Type Text arg)←arg
          :EndIf
        ⍝ If not simple this will fail...???
          :Implements constructor :base ('input type="', Type,'"')Text arg
          :Access public
        ∇

⍝        ∇ r←Render;l
⍝          :Access public
⍝          r←⎕BASE.Render
⍝          :If ~0∊⍴Label
⍝              r←'label'Enclose∊(LabelPos≡'after')⌽Label r
⍝          :EndIf
⍝        ∇
    :endclass  ⍝ Input



    :Class Checkbox : HtmlElement  ⍝?
        :field public readonly MyAttrs←'data-mini' 'data-theme'

        ∇ Make0
          :Access public
          :Implements constructor :Base 'input type="checkbox"'
          ATTR.Values['checked']←⊂'checked'
        ∇

        ∇ Make1 args
          :Access public
          :Implements constructor :Base args
          TAG←'input type="checkbox"'
          ATTR.Values['checked']←⊂'checked'
        ∇

        :property checked
        :access public
            ∇ set v
              :If 0≢v.NewValue
                  ATTR.Values['checked']←⊂'checked'
              :Else
                  ATTR.remove⊂'checked'
              :EndIf
            ∇
            ∇ r←get
              r←ATTR.DValues[⊂'checked']
            ∇
        :endproperty
    :EndClass  ⍝ Checkbox



    :Class Collapsible : HtmlElement
        :Field public readonly MyAttrs←'data-collapsed' 'data-collapsed-icon' 'data-content-theme' 'data-expanded-icon' 'data-iconpos' 'data-mini' 'data-theme'
        :Field public heading  ⍝ ??? where is this used?
        :Field public HLevel
        :Field public Contents

        ∇ Make0
          :Access public
          :Implements constructor
          TAG←'div data-role="collapsible"'
        ∇

        ∇ Make1 args
          :Access public
          :Implements constructor :Base args
          TAG←'div data-role="collapsible"'
        ∇

        ∇ r←Render
          :Access public
          r←RenderElements Contents,⍨(¯2↑'h',⍕HLevel)Enclose heading
         
        ∇
    :EndClass  ⍝ Collapsible



    :Class CollapsibleSet : HtmlElement  ⍝?
        :Field MyAttrs←'data-collapsed-icon' 'data-content-theme' 'data-expanded-icon' 'data-iconpos' 'data-mini' 'data-theme'

        ∇ Make0
          :Access public
          :Implements constructor
          TAG←'div data-role="collapsible-set"'
        ∇

        ∇ Make1 args
          :Access public
          :Implements constructor :Base args
          TAG←'div data-role="collapsible-set"'
        ∇
    :EndClass  ⍝ CollapsibleSet



    :Class Content : HtmlElement
        :Field public readonly MyAttrs←,⊂'data-theme'

        ∇ Make0
          :Access public
          :Implements constructor :Base 'div data-role="content"'
        ∇

        ∇ Make1 args
          :Access public
          :Implements constructor :Base 'div data-role="content"' args
        ∇
    :EndClass  ⍝ Content


    :Class Enhancement : HtmlElement
        :Field public readonly MyAttrs←'data-enhance' 'data-ajax'
        ∇ Make0
          :Access public
          :Implements constructor
          TAG←'div data-enhance="none"'
        ∇
        ∇ Make1 args
          :Access public
          :Implements constructor :Base args
          TAG←'div data-enhance="none"'
        ∇
    :EndClass  ⍝ Enhancement


    :Class A : HtmlElement
        :Field Public Href←''
        ∇ Make0
          :Access public
          :Implements constructor
          TAG←'a'
        ∇

        ∇ Make1 args
          :Access public
          :Implements constructor :Base args
          TAG←'a'
        ∇
    :EndClass

    :Class Flip : HtmlElement
       ⍝ A Flip switch has a label followed by a <select> tag, see view-source:http://jquerymobile.com/test/docs/forms/forms-all.html
        :Field public readonly MyAttrs←'data-mini' 'data-theme' 'data-track-theme'
        :field public Options←'Off' 'On'
        :field public Label←''

        ∇ Make0
          :Access public
          :Implements constructor :Base 'select data-role="slider"'
        ∇
        ∇ Make1 id
          :Access public
          :Implements constructor :Base 'select data-role="slider"' '' ('id' id)
        ∇

        ∇ Make2(id lab)
          :Access public
          :Implements constructor  :Base 'select data-role="slider"'  '' ('id' id)
          Label←lab
        ∇

        ∇ Make3(id lab opts)
          :Access public
          :Implements constructor :Base 'select data-role="slider"' ''  ('id' id)
          Label←lab
          Options←opts⊣÷(,2)≡⍴opts ⍝ Off/On labels
        ∇

        ∇ r←Render
          :Access public
          r←RenderElements InnerHTML,⊂fmtOpts
        ∇

        ∇ r←fmtOpts;nl
          r←Options{⍺ ⍵}¨'off' 'on'
          r←nl,∊{'<option value="',(2⊃⍵),'">',(1⊃⍵),'</option>',nl}¨r⊣nl←⎕AV[4 3]
        ∇

    :EndClass


    :Class Link : HtmlElement
        :Field public readonly MyAttrs←'data-ajax' 'data-direction' 'data-dom-cache' 'data-prefetch' 'data-rel' 'data-transition' 'data-icon'

        ∇ Make0
          :Access public
          :Implements constructor :Base (,'a')
        ∇

        ∇ Make1 args
          :Access public
          :Implements constructor :Base (⊂,'a'),eis args
        ∇
    :EndClass


    :class ListElement: HtmlElement

        ∇ Make1 arg
          :Access public
          :Implements constructor :base 'ul data-role="listview"'
        ⍝ Each element in the argument is a list element
          InnerHTML←arg
        ∇

    :endclass  ⍝ ListElement


    :Class ListView : List
⍝ A listview is the basis for lists in JQM
⍝ It comes in many flavours, the most basic one is
        :Field public readonly MyAttrs ← 'data-autodividers' 'data-count-theme' 'data-divider-theme' 'data-filter' 'data-filter-placeholder' 'data-filter-theme' 'data-header-theme' 'data-inset' 'data-split-icon' 'data-split-theme' 'data-theme'
        :Field public Numbered ← 0
        ∇ Make0
          :Access public
          :Implements constructor
          Attr'data-role' 'listview'
          ItemClass←ListviewItem ⍝ this is a class
        ∇

        ∇ r←Render
          :Access Public
          TAG←(1+Numbered)⊃'ul' 'ol'
          r←⎕BASE.Render
        ∇

        ∇ AddRO html;inst
          :Access Public
        ⍝ Adds a read only list item
          Add ListviewItem html
        ∇

        ∇ AddLink args;inst
        ⍝ Adds a read only list item
          :Access Public
          args←eis args
          inst←Add LinkListviewItem
          inst.(url Text setattrs)←3↑args,'' ''
        ∇

        ∇ AddSplit ⍝?
        ∇
    :EndClass


    :Class ListviewItem : HtmlElement
        :Field  public readonly MyAttrs←'data-filtertext' 'data-icon' 'data-theme'
        ∇ Make0
          :Access public
          :Implements constructor :Base
          TAG←'li'
        ∇
        ∇ Make1 args
          :Access public
          :Implements constructor :Base args
          TAG←'li'
        ∇
    :EndClass

    :Class LinkListviewItem : ListviewItem          ⍝?
        :Field public URL
        :Field public Text
        :Field public SetAttrs

        ∇ Make0
          :Access public
          :Implements constructor
          TAG←'li'
        ∇

        ∇ Make1 args
          :Access public
          :Implements constructor :Base args
          TAG←'li'
        ∇

        ∇ r←Render
          InnerHTML←Add #.JQM.a Text('href'URL,SetAttrs)
          r←⎕BASE.Render
        ∇
    :EndClass   ⍝ LinkListviewItem


    :Class SplitListviewItem : ListviewItem

        ∇ Make0
          :Access public
          :Implements constructor
          TAG←'li'
        ∇

        ∇ Make1 args
          :Access public
          :Implements constructor :Base args
          TAG←'li'
        ∇

        ∇ Make2(linkargs args)
          :Access public
          :Implements constructor :Base args
          TAG←'li'
          Add¨eis linkargs
        ∇
    :EndClass  ⍝ SplitListviewItem


    :Class ListViewLink : ListviewItem
        :Field public Thumb←''
        :Field public Icon←''
        :Field public AltText←''

        ∇ Make0
          :Access public
          :Implements constructor
          TAG←'li'
        ∇

        ∇ Make1 args
          :Access public
          :Implements constructor :Base args
          TAG←'li'
        ∇

        ∇ Make2(linkargs args)
          :Access public
          :Implements constructor :Base args
          TAG←'li'
        ∇

        ∇ r←Render;ind
          :If ×ind←{⌈/1 2×~0∊∘⍴¨⍵}Thumb Icon
              #.HTMLInput.Tag'img src="',(Thumb Icon)[ind],'"',((~0∊⍴AltText)/' alt="',AltText,'"'),((2=ind)/' class="ui-li-icon"')
          :EndIf
          r←⎕BASE.Render
        ∇
    :EndClass  ⍝ ListViewLink


    :Class ListListviewItem : ListviewItem

        ∇ Make0
          :Access public
          :Implements constructor
          TAG←'li'
        ∇

        ∇ Make1 args
          :Access public
          :Implements constructor :Base args
          TAG←'li'
        ∇

        ∇ Make2(linkargs args)
          :Access public
          :Implements constructor :Base args
          TAG←'li'
        ∇

        ∇ r←Render
          InnerHTML←Add #.JQM.a Text('href'URL,attrs)  ⍝ #. ???
          r←⎕BASE.Render
        ∇
    :EndClass


    :Class Navbar : List
        :Field public readonly MyAttrs←'data-iconpos' 'data-theme'
        ∇ Make0
          :Access public
          :Implements constructor :Base
          TAG←'div data-role="navbar"'
          ItemClass←NavbarItem  ⍝ this is a class
        ∇


        ∇ Make1 args
          :Access public
          :Implements constructor :Base args
          TAG←'div data-role="navbar"'
          ItemClass←NavbarItem
        ∇

        ∇ r←Render
          :Access Public
          InnerHTML←'ul'#.HTMLInput.Enclose Items.Render
          Items←''
          r←⎕BASE.Render
        ∇

        ∇ AddTo(url cont)
          :Access Public
          ⎕BASE.AddTo''
          ((⍴Items)⊃Items).(Href Text)←url cont
        ∇
    :EndClass

    :Class NavbarItem : HtmlElement
        :Field public Href←'#'
        :Field public Text←''

        ∇ Make0
          :Access public
          :Implements constructor
          TAG←'a'
        ∇

        ∇ Make1 args
          :Access public
          :Implements constructor :Base args
          TAG←'a'
        ∇

        ∇ Make2(url content args)
          :Access public
          :Implements constructor :Base args
          TAG←'a'
          Href Text←url content
        ∇

        ∇ r←Render
          :Access Public
          Attr('href'Href)
          InnerHTML←Text
          r←⎕BASE.Render
          r←'li'#.HTMLInput.Enclose r
        ∇
    :EndClass


    :Class Radio : HtmlElement
    ⍝ Pairs of labels and inputs with type="radio" are auto-enhanced, no data-role required.
    ⍝ Multiple radio buttons can be wrapped in a container with a data-role="controlgroup" attribute for a vertically grouped set.
    ⍝ Add the data-type="horizontal" attribute for the radio buttons to sit side-by-side.
    ⍝ Add the data-mini="true" to get the mini/compact sized version for all the radio buttons that appear in the controlgroup.
        ∇ Make0
          :Access public
          :Implements constructor
          TAG←'input type="radio"'
        ∇
        ∇ Make1 args
          :Access public
          :Implements constructor :Base args
          TAG←'input type="radio"'
        ∇
    :EndClass

    :Class Select : HtmlElement
    ⍝ All select form elements are auto-enhanced, no data-role required
        :Field public readonly MyAttrs←'data-icon' 'data-iconpos' 'data-inline' 'data-mini'  'data-role' 'data-placeholder' 'data-overlay-theme'  'data-native-menu'
        ∇ Make0
          :Access public
          :Implements constructor:base 'select'
         ⍝ TAG←'select' ⍝ this MUST be done here, it cannot be done in the class defn
         ⍝ ItemClass←Option  ⍝ Option is a class
        ∇

        ∇ Make1 args;values;txt
          :Access public
          :Implements constructor :base 'select'
         ⍝ This version assumes lists are simple, no option yet
         ⍝ args is either a list of choices=values, or choice/value pairs (can be a matrix)
          :If 2≡≡args ⋄ values←txt←args
          :ElseIf 1∊⍴⍴args ⋄ (values txt)←↓⍉↑args
          :Else ⋄ (values txt)←↓⍉args
          :EndIf
          InnerHTML←values{⎕NEW Option(⍵('value'⍺))}¨txt
        ∇
    :EndClass

    :Class Option : HtmlElement
    ⍝ All select form elements are auto-enhanced, no data-role required
        ∇ Make0
          :Access public
          :Implements constructor :base 'option'
        ∇

        ∇ Make1 args
          :Access public
          :Implements constructor :Base (⊂'option'),args
        ∇
    :EndClass


    :Class Slider : HtmlElement
        :Field public readonly MyAttrs←'data-highlight' 'data-mini' 'data-track-theme' 'data-theme' 'data-role'
        :field public Value←1
        :field public Min←1
        :field public Max←100
        :field public Step←5
        Tag←'input type="range"'

        ∇ Make0
          :Access public
          :Implements constructor :base Tag
        ∇

        ∇ Make1 args
          :Access public
          :Implements constructor :Base Tag '' args
        ∇

        ∇ r←Render
          :Access public
          Value Min Max Step AddAttr'value' 'min' 'max' 'step'
          r←⎕BASE.Render
        ∇
    :EndClass

    :Class Text : HtmlElement
        :Field public readonly MyAttrs←'data-mini' 'data-role' 'data-theme'
        INtype←'input type="text"'
        ∇ Make0
          :Access public
          :Implements constructor :base INtype
        ∇

        ∇ Make1 args
        ⍝ Ex:  name="firstname" id="name1" value="JoBlo"
          :Access public
          :Implements constructor :base INtype '' args
        ∇

⍝        ∇ Make2(Type args)
⍝          :Access public
⍝          :Implements constructor :Base ('input type="',Type,'"'),eis args
⍝        ∇
    :EndClass


    :Class TextArea : HtmlElement
        :Field public readonly MyAttrs←'data-mini' 'data-role' 'data-theme'
        INtype←'textarea'
        ∇ Make0
          :Access public
          :Implements constructor :Base  INtype
        ∇
        ∇ Make1 args
          :Access public
          :Implements constructor :Base INtype '' args
        ∇
    :EndClass


    ∇ p←testPage
      p←Create ⎕NEW #.HTTPRequest('' '')
      p.AddPage'Page 1' 'Pname'
    ∇
:EndNamespace