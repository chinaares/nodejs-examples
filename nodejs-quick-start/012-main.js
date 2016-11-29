//Buffer(缓冲区) 缓冲区合并
//Node 缓冲区合并的语法如下所示：
//Buffer.concat(list[, totalLength])

var buffer1 = new Buffer('菜鸟教程 ');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());