app.post('/login', (req, res) => {

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