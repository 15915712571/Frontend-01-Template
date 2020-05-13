const http = require('http');
const server = http.createServer((req, res) => {
	console.log('request received')
	res.setHeader('Content-Type', 'text-html');
	res.setHeader('X-Foo', 'bar');
	res.writeHead(200, {
		'Content-type': 'text/plain'
	});
	res.end('ok');
})

//cmd运行  node server.js
server.listen(8099);

// var xhr = new XMLHttpRequest;
// xhr.open('get','http://127.0.0.1:8099',true);
// xhr.send(null);
// xhr.responseText;  //ok
// xhr.HEADERS_RECEIVED; //2  收到了两个header,server里的Content-Type跟X-Foo
// xhr.addEventListener('readystatechange',(res)=>{
// 	
// })
