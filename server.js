var http = require('http');
http.createServer(function(req, res)    {
        res.writeHead(200,{'content-type':'text/plain'});
        res.write('Hello World');
        res.end();
}).listen(process.env.PORT);
console.log('Listening on port ' + process.env.PORT);