:Class gzip: ContentEncoder

    :property Encoding
    :access public shared
    :implements Property ContentEncoder.encoding
        ∇ r←get
          r←'gzip'
        ∇
    :endproperty

    utf8←{3=10|⎕DR ⍵: 256|⍵ ⋄ 'UTF-8' ⎕UCS ⍵}
    sint←{83=⎕DR ⍵:⍵ ⋄  {⍵-256×⍵>127}utf8 ⍵}

    ∇ (rc msg)←Init
      ⍝ Initialization
      :Implements Method ContentEncoder.Init
      (rc msg)←0 'OK'
    ∇

    ∇ (rc raw)←Compress buf
      :Implements Method ContentEncoder.Compress
      :Trap 0
          raw←2⊃3(219⌶)sint buf
          rc←0
      :Else
          (rc raw)←1 ⎕DM
      :EndTrap
    ∇

    ∇ (rc raw)←Uncompress buf
      :Implements Method ContentEncoder.Uncompress
      :Trap 0
          raw←256|¯3(219⌶)buf
          rc←0
      :Else
          (rc raw)←1 ⎕DM
      :EndTrap
    ∇

:EndClass