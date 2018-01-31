const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sequenceSchema = new Schema({
  name: String,
  slug: String,
  sequence: Array,
  difficulty: String,
  duration: Number,
})

const SequenceModel = mongoose.model('sequences', sequenceSchema)

module.exports = SequenceModel
