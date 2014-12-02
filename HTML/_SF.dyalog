:Namespace _SF

    :class _ejObject : #._JQ.JQObject
⍝ generic Syncfusion Enterprise JavaScript object
        :field public Container←''
        :field public ContainerType←'div'
        :field public Data←''
        :field public ControlContent

        ∇ make
          :Access public
          Options←⎕NS''
          ControlContent←⎕NEW #.HtmlElement
          Uses←{6::⍵ ⋄ 0∊⍴Uses:⍵ ⋄ Uses}'Syncfusion'
          :Implements constructor
        ∇

        ∇ r←Render;d;opts;att;sel
          :Access public
          r←''
          :If ~0∊⍴sel←Container
              att←''
              :Select ⊃Container
              :Case '#' ⍝ id?
                  att←' id="',1↓Container,'"'
              :Case '.' ⍝ class?
                  att←' class="',1↓Container,'"'
              :EndSelect
              :If ContainerType{⍵≡(⍴⍵)↑⍺}'input'
                  r←#.HTMLInput.Tag ContainerType,att,' name="',('.#'∊⍨⊃Container)↓Container,'"'
              :Else
                  r←(ContainerType,att)#.HTMLInput.Enclose ControlContent.Render
              :EndIf
              Selector←sel
          :EndIf
          r,←⎕BASE.Render
        ∇
    :endclass

    :section Web Widgets

    :class ejAccordion : _ejObject

        :field public Titles←0⍴⊂''
        :field public Sections←0⍴⊂''

        ∇ make
          :Access public
          JQueryFn←Uses←'ejAccordion'
          :Implements constructor
        ∇

        ∇ r←Render;title;section;h3
          :Access public
          :If ~0∊⍴Titles
              :For title section :InEach Titles((⊃⍴Titles)↑Sections)
                  ControlContent.Add #._html.h3 title'href="#"'
                  ControlContent.Add #._html.div section
              :EndFor
          :EndIf
          r←⎕BASE.Render
        ∇

    :EndClass

    :class ejAutocomplete : _ejObject

        :field public dataSource←0⍴⊂''

        ∇ make
          :Access public
          JQueryFn←Uses←'ejAutocomplete'
          :Implements constructor
        ∇

    :EndClass

    :class ejBarcode : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejBarcode'
          :Implements constructor
        ∇

    :EndClass

    :class ejBulletGraph : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejBulletGraph'
          :Implements constructor
        ∇

    :EndClass

    :class ejButton : _ejObject

        :field public Type←''
        :field public Text←''

        ∇ make
          :Access public
          JQueryFn←Uses←'ejButton'
          :Implements constructor
        ∇

    :EndClass

    :class ejChart : _ejObject

⍝        :field public series←⍬

        ∇ make
          :Access public
          JQueryFn←Uses←'ejChart'
          :Implements constructor
⍝          Options.series←,⎕NS''
        ∇

        ∇ r←Render
          :Access public
 ⍝         Options.series←1⌽'[]',#.JSON.fromAPL¨series
          r←⎕BASE.Render
        ∇

    :EndClass

    :class ejCheckBox : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejCheckBox'
          :Implements constructor
        ∇

    :EndClass

    :class ejCircularGauge : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejCircularGauge'
          :Implements constructor
        ∇

    :EndClass

    :class ejDatePicker : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejDatePicker'
          ContainerType←'input type="text"'
          :Implements constructor
        ∇

    :EndClass

    :class ejDateTimePicker : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejDateTimePicker'
          :Implements constructor
        ∇

    :EndClass

    :class ejDiagram : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejDiagram'
          :Implements constructor
        ∇

    :EndClass

    :class ejDialog : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejDialog'
          :Implements constructor
        ∇

    :EndClass

    :class ejDigitalGauge : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejDigitalGauge'
          :Implements constructor
        ∇

    :EndClass

    :class ejDraggable : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejDraggable'
          :Implements constructor
        ∇

    :EndClass

    :class ejDropDownList : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejDropDownList'
          :Implements constructor
        ∇

    :EndClass

    :class ejDroppable : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejDroppable'
          :Implements constructor
        ∇

    :EndClass

    :class ejGantt : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejGantt'
          :Implements constructor
        ∇

    :EndClass

    :class ejGrid : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejGrid'
          :Implements constructor
        ∇

    :EndClass

    :class ejLinearGauge : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejLinearGauge'
          :Implements constructor
        ∇

    :EndClass

    :class ejMap : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejMap'
          :Implements constructor
        ∇

    :EndClass

    :class ejMaskEdit : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejMaskEdit'
          :Implements constructor
        ∇

    :EndClass

    :class ejMenu : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejMenu'
          :Implements constructor
        ∇

    :EndClass

    :class ejProgressBar : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejProgressBar'
          :Implements constructor
        ∇

    :EndClass

    :class ejRadioButton : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejRadioButton'
          :Implements constructor
        ∇

    :EndClass

    :class ejRangeNavigator : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejRangeNavigator'
          :Implements constructor
        ∇

    :EndClass

    :class ejRating : _ejObject

        :field public Input←''

        ∇ make
          :Access public
          JQueryFn←Uses←'ejRating'
          :Implements constructor
        ∇

        ∇ make1 arg
          :Access public
          JQueryFn←Uses←'ejRating'
          (Input←⎕NEW #._HTML.EditField arg).class←'rating'
          Selector←'#',⊃eis arg
          :Implements constructor
        ∇

        ∇ r←Render
          :Access public
          'change'Option'function(args){$("',Selector,'").val(args.value)}'
          r←''
          :If Input≢''
              r←Input.Render
          :EndIf
          r,←⎕BASE.Render
        ∇

    :EndClass

    :class ejResizable : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejResizable'
          :Implements constructor
        ∇

    :EndClass

    :class ejRotator : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejRotator'
          :Implements constructor
        ∇

    :EndClass

    :class ejRTE : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejRTE'
          :Implements constructor
        ∇

    :EndClass

    :class ejSchedule : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejSchedule'
          :Implements constructor
        ∇

    :EndClass

    :class ejScroller : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejScroller'
          :Implements constructor
        ∇

    :EndClass

    :class ejSlider : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejSlider'
          :Implements constructor
        ∇

    :EndClass

    :class ejSplitButton : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejSplitButton'
          :Implements constructor
        ∇

    :EndClass

    :class ejSplitter : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejSplitter'
          :Implements constructor
        ∇

    :EndClass

    :class ejSymbolPalette : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejSymbolPalette'
          :Implements constructor
        ∇

    :EndClass

    :class ejTab : _ejObject

        :field public Titles←0⍴⊂''
        :field public Sections←0⍴⊂''
        :field public Ids←0⍴⊂''

        ∇ make
          :Access public
          JQueryFn←Uses←'ejTab'
          :Implements constructor
        ∇

        ∇ r←Render;title;section;id
          :Access public
          :If ~0∊⍴Titles
              ControlContent.Add _html.ul,⊂Titles{⎕NEW _html.li(⎕NEW _html.a(⍺('href="#',⍵,'"')))}¨Ids
              :For id section :InEach Ids((⊃⍴Titles)↑Sections)
                  (ControlContent.Add #._html.div section).id←id
              :EndFor
          :EndIf
          r←⎕BASE.Render
        ∇

    :EndClass


    :class ejTagCloud : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejTagCloud'
          :Implements constructor
        ∇

        ∇ r←Render;d;n
          :Access public
          :If ~0∊⍴Data
              :If ~isString d←Data
                  :Select ⊃⍴⍴Data
                  :Case 1 ⍝ assumed to be a vector of vectors
                      n←⊃⍴⊃Data
                  :Case 2
                      n←⊃⍴⍉Data
                  :EndSelect
                  d←⊃#.JSON.formatData/(n↑'text' 'frequency' 'url')d
              :EndIf
              Options.dataSource←d
          :EndIf
          r←⎕BASE.Render
        ∇

    :EndClass

    :class ejTextBoxes : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejTextBoxes'
          :Implements constructor
        ∇

    :EndClass

    :class ejTimePicker : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejTimePicker'
          :Implements constructor
        ∇

    :EndClass

    :class ejToggleButton : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejToggleButton'
          ContainerType←'input type="checkbox"'
          :Implements constructor
        ∇

    :EndClass

    :class ejToolbar : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejToolbar'
          :Implements constructor
        ∇

    :EndClass

    :class ejTreeMap : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejTreeMap'
          :Implements constructor
        ∇

    :EndClass

    :class ejTreeView : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejTreeView'
          :Implements constructor
        ∇

    :EndClass

    :class ejUploadBox : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejUploadBox'
          :Implements constructor
        ∇

    :EndClass

    :class ejWaitingPopup : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejWaitingPopup'
          :Implements constructor
        ∇

    :EndClass

    :endsection

    :section Mobile Widgets

    :class ejmAccordion : _ejObject

        :field public Titles←0⍴⊂''
        :field public Sections←0⍴⊂''

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmAccordion'
          :Implements constructor
        ∇

    :endclass

    :class ejmAutocomplete : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmAutocomplete'
          :Implements constructor
        ∇

    :EndClass

    :class ejmButton : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmButton'
          :Implements constructor
        ∇

    :EndClass

    :class ejmCheckBox : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmCheckBox'
          :Implements constructor
        ∇

    :EndClass

    :class ejmDatePicker : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmDatePicker'
          :Implements constructor
        ∇

    :EndClass

    :class ejmDialog : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmDialog'
          :Implements constructor
        ∇

    :EndClass

    :class ejmFooter : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmFooter'
          :Implements constructor
        ∇

    :EndClass

    :class ejmGrid : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmGrid'
          :Implements constructor
        ∇

    :EndClass

    :class ejmGroupButton : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmGroupButton'
          :Implements constructor
        ∇

    :EndClass

    :class ejmHeader : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmHeader'
          :Implements constructor
        ∇

    :EndClass

    :class ejmListbox : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmListBox'
          :Implements constructor
        ∇

    :EndClass

    :class ejmMenu : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmMenu'
          :Implements constructor
        ∇

    :EndClass

    :class ejmNumeric : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmNumeric'
          :Implements constructor
        ∇

    :EndClass

    :class ejmProgess : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmProgress'
          :Implements constructor
        ∇

    :EndClass

    :class ejmRadioButton : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmRadioButton'
          :Implements constructor
        ∇

    :EndClass

    :class ejmRating  ⍝ :  #.HtmlElement

        ∇ make1 arg
          :Access public
          :Implements constructor
          Uses←'ejmRating'
          id←arg
        ∇

        ∇ r←Render
          :Access public
          r←(⎕NEW #._html.div(''(('id'id)('data-role' 'ejmrating')))).Render
        ∇

    :EndClass

    :class ejmRotator : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmRotator'
          :Implements constructor
        ∇

    :EndClass

    :class ejmScrollPanel : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmScrollPanel'
          :Implements constructor
        ∇

    :EndClass

    :class ejmSlider : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmSlider'
          :Implements constructor
        ∇
    :EndClass

    :class ejmSplitPane : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmSplitPane'
          :Implements constructor
        ∇

    :EndClass

    :class ejmTab : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmTab'
          :Implements constructor
        ∇

    :EndClass

    :class ejmTextBox : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmTextBox'
          :Implements constructor
        ∇

    :EndClass

    :class ejmTile : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmTile'
          :Implements constructor
        ∇

    :EndClass

    :class ejmTimePicker : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmTimePicker'
          :Implements constructor
        ∇

    :EndClass

    :class ejmToggleButton : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmToggleButton'
          :Implements constructor
        ∇

    :EndClass

    :class ejmToolbar : _ejObject

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmToolbar'
          :Implements constructor
        ∇

    :EndClass

    :endsection

    :Class sfChart
        :Field public Title←''
        :Field public Data
        :Field public XTitle←''
        :Field public YTitle←''
        :Field public Size
        :Field public Id
        :Field public JQpars←''

        ∇ r←Render
          :Access public
          r←('div id="',Id,'"')#.HTMLInput.Enclose''
          JQpars←'size:{width:800}'
         
          r,←#.JQO.sfChart Id(Title XTitle YTitle)Data JQpars
        ∇

    :endclass

:EndNamespace