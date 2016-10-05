var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

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


schema.plugin(findOrCreate);
var Tag = mongoose.model('Tag', schema);
module.exports = Tag;