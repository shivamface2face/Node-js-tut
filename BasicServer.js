const http = require('http');

http.createServer((req, resp) => {
    resp.write("server created");
    resp.end();
}).listen(4500)