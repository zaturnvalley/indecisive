var express = require('express');
var Item = require('../models/item');
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
      Ratings.create(req.body.rating)
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