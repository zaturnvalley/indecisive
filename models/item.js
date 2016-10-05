var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

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
ItemSchema.plugin(findOrCreate);
module.exports = mongoose.model('Item', ItemSchema);