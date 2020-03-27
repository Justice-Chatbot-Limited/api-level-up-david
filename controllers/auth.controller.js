const db = require('../models');
const config = require('../config/auth.config');
const User = db.user;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
    // Save user to Database

    User.findOne({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    }). then(user => {
        if(user) {
            res.send({message: 'User registered successfully!'});
        }
        else {
            res.send({message: 'User has not been registered!'});
        }
    })
}