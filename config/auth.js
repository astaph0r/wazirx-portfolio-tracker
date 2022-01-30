const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../models/User");
const mongoose = require('mongoose');


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:5000/auth/google/callback',
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  console.log(profile);
  User.findOne({googleId: profile.id})
  .then((currentUser)=>{
    if(currentUser){
          //if we already have a record with the given profile ID
        done(null, currentUser);
    } else{
         //if not, create a new user 
        new User({ 
          googleId: profile.id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value,
          displayPicture: profile._json.picture,

        })
        .save().
        then((newUser) =>{
          done(null, newUser);
        });
    }})
    .catch( err => console.log("error occured", err.message))
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
