module.exports = {
  getDatabaseConnection(connectPoll, cb) {
    const databasePool = connectPoll.acquire() // 获取一个连接, 这是一个 Promise

    databasePool
      .then(client => {
        cb(client)
      })
      .catch(err => {
        throw err
      })
  }
}