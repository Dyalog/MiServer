:class Form : #._html.form
⍝ Description:: Same as the base HTML5 form element, but sets the action and method attributes
⍝ Constructor:: [page [method]]
⍝ page     - the URL of the page to which to send the form request
⍝            default is to call back to the same page that contains the form
⍝ method   - the HTTP method ('post' or 'get')
⍝            default is 'post'
⍝ Public Fields::
⍝ Page     - the URL of the page to which to send the form request
⍝            default is to call back to the same page that contains the form
⍝ Method   - the HTTP method ('post' or 'get')
⍝            default is 'post'

    :field public Method←'post'
    :field public Page←''

    ∇ make;c
      :Access public
      :Implements constructor
    ∇

    ∇ make1 args
      :Access public
      :Implements constructor
      args←eis args
      Page Method←args defaultArgs'' 'post'
    ∇

    ∇ r←Render
      :Access public
      :If 0∊⍴Page
          :If {6::0 ⋄ ''≢c∘←##.context ⍵}'_Request'
              Page←c._Request.Page
          :EndIf
      :EndIf
      Attrs['action' 'method']←Page Method
      :If 'post'≡#.Strings.lc Method
          'enctype'Set'multipart/form-data'
      :EndIf
      r←⎕BASE.Render
    ∇
:endclass