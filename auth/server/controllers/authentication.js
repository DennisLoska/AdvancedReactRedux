const User = require('../models/user');

exports.signup = (req, res, next) => {
    const { email, password } = req.body;

    // See if an user with given email exists
    User.findOne({email: email}, (err, user) => {
        if(err) { return next(err) };

        // If an user with email does exist, return an error
        if(user !== null){
            return res.status(422).send({ error: 'Email already in use!'});
        }
    })

    // If an user with email does not exist, create and save user record
    const user = new User({
        email: email,
        password: password
    })

    user.save((err) => {
        if(err){ return next(err) }

        // Respond to request indicating the user was created
        res.json({ success: true });
    });

}