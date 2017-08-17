'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PokemonSchema = new Schema({
    name: String,
    image: String,
    species: String,
    type: [String],
    abilities: [String],
    stats: {
        hp: Number,
        attack: Number,
        defense: Number,
        "sp.atk": Number,
        "sp.def": Number,
        speed: Number,
        total: Number
    }
});

module.exports = mongoose.model('Pokemon', PokemonSchema);