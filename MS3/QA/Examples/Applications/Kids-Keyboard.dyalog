 msg←Test dummy;old;new;alef;sound;ALEF

 ALEF←'letter1488'

 ⍝ Check if letter button is there
 :If 0=⍴'No "Alef"'/⍨0≡alef←Find ALEF

 ⍝ Check if it causes expected output
     Click ALEF
 :AndIf 0=⍴msg←'output'WaitFor'א'

 ⍝ Check if it causes expected sound
 :AndIf 0=⍴msg←'No sound'/⍨0≡sound←Find'autoplay'

 ⍝ Check that the correct sound is played

 :AndIf 0=⍴msg←'Wrong sound'/⍨~∨/ALEF⍷sound.GetAttribute,⊂'src'

 ⍝ Check that colour changes upon starting over
     old←alef.GetAttribute,⊂'style'
     Click'new' ⋄ ⎕DL 0.2 ⍝ Wait for update to finish - "Find" will catch the old one immediately
     new←(Find ALEF).GetAttribute,⊂'style'
 :AndIf 0=⍴msg←'Failed to recolour'/⍨new≡old

 ⍝ Check that the output is emptied now that we started over
     msg←'Failed to clear output'/⍨''≢(Find'output').Text
 :EndIf