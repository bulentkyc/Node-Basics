const auth = require('express').Router();


//Fetch data rom Mongo and assign into user variable
const user = {
    userName: 'test1',
    pass: '12345'
};

auth.get('/register', (req, res) => 
    res.send(
        `Welcome on my app.
        Please give me your username and password to register`
        )
);

auth.post('/register/:userName/:pass', (req, res) => {
    /* 
    const userName = req.params.userName;
    const pass = req.params.pass;
    */
    const {userName, pass} = req.params;

    if (userName == user.userName && pass == user.pass) {
        res.send('Welcome on dashboard!');
    } else {
        res.send('email or password is wrong!')
    }

});

module.exports = auth;