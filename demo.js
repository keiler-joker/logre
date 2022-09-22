function a(){

    var node=document.getElementById("node")
   var htm=node.innerHTML;
    alert(htm);
    node.innerHTML="<p>!!!!!</p>"

}

function b(){
    var par=document.getElementById("par")
    var p=document.createElement("p")
    var content=document.createTextNode("添加内容")
  p.appendChild(content)
  par.appendChild(p)

}
function c(){

     var par=document.getElementById("par")
    var node=document.getElementById("node")
    var p=document.createElement("p")
    var content=document.createTextNode("添加内容")
  p.appendChild(content)
  par.insertBefore(p,node)


}function d(){

     var par0=document.getElementById("par0")
    var frame0=document.getElementById("frame0")


  par0.removeChild(frame0)
    // frame0.remove() //或者直接这样把该类本身就删除了

}
function e(){

     var par=document.getElementById("par")
    var node=document.getElementById("node")


  node.style.color='red'


}

var a=new Object()
a.name="zhangsan";
a.func=a;
function Person(name,age){
    this.name=name;
    this.age=age;

}
var zhangsan=Person("张三",20)
var s="实例化字符串方式一"
var last;
var count=0;

function change(i)
{
count=count+1;
// document.write(count)
    var frame0=document.getElementById("marqueep")
    // document.write(frame0[10])
    // var last=frame0.innerHTML
    if(i==1){
        if(count==1)
        {
            last=frame0.innerHTML
        }//永久存储滚动显示
        frame0.innerHTML="<div style='background-color: red'><iframe src=\"txt.log\" name=\"about\"  width=\"100%\" marginwidth=\"0\" height=\"300\" marginheight=\"100\" align=\"top\" scrolling=\"yes\"  id=\"frame1\"></iframe></div>"

        }
    else
        {
    frame0.innerHTML=last

            // frame1[0].contentWindow.document.body.style.color="#0000ff"
    }

   // return last


}
function show()
{
   var frame0=document.getElementById("marquee")
  document.getElementById('myiframe').contentWindow.document.body.style.background = 'red'


}
// document.write(last)