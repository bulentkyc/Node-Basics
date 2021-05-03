const users = require('../model/users');

exports.registerGet = (req, res) => {
    res.send(
        `Welcome on my app.
        Please give me your username and password to register`
    );    
}

exports.registerPost = (req, res) => {
    //1. Is user registered
    //2. If yes, reject and inform the user
    //3. If no, check all rules and save
    //4. Give response for the successfully registration
/* 
    const userName = req.params.userName;
    const email = req.params.email;
    const pass = req.params.pass;
 */
    const {userName, email, pass} = req.params;

    //1. Is user registered
    users.find({email}, (err,docs)=>{
        if (err) {
            throw err;
        } else {
            console.log(docs);
            res.send(docs);
        }
    });

    
}

/* const newUser = new test({
    userName: 'test1',
    rate: '200'
}); 

newUser.save(); */

/*exports.registerPost = (req, res) => {
    
    //const userName = req.params.userName;
    //const pass = req.params.pass;
    

    //Fetch data rom Mongo and assign into user variable
     const collection = [ {
        userName: 'test1',
        pass: '12345'
    },{
        userName: 'test2',
        pass: '12345'
    },{
        userName: 'test3',
        pass: '12345'
    },]



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

}*/