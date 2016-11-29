//Buffer(缓冲区) 写入缓冲区

buf = new Buffer(256);
//写入 Node 缓冲区的语法如下所示：
//buf.write(string[, offset[, length]][, encoding])
len = buf.write("www.runoob.com");

console.log("写入字节数 : "+  len);
