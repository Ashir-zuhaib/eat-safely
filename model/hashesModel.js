// Define the User Schema
const mongoose = require('mongoose')
const hashesSchema = new mongoose.Schema({
    password: { type: String, required: true },
    userId: { type: String, required: true },
    created: { type: Date, default: Date.now },
  });
  
  // Create the User model
  const Hashes = mongoose.model("Hashes", hashesSchema);
  module.exports = {
    Hashes,
  };
  