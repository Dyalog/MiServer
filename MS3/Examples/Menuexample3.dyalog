:Class Menuexample3 : Dyalog14
⍝ Demonstrate the SyncFusion ejMenu widget

    ⎕ml←⎕io←1

    ∇ r←Render;items;t;tmp;a;i;m;opt
      :Access Public
⍝      tmp←⎕XML∊example
⍝      i←a/⍳⍴a←tmp[;2]∊⊂,'a' ⋄ tmp[i-1;3]←tmp[i;3] ⋄ tmp←(~a)⌿tmp
⍝      items←↓⍉tmp[;1 3],⊂''
      Add build
      m←Add _SF.ejMenu
      opt←'{dataSource: data, id: "id", parentId: "parentId", text: "text", spriteCssClass: "sprite"}'
      'fields'm.Option opt
⍝      'datasource'm.Option'data'
 ⍝     'id'm.Option'id'
  ⍝    'parentid'm.Option'parentId'
   ⍝   'text'm.Option'text'
    ⍝  'spriteCssClass'm.Option'sprite'
     ⍝ Add m
    ∇

    ∇ m←build;P;F;C;cr
    ⍝ This data recreates SuncFusion's http://js.syncfusion.com/demos/web/#!/azure/menu/databinding-localdata page example
⍝[{id:1,parentid:null,text:"Group A"}
⍝,{id:2,parentid:null,text:"Group B"}
⍝,{id:3,parentid:null,text:"Group C"}
⍝,{id:4,parentid:null,text:"Group D"}
⍝,{id:5,parentid:null,text:"Group E"}
⍝,{id:11,parentId:1,sprite:"flag-dz",text:"Algeria"}
⍝,{id:12,parentId:1,sprite:"flag-am",text:"Armenia"}
⍝,{id:13,parentId:1,sprite:"flag-bd",text:"Bangladesh"}
⍝,{id:14,parentId:1,sprite:"flag-cu",text:"Cuba"}
⍝,{id:15,parentId:2,sprite:"flag-dk",text:"Denmark"}
⍝,{id:16,parentId:2,sprite:"flag-eg",text:"Egypt"}
⍝,{id:17,parentId:3,sprite:"flag-fi",text:"Finland"}
⍝,{id:18,parentId:3,sprite:"flag-in",text:"India"}
⍝,{id:19,parentId:3,sprite:"flag-my",text:"Malaysia"}
⍝,{id:20,parentId:4,sprite:"flag-nz",text:"New Zealand"}
⍝,{id:21,parentId:4,sprite:"flag-no",text:"Norway"}
⍝,{id:22,parentId:4,sprite:"flag-pl",text:"Poland"}
⍝,{id:23,parentId:5,sprite:"flag-ro",text:"Romania"}
⍝,{id:24,parentId:5,sprite:"flag-sg",text:"Singapore"}
⍝,{id:25,parentId:5,sprite:"flag-th",text:"Thailand"}
⍝,{id:26,parentId:5,sprite:"flag-ua",text:"Ukraine"}
⍝,{id:111,parentId:11,text:"First Place"}
⍝,{id:112,parentId:12,text:"Second Place"}
⍝,{id:113,parentId:13,text:"Third Place"}
⍝,{id:114,parentId:14,text:"Fourth Place"}
⍝,{id:115,parentId:15,text:"First Place"}
⍝,{id:116,parentId:16,text:"Second Place"}
⍝,{id:117,parentId:17,text:"Third Place"}
⍝,{id:118,parentId:18,text:"First Place"}
⍝,{id:119,parentId:19,text:"Second Place"}
⍝,{id:120,parentId:20,text:"First Place"}
⍝,{id:121,parentId:21,text:"Second Place"}
⍝,{id:122,parentId:22,text:"Third Place"}
⍝,{id:123,parentId:23,text:"Fourth Place"}
⍝,{id:124,parentId:24,text:"First Place"}
⍝,{id:125,parentId:25,text:"Second Place"}
⍝,{id:126,parentId:26,text:"Third Place"}]
     
      m←{'{id:',(⍕⍵),',text:"Group ',⎕A[⍵],'",parentid:null},'}¨⍳5
      C←'Algeria' 'Armenia' 'Bangladesh' 'Cuba' 'Denmark' 'Egypt' 'Finland' 'India'
      C,←'Malaysia' 'New Zealand' 'Norway' 'Poland' 'Romania' 'Singapore' 'Thailand' 'Ukraine'
      F←'flag-'∘,¨↓16 2⍴'dzambdcudkegfiinmynznoplrosgthua'
      m,←(4 2 3 3 4/⍳5){'{id:',(⍕10+⍵),',parentId:',(⍕⍺),',text:"',(⍵⊃C),'",sprite:"',(⍵⊃F),'"},'}¨⍳16
      P←'First' 'Second' 'Third' 'Fourth'[1 2 3 4 1 2 3 1 2 1 2 3 4 1 2 3],¨⊂' Place'
      m,←{'{id:',(⍕110+⍵),',parentId:',(⍕10+⍵),',text:"',(⍵⊃P),'"},'}¨⍳16
      m[⍴m]↓⍨←¯1
      m←m,¨cr←⎕UCS 13
      m←∊1⌽('];' '<script type="text/javascript">var data = [',¨cr),m
    ∇

:EndClass
