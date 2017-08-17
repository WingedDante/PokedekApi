
var cors = require('cors')
var express = require('express'),
app = express(),
port = process.env.PORT || 8080,
mongoose = require('mongoose'),
Task = require('./api/models/PokemonModel'),
bodyparser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:Pokedek');

app.options('*', cors());

/*app.use(function(req, res){// Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
});*/

app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.json());



var routes = require('./api/routes/pokemonApiRoutes');
routes(app);

app.use(function(req, res){
    res.status(404).send({url:req.originalUrl + 'not found'})
});

app.listen(port);

console.log('Pokedek API on port ' + port + ' has been started.');