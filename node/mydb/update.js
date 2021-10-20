let mysql = require('mysql');
let path = require('path');
let connect = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'book'
});
connect.connect();
let sql = 'update book set `desc`=? where id=?';
let data = ['细说明朝的历史',6]

connect.query(sql,data,function(err,res,fields){
	if(err) throw err;
	console.log('数据修改成功');
});

connect.end();