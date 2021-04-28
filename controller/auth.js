exports.registerGet = (req, res) => {
    res.send(
        `Welcome on my app.
        Please give me your username and password to register`
    );    
}

exports.registerPost = (req, res) => {
    /* 
    const userName = req.params.userName;
    const pass = req.params.pass;
    */

    //Fetch data rom Mongo and assign into user variable
    const user = {
        userName: 'test1',
        pass: '12345'
    };

    const {userName, pass} = req.params;

    if (userName == user.userName && pass == user.pass) {
        res.send('Welcome on dashboard!');
    } else {
        res.send('email or password is wrong!')
    }

}