const mongoose = require('mongoose');

// Weather Schema
const weatherSchema = new mongoose.Schema({
    location: String,
    temperature: Number,
    description: String,
  });
  
module.exports = mongoose.model('Weather', weatherSchema);