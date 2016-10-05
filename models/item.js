var mongoose = require('mongoose');

var ItemSchema = mongoose.Schema({
  name: String,
  ratings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rating'
  }],
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }]
});

module.exports = mongoose.model('Item', ItemSchema);