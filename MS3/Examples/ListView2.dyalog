﻿:Class ListView2 : MiPageSample 
⍝ Demonstrate the SyncFusion ejListView widget 

    ⎕ml←⎕io←1
    
    ∇ r←Render
      :Access Public 
      'showHeader' 'headerTitle' 'width'(Add _SF.ejListView fixExample).Set _true'What‽' 632
     
⍝      t←'<style type="text/css" class="cssStyles">.imgframe{background: url("menupix.png")'
⍝      t,←' no-repeat scroll 0 0 transparent;width: 615px;height: 213px;margin: 0 auto;}</style>'
⍝      Add t
    ∇
    
    ∇ r3←fixExample;tmp;b;i
      :Access public shared
      tmp←⎕XML example
      tmp[;3]←1⌽tmp[;3]
      i←b/⍳⍴b←tmp[;2]∊⊂,'a'
      tmp[i-1;4]⍪←tmp[i;4]
      tmp←(b⍱tmp[;2]∊⊂'ul')⌿tmp
      tmp[;1]÷←2
      r3←↓⍉tmp[;1 3],⊂''
    ∇

    
    ∇ lines←example
      :Access public shared
      lines←1↓∊(⎕UCS 13),¨1↓¨3↓⎕NR'example'
⍝<li id="Products">
⍝  <a href="#">Products</a>
⍝  <ul>
⍝    <li><a>ASP.NET</a></li>
⍝    <li><a>ASP.NET MVC</a></li>
⍝    <li><a>Mobile MVC</a></li>
⍝    <li><a>Silverlight</a></li>
⍝    <li><a>Windows Forms</a></li>
⍝    <li><a>Windows Phone</a></li>
⍝    <li><a>WinRT (XMAL)</a></li>
⍝    <li><a>WPF</a></li>
⍝    <li><a>Orubase Studio</a></li>
⍝    <li><a>Metro Studio</a></li>
⍝    <li><a>What's New</a>
⍝      <ul>
⍝        <li><a>WinRT (XMAL)</a></li>
⍝        <li><a>WPF</a></li>
⍝        <li><a>Silverlight</a></li>
⍝        <li><a>Windows Forms</a></li>
⍝        <li><a>Windows Phone</a></li>
⍝        <li><a>ASP.NET MVC</a></li>
⍝        <li><a>ASP.NET</a></li>
⍝      </ul>
⍝    </li>
⍝  </ul>
⍝</li>
⍝<li id="Support">
⍝  <a>Support</a>
⍝  <ul>
⍝    <li><a>Direct-Trac Support</a></li>
⍝    <li><a>Community Forums</a></li>
⍝    <li><a>Knowledge Base</a></li>
⍝    <li><a>Online Documentation</a></li>
⍝    <li><a>Services</a>
⍝      <ul>
⍝        <li><a>Consulting</a></li>
⍝        <li><a>Training</a></li>
⍝      </ul>
⍝    </li>
⍝  </ul>
⍝</li>
⍝<li id="Purchase">
⍝  <a>Purchase</a></li>
⍝<li id="Downloads">
⍝  <a>Downloads</a>
⍝  <ul>
⍝    <li><a>Evaluation</a></li>
⍝    <li><a>Free E-Books</a></li>
⍝    <li><a>Metro Studio</a></li>
⍝    <li><a>Latest Version</a></li>
⍝    <li><a>Version History</a></li>
⍝  </ul>
⍝</li>
⍝<li id="Resources">
⍝  <a>Resources</a>
⍝  <ul>
⍝    <li><a>Technology Resource Portal</a>
⍝      <ul>
⍝        <li><a>E-books</a></li>
⍝        <li><a>White Papers</a></li>
⍝      </ul>
⍝    </li>
⍝    <li><a>Case Studies</a></li>
⍝    <li><a>Bouchers + Datasheets</a></li>
⍝    <li><a>FAQ</a></li>
⍝  </ul>
⍝</li>
⍝<li id="Company">
⍝  <a>Company</a>
⍝  <ul>
⍝    <li><a>About Us</a>
⍝      <ul>
⍝        <li><a>More About Us</a></li>
⍝        <li><a>Management</a></li>
⍝        <li><a>News + Events</a></li>
⍝        <li><a>Customer Quotes</a></li>
⍝        <li><a>Customer Lists</a></li>
⍝        <li><a>Case Studies</a></li>
⍝        <li><a>Awards</a></li>
⍝        <li><a>Media Kit</a></li>
⍝      </ul>
⍝    </li>
⍝    <li><a>Company Blog</a></li>
⍝    <li><a>Technical Blog</a></li>
⍝    <li><a>Newsletter</a></li>
⍝    <li><a>Partners</a>
⍝      <ul>
⍝        <li><a>Technology Partners</a></li>
⍝        <li><a>Training Partners</a></li>
⍝        <li><a>Consulting Partners</a></li>
⍝      </ul>
⍝    </li>
⍝    <li><a>Locations</a>
⍝      <ul>
⍝        <li><a>RDU</a></li>
⍝        <li><a>Chennai</a></li>
⍝      </ul>
⍝    </li>
⍝    <li><a>Contact Us</a></li>
⍝    <li><a>Careers</a></li>
⍝  </ul>
⍝</li>
    ∇
    
:EndClass