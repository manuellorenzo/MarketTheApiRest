var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  }
});

module.exports = mongoose.model('Users', userSchema);