:class GyroSimple : MiPageSample
⍝ Control:: _DC.Gyro
⍝ Description:: Simple accelerometer interaction (use it from a platform which responds to movement)

    ∇ Compose;tab
      :Access public
      tab←Add _.Table('Direction (alpha):' 'Front/Back (beta):' 'Left/Right (gamma):',⍪{⍵ New _.span'??'}¨'alpha' 'beta' 'gamma')
      Add _.Gyro
    ∇

    ∇ r←APLJax;rep
      :Access public
      rep←{('#',⍵)Replace ¯1 Get ⍵}
      r←⊃,/rep¨'alpha' 'beta' 'gamma'
    ∇

:endclass
