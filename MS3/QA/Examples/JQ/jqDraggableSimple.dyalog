 msg←Test dummy;dragon
 dragon←Find'dragon'
 (Selenium.ACTIONS.DragAndDropToOffset dragon 1 2).Perform
 msg←'dragon'WaitFor'You stopped at: {left:"1",top:"2"}'