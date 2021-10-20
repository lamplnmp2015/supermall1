let mysql = require('mysql');
let path = require('path');
let connect = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'book'
});
connect.connect();
let sql = 'delete from book  where id=?';
let data = [6]

connect.query(sql,data,function(err,res,fields){
	if(err) throw err;
	console.log('数据删除成功');
});

connect.end();