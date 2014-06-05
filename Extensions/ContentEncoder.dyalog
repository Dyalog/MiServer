:Interface ContentEncoder

⍝ the following should be true (⎕IO←1): z≡2⊃Uncompress 2⊃Compress z
    :property Encoding
    :access public shared
        ∇ r←get
        ∇
    :endproperty
  
    ∇ (rc raw)←Compress str
⍝ compression routine, takes a string and returns compressed raw data a la 'UTF-8' ⎕UCS str
⍝ rc is return code - 0 for no error
⍝ raw is the data to compress
    ∇

    ∇ (rc str)←Uncompress raw
⍝ uncompress routine, takes a compressed raw vector and returns an uncompressed string
    ∇

    ∇ (rc msg)←Init
⍝ Init does whatever initialization is necessary for the compression library
    ∇

:EndInterface