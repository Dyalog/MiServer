function reverse() {
var s = document.getElementById("output").textContent;
var o = '';
for (var i = s.length - 1; i >= 0; i--)
  o += s[i];
document.getElementById("output").textContent = o;
}