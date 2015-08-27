:Namespace Utils
⍝ This namespace contains general utility functions
    (⎕ML ⎕IO)←1

    penclose←{⎕ML←3 ⋄ ⍺←↑,⍵ ⋄ (~⍵∊⍺)⊂,⍵ } ⍝ APL2 style partitioned enclose (optional ⍺ is character(s) to break on)


:EndNamespace