function ReverseText(id)
{
 ctl = document.getElementById(id);
 txt1 = ctl.value; txt2 = "";
 for (i=txt1.length;i>=0;i=i-1)
    txt2 = txt2 + txt1.substring(i,i+1);
 ctl.value = txt2;
}