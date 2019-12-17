const express = require('express'),
  router = express.Router()



router.post('/upload', function (req, res) {
  var form = new formidable.IncomingForm()
  console.log('about to parse');
  form.parse(req, function (error, fields, files) {
    console.log('parse done')
    console.log(files.upload.path)
    // 读取文件流并写入到public/test.png
    fs.writeFileSync('public/test.png', fs.readFileSync(files.upload.path))
    //重定向到结果页
    res.redirect('/public/result.html')
  })
})