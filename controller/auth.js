const users = require('../model/users');

exports.registerGet = (req, res) => {
    res.send(
        `Welcome on my app.
        Please give me your username and password to register`
    );    
}

exports.registerPost = async (req, res) => {
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

    let response='';

    //1. Is user registered
    await users.find({email}, (err,docs)=>{
        if (err) {
            throw err;
        } else {
            if (docs.length > 0) {
                response += 'Email address is already in use!';
            }
        }
    });


    await users.find({userName}, (err, docs) => {
        if(err) {
            throw err
        } else {
            if(docs.length > 0) {
                response += 'Username is already in use!'
            }
        }
    });

    if (response.length > 0) {
        res.send(response);
    } else {
        //create user
        const newUser = new users({
            userName,
            email,
            pass
        }); 

        newUser.save();
        res.send(`Your account registered successfully`);
    }

    
/* 
    
    const emailCheck = await users.find({email});
    const userNameCheck = await users.find({userName});

    if (emailCheck.length > 0) {
        response += 'email is already in use\n';
    }

    if (userNameCheck.length > 0) {
        response += 'username is already in use\n';
    }
    
    if (response.length === 0) {
        //create user
        const newUser = new users({
            userName,
            email,
            pass
        }); 

        newUser.save();
        res.send(`Your account registered successfully`);
    } else {
        res.send(response)
    }

     */
}



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