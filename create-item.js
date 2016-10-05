var Item = require('./models/item');
var Rating = require('./models/schemas/rating');
var User = require('./models/user');
var Tag = require('./models/schemas/tag');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/choices');


var req = {
  body: {
      name: 'Chocolate Doughnut',
      rating: 5,
      //user: Auth.currentUser().id,
      tag: 'snacks'
    }
}

function createItem() {
  User.findOne({_id: req.body.user}, function(err, user){
    if (err) return "User not found, create an account";

    Item.findOrCreate({name: req.body.name}, function(err, item) {
      console.log(err, item);
      if (err) return "couldn't create item";
    
      Rating.create(req.body.rating, function(err, rating){
        if (err) return "couldn't create rating";
            console.log('break2');
        Tag.findOrCreate({tag: req.body.tag}, function(err, tag){
          if (err) return "couldn't create tag";
              console.log('break3');

          user.ratings.push(rating._id);
          user.items.push(item._id);
          item.ratings.push(rating._id);
          item.tags.push(tag._id);
          rating.item.push(item._id);
          rating.user.push(user._id);
          tag.item.push(item)
          user.save();
          item.save();
          rating.save();
          tag.save();

          return "success";
          //User.update(req.body.)
        });
      });
    });
  })
}

console.log("testing item creation");
console.log(createItem());