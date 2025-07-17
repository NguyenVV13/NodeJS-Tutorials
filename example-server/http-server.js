/**
 * Introduction to using the http module to setup a server which
 * receives requests (req) and issues responses (res).
 */
const http = require('http');
const fs = require('fs');  // Filesystem for serving static files



// req is what the client requests from this server
// res is what this server responds to the client with
const server = http.createServer((req, res) => {
    // const readStream = fs.createReadStream('./files/example.txt');
    // res.writeHead(200, {'content-type': 'text/plain'})  // Response header
    // readStream.pipe(res);  // Pipe content from the filesystem readstream into the response

    const readStream = fs.createReadStream('./files/orange.png');
    res.writeHead(200, {'content-type': 'image/png'})  // Response header
    readStream.pipe(res);  // Pipe content from the filesystem readstream into the response


    // if(req.url === '/') {
    //     // http://localhost:port/
    //     res.write('Hello World from Node.js at root directory');  // Sets the response
    //     res.end();  // Sends the response
    // }
    // else {
    //     // http://localhost:port/anything-else
    //     res.write('Message from some other domain');
    //     res.end();
    // }
});

// Gets the server up and running by telling the server to listen to port 3000
server.listen(3000);