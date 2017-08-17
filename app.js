const data = require('./data.js');
const path = require('path');
const mustacheExpress = require('mustache-express');
const express = require('express');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache')

app.use(express.static("public"))
// app.use('/css', express.static("public"));
// app.use(express.static('/'))
// app.use('/user', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index', data);
});

app.get('/user/:id', (req, res) => {
  let myIndex = req.params.id - 1;
  let user = data.users[myIndex];
  res.render('user', user);
  console.log("My index: " + myIndex);
  console.log("My user id: " + user.id);
  console.log(data.users[myIndex]);
})

app.listen(3000, () => {
  console.log('SUCCESSFUL TRANSMISSION');
  // console.log(data);
});
