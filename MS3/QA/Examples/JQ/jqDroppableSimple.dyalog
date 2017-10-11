 msg←Test dummy;dragon;dropin
 dragon←Find'dragon'
 dropin←Find'dropin'
 (Selenium.ACTIONS.DragAndDrop dragon dropin).Perform
 msg←'dropin'WaitFor'Good Job!'