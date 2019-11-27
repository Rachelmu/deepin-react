const MongoClient = require('mongodb').MongoClient

const mongoUrl = 'mongodb://127.0.0.1:27017'

let db


// 封装一下, 向外暴露一个函数
const DBcurd = (cb) => {
  MongoClient.connect(mongoUrl, {}, (err, client) => {
    if (err) throw err
    db = client.db('demo')
    cb(db)
    client.close()
  })
}

module.exports = DBcurd
