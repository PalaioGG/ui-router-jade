var express = require('express');
var app = express();
var path = require('path');
var PORT = 3000;

// set the view engine
app.set('view engine', 'jade');

// Register the directory
app.use(express.static(path.join(__dirname, '/')));

// routes
app.get("/main", function(req, res, next) { res.render('main') })
app.get("/linkone", function(req, res, next) { res.render('linkone') })
app.get("/linktwo", function(req, res, next) { res.render('linktwo') })

app.get("/navbar", function(req, res, next) { res.render('../partials/navbar') })
app.get("/footer", function(req, res, next) { res.render('../partials/footer') })

app.listen(PORT);
console.log('listening on port ' + PORT);
