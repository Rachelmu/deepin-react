const express = require('express'),
  expressWs = require('express-ws')

const app = express()

expressWs(app)

app.ws('/wstest', (ws, req) => {
  ws.send('connect success fulll')
  ws.on('message', data => {
    console.log(data)
  })
})

app.listen(8888)