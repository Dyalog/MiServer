 msg←Test dummy;handle
 handle←'ClassName'Find'ui-resizable-se'
 (Selenium.ACTIONS.DragAndDropToOffset handle 1 2).Perform
 msg←'sizable'WaitFor'Resize me! New size: 152×151'