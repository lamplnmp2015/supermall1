let mysql = require('mysql');
exports.base = (sql, data,callback) => {
	let connect = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'root',
		database:'book'
	});
	connect.connect();
	connect.query(sql,data,function(err,res,fields){
		if(err) throw err;
		callback(res);
	});
	connect.end();
}
