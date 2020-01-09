var http = require('http')
const shell = require('shelljs')
var server = http.createServer((function (request, response) {
	let body = [];
	request.on('data', (chunk) => {
		body.push(chunk);
	}).on('end', () => {
		body = Buffer.concat(body).toString();

		response.writeHead(200,
			{ "Content-Type": "text/plain" });

		const { method, url } = request
		console.log("method = " + method)
		console.log("body = " + body)

		shell.exec('/Users/assenkolov/projects/gits-sync/runme.sh')
		response.end("processed\n");
	});
}));
server.listen(7000);
