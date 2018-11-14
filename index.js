var http = require('http');
var url = require('url');
var router = require('./models/router');
// var optFile = require('./models/optFile');

http.createServer( function (request, response) {
    if (request.url !== '/favicon.ico') {
        try {
            // throw 'exceptions...';
            var pathname = url.parse(request.url).pathname;
            pathname = pathname.replace(/\//, '');
            router[pathname](request, response);
        } catch (error) {
            console.log('=====' + error);
            response.writeHead(200, {'Content-Type': 'text/html;charset-utf-8'});
            response.write(error.toString());
            response.end();
        }
    };
}).listen(8888);

console.log('Server running at http://localhost:8888');
