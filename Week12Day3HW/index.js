const express = require('express');
const app = express();
const path = require('path'); 

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/views'))

app.get('/', function(req, res) {
    res.render('home.ejs');
  });
  
  app.get('/route1', function(req, res) {
    res.render('home.ejs');
});

app.get('/route2', function(req, res) {
    res.render('another.ejs');
});

app.get('/route3', function(req, res) {
    res.render('another.ejs');
});

app.get('/route4', function(req, res) {
    res.render('This is route 4');
});

app.get('/route5', function(req, res) {
    res.render('home.ejs');
});

app.get('/route6', function(req, res) {
    res.render('another.ejs');
});

app.get('/route7', function(req, res) {
    res.render('home.ejs');
});

app.get('/route8', function(req, res) {
    res.render('another.ejs');
});

app.get('/route9', function(req, res) {
    res.render('home.ejs');
});

  app.listen(3000, function () {
    console.log('Listening on port 3000');
  });

