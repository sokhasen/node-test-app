const http = require('http');
http.createServer((req, res)  => {
    console.log('site on port : 2018');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
  }).listen(2018);