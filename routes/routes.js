const Portfolio = require("../models/Portfolio");
const User = require("../models/User");
const router = require('express').Router();
const passport = require('passport');


router.get("auth/google/callback",
    passport.authenticate("google"), (req,res) => {
        console.log(req);
        res.send(req.user);
        res.send("you reached the redirect URI");
});



module.exports = router;


// router.post("/coin",(req, res) => {
//     const coin = req.body;

//     },
// );