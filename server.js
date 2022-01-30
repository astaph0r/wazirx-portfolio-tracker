const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const session = require('express-session');
const helmet = require('helmet');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { contentSecurityPolicy } = require('helmet');
require('dotenv').config({ path: '.env' });
// require('./config/passport')(passport);
require('./config/auth');

//HelmetJS
app.use(helmet({
  contentSecurityPolicy: false,
}));

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




// app.get('/', (req, res) => {
//   res.send('<a href="/auth/google">Authenticate with Google</a>');
// });



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

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// like our main.js file, or main.css file!
	app.use(express.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognize the route
	const path = require('path');
	app.get('/*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log('We have a server running on PORT: ' + PORT);
});
