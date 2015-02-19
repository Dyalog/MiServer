  :class ejTreeView : #._SF._ejObject
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejTreeView.html'
    :field public shared readonly ApiLevel←3
    :field public Template 
	∇ make
      :Access public
      JQueryFn←Uses←'ejTreeView'
      :Implements constructor
      (Template←⎕NEW #._html.div).id←GenId
    ∇

    ∇ make1 args
	  args←eis args
      :Access public
      JQueryFn←Uses←'ejTreeView'
      :Implements constructor
	  (Template←⎕NEW #._html.div(MakeTree 1↓args)).id←GenId
	∇

    ∇ r←level MakeTree data;ul;mat;li

   ul←2(</)level,0 ⍝ Step up: new ul
   mat←(1+ul)⌿ul,(2×level-1),('li' 'ul')[1+ul],⍪data
   li←{((⍴⍵)⍴1 0)/⍵}(mat[;1])/⍳1↑⍴mat

   mat[li;3]←⊂'li'
   mat[li+1;4]←⊂''
   mat[li+1;2]+←1

   r←⎕XML 0 1↓mat
	∇

    ∇ r←Render
      :Access public
      'template'Option('$("#',Template.id,'")')
      r←Template.Render,⎕BASE.Render
    ∇
  :EndClass