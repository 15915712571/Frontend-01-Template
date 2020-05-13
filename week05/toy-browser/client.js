const net = require('net');
class Request {
	//method url = host + port + path
	//body k/v
}

class Response {

}


// const client = net.createConnection({
// 	host:'127.0.0.1',
// 	port: 8099,
// }, () => {
// 	// 'connect' listener.
// 	console.log('connected to server!');
// 	// client.write('POST / HTTP/1.1\r\n');
// 	// client.write('Host:127.0.0.1\r\n');
// 	// client.write('Content-length: 20\r\n');				//此项为body的字段长度(field1=aaa&code=x%3D1),注意content-length:后面有个空格
// 	// client.write('Content-Type:application/x-www-form-urlencoded\r\n');
// 	// client.write('\r\n');
// 	// client.write('field1=aaa&code=x%3D1\r\n');
// 	// client.write('\r\n');
// 	client.write(`POST / HTTP/1.1\r
// 	Content-Type: application/x-www-form-urlencoded\r
// 	Content-length: 9\r
// 	\r
// 	name=heye`);
// });
// client.on('data', (data) => {
// 	console.log(data.toString());
// 	client.end();
// });
// client.on('end', () => {
// 	console.log('disconnected from server');
// });
// client.on('error', (err) => {
// 	console.log('err');
// 	client.end();
// });
