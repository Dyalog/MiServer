:Namespace _SF

    :Section Web Widgets

    :Class ejAccordion : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejAccordion.html'
        :field public shared readonly ApiLevel←3

        :Field public Titles←0⍴⊂''
        :Field public Sections←0⍴⊂''

        ∇ make
          :Access public
          JQueryFn←Uses←'ejAccordion'
          :Implements constructor
        ∇

        ∇ r←Render;title;section;h3
          :Access public
          :If ~0∊⍴Titles
              :For title section :InEach Titles((⊃⍴Titles)↑Sections)
                  (ControlContent.Add #._html.h3).Add #._html.a title'href="#"'
                  ControlContent.Add #._html.div section
              :EndFor
          :EndIf
          r←⎕BASE.Render
        ∇

    :EndClass

    :class ejAutocomplete : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejAutocomplete.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejAutocomplete'
          :Implements constructor
        ∇

    :EndClass

    :class ejBarcode : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejBarcode.html'
        :field public shared readonly ApiLevel←3

        ∇ make
          :Access public
          JQueryFn←Uses←'ejBarcode'
          :Implements constructor
          'text symbologyType'Option'' 'ej.SymbologyType.code128A'
        ∇

        ∇ make1 args;type;text
          :Access public
          JQueryFn←Uses←'ejBarcode'
          args←eis args
          (text type)←2↑args,(⍴args)↓'' 'ej.SymbologyType.code128A'
          :Implements constructor
          'text symbologyType'Option text type
        ∇

    :EndClass

    :class ejBulletGraph : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejBulletGraph.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejBulletGraph'
          :Implements constructor
        ∇

    :EndClass

    :class ejButton : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejButton.html'
        :field public shared readonly ApiLevel←3

        :field public Text←''

        ∇ make
          :Access public
          JQueryFn←Uses←'ejButton'
          ContainerType←'button'
          :Implements constructor
        ∇

        ∇ make1 text
          :Access public
          JQueryFn←Uses←'ejButton'
          ContainerType←'button'
          Text←text
          :Implements constructor
        ∇

        ∇ r←Render;type
          :Access public
          :If ~0∊⍴type←GetOption'type'
              :Select ¯4↑type ⍝ probably match any of 'Button' 'button' 'reset' 'Reset'
              :Case 'tton'
                  ContainerType←'button type="button"'
              :Case 'eset'
                  ContainerType←'button type="reset"'
              :EndSelect
          :EndIf
          ControlContent.Add(⊂Text)
          r←⎕BASE.Render
        ∇

    :EndClass

    :class ejCaptcha : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejCaptcha.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejCaptcha'
          :Implements constructor
        ∇

    :EndClass

    :class ejChart : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejChart.html'
        :field public shared readonly ApiLevel←1

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
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejCheckBox.html'
        :field public shared readonly ApiLevel←2

        :field public Label

        ∇ make
          :Access public
          JQueryFn←Uses←'ejCheckBox'
          ContainerType←'input'
          :Implements constructor
          ControlContent.type←'checkbox'
        ∇


    :EndClass

    :class ejCircularGauge : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejCircularGauge.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejCircularGauge'
          :Implements constructor
        ∇

    :EndClass                   
    :class ejCurrencyTextbox : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejTextBoxes.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejCurrencyTextbox'
          :Implements constructor
        ∇

    :EndClass

    :Class ejDatePicker : _ejObject
        :Field Public Shared ReadOnly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejDatePicker.html'
        :Field Public Shared ReadOnly ApiLevel←2

        ∇ make0
          :Access Public
          JQueryFn←Uses←'ejDatePicker'
          ContainerType←'input'
          :Implements Constructor
          ControlContent.type←'text'
        ∇

        ∇ make args;n
          ⍝ Selector [value [dateFormat]]
          :Access Public
          JQueryFn←Uses←'ejDatePicker'
          ContainerType←'input'
          :Implements Constructor
         
          :If (≡args)∊0 1 ⋄ args←,⊂args ⋄ :EndIf
          n←¯1+⊃⍴args
          Selector←⊃args
          (n↑'value' 'dateFormat')Option 1↓args
          ControlContent.type←'text'
        ∇

    :EndClass

    :Class ejDateTimePicker : _ejObject
        :Field Public Shared Readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejDateTimePicker.html'
        :Field Public Shared Readonly ApiLevel←2

        ∇ make0
          :Access Public
          JQueryFn←Uses←'ejDateTimePicker'
          ContainerType←'input'
          :Implements Constructor
          ControlContent.type←'text'
        ∇
    
        ∇ make args;n
          :Access Public
          JQueryFn←Uses←'ejDateTimePicker'
          ContainerType←'input'
          :Implements Constructor
         
          :If (≡args)∊0 1 ⋄ args←,⊂args ⋄ :EndIf
          n←¯1+⊃⍴args
          Selector←⊃args
          (n↑'value' 'dateTimeFormat')Option 1↓args
          ControlContent.type←'text'
        ∇

    :EndClass

    :Class ejTimePicker : _ejObject
        :Field Public Shared ReadOnly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejTimePicker.html'
        :Field Public Shared ReadOnly ApiLevel←2

        ∇ make0
          :Access Public
          JQueryFn←Uses←'ejTimePicker'
          ContainerType←'input'
          :Implements Constructor
          ControlContent.type←'text'
        ∇
        
        ∇ make args;n
          :Access Public
          JQueryFn←Uses←'ejTimePicker'
          ContainerType←'input'
          :Implements Constructor
         
          :If (≡args)∊0 1 ⋄ args←,⊂args ⋄ :EndIf
          n←¯1+⊃⍴args
          Selector←⊃args
          (n↑'value' 'timeFormat')Option 1↓args
          ControlContent.type←'text'
        ∇

    :EndClass

    :class ejDiagram : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejDiagram.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejDiagram'
          :Implements constructor
        ∇

    :EndClass

    :class ejDialog : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejDialog.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejDialog'
          :Implements constructor
        ∇

    :EndClass

    :class ejDigitalGauge : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejDigitalGauge.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejDigitalGauge'
          :Implements constructor
        ∇

    :EndClass

    :class ejDraggable : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejDraggable.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejDraggable'
          :Implements constructor
        ∇

    :EndClass

    :class ejDropDownList : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejDropDownList.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejDropDownList'
          :Implements constructor
        ∇

    :EndClass

    :class ejDroppable : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejDroppable.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejDroppable'
          :Implements constructor
        ∇

    :EndClass

    :class ejGantt : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejGantt.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejGantt'
          :Implements constructor
        ∇

    :EndClass

    :class ejGrid : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejGrid.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejGrid'
          :Implements constructor
        ∇

    :EndClass

    :class ejLinearGauge : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejLinearGauge.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejLinearGauge'
          :Implements constructor
        ∇

    :EndClass

    :class ejListBox : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejListBox.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejListBox'
          :Implements constructor
        ∇

    :EndClass

    :class ejListView : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejListView.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejListView'
          :Implements constructor
        ∇

    :EndClass

    :class ejMap : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejMap.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejMap'
          :Implements constructor
        ∇

    :EndClass

    :class ejMaskEdit : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejMaskEdit.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejMaskEdit'
          :Implements constructor
        ∇

    :EndClass

    :class ejMenu : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejMenu.html'
        :field public shared readonly ApiLevel←1

        :field public Items←⍬
        :field public Text←'Menu'
        :field public Href←'#'

        ∇ make
          :Access public
          JQueryFn←Uses←'ejMenu'
          ContainerType←'ul'
          :Implements constructor
        ∇

        ∇ make1 args
          :Access public
          JQueryFn←Uses←'ejMenu'
          ContainerType←'ul'
          AddItem args
          :Implements constructor
        ∇

        ∇ {r}←AddItem args;text;href
          :Access public
          args←eis args
          text href←2↑args,(⍴args)↓'Menu Item' '#'
          Items,←r←⎕NEW MenuItem(text href)
        ∇

        ∇ r←Render;link;i;li
          :Access public
          :For i :In Items
              Add i.Render
          :EndFor
          r←⎕BASE.Render
        ∇

        :class MenuItem : #._html.li
            :field public Text
            :field public Items←⍬
            :field public Href

            ∇ make(text href)
              :Access public
              :Implements constructor
              Text←text
              'href'SetAttr href
            ∇

            ∇ {r}←AddItem args;text;href
              :Access public
              args←eis args
              text href←2↑args,(⍴args)↓'Menu Item' '#'
              Items,←r←⎕NEW MenuItem(text href)
            ∇

            ∇ r←Render;link;i
              :Access public
              (Add #._html.a).SetAttr'href'Href
              :For i :In Items
                  :If ~0∊⍴i.Items
                      (Add #._html.ul).Add i.Render
                  :EndIf
              :EndFor
              r←⎕BASE.Render
            ∇

        :endclass

    :EndClass

    :class ejNumericTextbox : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejTextBoxes.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejNumericTextbox'
          :Implements constructor
        ∇

    :EndClass

    :class ejPercentageTextbox : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejTextBoxes.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejPercentageTextbox'
          :Implements constructor
        ∇

    :EndClass

    :class ejProgressBar : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejProgressBar.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejProgressBar'
          :Implements constructor
        ∇

    :EndClass

    :class ejRadioButton : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejRTE.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejRadioButton'
          :Implements constructor
        ∇

    :EndClass

    :class ejRangeNavigator : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejRadioButton.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejRangeNavigator'
          :Implements constructor
        ∇

    :EndClass

    :class ejRating : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejRangeNavigator.html'
        :field public shared readonly ApiLevel←1

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
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejRating.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejResizable'
          :Implements constructor
        ∇

    :EndClass

    :class ejRotator : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejResizable.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejRotator'
          :Implements constructor
        ∇

    :EndClass

    :class ejRTE : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejRotator.html'
        :field public shared readonly ApiLevel←3

        ∇ make
          :Access public
          JQueryFn←Uses←'ejRTE'
          ContainerType←'textarea'
          :Implements constructor
        ∇

    :EndClass

    :class ejSchedule : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejSchedule.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejSchedule'
          :Implements constructor
        ∇

    :EndClass

    :class ejScroller : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejScroller.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejScroller'
          :Implements constructor
        ∇

    :EndClass

    :class ejSlider : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejSlider.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejSlider'
          :Implements constructor
        ∇

    :EndClass

    :class ejSplitButton : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejSplitButton.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejSplitButton'
          :Implements constructor
        ∇

    :EndClass

    :class ejSplitter : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejSplitter.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejSplitter'
          :Implements constructor
        ∇

    :EndClass

    :class ejSymbolPalette : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejSymbolPalette.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejSymbolPalette'
          :Implements constructor
        ∇

    :EndClass

    :class ejTab : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejTab.html'
        :field public shared readonly ApiLevel←1

        :field public Titles←0⍴⊂''
        :field public Sections←0⍴⊂''

        ∇ make
          :Access public
          JQueryFn←Uses←'ejTab'
          :Implements constructor
        ∇

        ∇ {r}←{title}AddTab content
          :Access public
          :If 0=⎕NC'title' ⋄ title←'Tab ',⍕1+⍴Titles ⋄ :EndIf
          Titles,←⊂title
          Sections,←r←⎕NEW _html.div content
        ∇

        ∇ r←Render;urls;ids;sections;id;section
          :Access public
          :If ~0∊⍴Titles
              sections←(⊃⍴Titles)↑Sections
              urls←#.Files.LikelyURL¨sections
              ids←'#ejTab'∘,∘⍕¨⍳⍴Titles
              (urls/ids)←urls/Sections
              (ControlContent.Add _html.ul).Add¨Titles{⎕NEW _html.li(⎕NEW _html.a(⍺('href="',⍵,'"')))}¨ids
              :For id section :InEach ids sections
                  :If '#'=1↑id
                      (ControlContent.Add section).id←1↓id
                  :EndIf
              :EndFor
              :If ∨/urls
                  'dataType' 'contentType' 'async'Option¨'html' 'html'#.JSON.true
              :EndIf
          :EndIf
          r←⎕BASE.Render
        ∇

    :EndClass


    :class ejTagCloud : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejTagCloud.html'
        :field public shared readonly ApiLevel←1

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
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejTextBoxes.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejTextBoxes'
          :Implements constructor
        ∇

    :EndClass

    :class ejTile : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejTimePicker.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejTile'
          :Implements constructor
        ∇

    :EndClass

    :class ejToggleButton : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejToggleButton.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejToggleButton'
          ContainerType←'input'
          :Implements constructor
          ControlContent.type←'checkbox'
        ∇

    :EndClass

    :class ejToolbar : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejToolbar.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejToolbar'
          :Implements constructor
        ∇

    :EndClass

    :class ejTreeMap : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejTreeMap.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejTreeMap'
          :Implements constructor
        ∇

    :EndClass

    :class ejTreeView : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejTreeView.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejTreeView'
          :Implements constructor
        ∇

    :EndClass

    :class ejUploadBox : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejUploadBox.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejUploadBox'
          :Implements constructor
        ∇

    :EndClass

    :class ejWaitingPopup : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejWaitingPopup.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejWaitingPopup'
          :Implements constructor
        ∇

    :EndClass

    :endsection

    :section Mobile Widgets

    :class ejmAccordion : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmAccordion.html'
        :field public shared readonly ApiLevel←1

        :field public Titles←0⍴⊂''
        :field public Sections←0⍴⊂''

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmAccordion'
          :Implements constructor
        ∇

    :endclass

    :class ejmAutocomplete : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmAutocomplete.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmAutocomplete'
          :Implements constructor
        ∇

    :EndClass

    :class ejmButton : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmButton.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmButton'
          :Implements constructor
        ∇

    :EndClass

    :class ejmCheckBox : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmCheckBox.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmCheckBox'
          :Implements constructor
        ∇

    :EndClass

    :class ejmDatePicker : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmDatePicker.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmDatePicker'
          :Implements constructor
        ∇

    :EndClass

    :class ejmDialog : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmDialog.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmDialog'
          :Implements constructor
        ∇

    :EndClass

    :class ejmFooter : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmFooter.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmFooter'
          :Implements constructor
        ∇

    :EndClass

    :class ejmGrid : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmGrid.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmGrid'
          :Implements constructor
        ∇

    :EndClass

    :class ejmGroupButton : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmGroupButton.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmGroupButton'
          :Implements constructor
        ∇

    :EndClass

    :class ejmHeader : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmHeader.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmHeader'
          :Implements constructor
        ∇

    :EndClass

    :class ejmListbox : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmListbox.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmListBox'
          :Implements constructor
        ∇

    :EndClass

    :class ejmMenu : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmMenu.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmMenu'
          :Implements constructor
        ∇

    :EndClass

    :class ejmNumeric : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmNumeric.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmNumeric'
          :Implements constructor
        ∇

    :EndClass

    :class ejmProgess : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmProgess.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmProgress'
          :Implements constructor
        ∇

    :EndClass

    :class ejmRadioButton : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmRadioButton.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmRadioButton'
          :Implements constructor
        ∇

    :EndClass

    :class ejmRating  : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmRating.html'
        :field public shared readonly ApiLevel←1

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
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmRotator.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmRotator'
          :Implements constructor
        ∇

    :EndClass

    :class ejmScrollPanel : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmScrollPanel.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmScrollPanel'
          :Implements constructor
        ∇

    :EndClass

    :class ejmSlider : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmSlider.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmSlider'
          :Implements constructor
        ∇
    :EndClass

    :class ejmSplitPane : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmSplitPane.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmSplitPane'
          :Implements constructor
        ∇

    :EndClass

    :class ejmTab : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmTab.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmTab'
          :Implements constructor
        ∇

    :EndClass

    :class ejmTextBox : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmTextBox.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmTextBox'
          :Implements constructor
        ∇

    :EndClass

    :class ejmTile : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmTile.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmTile'
          :Implements constructor
        ∇

    :EndClass

    :class ejmTimePicker : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmTimePicker.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmTimePicker'
          :Implements constructor
        ∇

    :EndClass

    :class ejmToggleButton : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmToggleButton.html'
        :field public shared readonly ApiLevel←1

        ∇ make
          :Access public
          JQueryFn←Uses←'ejmToggleButton'
          :Implements constructor
        ∇

    :EndClass

    :class ejmToolbar : _ejObject
        :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmToolbar.html'
        :field public shared readonly ApiLevel←1

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

    :section CommonCode

    ∇ r←ApiInfo
      r←{↑⍵∘{6::⍵'' '' ⋄ ⍵(⍺⍎⍵,'.(ApiLevel ApiLink)')}¨'e'⍵.⎕NL-9.4}⎕THIS
    ∇

    :class _ejObject : #._JQ.JQObject
⍝ generic Syncfusion Enterprise JavaScript object
        :field public ContainerType←'div'
        :field public Data←''
        :field public ControlContent
        :field public eventHandlers←''  ⍝!!! make private

        rand←{⍺←⊢ ⋄t←16807⌶2 ⋄r←⍺?⍵ ⋄ t←16807⌶t ⋄ r }

        ∇ make
          :Access public
          Options←⎕NS''
          ControlContent←⎕NEW #.HtmlElement
          :If 0=⎕NC⊂'Uses' ⋄ Uses←'' ⋄ :EndIf
          :If 0∊⍴Uses ⋄ Uses←'Syncfusion' ⋄ :EndIf
          :Implements constructor
        ∇

        ∇ r←Render;d;opts;att;sel
          :Access public
          r←''
          :If 0∊⍴Selector
              Selector←'#id',¯10↑'0000000000',⍕rand ¯1+2*31
          :EndIf
          sel←Selector
          att←''
          :Select ⊃Selector
          :Case '#' ⍝ id?
              ControlContent.id←1↓Selector
          :Case '.' ⍝ class?
              ControlContent.class←1↓Selector
          :EndSelect
          :If ContainerType{⍵≡(⍴⍵)↑⍺}'input'
              ControlContent.name←('.#'∊⍨⊃Selector)↓Selector
          :EndIf
          ControlContent.Tag←ContainerType
          r←ControlContent.Render
         
          :If ~0∊⍴eventHandlers
              Options∘RenderHandler¨eventHandlers
          :EndIf
          r,←⎕BASE.Render ⍝#._JQ.JQObject.Render
        ∇

        ∇ {handler}←On args;event;callback;clientData;javaScript;n;i
          :Access public
    ⍝ args - event callback clientData javascript
          args←eis args
          handler←⎕NS''
          handler.(Event Callback ClientData JavaScript)←4↑args,(⍴args)↓'' 1 '' ''
          :If 0∊n←⍴eventHandlers
              eventHandlers,←handler
          :ElseIf n<i←eventHandlers.event⍳⊂handler.event
              eventHandlers,←handler
          :Else
              eventHandlers[i]←handler
          :EndIf
        ∇

        ∇ r←opts RenderHandler handler;page;event;callback;clientdata;javascript;data;cd;name;id;type;what;dtype;success;useajax;ajax;arg
          :Access public
          r←page←''
          :If isInstance _PageRef
              page←_PageRef._PageName
          :EndIf
          page←quote page
          (event callback clientdata javascript)←handler.(Event Callback ClientData JavaScript)
          useajax←(,0)≢,callback
          data←''
          data,←', _event: argument.type'
          data,←', _what: this._id'
          data,←(isString callback)/', _callback: ',quote callback
          data←2↓data
         
          :If 2=|≡clientdata ⋄ clientdata←,⊂clientdata ⋄ :EndIf
          :For cd :In clientdata
              cd←eis cd
              (name id type what)←4↑cd,(⍴cd)↓4⍴⊂''
              :If ~0∊⍴name
                  :If 'ejModel'≡name
                      name←'_ejModel'
                      type←'JSONSubset(argument.model,',(quote id),')'
                      id←''
                  :Else
                      :Select id
                      :CaseList 'attr' 'css' 'html' 'is' 'serialize' 'val' 'eval' 'argument' 'ejModel'  ⍝ no selector specified, use evt.target
                          (type what)←id type
                          id←''
                      :Case 'string'
                          (type what)←id(quote type)
                          id←''
                      :Case ''
                          id←quote'#',name
                      :Else
                          :If 'argument.'{⍺≡(⍴⍺)↑⍵}id
                              (type what)←2↑{⎕ML←3 ⋄ ⍵⊂⍨⍵≠'.'}id
                              id←''
                          :Else
                              id←quote id
                          :EndIf
                      :EndSelect
         
                      :Select type
                      :Case 'eval'
                          type←what
                      :Case 'argument'
                          type←type,'.',what
                      :Case ''
                          type←'val()'
                      :Case 'string'
                          type←what
                      :Case 'ejModel'
                          name,←'_ejModel'
                          type←'JSONSubset(argument.model,',(quote what),')'
                      :Else
                          :If type≡'serialize'
                              name,←'_serialized'
                          :EndIf
                          type←type,'(',(what ine quote what),')'
                      :EndSelect
                  :EndIf
                  data,←',',name,': ',(id ine'$(',id,').'),type
              :EndIf
          :EndFor
         
          dtype←'"json"'
          success←'success: function(obj){APLJaxReturn(obj);}'
          ajax←(javascript ine javascript,';'),useajax/'$.ajax({url: ',page,', cache: false, type: "POST", dataType: ',dtype,', data: {',data,'}, ',success,'});'
          event(opts{⍺⍺⍎⍺,'←⍵'})'function(argument){',ajax,'}'
        ∇

    :EndClass
    :endsection
:EndNamespace