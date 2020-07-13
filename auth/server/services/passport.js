const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Setup options for local Strategy
const localOptions = { usernameField: 'email' };

// Create local strategy for sign in process
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
    // Verify email and password
    User.findOne({ email: email }, (err, user) => {
        if(err){ return done(err, false); }
        if(!user){ return done(null, false); }
        
        //compare passwords
        user.comparePassword(password, (err, isMatch) => {
            if(err){ return done(err); }
            if(!isMatch){ return done(null, false)}
            return done(null, user);
        })
    })
})
// Setup options for JWT Strategy to decrypt user.id from token using secret
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

// Create JWT strategy (sort of plugin for Passport eco system)
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
   // See if user ID in payload (token) exists in DB
   User.findById(payload.sub, (err, user) => {
       if(err) { return done(err, false); }
       if(user){
           done(null, user);
       } else {
           done(null, false);
       }
   })
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);