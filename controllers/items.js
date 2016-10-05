var express = require('express');
var Item = require('../models/item');
var Rating = require('../models/rating');
var User = require('../models/user');
var Tag = require('../models/tag');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Item.find(function(err, items) {
      if (err) return res.status(500).send(err);

      return res.send(items);
    });
  })
  .post(function(req, res) {
    console.log('***POST CONTROLLER', req.body);
    Item.create(req.body.name, function(err, item) {
      if (err) return res.status(500).send(err);
        item.name = ser.items;
      Rating.create(req.body.rating, function(err, item){
        if (err) return res.status(500).send(err);
          item.rating = Rating._id;
          item.rating = User.ratings;
          Rating.save();
        Tag.create(req.body.tag, function(err, item){
          if (err) return res.status(500).send(err);
            item.tag = Tag._id
            Item.save();
          User.update(req.body.)
        })
      })
      return res.send(item);
    });
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

  module.exports = router;