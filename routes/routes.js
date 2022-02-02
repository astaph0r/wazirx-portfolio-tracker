const Portfolio = require("../models/Portfolio");
const User = require("../models/User");
const router = require('express').Router();
const passport = require('passport');
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");

require('dotenv').config({ path: '.env' });
require('../config/auth');


const isAuthenticated = (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const verified = jwt.verify(token, process.env.SECRET);
        next();
    } catch (error) {
        console.log(error);
        res.send("Unauthorized Access. Redirecting...")
        res.redirect('/')
    }
}

const isAuthorized = (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const verified = jwt.verify(token, process.env.SECRET);
        next();
    } catch (error) {
        console.log(error);
        res.send("Unauthorized Access. Redirecting...")
        res.redirect('/')
    }
}

router.get("/isAuthenticated", async (req, res) => {
    try {
        const token = req.cookies.jwt;
        const verified = jwt.verify(token, process.env.SECRET);
        const user = await User.findById(verified._id);
        res.send(user);
    } catch (error) {
        res.send(undefined);
    }
});



router.get("/auth/google", passport.authenticate("google", {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
  ]
}));
  
  
router.get( '/auth/google/callback',(req, res) => {
    passport.authenticate( 'google', {
        // successRedirect: '/protected',
        failureRedirect: '/auth/google/failure',
        session: false 
      }, async (err, user) => {
        const token = jwt.sign({_id: user._id}, process.env.SECRET);
        // console.log(token);
        res.cookie("jwt", token, {
                  expires: new Date(Date.now()+604800),
                  httpOnly: true
        });
      res.redirect('/#/home');
      // You can send cookies and data in response here.
    })(req, res)
});
  
router.get('/protected', isAuthenticated, async (req, res) => {
    console.log(req.cookies.jwt);
    // res.redirect('/#/home');
});
  
router.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('Goodbye!');
});
  
router.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
    res.redirect('/login');
});



module.exports = router;


// router.post("/coin",(req, res) => {
//     const coin = req.body;

//     },
// );