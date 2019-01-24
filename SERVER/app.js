import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './routes/index.js';
import { Http2ServerRequest } from 'http2';
import { runInNewContext } from 'vm';

const app = express();
/*app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin || "localhost:8080");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');

    //res.next()
})*/
/**
    * Connect to the database
    */

mongoose.connect('mongodb://localhost');

/**
    * Middleware
    */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// catch 400
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(400).send(`Error: ${res.originUrl} not found`);
    next();
});

// catch 500
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send(`Error: ${err}`);
    next();
});



/**
    * Register the routes
    */

routes(app);

export default app;
