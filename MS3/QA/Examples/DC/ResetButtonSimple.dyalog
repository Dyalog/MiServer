 msg←Test dummy;body
 body←Selenium.Find'contentblock'
 msg←('The ResetButton'≢15↑body.Text)/'Page does not begin which expected text'