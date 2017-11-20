var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ApiUser = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true
  },
  personal_phone: {
    type: String,
  },
});

module.exports = mongoose.model('User', ApiUser);
