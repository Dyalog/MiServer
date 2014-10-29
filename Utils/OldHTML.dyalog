:Namespace OldHTML

    ⎕ML←2
    CRLF←⎕UCS 13 10

      _tag←{
          a←_attrs ⍺⍺
          w←_lin ⍵
          ⍝ 0∊⍴w:'<',⍺,a,'/>'
          '<',⍺,a,'>',w,'</',⍺,'>'
      }

      _attrs←{
      ⍝ format name/value pairs as tag attributes
      ⍝  ⍵ - name/value pairs, valid forms:
      ⍝  'name="value"'
      ⍝  [n,2⍴] 'name1' 'value1' ['name2' 'value2'...]
      ⍝ ('name1' 'value1') [('name2' 'value2')]
          0∊⍴⍵:''
          {
              ,⊃,/{(×⍴⍺)/' ',⍺,(⍵≢⍬)/'="',⍵,'"'}/,∘⍕¨↑⍵
          }_pifn¨,2 _box _pifn{
              1=≡⍵:⍵
              2=≡⍵:{1=⍴⍴⍵:(⌽2,0.5×⍴⍵)⍴⍵ ⋄ ⍵}⍵
              ⊃⍵}⍵
      }

      _box←{
          ⍺←1
          (⊂⍣(⍺=|≡⍵))⍵
      }

      _lin←{
          2=≡⍵:∊⍵,¨⊂CRLF
          ⍵
      }

      _pifn←{
          ({⍵''}⍣(1=|≡⍵))⍵
      }

      a←{
          ⍺←''
          'a'(⍺ _tag)⍵
      }

      b←{
          ⍺←''
          'b'(⍺ _tag)⍵
      }

      body←{
          ⍺←''
          'body'(⍺ _tag)⍵
      }

    br←'<br/>'

      button←{
          ⍺←''
          'button'((⍺,'type' 'button')_tag)⍵
      }

      div←{
          ⍺←''
          'div'(⍺ _tag)⍵
      }

      font←{
          ⍺←''
          'font'(⍺ _tag)⍵
      }

      form←{
          ⍺←''
          'form'(⍺ _tag)⍵
      }

      h1←{
          ⍺←''
          'h1'(⍺ _tag)⍵
      }

      h2←{
          ⍺←''
          'h2'(⍺ _tag)⍵
      }

      h3←{
          ⍺←''
          'h3'(⍺ _tag)⍵
      }

      head←{
          ⍺←''
          'head'(⍺ _tag)⍵
      }

      html←{
          ⍺←''
          'html'(⍺ _tag)⍵
      }


      i←{
          ⍺←''
          'i'(⍺ _tag)⍵
      }

      input←{
          ⍺←''
          'input'(⍺ _tag)⍵
      }

      li←{
          ⍺←''
          'li'(⍺ _tag)⍵
      }

      link←{
          ⍺←''
          'link'(⍺ _tag)⍵
      }

      p←{
          ⍺←''
          ∊'p'(⍺ _tag)¨_box ⍵
      }

      pre←{
          ⍺←''
          'pre'(⍺ _tag)⍵
      }

      span←{
          ⍺←''
          'span'(⍺ _tag)⍵
      }

      ul←{
          ⍺←''
          'ul'(⍺ _tag)⍵
      }

:EndNamespace