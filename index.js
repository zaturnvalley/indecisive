//requires
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//web dependencies
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var secret = 'secret';

//set
var app = express();


//mongoose models and connection
var mongoose = require('mongoose');
var User = require('./models/user');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/choices');

//decoding post data in json / url formats
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use(require('morgan')('dev'));

app.use('/api/users', expressJWT({secret: secret}).unless({method: 'POST'}), require('./controllers/users'));
app.use('/api/items', require ('./controllers/items'));


//middleware to check if user is authorized
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({message: 'You need authorization to view this information'});
  }
});

//post api, if auth, return signed jwt
app.post('/api/auth', function(req, res) {
  User.findOne({username: req.body.username}, function(err, user) {
    //return 401 if error or no user
    if (err || !user) return res.status(401).send({message: 'User not found'});
    console.log('after first 401', req.body.password);
    //attempt to auth user
    var isAuthenticated = user.authenticated(req.body.password);
    //return 401 if invalid
    if (err || !isAuthenticated) return res.status(401).send({message: 'User not authenticated'});
    console.log('after second 401');
    //sign jwt with payload & secret then return
    var token = jwt.sign(user.toJSON(), secret);
    console.log('after jwt sign');
    console.log(user);
    return res.send({user: user, token: token});
  })
})
//route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//listen
var server = app.listen(process.env.PORT || 3000);

module.exports = server;
// module.exports = Chart;