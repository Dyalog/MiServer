:Class FormSimple : MiPageSample
⍝ Control:: _DC.Form
⍝ Description:: Explain about Forms

    ∇ Compose
      :Access Public
     
      Add _.h2 'Why Use a Form'
     
      Add _.p ScriptFollows
     ⍝ Any MiServer page which is going to be used to post data back to the server 
     ⍝ will need a form. If you use a classical Submit button, all the input elements
     ⍝ within the form that the button is in will be sent to the server as part of the POST.
     ⍝ see <a href="/Examples/DC/InputSubmitSimple">/Examples/DC/InputSubmitSimple</a> for an example.

      Add _.p ScriptFollows
     ⍝ If you use events and AJAX-style interaction, the default handler will serialise
     ⍝ the contents of the form and post it back to the server. See
     ⍝ see <a href="/Examples/DC/InputGridSimple">/Examples/DC/InputGridSimple</a> for an example of this style of coding,
     ⍝ which is becoming more and more popular.

      Add _.p ScriptFollows
     ⍝ In either case, values that are posted back to the server will be available using the Get function
     ⍝ (using the name of an element to retrieve the value that was posted back). Also, if your MiPage exposes
     ⍝ public fields with the same name, it will automatically be populated with the incoming value.

      Add _.p ScriptFollows
     ⍝ Note that <strong>this</strong> page doesn't use a form - there is no input.
∇

:EndClass