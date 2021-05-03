const mongoose = require('mongoose');

const users = new mongoose.Schema({
    userName: String,
    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
}
);

module.exports = mongoose.model('users' ,users);