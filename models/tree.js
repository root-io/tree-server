const mongoose = require('mongoose')
const { Schema } = mongoose

const TreeSchema = new Schema({
  specie: { type: String, unique: true }
})

module.exports = mongoose.model('Tree', TreeSchema)
