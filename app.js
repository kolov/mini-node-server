var http=require('http')
const shell = require('shelljs')
var server=http.createServer((function(request,response)
{
	response.writeHead(200,
	{"Content-Type" : "text/plain"});

  shell.exec('/Users/assenkolov/projects/gits-sync/runme.sh')
	response.end("Hello World\n");
}));
server.listen(7000);
