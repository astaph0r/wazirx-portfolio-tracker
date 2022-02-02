const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  googleID: {
    type: String,
    trim: true,
    //maxlength: 30,
    required: true
  },
  firstName: {
    type: String,
    trim: true,
    maxlength: 30,
    //required: true
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 30,
    //required: true
  },
  email: {
    type: String,
    unique: true,
    //required: true
  },
  portfolio: {
    type: mongoose.Schema.Types.ObjectId,
    //unique: true
  },
  displayPicture: {
    type: String,
    //unique: true,
    //required: true
  },
  tokens: [
    {
      token: {
        type: String,   
        //unique: true,
        //required: true
      }
    }
  ]
});

// userSchema.methods.generateAuthToken = async () => {
//   try {
//     let token = jwt.sign({googleID: 'Ankit'}, process.env.SECRET);
//     //this.tokens = this.tokens.concat({token: token});
//     //await this.save();
//     // console.log(token);
//     return token;
//   } catch (err) {
//     console.log(err);
//   }
// }


// export model user with UserSchema
module.exports = mongoose.model("User", userSchema);
