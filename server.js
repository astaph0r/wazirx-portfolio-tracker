const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const session = require('express-session');
const helmet = require('helmet');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config({ path: '.env' });
// require('./config/passport')(passport);
require('./config/auth');

// HelmetJS
app.use(helmet());

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology : true}, { useFindAndModify: false})
.then(() => console.log('Connected to MongoDB'))
.catch('error', (err) => {
  console.log("Couldn't connect to MongoDB", err.message);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
}

app.use(session({ secret: process.env.SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// passport.use(
//   new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: 'https://localhost:5000/auth/google/callback'
//   }, (accessToken, refreshToken, profile, done) => {
//       // passport callback function
//       //check if user already exists in our db with the given profile ID
//       done(null, profile);
//       // User.findOne({googleId: profile.id}).then((currentUser)=>{
//       //   if(currentUser){
//       //     //if we already have a record with the given profile ID
//       //     done(null, currentUser);
//       //   } else{
//       //        //if not, create a new user 
//       //       new User({
//       //         googleId: profile.id,
//       //       }).save().then((newUser) =>{
//       //         done(null, newUser);
//       //       });
//       //    } 
//       // })
//     })
// );

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id).then(user => {
//     done(null, user);
//   });
// });

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});



app.get("/auth/google", passport.authenticate("google", {
  scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
]
}));


app.get( '/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/google/failure'
  })
);

app.get('/protected', isLoggedIn, (req, res) => {
  console.log(req.user.displayPicture);
  res.send(`Hello ${req.user.firstName}`);
});

app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye!');
});

app.get('/auth/google/failure', (req, res) => {
  res.send('Failed to authenticate..');
});

// app.get("/auth/logout", (req, res) => {
//   req.logout();
//   res.send(req.user);
// });

// app.use('/', routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log('We have a server running on PORT: ' + PORT);
});
