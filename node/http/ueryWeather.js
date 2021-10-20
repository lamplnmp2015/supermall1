const http = require('http');
const querystring = require('querystring');
exports.queryWeather = (cityCode, callback) =>{
	let options = {
		protocol:'http:',
		hostname:'www.weather.com.cn',
		path:'/data/sk/'+cityCode+'.html',
		method:'get',
		port:80
	}
	let req = http.request(options,(res)=>{
		let info = '';
		res.on('data',(chunk)=>{
			info += chunk;
		});
		res.on('end',()=>{
			// info = querystring.parse(info);
			info = JSON.parse(info);
			callback(info);
		})
	})
	req.end();
}