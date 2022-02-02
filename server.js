const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
// const session = require('express-session');
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
app.use(cookieParser());


// app.use(session({ secret: process.env.SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
// app.use(passport.session());

app.use('/', routes);


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
