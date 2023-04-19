const mongoose = require('mongoose');
const { Schema } = mongoose;
const connectToMongo = require('./backend/db.js');

connectToMongo();
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
  const User = mongoose.model('user', UserSchema);
//   User.createIndexes();
  module.exports = User;