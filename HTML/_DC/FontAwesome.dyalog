:Class FontAwesome :  #._DC.FontIconsBase    ⍝∇:require =\FontIconsBase.dyalog
    :field public shared readonly DocBase←'http://fortawesome.github.io/Font-Awesome/icons/'
    :field public ReadOnly Family←'fa'  ⍝ bt=Blacktie or other prefixes for FontIcons
    :field public Container←'i'
    :field private icon←''

⍝ niladic constructor makes no sense - provide empty make0 anyway?

    ∇ Make0
      :Access Public
      :Implements Constructor :base   
    ∇

     
    ∇ Make1 args
      :Access Public
      :Implements Constructor :base    args
    ∇
           
    ∇ Make2(type list)
      :Access Public
      :Implements Constructor :base type   list
    ∇

    ∇ Make3(size lowerIcon topIcon)
      :Access Public
      ⍝ Size Stack1 Stack2
      :Implements Constructor :base (size lowerIcon topIcon)
    ∇
        
    
    ∇ r←Render;icon3;i1;i2
      :Access Public 
      r←⎕BASE.Render
    ∇
    
:EndClass







