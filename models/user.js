var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = mongoose.Schema({
  username: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    var returnJson = {
      id: ret._id,
      email: ret.email,
      username: ret.username
    };
    return returnJson;
  }
});

UserSchema.methods.authenticated = function(password) {
  var username = this;
  var isAuthenticated = bcrypt.compareSync(password, username.password);
  return isAuthenticated ? username : false;
};

UserSchema.pre('save', function(next) {
  if (!this.isModified('password')){
    next();
  } else {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  }
});

module.exports = mongoose.model('User', UserSchema);