var express = require('express');
var Item = require('../models/item');
var Rating = require('../models/schemas/rating');
var User = require('../models/user');
var Tag = require('../models/schemas/tag');
var router = express.Router();
var findOrCreate = require('mongoose-findorcreate');

router.route('/')
  .get(function(req, res) {
    Item.find(function(err, items) {
      if (err) return res.status(500).send(err);

      return res.send(items);
    });
  })
  .post(function(req, res) {
    console.log('***POST CONTROLLER', req.body);
    User.findOne({_id: req.body.user}, function(err, user) {
      if (err) return res.status(500).send(err, {message: 'User Not Found'});

      Item.findOrCreate({name: req.body.name}, function(err,item) {
        if (err) return res.status(500).send(err);

        Rating.create({rating: req.body.rating}, function(err, rating) {
          if (err) return res.status(500).send(err);

          Tag.findOrCreate({tag: req.body.tag}, function(err, tag) {
            if (err) return res.status(500).send(err);

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
          });
        });
      });
    });
    return res.send(item);
  });

  router.route('/:id')
  .get(function(req, res) {
    Item.findById(req.params.id, function(err, item){
      if (err) return res.status(500).send(err);

      return res.send(item);
    });
  })
  .put(function(req, res) {
    Item.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);

      return res.send({message: 'success'});
    });
  })
  .delete(function(req, res) {
    Item.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);

      return res.send({message: 'success'});
    });
  });
  router.route('/tags')
  .get(function(req, res) {
    Tag.find(function(err, tags) {
      if (err) return res.status(500).send(err);

      return res.send(tags);
    })
  })

  module.exports = router;