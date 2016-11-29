//Buffer(缓冲区) 缓冲区比较
//Node Buffer 比较的函数语法如下所示, 该方法在 Node.js v0.12.2 版本引入：
//buf.compare(otherBuffer);

var buffer1 = new Buffer('ABCDE');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log(buffer1 + " 在 " + buffer2 + "之后");
}