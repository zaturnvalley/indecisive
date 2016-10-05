var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/choices');

var Tag = require('./models/schemas/tag');

console.log("finding all tags");
Tag.find({}, function(err, tags) {
  if (err) console.log("error finding all");
  console.log("tags:", tags);
})