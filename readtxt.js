var xmlHttp;

//判断浏览器是否支持ActiveX控件

if(window.ActiveXObject){

//支持-通过ActiveXObject的一个新实例来创建XMLHttpRequest对象

xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");

}

//不支持

else if(window.XMLHttpRequest){

xmlHttp = new XMLHttpRequest()
// alert(111);
}
function readLine(line){
 //读第几行
 var node=document.getElementById("node")
   var htm=node.innerHTML;

var fso = new ActiveXObject("Scripting.FileSystemObject");

// document.write(f.AtEndOfStream);
var f = fso.OpenTextFile("H:\\研1\\htmlshow\\html2\\txt.txt",line,true);
var s = "";
var wl= 0;//读到第几行


alert(f.AtEndOfStream);
while (!f.AtEndOfStream){
     wl= wl+1;
     s = f.ReadLine();
     if(wl==line){
         //第几行的数据
         alert(s);
      } ;
      } ;
node.innerHTML=s
    f.Close();
}
// readLine(txt.log,1)
 function upload(input) {
            //支持chrome IE10
            if (window.FileReader) {

    var fileList = document.getElementById('frame1');
                // var file = input.files[0];

                // filename = file.name.split(".")[0];

                file=fileList
                var nameStr = '';
                alert(fileList.length)
    for (var i = 0; i < fileList.length; i++) {
        nameStr += `${i === 0 ? '' : ', '}${fileList[i].name}`;

        var reader = new FileReader();
        reader.readAsText(fileList[i], "UTF-8");
        reader.onload = function (e) {
            var content = e.target.result;
            console.log(content);
            const textAreaVal = document.getElementById('text').value;
            document.getElementById('text').value = textAreaVal + content;
        }
    }
    document.getElementById('name').append(nameStr);

                // var reader = new FileReader();
                // reader.onload = function() {
                //     console.log(this.result);
                // }
                // reader.readAsText(file);
            }



}
function readAsText()
{
	var file=document.getElementById("file").files[0];
	var reader=new FileReader();
	reader.readAsText(file);
	alert(reader)
	reader.onload=function(e)
	{
		var result=document.getElementById("result");
		result.innerHTML=this.result;
	}
}
