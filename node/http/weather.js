const weather = require('./ueryWeather.js');
weather.queryWeather('101180601',(res)=>{
	console.log(res);
})