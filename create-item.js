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
  User.findOne({}, function(err, user){
    Item.create({name: req.body.name}, function(err, item) {
      console.log(err, item);
      if (err) return "couldn't create item";
    
      Rating.create({rating: req.body.rating}, function(err, rating){
        if (err) return "couldn't create rating";
            console.log('break2');
        Tag.create({tag: req.body.tag}, function(err, tag){
          if (err) return "couldn't create tag";
              console.log('break3');
          item.ratings.push(rating._id);
              console.log('break4');
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