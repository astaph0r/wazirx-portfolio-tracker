const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../models/User");
const Portfolio = require("../models/Portfolio");
const mongoose = require('mongoose');


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.BASEURL+'/auth/google/callback',
  passReqToCallback: true,
},
(async (request, accessToken, refreshToken, profile, done) => {
  // console.log(profile);
  User.findOne({googleID: profile.id})
  .then((existingUser)=>{
    if(existingUser){
          //if we already have a record with the given profile ID
        // const token = existingUser.generateAuthToken();
        // console.log(token);
        // response.cookie("jwt", token, {
        //   expires: new Date(Date.now()+604800),
        //   httpOnly: true
        // })
        done(null, existingUser);
    } else{
         //if not, create a new user 
         
        new User({ 
          googleID: profile.id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value,
          displayPicture: profile._json.picture,

        })
        .save()
        .then((newUser) =>{
          new Portfolio({
            userID: newUser._id,
            coins: []
          })
          .save()
          .then(done(null, newUser));
        });
    }})
    .catch( err => console.log("error occurred", err.message))
})));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
