//Stream(流) 链式流(链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。接下来我们就是用管道和链式来压缩和解压文件。)
var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input1.txt'));
  
console.log("文件解压完成。");
