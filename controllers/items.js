var express = require('express');
var Item = require('./models/item');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Item.find(function(err, items) {
      if (err) return res.status(500).send(err);

      return res.send(items)
    });
  })
  .post(function(req, res) {
    Item.create(req.body, function(err, item) {
      if (err) return res.status(500).send(err);

      return res.send(item);
    });
  });

  router.route('/:id')
  .get(function(req, res){
    Item.findById(req.params.id, function(err, item){
      if (err) return res.status(500).send(err);

      return res.send(item);
    });
  })