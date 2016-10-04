//requires
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//web dependencies
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var secret = process.env.JWT_SECRET;
// var Chart = require('chart.js');

//set
var app = express();


//mongoose models and connection
var mongoose = require('mongoose');
var User = require('./models/user');
mongoose.connect('mongodb://localhost/choices');

//decoding post data in json / url formats
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use(require('morgan')('dev'));

app.use('/api/users', expressJWT({secret: secret}).unless({method: 'POST'}), require('./controllers/users'));


//middleware to check if user is authorized
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({message: 'You need authorization to view this information'});
  }
});
//route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//listen
var server = app.listen(process.env.PORT || 3000);

module.exports = server;
// module.exports = Chart;