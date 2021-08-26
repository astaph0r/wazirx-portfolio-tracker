const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  googleId: {
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
});

// export model user with UserSchema
module.exports = mongoose.model("User", userSchema);
