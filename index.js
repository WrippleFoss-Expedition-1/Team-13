var port='8081';
var http=require('http');

http.createServer(function(req,res){
    res.end('Basic Server');
	console.log('Server running at port '+port);
}).listen(port);