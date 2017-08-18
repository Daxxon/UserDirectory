const data = require('./data.js');
const path = require('path');
const mustacheExpress = require('mustache-express');
const express = require('express');
const app = express();
const morgan = require("morgan");

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// app.use(morgan("combined"));
// app.use(morgan("tiny"));

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index', data);
});

app.get('/user/:id', (req, res) => {
  let myIndex = req.params.id - 1;
  let user = data.users[myIndex];
  res.render('user', user);
})

app.listen(3000, () => console.log('SHOW ME WHAT YOU GOT'));
