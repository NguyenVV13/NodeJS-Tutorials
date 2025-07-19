/**
 * Introduction to using the Express web module.
 * Official guide and API here: https://expressjs.com/en/guide/routing.html
 * 
 * Works similarly to the http and fs modules to establish
 * a server and serve static files, but is more powerful.
 */
const express = require('express');  // Powerful module for backend web development
const path = require('path');  // Used here for path joining
const bodyParser = require('body-parser');  // Used for parsing form data
const Joi = require('joi');  // Used to validate user input by using a schema
const app = express();

/* Do use() with a string parameter to create an alias for the files directory
   so that people don't see the server file structure when they inspect the page
   source code. */
/* This line has a middleware function, which in Express is when there is a
   function inside the HTTP method, which has access to req, res, and next.
   https://expressjs.com/en/guide/writing-middleware.html */
/* Use Express.static to serve the static files from `.../files`
   Due to the aliasing with use(), this public directory is called /public */
app.use('/public', express.static(path.join(__dirname, 'files')));

/* Using Express with Body Parser modules to handle POST requests */
// Allows the parsing of URL-encoded forms, attaching the parsed data into req
app.use(bodyParser.urlencoded({extended: false}));
// Allows the parsing of JSON forms and automatically converts JSONs
// to arrays that JS can process
app.use(bodyParser.json());
app.post('/', (req, res) => {
    /* This is where the tutorial deprecates,
       since Joi doesn't work this way anymore */

    // Joi.object() generates a schema object
    const schema = Joi.object({
        // email is a required field that must be a string that follows email format
        email: Joi.string().trim().email().required(),
        // password is a required field that must be a string that is
        // a minimum of 5 characters and a maximum of 10 characters
        password: Joi.string().min(5).max(10).required
    });
    // This doesn't really work since the JSON is formatted as
    // { name: 'email', value: 'asdfh@afdhjsrt.com' }
    // instead of
    // {email: 'asdfh@afdhjsrt.com'}
    console.log(req.body);
    const validation = schema.validate(req.body);
    if(validation.error) {
        console.log(validation.error.details);
        res.send('Validation error');
    }
    else {
        console.log('Validation successful');
        res.json({success: true});
    }
});

// get() takes a path and a handler, much like http
app.get('/', (req, res) => {
    // res.send('Hello World');

    res.sendFile(path.join(__dirname, 'files', 'index.html'));
});

// Adding another path
app.get('/example', (req, res) => {
    res.send('Hitting the Example path');
});

/* Path Parameters */
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