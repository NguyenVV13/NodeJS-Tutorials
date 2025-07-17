/**
 * Introduction to using the Express web module.
 * Official guide and API here: https://expressjs.com/en/guide/routing.html
 * 
 * Works similarly to the http and fs modules to establish
 * a server and serve static files, but is more powerful.
 */
const express = require('express');
const app = express();

// get() takes a path and a handler, much like http
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Like Gets the server up and running by telling the server to listen to port 3000
app.listen(3000);