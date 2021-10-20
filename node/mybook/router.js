// 路由模块
const express = require('express');
const router = express.Router();
const service = require('./service.js');
router.get('/',service.showIndex);
router.get('/toAddBook',service.toAddBook);
router.get('/toUpdateBook',service.toUpdateBook);
router.post('/addBook',service.addBook);
router.post('/updateBook',service.updateBook);
router.get('/delBook',service.delBook);
module.exports = router;
