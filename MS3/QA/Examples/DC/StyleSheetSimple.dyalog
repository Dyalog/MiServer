 msg←Test dummy;body

 body←Selenium.Find'contentblock'
 msg←(~∨/'_.StyleSheet'⍷body.Text)/'Page does not begin which expected text'