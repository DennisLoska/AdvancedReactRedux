const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Setup options for JWT Strategy
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