const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create new Schema
const playerSchema = new Schema({
  player: {
    user: String,
    score: Number,
  },
});

const player = mongoose.model('Players', playerSchema);

module.exports = player;
