// Define the User Schema
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created: { type: Date, default: Date.now },
  });
  
  // Create the User model
  const User = mongoose.model("User", userSchema);
  module.exports = {
    User,
  };
  