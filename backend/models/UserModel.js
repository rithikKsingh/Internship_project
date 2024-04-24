const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,    
  },
  address: {
    type: String,
    required: true,    
  },
  country: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,    
  },
  city: {
    type: String,
    required: true,    
  },
  state: {
    type: String,
    required: true,    
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
},{
    timestamps: true,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
