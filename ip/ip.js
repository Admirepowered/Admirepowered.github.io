/**
var sleep = function(time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while(new Date().getTime() < startTime) {}
};

//var createDiv=document.createElement("div");  
//createDiv.title="div title";  
//createDiv.id="id";  
//createDiv.class="class";  
//createDiv.innerHTML="获取信息中!\n\r";  
//document.body.appendChild(createDiv);  


function test(){
	var end = new Date();
	var t = end.getTime()-start1.getTime();
	console.log(123);
	createDiv.innerHTML=t; 
}

var createDiv1=document.createElement("div"); 
createDiv1.title="div title";  
createDiv1.id="id";  
createDiv1.class="class";  
createDiv1.innerHTML="<img src=\"https://apps.bdimg.com/favicon.ico?1647837779978\" alt=\"Smiley face\">";  

var start = new Date();
document.body.appendChild(createDiv1);  
//window.requestAnimationFrame(test)
**/
	//var start = new Date();
	
	var a=new XMLHttpRequest();
	a.open("GET","https://ipreq.admire.workers.dev/api/ip",false);
	a.send(null);
	var res=a.response;
	var cc=JSON.parse(res)
	document.write("国外:您的IP是:"+cc.ip+"<br>");
	
	
	var a=new XMLHttpRequest();
	a.open("GET","https://forge.speedtest.cn/api/location/info",false);
	a.send(null);
	var res=a.response;
	var cc=JSON.parse(res)
	document.write("国内:您的IP是:"+cc.ip+"<br>");
	
	
	/**
	fetch('https://ipreq.admire.workers.dev/api/ip')
	.then(response => response.json())
	.then(data => {
		var ip=data.ip;
		var end = new Date();

		document.write("国外:您的IP是:"+ip+"<br>");
	}
	);
	
	fetch('https://forge.speedtest.cn/api/location/info')
	.then(response => response.json())
	.then(data => {
		var ip=data.ip;
		document.write("国内:您的IP是:"+ip+"<br>");
	}
	);
	**/
	
	
	
	var start1 = new Date();
	
	
	/**
	var script = document.createElement("img");
	script.src='https://apps.bdimg.com/favicon.ico?1647837779978';
	document.body.insertBefore(script,document.body.fristChild);
	
	
	document.onreadystatechange=function(){
			//是否加载完毕
	      if(document.readyState =='interactive'){
			var end = new Date();
			var t = end.getTime()-start1.getTime();
			
			//createDiv.innerHTML="百度搜索:"+t+"ms<br>";  
			
			
			document.write("百度搜索:"+t+"ms<br>");
	      }
	}
	
	var script = document.createElement("img");
	script.src='https://s1.music.126.net/style/favicon.ico?1647848674692';
	document.body.insertBefore(script,document.body.fristChild);
	
	
	document.onreadystatechange=function(){
			//是否加载完毕
	      if(document.readyState =='complete'){
			var end = new Date();
			var t = end.getTime()-start1.getTime();
			document.write("网易云:"+t+"ms<br>");
			//document.body.appendChild(createDiv1);  
	      }
	}
	
	**/
	/**
	var end = new Date();
	var t = end.getTime()-start1.getTime();
	document.write("百度搜索:"+t+"ms<br>");
		**/

	
	/*fetch('https://apps.bdimg.com/favicon.ico?1647837779978')
	.then(data=>{
		var end = new Date();
		var t = end.getTime()-start.getTime();
		document.write("百度延迟:"+t+"<br>");
	}
	);
	*/


	
	
	
	

