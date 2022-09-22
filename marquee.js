function getElementsByClass(searchClass,tagName) {
 var classElements = new Array();

 if ( tagName == null )
  tagName = '*';
 var els = document.getElementsByTagName(tagName);
 // document.write(els)
 var elsLen = els.length;
 var pattern = new RegExp("(^|\s)"+searchClass+"(\s|$)");
 for (i = 0, j = 0; i < elsLen; i++) {
  if ( pattern.test(els[i].className) ) {
   classElements[j] = els[i];
   j++;
  }
 }
 return classElements;
}

function ccMarquee(className){

 var a=getElementsByClass(className);
 // document.write(a.innerHTML)
// document.write(a.length)
 for (i = 0; i < a.length; i++) {

  a[i].innerHTML="<marquee direction='down' width='100%' height='500px' loop='20' scrollamount='10'behavior='scroll' size='0.1px' onmouseover='javascript:this.stop();' onmouseout='javascript:this.start();'>"+ a[i].innerHTML+"</marquee>";
 }

}window.onload = function () {
 ccMarquee("ccMarquee");
}