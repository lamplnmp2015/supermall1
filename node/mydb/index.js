let mysql = require('mysql');
let conect = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'book'
})
conect.connect();
conect.query('SELECT count(*) AS total from book',function(err, res, fields){
	if(err) throw err;
	console.log('The solution is:',res[0].total);
});
conect.end();