 msg←Test dummy;dates;DateToIDN;idns;ok
 DateToIDN←{2 ⎕NQ'.' 'datetoidn'⍵}
 dates←(Find¨'in' 'out').GetAttribute⊂⊂'value'
 idns←DateToIDN¨2⊃¨'/'∘⎕VFI¨dates
 ok←7=-/⌽idns
 msg←(~ok)/'Date time pickers not working'