const auth = require('express').Router();
const authController = require('../controller/auth');

auth.get('/register', authController.registerGet);

auth.post('/register/:userName/:email/:pass', authController.registerPost);

module.exports = auth;