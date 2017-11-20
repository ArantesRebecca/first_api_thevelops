var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  ask = require('./api/models/apiModels'),
    bodyParser = require('body-parser');


  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://arantesrebecca:firstapi@ds113626.mlab.com:13626/heroku_6kgxwp8k', function(){
    console.log('Database connected!')
  });


  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


  var routes = require('./api/routes/apiRoutes');
  routes(app);


app.listen(port);

console.log('First API server started on: ' + port);
