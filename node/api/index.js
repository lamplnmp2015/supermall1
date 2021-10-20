const express = require('express');
const db = require('./db.js');
const app = express();
// app.get('/allBooks',(req,res)=>{
// 	let sql = 'select * from book';
// 	db.base(sql, null,(data)=>{
// 		res.json(data);
// 	});
// });
app.set('jsonp callback name','cb');
app.get('/allBooks',(req,res)=>{
	let sql = 'select * from book';
	db.base(sql, null,(data)=>{
		res.jsonp(data);
	});
});
app.listen(3000,()=>{
	console.log('running...');
})