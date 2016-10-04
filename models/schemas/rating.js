var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  item: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }],
  rating: Number
});

var Rating = mongoose.model('Rating', schema);

module.exports = Rating;