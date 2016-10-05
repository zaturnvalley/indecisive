var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  item: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }],
  tag: {
    type: String,
    required: true,
    unique: true
  }
});

var Tag = mongoose.model('Tag', schema);

module.exports = Tag;