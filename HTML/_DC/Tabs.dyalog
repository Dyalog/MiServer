:class Tabs : #._html.div
⍝ Description:: Dyalog Tabs widget
⍝ Constructor:: [titles [sections]] | [titles_sections]
⍝ titles          - vector of char vectors containing titles to appear on tabs
⍝ sections        - vector of vectors containing HTML content for each tab
⍝ titles_sections - 2-column matrix of titles [;1] and tabs [;2] as above
⍝                   or vector of 2 element title/tab vectors
⍝ Public Fields::
⍝ Titles          - vector of char vectors containing titles to appear on tabs
⍝ Sections        - vector of vectors containing HTML content for each tab
⍝ Examples::
⍝ Tabs 'Title1' 'Title2'
⍝ Tabs ('Title1' 'Title2')('Section1' 'Section2')
⍝ Tabs 2 2⍴'Title1' 'Section1' 'Title2' 'Section2'

    :field public shared readonly ApiLevel←3
    :Field public Titles←0⍴⊂''
    :Field public Sections←0⍴⊂''

    ∇ Make
      :Access public
      :Implements constructor
      Uses←'dcTabs'
    ∇

    ∇ Make1 args
      :Access public
      :Implements constructor
      Uses←'dcTabs'
      args←eis args
      :If 1=⍴args
          :If 2=⍴⍴1⊃args ⍝ matrix arg?
              (Titles Sections)←↓[2]1⊃args
          :Else ⍝ single title
              Titles←args
          :EndIf
      :Else
          (Titles Sections)←eis¨2↑args
      :EndIf
    ∇

    ∇ {title}AddSection content
      :Access public
      :If 0=⎕NC'title' ⋄ title←'Section ',⍕1+⍴Titles ⋄ :EndIf
      Titles,←⊂title
      Sections,←⊂content
    ∇

    ∇ r←Render;title;section;numbers;n;group
      :Access public
      group←2↓GenId
      numbers←{2↓GenId}¨Sections
      
      ⍝ HTML structure
      Content←'<div class="dc-tabs">'
      :For title n :InEach Titles numbers
          :If isRef title ⋄ title←title.Render ⋄ :EndIf
          Content,←'<input type="radio" name="dc-tabs',group,'" id="dc-tabT',n,'"'
          :If n≡⊃numbers ⋄ Content,←' checked="checked"' ⋄ :EndIf
          Content,←'/><label for="dc-tabT',n,'">',title,'</label>'
      :EndFor
      :For section n :InEach Sections numbers
          :If isRef section ⋄ section←section.Render ⋄ :EndIf
          Content,←'<div id="dc-tabS',n,'">',section,'</div>'
      :EndFor
      Content,←'</div>'
     
      ⍝ CSS This matchs tabs displaying to their associated radio inputs
      Content,←'<style>'
      Content,←∊ScriptFollows ⍝ Remove this line when the uses←resource works
⍝/* CSS for the _DC.dcTabs widget */
⍝
⍝/* Configure the radio buttons to hide behind their tabs */
⍝.dc-tabs > input[type="radio"] {
⍝    position: absolute;
⍝    z-index: -1;
⍝}
⍝ 
⍝/* Configure labels to look like tabs */
⍝.dc-tabs > input[type="radio"] + label {
⍝    /* inline-block such that the label can be given dimensions */
⍝    display: inline-block;
⍝ 
⍝    /* A nice curved border around the tab */
⍝    border: 1px solid black;
⍝    border-radius: 5px 5px 0 0;
⍝    -moz-border-radius: 5px 5px 0 0;
⍝    -webkit-border-radius: 5px 5px 0 0;
⍝     
⍝    /* the bottom border is handled by the tab content div */
⍝    border-bottom: 0;
⍝ 
⍝    /* Padding around tab text */
⍝    padding: 5px 10px;
⍝ 
⍝    /* Margin to next tab */
⍝     margin-right: 5px;
⍝		
⍝    /* Set the default colours (non-selected tab) */
⍝    background: -webkit-linear-gradient(lightgrey,white);
⍝    background: linear-gradient(lightgrey,white);
⍝    font-weight: bold;
⍝  
⍝    /* Hand when over the tab */
⍝    cursor: pointer;
⍝}
⍝
⍝/* Hovered tabs need to be highlighted as such */
⍝.dc-tabs > input[type="radio"] + label:hover{
⍝  background: -webkit-linear-gradient(#E9B06A,white);
⍝  background: linear-gradient(#E9B06A,white);
⍝}
⍝
⍝/* Focused tabs need to be highlighted as such */
⍝.dc-tabs > input[type="radio"]:focus + label {
⍝  background: -webkit-linear-gradient(darkorange,white)!important;
⍝  background: linear-gradient(darkorange,white)!important;
⍝}
⍝
⍝/* Active tabs need to be highlighted as such */
⍝.dc-tabs > input[type="radio"]:active + label {
⍝  background: -linear-gradient(darkorange,white)!important;
⍝  background: linear-gradient(darkorange,white)!important;
⍝}
⍝
⍝/* Checked tabs must be white with the bottom border removed */
⍝.dc-tabs > input[type="radio"]:checked + label {
⍝    background: white;
⍝    border-bottom: 1px solid white;
⍝    margin-bottom: -1px;
⍝    cursor: default;
⍝}
⍝ 
⍝/* The tab content must fill the widgets size and have a nice border */
⍝.dc-tabs > div {
⍝    display: none;
⍝    border: 1px solid black;
⍝    padding: 10px 10px;
⍝    height: 100%;
⍝    overflow: auto;
⍝  
⍝    border-radius: 0 5px 5px 5px;
⍝    -moz-border-radius: 0 5px 5px 5px;
⍝    -webkit-border-radius: 0 5px 5px 5px;
⍝}      
      :For n :In numbers
          Content,←'#dc-tabT',n,':checked ~ #dc-tabS',n,', '
      :EndFor
      Content↓⍨←¯2
      Content,←'{display: block;}</style>'
      
      r←⎕base.Render
    ∇
:endclass
