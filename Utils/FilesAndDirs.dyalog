:Class FilesAndDirs
⍝ This class exists solely in support of MarkAPL from APLTeam
⍝ It provides comparable functionality to the FilesAndDirs class from https://github.com/aplteam/filesanddirs
⍝ for 2 methods - NormalizePath and Exists
    (⎕ML ⎕IO)←1 1
    ∇ r←{expand}NormalizePath f
      :Access public shared
      :If 0=⎕NC'expand' ⋄ expand←0 ⋄ :EndIf
      r←∊expand ⎕NPARTS f
    ∇
    ∇ r←Exists f
      :Access public shared
      r←⎕NEXISTS∊⎕NPARTS f
    ∇
:EndClass
