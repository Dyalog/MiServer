:Class deflate: ContentEncoder

    :property Encoding
    :access public shared
    :implements Property ContentEncoder.encoding
        ∇ r←get
          r←'deflate'
        ∇
    :endproperty

    fromutf8←{0::(⎕AV,'?')[⎕AVU⍳⍵] ⋄ 'UTF-8' ⎕UCS ⍵} ⍝ Turn raw UTF-8 input into text
    toutf8←{3=10|⎕DR ⍵: 256|⍵ ⋄ 'UTF-8' ⎕UCS ⍵} 

    ∇ (rc msg)←Init
      ⍝ Initialization is now handled by Conga v2.2
      :Implements Method ContentEncoder.Init
      (rc msg)←0 'OK'    
    ∇

    ∇ (rc raw)←Compress buf
      :Implements Method ContentEncoder.Compress
      :Trap 0
          raw←{(2×120 156≡2↑⍵)↓⍵}#.DRC.flate.Deflate toutf8 buf ⍝ drop of 789C zlib header (IE barfs on it)
          rc←0
      :Else
          (rc raw)←1 ⎕DM
      :EndTrap
    ∇

    ∇ (rc raw)←Uncompress buf
      :Implements Method ContentEncoder.Uncompress
      :Trap 0
          raw←#.DRC.flate.Inflate buf
          rc←0
      :Else
          (rc raw)←1 ⎕DM
      :EndTrap
    ∇

:EndClass