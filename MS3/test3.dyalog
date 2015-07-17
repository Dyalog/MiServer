:Class test3 : MiPageSample

    ∇ make;path
      :Implements constructor
      :Access public
      path←'/Examples/Data/'
      numpics←⍬⍴⍴pics←path∘,¨1⌷[2]'pic*.png'#.Files.List #.Boot.AppRoot,path
    ∇

    ∇ Compose;rot
      :Access public
      rot←Add _.ejRotator
      rot.Urls←pics
      rot.Captions←'10 Hands' 'Duckie' 'DNA' 'Mandel''s broth'
      'showCaption'rot.Set _true
    ∇

:endclass