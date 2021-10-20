function Box(parent,options){
	options = options || {};
	this.backgroundColor = options.backgroundColor || 'red';
	this.width = options.width || 20;
	this.height = options.height || 20;
	this.y = options.y || 0;
	this.x = options.x || 0;
	this.parent = parent;
	this.div = document.createElement('div');
	parent.appendChild(this.div);
	this.init();
}
Box.prototype.init = function(){
	this.div.style.backgroundColor = this.backgroundColor;
	this.div.style.width = this.width+'px';
	this.div.style.height = this.height+'px';
	this.div.style.top = this.y;
	this.div.style.left = this.x;
	this.div.style.position = 'absolute'
}
Box.prototype.random = function(){
	var x = Tools.getRandom(0,this.parent.offsetWidth / this.width -1) * this.width;
	var y = Tools.getRandom(0,this.parent.offsetHeight / this.height - 1) * this.height;
	// console.log(this.parent.offsetWidth);
	// console.log('y='+y);
	this.div.style.left = x +'px';
	this.div.style.top = y + 'px';
}