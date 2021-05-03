const mongoose = require('mongoose');



const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        });
        console.log('Mongo is ready!');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;