let mysql = require('mysql');
let path = require('path');
let connect = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'book'
});
connect.connect();
let sql = 'insert into book set ?';
let data = {
	name:'明朝那些事儿',
	author:'当年明月',
	category:'文学',
	desc:'明朝的历史'
}
connect.query(sql,data,function(err,res,fields){
	if(err) throw err;
	console.log('数据添加成功');
});
connect.end();