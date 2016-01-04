:class ejBulletGraph : #._SF._ejWidget
⍝ Description:: Syncfusion Bullet Graph widget
⍝ Constructor:: [data]
⍝ data - interpretation depends on the shape of data
⍝        1=⍴,data - the value to be rendered on the graph
⍝        2=⍴data  - the value and the comparativeMeasure
⍝        matrix - [;1] value (aka featureMeasure)
⍝                 [;2] comparativeMeasure (optional)
⍝                 [;3] category (optional)
⍝ Public Fields::
⍝ Data - interpretation depends on the shape of data
⍝        1=⍴,Data - the value to be rendered on the graph
⍝        2=⍴Data  - the value and the comparativeMeasure
⍝        2=≢⍴Data - [;1] value (aka featureMeasure)
⍝                   [;2] comparativeMeasure (optional)
⍝                   [;3] category (optional)

    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/BulletGraph.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejBulletGraph.html'
    :field IntEvt←'drawCaption' 'drawCategory' 'drawComparativeMeasureSymbol' 'drawFeatureMeasureBar' 'drawIndicator' 'drawLabels' 'drawQualitativeRanges' 'load'
    :field public Data←⍬

    ∇ make
      :Access public
      JQueryFn←Uses←'ejBulletGraph'
      :Implements constructor
      InternalEvents←IntEvt
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejBulletGraph'
      :Implements constructor
      InternalEvents←IntEvt
      Data←args
    ∇

    ∇ r←Render;src;flds
      :Access public
      SetId
      r←''
      :If ~0∊⍴Data
          src←id,'_data'
          'fields.dataSource'Set'⍎',src
          :If 2>⍴⍴Data ⋄ Data←⍉⍪Data ⋄ :EndIf
          flds←(2⊃⍴Data)↑'featureMeasures' 'comparativeMeasure' 'category'
          {('fields.',⍵)Set ⍵}¨flds
          r←(⎕NEW #._DC.Script('var ',src,' = ',flds #.JSON.TableToJSON Data)).Render
          'quantitativeScaleSettings.maximum'SetIfNotSet⌈/10,Data[;1]
          'quantitativeScaleSettings.minimum'SetIfNotSet⌊/0,Data[;1]
      :EndIf
      r,←⎕BASE.Render
    ∇
:EndClass