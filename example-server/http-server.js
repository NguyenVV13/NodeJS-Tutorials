/**
 * Introduction to using the http module to setup a server which
 * receives requests (req) and issues responses (res).
 */
const http = require('http');
const fs = require('fs');  // Filesystem for serving static files
const path = require('path');  // module for filesystem pathing



// Example showing use of package that was installed with npm
const lodash = require('lodash');
let ex = lodash.fill([1,2,3,4,5], 'banana', 1, 4);
console.log(ex);



// req is what the client requests from this server
// res is what this server responds to the client with
const server = http.createServer((req, res) => {
    /* Basic path logic */
    if(req.url === '/') {
        // http://localhost:port/
        res.write('Hello World from Node.js at root directory');  // Sets the response
        res.end();  // Sends the response
    }
    /* Serving a static file */
    else if(req.url === '/text') {
        const readStream = fs.createReadStream(path.join(__dirname, 'files', 'example.txt'));
        res.writeHead(200, {'content-type': 'text/plain'})  // Response header
        readStream.pipe(res);  // Pipe content from the filesystem readstream into the response
    }
    else if (req.url === '/picture') {
        const readStream = fs.createReadStream(path.join(__dirname, 'files', 'orange.txt'));
        res.writeHead(200, {'content-type': 'image/png'})
        readStream.pipe(res);
    }
    else {
        // http://localhost:port/anything-else
        res.write('Message from some other domain');
        res.end();
    }
});

// Gets the server up and running by telling the server to listen to port 3000
server.listen(3000);