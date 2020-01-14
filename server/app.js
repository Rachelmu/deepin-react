const express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  http = require('http'),
  cors = require('cors')

// Routers
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const app = express()

const corsOption = {
  origin: '*',
  credentials: true,
  maxAge: '172800'
}

// use 中间件, 中间件就是在 req 和 res 之间执行的操作
// 跨域中间件
app.use(cors(corsOption))
app.use(express.json())
// cookie 解析
app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use('/', indexRouter)
app.use('/user', usersRouter)

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.end('error')
})


module.exports = app