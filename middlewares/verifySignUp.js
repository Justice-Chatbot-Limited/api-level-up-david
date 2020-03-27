const db = require('../models');

const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // We start by username
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if(user) {
            res.status(400).send({
                message: 'Username already used... Try another one'
            });
            return;
        }
        // Email
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(user) {
            res.status(400).send({
                message: "Email already used."
            });
            return;
        }
    })
    })
}

const verifySignup = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail
}
s
module.exports = verifySignup;