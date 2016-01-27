:class ejDialog : #._SF._ejWidget
⍝ Description:: Syncfusion Digital Gauge widget
⍝ Constructor:: [selector [title [modal]]]
⍝ selector   - selector for the element that contains the content for the dialog
⍝ title      - title for the dialog
⍝ modal      - Boolean or _true/_false indicating whether the dialog is modal
⍝
⍝ Public Fields::
⍝ Selector   - selector for the element that contains the content for the dialog
⍝ Title      - title for the dialog
⍝ Modal      - Boolean or _true/_false indicating whether the dialog is modal
⍝ Size       - width [height] for the dialog.  If specifying only height, use ⍬ for width
⍝ Buttons    - vector of character vectors of indicating the buttons that will appear in the dialog
⍝              choices are: 'close' 'maximize' 'minimize' 'collapsible' 'pin' (we also allow 'minimise' and 'maximise')
⍝              default is 'close'
⍝ Resize     - Boolean or _true/_false indicating whether the dialog can be resized

    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejDialog.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejDialog.html'
    :field public shared readonly IntEvt←'beforeOpen' 'ajaxError' 'ajaxSuccess' 'beforeClose' 'Close' 'contentLoad' 'create' 'destroy' 'drag' 'dragStart' 'dragStop' 'open' 'resize' 'resizeStart' 'resizeStop'
    :field Public Modal←⍬
    :field Public Size←⍬
    :field Public Buttons←'close'
    :field Public Resize←⍬
    :field Public Title←''

    ∇ make
      :Access public
      JQueryFn←Uses←'ejDialog'
      :Implements constructor
      InternalEvents←IntEvt
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejDialog'
      :Implements constructor
      Selector Title Modal←args defaultArgs Selector Title Modal
      InternalEvents←IntEvt
    ∇

    ∇ r←Render;wid;hgt
      :Access public
      :If ~0∊⍴Selector
          :If ~0∊⍴Modal ⋄ 'enableModal'Set(1+isTrue Modal)⊃_false _true ⋄ :EndIf
          :If ~0∊⍴Resize ⋄ 'enableResize'Set(1+isTrue Resize)⊃_false _true ⋄ :EndIf
          :If ~0∊⍴Size
              (wid hgt)←⊃∘1∘↑¨2↑Size
              :If wid≠0 ⋄ 'width'Set wid ⋄ :EndIf
              :If hgt≠0 ⋄ 'height'Set hgt ⋄ :EndIf
          :EndIf
          :If ~0∊⍴Buttons
              'actionButtons'Set('close' 'minim' 'maxim' 'colla' 'pin  '∊5↑¨eis Buttons)/'close' 'minimize' 'maximize' 'collapsible' 'pin'
          :EndIf
          :If ~0∊⍴Title
              'title'Set Title
          :EndIf
          :If ~0∊⍴GetOption'title'
              'showHeader'SetIfNotSet _true
          :EndIf
      :EndIf
      r←⎕BASE.Render
    ∇

:EndClass