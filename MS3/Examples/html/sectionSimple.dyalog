:class sectionSimple: MiPageSample
⍝ Control:: _html.section
⍝ Description:: Define a section in a document

    ∇ Compose
      :Access public 
      mysec←Add _.section
      mysec.Add _.h3'APL'
      mysec.Add _.p'APL (named after the book A Programming Language) is a programming language developed in the 1960s by Kenneth E. Iverson. Its central datatype is the ...'
  ∇

:endclass
