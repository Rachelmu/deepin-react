const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

// const login = require('./login')

const mongoUrl = 'mongodb://127.0.0.1:27017'
const app = express()
let db

MongoClient.connect(mongoUrl, {}, (err, client) => {
  if (err) throw err
  db = client.db('demo')
  console.log('数据库链接成功')
})

// 设置 cors 跨域需要预检请求, 可以进行的方法, 可包含的头部
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

// use 中间件, 中间件就是在 req 和 res 之间执行的操作
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())


app.get('/', (req, res) => {
  res.json({
    name: 'zzy',
    age: 21
  })
  res.end()
})

app.post('/user', (req, res) => {

  console.log(req.body) // 这里已经获取到了 body, 可以进行数据库操作了
  db.collection('demo').insertOne(req.body, (err, res) => {
    if (err) {
      console.log('出现错误', err)
    } else {
      console.log('插入成功')
    }
  })
  res.end('true')
})

app.post('/login', (req, res) => {

  console.log(req.body) // 这里已经获取到了 body, 可以进行数据库操作了
  db.collection('demo').find(req.body).toArray((err, result) => {
    if (!err) {
      console.log(result)
      res.end(JSON.stringify(result))
    }
  })
})

app.listen(8082, () => {
  console.log('listen at 8082')
})