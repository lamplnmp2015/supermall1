const express = require('express');
const db = require('./db.js');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}) );
// body 的urlencoded字符，只支持uft-8的编码的字符.

// 返回的对象是一个键值对，当extended

// 为false的时候，键值对中的值就为'String'或'Array'形式，
app.use(express.static('public'));
app.post('/check',(req,rres)=>{
	let info = req.body;
	let sql = 'select count(*) as total from user where username=? and password=?';
	let data = [info.username,info.password];
	db.base(sql,data,(res)=>{
		if(res[0].total == 1){
			rres.send('login success');
		}else{
			// rres.send('login failure');
			rres.redirect('/login.html');
		}
	})
})
app.listen(3000,()=>{
	console.log('running...');
})