const express = require('express');
const db = require('./db.js');
const app = express();

app.get('/books',(req, res)=>{
	let sql = 'select * from book ';
	db.base(sql,null,(data)=>{
		res.json(data);
	})
});

app.get('/books/book/:id',(req, res)=>{
	let id = req.params.id;//传统为query.id
	console.log(id);
	let sql = 'select * from book where id = ?';
	db.base(sql,[id],(data)=>{
		if(!data[0]) res.send('参数错误');
		res.json(data[0]);
	})
});
app.listen(3000,()=>{
	console.log('running...');
})