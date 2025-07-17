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

// Adding another path
app.get('/example', (req, res) => {
    res.send('Hitting the Example path');
});

// Path Parameters
app.get('/example/:name/:age', (req, res) => {
    // In this case, we specified that the two inputs after the /example path are
    // parameters `name` and `age`, and both parameters MUST be present to work.
    // Parameters should be used when the data is REQUIRED.
    console.log(req.params);
    res.send(req.params.name + ": " + req.params.age);
    
    // Queries are specified in the URL as `/...?key=value`
    // More queries can be added using `&`, like `/...?key1=value1&key2=value2`
    // Queries should be used for optional settings.
    console.log(req.query);
});

// Like Gets the server up and running by telling the server to listen to port 3000
app.listen(3000);