// 业务模块
const data = require('./data.json');
const path = require('path');
const fs = require('fs');
const db = require('./db.js');
let maxBookCode = () =>{
	let arr = [];
	data.forEach((item)=>{
		arr.push(item.id);
	});
	return Math.max.apply(null,arr);
}
//渲染主页面
exports.showIndex = (req, res) => {
	let sql = 'select * from book';
	db.base(sql,null,(data)=>{
		res.render('index',{list:data});
	})
}
exports.toAddBook = (req, res) => {
	res.render('toAddBook',{});
}
exports.addBook = (req, res) => {
	let info = req.body;
	let book = {};
	for(let key in info){
		book[key] = info[key];
	}
	let sql = 'insert into book set?';
	let datas = {
		name:info.name,
		author:info.author,
		category:info.category,
		desc:info.desc
	}
	db.base(sql,datas,(data)=>{
		res.redirect('/');
	});
	// res.redirect('/');
	// book.id = maxBookCode()+1;
	// data.push(book);
	// fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data),(err)=>{
	// 	if(err){
	// 		res.send('err');
	// 	}
	// 	res.redirect('/');
	// })
}
exports.toUpdateBook = (req, res) => {
	let id = req.query.id;
	// let book = {};
	// data.forEach((item)=>{
	// 	if(item.id === id){
	// 		book = item;
	// 		return;
	// 	}
	// })
	// console.dir('id = ' +id);
	// console.dir('book = ' +book);
	let sql = 'select * from book where id=?';
	db.base(sql,[id],(data)=>{
		console.log(data.RowDataPacket);
		res.render('toUpdateBook',data[0]);
	})
	// res.render('toUpdateBook',book);
}
exports.updateBook = (req ,res) =>{
	let info = req.body;
	// let book = {};
	// for(let key in info){
	// 	book[key] = info[key];
	// }
	
	// console.log('bookid='+book.id);
	// data.forEach((item,key)=>{
	// 	if(item.id === book.id){
	// 		data[key] = book;
	// 		return;
	// 	}
	// })
	// fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data),(err)=>{
	// 	if(err){
	// 		res.send('err');
	// 	}
	// 	res.redirect('/');
	// })
	console.log(info.id);
	let sql = 'update book set `name`=?,author=?,category=?,`desc`=? where id=?';
	let datas = [info.name,info.author,info.category,info.desc,info.id];
	db.base(sql,datas,(data)=>{
		console.log(datas);
		res.redirect('/');
	});
}
exports.delBook = (req, res) =>{
	let id = req.query.id;
	let sql = 'delete from book where id=?';
	db.base(sql,[id],(data)=>{
		res.redirect('/');
	})
	// console.log(id);
	// data.forEach((item,key)=>{
	// 	console.log(item.id);
	// 	if(item.id == id){
	// 		// data[key] = {};
	// 		data.splice(key, 1);
	// 		return;
	// 	}
	// })
	// fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data),(err)=>{
	// 	if(err){
	// 		res.send('err');
	// 	}
	// 	res.redirect('/');
	// })
}