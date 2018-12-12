var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var path = require('path');


app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));


mongoose.connect('mongodb://localhost/Shoe');
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

app.listen(8000, function() {
    console.log("Listening on port 8000");
})