const express = require('express');
const router = express.Router();
const curd = require('../db');

// 封装一个 连接池函数


router.post('/register', (req, response) => {
  console.log(req.body) // 这里已经获取到了 body, 可以进行数据库操作了

  curd(db => {
    db.collection('demo').insertOne(req.body, (err, res) => {
      if (err) {
        console.log('出现错误', err)
      } else {
        console.log('插入成功')
      }
      response.cookie('jeden', 'zhan')
      response.end('true')

    })
  })
})

router.post('/login', (req, res) => {
  console.log(req.body) // 这里已经获取到了 body, 可以进行数据库操作了
  curd(db => {
    db.collection('demo').find(req.body).toArray((err, result) => {
      if (!err) {
        console.log(result)
        res.end(JSON.stringify(result))
      }
      res.cookie('jeden', 'zhan')
    })
  })
})

module.exports = router;