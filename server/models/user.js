/**
 * Defining a User Model in mongoose
 * Code modified from https://github.com/sahat/hackathon-starter
 */

var mongoose = require('mongoose');

/*
 User Schema
 */

var UserSchema = new mongoose.Schema({
  userId: { type: String, unique: true, index: true },
  email: String,
  name: { type: String, default: ''},
  picture: { type: String, default: ''},
  tokens: Array
});


module.exports = mongoose.model('User', UserSchema);
