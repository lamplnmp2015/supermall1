// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

const express = require('express');
const app = express();
let server = app.use(express.static('public'));//public，静态资源文件夹
server.listen(3000,()=>{
	console.log('running...');
})