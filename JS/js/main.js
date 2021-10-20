//生成多个
var container = document.getElementById('container');

var arr = [];
for(var i = 0; i <10;i++){
	//生成随机颜色
	var r = Tools.getRandom(0,255);
	var g = Tools.getRandom(0,255);
	var b = Tools.getRandom(0,255);
	var options = {
		backgroundColor:'rgb('+r+','+g+','+b+')'
	};
	var box = new Box(container,options);
	arr.push(box);
	
}
setInterval(randomBox,100);
randomBox();
function randomBox(){
	for(var i = 0 ; i< arr.length;i++){
		var box = arr[i];
		box.random();
	}
}
