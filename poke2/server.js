const express = require('express');
const pokemon = require('./models/pokemon.js');
var app = express();
const port = 3000;

const createEngine = require('jsx-view-engine').createEngine;
module.exports.createEngine = createEngine;


app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());


app.get("/", (req, res) => {
    res.send('Welcome to the Pokemon App!')

});

app.get('/pokemon', (req, res) => {
    res.render('Index');
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);

});

