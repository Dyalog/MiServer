:Namespace QA
⍝ MiServer 3 QA suite
    ∇ Run
      RenderHTML
      RenderPages
    ∇

    ∇ result←RenderHTML;nss;ns;class;c;name;res;f;root
⍝ make sure all HTML-generating classes render
      nss←#.(_html _DC _JQ _SF) ⍝ add _JQM when it's ready
      root←#.Boot.MSRoot
      result←0 7⍴'' 0 0 0 0 0 0  ⍝ [1] name [2] DocBase? [3] DocDyalog? [3] ApiLevel [4] Renders [5] id≠constructor[1]
      :For ns :In nss
          :For class :In (ns.⎕NL ¯9)~(⊂'SALT_Data'),'_'ns.⎕NL ¯9
              res←0 0 0 0 1 ''
              name←⍕c←ns⍎class
              res[1]←0≠c.⎕NC⊂'DocBase'
              :If res[2]←0≠f←c.⎕NC⊂'DocDyalog'
                  res[2]×←¯1*#.Files.Exists root,c.DocDyalog
              :EndIf
              res[3]←{6::0 ⋄ ⍵.ApiLevel}c
              res[4]←{0::0 ⋄ 1⊣(⎕NEW ⍵).Render}c
              :If #._html≢ns
                  res[5]←{0::1 ⋄ 'xyz123'≡(⎕NEW ⍵'xyz123').id}c
              :EndIf
              :If ns∊#._SF #._JQ
                  res[6]←{6::0 ⋄ 1⊣⍵.IntEvt}c
              :EndIf
              result⍪←(⊂name),res
          :EndFor
      :EndFor
      result←'Element/Widget' 'DocBase?' 'DocDyalog?' 'ApiLevel' 'Renders?' 'id≠args[1]?' 'IntEvt'⍪result
    ∇

    ∇ r←RenderPages;class
      r←0 2⍴'' 0
      r⍪←{⍵(_Test_Page ⍵)}#.Boot.MSRoot,'QA/TestMiPageTemplate'
      r⍪←{⍵(_Test_Page ⍵)}#.Boot.MSRoot,'QA/TestMiPageSample'
    ∇

    ∇ r←_Test_Page page;class;z
      r←'Passed'
      :Trap 0
          class←⎕SE.SALT.Load page
          z←⎕NEW class
          z._Request←⎕NEW #.HTTPRequest('' '')
          z._Request.Server←#.Boot.ms
          {}⎕XML z.Wrap
      :Else
          r←∊⎕DM
      :EndTrap
    ∇

    ∇ ParseAttrQA;Try;disp
      'disp'⎕CY'dfns'
      Try←{disp ⍵(#.HtmlElement.ParseAttr ⍵)}
      Try'foo'
      Try'foo' 'checked'
      Try'foo checked'
      Try'#foo' 'checked'
      Try'#foo checked'
      Try'foo' '.goo' 'checked'
      Try'foo goo checked'
      Try'foo'('goo' 'checked')
      Try'foo' 'goo=moo' 'checked'
      Try'#foo' 'goo="moo boo"' 'loo'
    ∇

:endnamespace
