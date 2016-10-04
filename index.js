//requires
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// var expressJWT = require('express-jwt');
// var jwt = require('jwt');
// var Chart = require('chart.js');

//set
var app = express();
app.use(express.static(__dirname + '/public'));

//mongoose models and connection
var mongoose = require('mongoose');

//route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//listen
var server = app.listen(process.env.PORT || 3000);

module.exports = server;
// module.exports = Chart;