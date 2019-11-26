const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

const mongoUrl = 'mongodb://127.0.0.1:27017'
const app = express()
let db

MongoClient.connect(mongoUrl, {

}, (err, db) => {
  if (err) throw err
  db = db
  console.log('数据库链接成功')
})


app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next();
})

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

  console.log(req.body)

  res.end('true')
})

app.listen(8082, () => {
  console.log('listen at 8082')
})