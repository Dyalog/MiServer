 msg←Test dummy;input;output
 'input'SendKeys input←'Brian'
 Click'done'
 msg←'output'WaitFor'Hello, ',input,'!'