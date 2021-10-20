const http = require('http');
const path = require('path');
const fs = require('fs');


let options = {
	hostname:'login.taobao.com',
	port:80
}
let req = http.request(options,(res)=>{
	let info = '';
	//流式操作处理大文件
	res.on('data',(chunk)=>{
		info +=chunk;
	});
	res.on('end',()=>{
		fs.writeFile(path.join(__dirname,'taobao.html'),info,(err)=>{
			console.log('结束');
		})
	});
})
req.end();