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

const port = process.env.PORT || 8080;
//const hostName = '127.0.0.1'

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    res.header('Access-Control-Allow-Methods', "GET, PUT, POST, DELETE");
    next();
}

app.use(allowCrossDomain);

app.get('/', (req, res) => res.send('Hello World:)))'));

app.get('/test', (req, res) => res.send('You did a GET request to /test route!'));
app.post('/test', (req, res) => res.send('You did a POST request to /test route!'));

app.all('/about', (req, res) => res.send(`<h1 style="color: green">I'm a full stack developer</h1>`));

app.get('/data', (req, res) => res.send({id:1, brand: 'apple', model: 'macbook-pro'}));

/* app.get('/random-number', (req, res) => {
    let newRnd = Math.floor(Math.random()*10);
    res.send(   
            '<h3 style="color:blue">Your number: ' + 
            `<span style="color:coral">${newRnd}</span>` + 
            '</h3>'
        );
});
 */
app.get('/random-number', (req, res) => {
    console.log('rnd');
    let newRnd = Math.floor(Math.random()*10);
    res.send({number:newRnd});
});

app.get('/random-number-2', (req, res) => {
    res.send(   
        `
        <h3 style="color:blue">Your number: 
            <span id="rnd" style="color:coral">Random number goes here</span>
        </h3>

        <script>
            let newRnd = Math.floor(Math.random()*10);
            document.getElementById('rnd').innerHTML = newRnd;
        </script>
        `
    );
});

app.get('/log', (req, res) => {
    console.log({req, res});
    res.send('Your data logged as well');
});


app.get('/ad?dress', (req, res) => res.send('Welcome on user page'));


app.listen(port, () => console.log(`Server started to run on ${port}`));