:Class MS3Server : MiServer
⍝ This is an example of a customized MiServer
⍝ The MiServer class exposes several overridable methods that can be customized by the user
⍝ In this case we customize the onServerLoad method
⍝ The ClassName parameter in the Server.xml configuration file is used to specify the customized class

    :Include #.MS3SiteUtils ⍝∇:require =/MS3SiteUtils
 
    :Field public GROUPS  ⍝ groups of elements
    :Field public NSS     ⍝ corresponding nss
    :Field public CACHE   ⍝ location of cache
    :Field public FILEEXT ⍝ Server.xml:DefaultExtension
    :Field public TREE    ⍝ Controls tree

    ∇ Make config
      :Access Public
      :Implements Constructor :Base config
    ∇

    ∇ onServerLoad
      :Access Public Override
    ⍝ Handle any server startup processing
      :If 14>{⊃(//)⎕VFI ⍵/⍨2>+\'.'=⍵}2⊃'.'⎕WG'APLVersion'
          ⎕←''
          ⎕←'MiServer 3.0 itself will run under Dyalog APL versions 13.2 and later'
          ⎕←'However, the MS3 MiSite uses features found only in Dyalog APL versions beginning with 14.0'
          ⎕←''
          ⎕←'Please restart the MS3 MiSite using Dyalog APL version 14.0 or later...'
          →
      :EndIf
      {}C ⍝ initialize CACHE
    ∇

:EndClass