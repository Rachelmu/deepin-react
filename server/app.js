const express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  http = require('http'),


const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const app = express()


// 设置 cors 跨域需要预检请求, 可以进行的方法, 可包含的头部
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') {
    return res.send(http.STATUS_CODES['200'])
  }

  next()
})

app.use(express.json())
app.use(cookieParser())

// use 中间件, 中间件就是在 req 和 res 之间执行的操作
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use('/', indexRouter)
app.use('/user', usersRouter)

// catch 404 and forward to error handler


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.end('error')
})


module.exports = app
