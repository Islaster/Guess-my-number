const { render } = require('ejs');
const express = require('express');
const mongoose = require('mongoose');
const player = require('./models/leaderboard');
const morgan = require('morgan');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
morgan('dev');
const app = express();
app.use(express.json());

const dbURL =
  'mongodb+srv://Nexus:cSdaEcQFZ8SDsxHI@cluster0.b9cy2.mongodb.net/Leaderboard?retryWrites=true&w=majority';
mongoose
  .connect(dbURL)
  .then(result => {
    app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
  });

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  next();
});

app.get('/', (req, res) => {
  res.render('create', { title: 'create' });
});

app.post('/play', (req, res) => {
  const players = new player(req.body);
  players
    .save()
    .then(result => {
      res.redirect('/play');
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/play', (req, res) => {
  res.render('index', { title: 'Game Time' });
});
