const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    rate: Number
},
{
    collection: 'test'
}
);

module.exports = mongoose.model('test' ,testSchema);