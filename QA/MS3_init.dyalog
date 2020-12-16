r←MS3_init

⎕se.SALT.Load'APLProcess'
⎕se.SALT.Load ##.TESTSOURCE,'../../Selenium'

myapl←⎕NEW #.APLProcess((##.TESTSOURCE,'../miserver')(''))

⍝⍝⍝::run "c:\batch\currapl.btm   c:\git\dui `c:\git\dui\dui.dws AppRoot=./MS3/ MSPort=8080 NoLink=0`"