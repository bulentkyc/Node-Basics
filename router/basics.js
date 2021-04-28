const basics = require('express').Router();


basics.get('/', (req, res) => res.send('Hello World:)))'));

basics.get('/test', (req, res) => res.send('You did a GET request to /test route!'));
basics.post('/test', (req, res) => res.send('You did a POST request to /test route!'));

basics.all('/about', (req, res) => res.send(`<h1 style="color: green">I'm a full stack developer</h1>`));

basics.get('/data', (req, res) => res.send({id:1, brand: 'basicsle', model: 'macbook-pro'}));

/* basics.get('/random-number', (req, res) => {
    let newRnd = Math.floor(Math.random()*10);
    res.send(   
            '<h3 style="color:blue">Your number: ' + 
            `<span style="color:coral">${newRnd}</span>` + 
            '</h3>'
        );
});
 */
basics.get('/random-number', (req, res) => {
    console.log('rnd');
    let newRnd = Math.floor(Math.random()*10);
    res.send({number:newRnd});
});

basics.get('/random-number-2', (req, res) => {
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

basics.get('/log', (req, res) => {
    console.log({req, res});
    res.send('Your data logged as well');
});

//on path we can use string, string pattern or regex
//String Patterns:
//? means optional letter
basics.get('/ad?dress', (req, res) => res.send('Welcome on user page'));


//+ means optional count of same letter 
basics.get('/go+gle', (req, res) => res.send('Welcome on Google'));


//Parameters
basics.get('/user/:username/:pass', (req, res) => 
            res.send(req.params.username + '\n' + req.params.pass));



basics.get('/flight/:from/:to', (req, res) => {
    const from = req.params.from;
    const to = req.params.to;
    let rnd = Math.floor(Math.random()*10+1);

    if (rnd > 5) {
        res.send(`Your flight from ${from} to ${to} is booked successfully.`)
    } else {
        res.send(`Sorry we couldn't book your flight from ${from} to ${to}.`)
    }
});

//To seperate parameters, we can use - or .
/* 
Route path: /flights/:from-:to
Request URL: http://localhost:4000/flights/LAX-SFO
req.params: { "from": "LAX", "to": "SFO" }
 */
basics.get('/booking/:from-:to', (req, res) => {
    const from = req.params.from;
    const to = req.params.to;
    let rnd = Math.floor(Math.random()*10+1);

    if (rnd > 5) {
        res.send(`Your flight from ${from} to ${to} is booked successfully.`)
    } else {
        res.send(`Sorry we couldn't book your flight from ${from} to ${to}.`)
    }
});


module.exports = basics;