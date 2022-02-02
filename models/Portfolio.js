const mongoose = require("mongoose");

const portfolioSchema = mongoose.Schema({
  coins: [{
      market: {
        type: String,
        trim: true,
        required: true
      },
      amountOfCoins: {
        type: Number,
        required: true
      },
      buyingPrice: {
        type: Number,
        required: true
      },
      date: {
        type: Date,
        required: true,
      }
  }],
});

// export model user with UserSchema
module.exports = mongoose.model("Portfolio", portfolioSchema);
