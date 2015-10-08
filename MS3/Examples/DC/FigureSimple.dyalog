:Class FigureSimple : MiPageSample
⍝ Control:: _DC.Figure
⍝ Description:: A figure with a caption

    ∇ Compose
      :Access Public      
      fig←(Add _.Figure).Caption←'APL Mandelbrot Set'
      fig.Add _.img '' ('src' '/Examples/Data/pic4.png')
    ∇

:EndClass