const express = require('express');
const router = express.Router()
const formidable = require('formidable')
const fs = require('fs')

router.get('/', (req, res) => {
  res.send({
    a: 1, b: 2, c: 3
  })
})

router.post('/upload', function (req, res) {
  var form = new formidable.IncomingForm()
  console.log('about to parse');
  form.parse(req, function (error, fields, files) {
    console.log('parse done')
    console.log(files.upload.path)
    // 读取文件流并写入到public/test.png
    fs.writeFileSync('/test.png', fs.readFileSync(files.upload.path))
    //重定向到结果页
    res.redirect('/result.html')
  })
})

module.exports = router;
