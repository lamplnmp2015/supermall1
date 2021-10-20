// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// let server = app.use('/abc',express.static('public'));//abc虚拟目录，public，静态资源文件夹
// server.listen(3000,()=>{
// 	console.log('running...');
// })

const express = require('express');
const app = express();
app.get('/',(req,res)=>{
	res.send('get方式');
})
app.post('/',(req,res)=>{
	res.send('post方式');
})
app.put('/',(req,res)=>{
	res.send('put方式');
})
app.delete('/',(req,res)=>{
	res.send('delete');
})
app.listen(3000,()=>{
	
})
// let app =  require('express')();
// app.use('/abc',require('express').static('public'));
// app.listen(3000,()=>{
	
// });