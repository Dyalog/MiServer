:class ejDropDownList : #._SF._ejWidget
⍝ Description:: Syncfusion DropDownList widget
⍝ Constructor:: [items [selected]]
⍝ items           - vector of char vectors
⍝                   or matrix of field definitions with field types as the first row
⍝ selected        - integer or Boolean vector indicating which items are selected
⍝ Public Fields::
⍝ Items           - vector of char vectors
⍝                   or matrix of field definitions
⍝ Selected        - integer or Boolean vector indicating which items are selected
⍝ Examples::
⍝ ejListBox
⍝ ejListBox ('Item1' 'Item3' 'Item3')

    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejDropDownList.html'
    :field public shared readonly ApiLevel←1
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejDropDownList.html'
    :field public shared readonly IntEvt←'beforePopupHide' 'beforePopupShown' 'change' 'checkChange' 'create' 'destroy' 'popupHide' 'popupShown' 'select'   
    
    :field public Items                                                   
⍝ Items can be a vector of character vectors, or a matrix with field names
⍝ in the first row. SubItems *must* be a matrix with field names.
⍝ Field names to be selected from the following, for more info see
⍝ http://helpjs.syncfusion.com/js/api/ejlistbox#members:fields
⍝ category       
⍝ htmlAttributes 
⍝ id             
⍝ imageAttributes
⍝ imageUrl       
⍝ selected       
⍝ spriteCssClass 
⍝ tableName      
⍝ text           
⍝ value          


    ∇ make
      :Access public
      JQueryFn←Uses←'ejDropDownList'
      :Implements constructor
      InternalEvents←IntEvt
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejDropDownList'
      :Implements constructor :base args
      InternalEvents←IntEvt
    ∇
:EndClass