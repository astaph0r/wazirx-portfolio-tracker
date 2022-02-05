const Portfolio = require("../models/Portfolio");
const User = require("../models/User");
const router = require('express').Router();
const passport = require('passport');
const jwt = require("jsonwebtoken");
const axios = require('axios');
const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });
require('../config/auth');


// const isAuthenticated = (req, res, next) => {
//     try {
//         const token = req.cookies.jwt;
//         const verified = jwt.verify(token, process.env.SECRET);
//         next();
//     } catch (error) {
//         console.log(error);
//         res.send("Unauthorized Access. Redirecting...")
//         res.redirect('/')
//     }
// }

const Authenticated = (req, res) => {
    try {
        const token = req.cookies.jwt;
        const verified = jwt.verify(token, process.env.SECRET);
        return verified;
    } catch (error) {
        throw error;
    }
}

// const isAuthorized = (req, res, next) => {
//     try {
//         const token = req.cookies.jwt;
//         const verified = jwt.verify(token, process.env.SECRET);
//         next();
//     } catch (error) {
//         console.log(error);
//         res.send("Unauthorized Access. Redirecting...")
//         res.redirect('/')
//     }
// }

router.get("/isAuthenticated", async (req, res) => {
    try {
        const token = req.cookies.jwt;
        const verified = jwt.verify(token, process.env.SECRET);
        const user = await User.findById(verified._id);
        const portfolio = await Portfolio.findOne({userID: verified._id});
        res.send({user, portfolio});
    } catch (error) {
        res.send(undefined);
    }
});

router.get("/details", async (req, res) => {
    try {
        const verified = Authenticated(req, res);
        const user = await User.findById(verified._id);
        const portfolioDetails = await Portfolio.findOne({userID: verified._id});
        const allMarkets = await axios.get('https://api.wazirx.com/api/v2/tickers');
        let markets = [];
        marketValues = Object.values(allMarkets.data);
        marketTickers = Object.keys(allMarkets.data);
        for (i =0; i<marketValues.length; i++) {
            if (marketValues[i].quote_unit === 'inr') {
                markets.push({
                    name: marketValues[i].name,
                    last: marketValues[i].last,
                    ticker: marketTickers[i]
                });
            }
        }
        let portfolio;
        try {
            portfolio = JSON.parse(JSON.stringify(portfolioDetails.coins));
            portfolio.forEach(coin => {
                const found = markets.find((market, index) =>{
                    if (market.ticker == coin.market) {
                       return true
                    }
                });
                // coin["date"] = new Date(coin.date);
                coin["_id"] = mongoose.Types.ObjectId(coin._id);
                coin["latestPrice"] = Number(found.last);
                
            });
        } catch (error) {
            portfolio = []
        }
        // console.log({user, portfolio, markets});
        res.send({user, portfolio, markets});
    } catch (error) {
        console.log(error);
        res.send(undefined);
    }
});

// router.get("/portfolio", async (req, res) => {
//     try {
//         const verified = Authenticated(req, res);
//         const portfolio = await Portfolio.findOne({userID: verified._id});
//         const allMarkets = await axios.get('https://api.wazirx.com/api/v2/tickers');
//         let markets = [];
//         marketValues = Object.values(allMarkets.data);
//         marketTickers = Object.keys(allMarkets.data);
//         for (i =0; i<marketValues.length; i++) {
//             if (marketValues[i].quote_unit === 'inr') {
//                 markets.push({
//                     name: marketValues[i].name,
//                     last: marketValues[i].last,
//                     ticker: marketTickers[i]
//                 });
//             }
//         }

//         // Object.values(allMarkets.data).forEach(element => {
//         //     // you can have condition here as well
//         //     if(element.quote_unit === 'inr')
//         //         markets.push({
//         //             name: element.name,
//         //             last: element.last,
//         //             // ticker: element
//         //         });
//         // });
        
//         console.log(markets);
//         // res.json(allMarkets.data);
//     } catch (error) {
//         console.log(error);
//         res.send(undefined);
//     }
// });

router.put("/portfolio", async (req, res) =>{
    try {
        const verified = Authenticated(req, res);
        const update = req.body.portfolio;
        const portfolio = await Portfolio.findOneAndUpdate(
            { userID: verified._id }, 
            { $set: {'coins':update} },
            { new: true}
        );
        res.status(200)
    } catch (error) {
        res.status(409)
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
  
// router.get('/protected', isAuthenticated, async (req, res) => {
//     console.log(req.cookies.jwt);
//     // res.redirect('/#/home');
// });
  
router.get('/logout', (req, res) => {
    req.logout();
    // req.session.destroy();
    res.send('Goodbye!');
});
  
router.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
    res.redirect('/');
});



module.exports = router;


// router.post("/coin",(req, res) => {
//     const coin = req.body;

//     },
// );