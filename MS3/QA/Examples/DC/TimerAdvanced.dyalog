 msg←Test dummy;old;new

⍝ Check if the initial states have been outputted
 :If 0=⍴msg←∊∪'Aoutput' 'Boutput'WaitFor¨⊂'─────────╫'

 ⍝ Check that the A display moves and the B does not, after A is started
     Click'Arun'
 :AndIf 0=⍴msg←∊∪'Aoutput' 'Boutput'WaitFor¨('╫─' 'A failed to move ')('─────────╫' 'B failed to stay')

 ⍝ Check that the B display moves after being started
     Click'Brun'
 :AndIf 0=⍴msg←'Boutput'WaitFor'╫─' 'B failed to move'

 ⍝ Check that the A display is static after being stopped
     Click'Astop'
     ⎕DL 0.1
     old←(Find'Aoutput').Text
     ⎕DL 0.3
     new←(Find'Aoutput').Text
     msg←'A failed to stop'/⍨old≢new
 :EndIf
