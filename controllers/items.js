var mongoose = require('mongoose');

var ItemSchema = mongoose.Schema({
  name: String,
  ratings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rating'
  }]
});

module.exports = mongoose.model('Item', ItemSchema);