
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
 
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', UserSchema);