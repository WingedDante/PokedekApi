'use strict';
module.exports = function(app) {
  var poke = require('../controllers/PokemonController');


    // todoList Routes
    app.route('/pokemon')
        .get(poke.list_all_pokes)
        .post(poke.create_a_poke);


    app.route('/pokemon/:pokeId')
        .get(poke.read_a_poke)
        .put(poke.update_a_poke)
        .delete(poke.delete_a_poke);

    app.route('/test')
        .get(poke.test);
    
    app.route('/bulkpokemon')
        .post(poke.create_bulk_pokemon);
};

