var http = require('http');

http.createServer(function(request,response){
	//发送http头部
	//http状态值：200：OK
	//内容类型：text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end("Hello,nodejs\n");
}).listen(9988);

//终端打印如下消息
console.log("Server running at http://127.0.0.1:9988/");
