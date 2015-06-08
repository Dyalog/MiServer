:Namespace QA
⍝ MiServer 3 QA suite
    ∇ Run
      RenderHTML
      RenderPages
    ∇

    ∇ result←RenderHTML;nss;ns;class;c;name;res;f;root
⍝ make sure all HTML-generating classes render
      nss←#.(_html _HTML _JQ _SF) ⍝ add _JQM when it's ready
      root←#.Boot.MSRoot
      result←0 6⍴'' 0 0 0 0 0  ⍝ [1] name [2] DocBase? [3] DocDyalog? [3] ApiLevel [4] Renders [5] id=constructor[1]
      :For ns :In nss
          :For class :In (ns.⎕NL ¯9)~(⊂'SALT_Data'),'_'ns.⎕NL ¯9
              res←0 0 0 0 'N/A'
              name←⍕c←ns⍎class
              res[1]←0≠c.⎕NC⊂'DocBase'
              :If res[2]←0≠f←c.⎕NC⊂'DocDyalog'
                  res[2]×←¯1*#.Files.Exists root,c.DocDyalog
              :EndIf
              res[3]←{6::0 ⋄ ⍵.ApiLevel}c
              res[4]←{0::0 ⋄ 1⊣(⎕NEW ⍵).Render}c
              :If #._html≢ns
                  res[5]←{0::0 ⋄ 'xyz'≡(⎕NEW ⍵'xyz').id}c
              :EndIf
              result⍪←(⊂name),res
          :EndFor
      :EndFor
      result←'Element/Widget' 'DocBase?' 'DocDyalog?' 'ApiLevel' 'Renders?' 'id=args[1]?'⍪result
    ∇

    ∇ r←RenderPages;class
      r←0 2⍴'' 0
      r⍪←{⍵(_Test_Page ⍵)}#.Boot.MSRoot,'QA/TestMiPageTemplate'
      r⍪←{⍵(_Test_Page ⍵)}#.Boot.MSRoot,'QA/TestMiPageSample'
      r⍪←{⍵(_Test_Page ⍵)}#.Boot.MSRoot,'QA/TestMS3Page'
      r⍪←{⍵(_Test_Page ⍵)}#.Boot.MSRoot,'QA/TestMS2Page'
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
:EndNamespace