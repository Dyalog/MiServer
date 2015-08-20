:class addressSimple: MiPageSample
⍝ Control:: _html.address
⍝ Description:: Add contact information

    ∇ Compose
      :Access public
      :With Add _.p
          Add'DYALOG.EXE is a component of the development '
          Add'version of Dyalog APL/W and is protected by U.K. '
          Add'Copyright laws and international treaties.'
      :EndWith
      :With Add _.p
          Add'DYALOG.EXE may be used by a Dyalog APL/W Licensee for '
          Add'development purposes. Its sale or distribution for '
          Add'commercial purposes is otherwise strictly prohibited.'
      :EndWith
      Add _.address'For further information contact sales@dyalog.com.'
    ∇
:endclass