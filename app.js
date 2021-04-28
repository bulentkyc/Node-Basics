/* //import http from 'http';
const http = require('http');

const port = process.env.PORT || 8080;
const hostName = 'localhost';//'127.0.0.1

console.log('This will be logged just once');

http.createServer((req, res) => {
    console.log('This will be logged with every request');
    res.writeHead(202, {'Content-Type': 'text/plain'});
    res.end('Hello World :)');
}).listen(port, hostName, () => console.log(`Server started to run on ${port}`));

 */

const express = require('express');
const app = express();
const basics = require('./router/basics');
const auth = require('./router/auth');

const port = process.env.PORT || 8080;
//const hostName = '127.0.0.1'

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    res.header('Access-Control-Allow-Methods', "GET, PUT, POST, DELETE");
    next();
}

app.use(allowCrossDomain);

app.use('/basics', basics);
app.use('/auth', auth);

app.listen(port, () => console.log(`Server started to run on ${port}`));