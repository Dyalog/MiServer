:class miscSimple: MiPageSample
⍝ Control:: _html.dfn _html.dl _html.dt _html.dd
⍝ Description:: various rarely used elements

    ∇ Compose
      :Access public
     
      'title' '+/÷≢'Add _.dfn'avg'
      Add¨'2 6 7'_.br'5'
     
     ⍝ Horizontal ruler
      Add _.hr
     
     ⍝ Definitions
      mydl←Add _.dl
      mydl.Add _.dt'Coffee'
      mydl.Add _.dd'Black hot drink'
      mydl.Add _.dt'Milk'
      mydl.Add _.dd'White cold drink'
     
     
    ∇
:endclass