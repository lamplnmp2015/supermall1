const http = require('http');
const querystring = require('querystring');
let cityCode = '101010400';
let options = {
	protocol:'http:',
	hostname:'www.weather.com.cn',
	port:80,
	path:'/data/sk/'+cityCode+'.html',
	method:'get'
}
console.log(options.path);
let req = http.request(options,(res)=>{
	
	let info = '';
	res.on('data',(chunk)=>{
		info += chunk;
	});
	console.log(info);
	res.on('end',()=>{
		console.log(info);
	})
})
req.end();


