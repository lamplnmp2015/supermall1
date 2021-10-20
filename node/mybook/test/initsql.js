const path = require('path');
const fs = require('fs');
fs.readFile(path.join(__dirname,'../','data.json'),'utf-8',(err,content)=>{
	
	if(err) return;
	let list = JSON.parse(content);
	console.log(list);
	let arr = [];
	list.forEach((item)=>{
		let sql = "insert into book (`name`, author, category, `desc`) values('"+item.name+"','"+item.author+"','"+item.category+"','"+item.desc+"');";
		arr.push(sql);
	});
	fs.writeFile(path.join(__dirname,'data.sql'),arr.join(''),'utf-8',(err)=>{
		console.log('sql 初始化完成');
	})
})