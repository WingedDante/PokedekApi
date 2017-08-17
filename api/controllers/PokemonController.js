'use strict';


var mongoose = require('mongoose'),
  Pokemon = mongoose.model('Pokemon');

exports.test = function(req,res){
    res.send('Testing routes');
}

exports.list_all_pokes = function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    Pokemon.find({}, function(err, Pokemon) {
        if (err)
        res.send(err);
        res.json(Pokemon);
    });
};

exports.create_a_poke = function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
  var new_poke = new Pokemon(req.body);
  new_poke.save(function(err, poke) {
    if (err)
      res.send(err);
    res.json(poke);
  });
};

exports.create_bulk_pokemon = function(req, res){
    var data = req.body;
    var pokes = [];
    data.forEach(function(item){
        
        var poke = new Pokemon({
          name: item.name,
          image: item.image,
          species: item.species,
          type: item.type,
          abilities: item.abilities,
          stats: item.stats
        });

        pokes.push(poke);
    });

    for (var i = 0; i < pokes.length; i++) {
        var element = pokes[i];
        element.save(function (err,element){
            if(err)
                res.send(err);
        });
    }
    res.json(pokes);
}

exports.read_a_poke = function(req, res) {
  Pokemon.findById(req.params.pokeId, function(err, poke) {
    if (err)
      res.send(err);
    res.json(poke);
  });
};


exports.update_a_poke = function(req, res) {
  Pokemon.findOneAndUpdate({_id: req.params.pokeId}, req.body, {new: true}, function(err, poke) {
    if (err)
      res.send(err);
    res.json(poke);
  });
};


exports.delete_a_poke = function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    /*if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
      } else {
        res.header('Access-Control-Allow-Origin', '*');
    }*/

    Pokemon.remove({
    _id: req.params.pokeId
  }, function(err, poke) {
    if (err)
      res.send(err);
    res.json({ message: 'Pokemon successfully deleted' });
  });

};
