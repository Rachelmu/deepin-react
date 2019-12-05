const MongoClient = require('mongodb').MongoClient,
  GenericPool = require('generic-pool')

const mongoUrl = 'mongodb://127.0.0.1:27017'


const factory = {
  create: () => {
    return MongoClient.connect(mongoUrl, {
      useUnifiedTopology: true
    })
  },
  destroy: client => {
    client.close()
  }
}

const opts = {
  max: 100,
  min: 1
}

// 创建连接池
const connectPool = GenericPool.createPool(factory, opts)

const curd = (dbName, cb) => {
  if (typeof dbName === 'function') {
    cb = dbName
    dbName = 'demo'
  }
  const databasePool = connectPool.acquire() // 获取一个连接, 这是一个 Promise

  databasePool
    .then(client => {
      cb(client.db(dbName))
    }, err => {
      console.log('出错了', err)
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = curd