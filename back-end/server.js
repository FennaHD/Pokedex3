const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/cp4', {
useNewUrlParser: true
});

const pokemonSchema = mongoose.Schema({
  name: String,
  feet: String,
  inches: String,
  weight: String,
  little_image: String,
  large_image: String,
  types: Array
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

app.post('/api/pokemons', async (req, res) => {
  const pokemon = new Pokemon({
    name: req.body.name,
    feet: req.body.feet,
    inches: req.body.inches,
    weight: req.body.weight,
    little_image: req.body.little_image,
    large_image: req.body.large_image,
    types: req.body.types
  });
  try {
    await pokemon.save();
    res.send(pokemon);
  } catch(error) {
    console.log(pokemon);
    console.log(error);
    red.sendStatus(500);
  }
});

app.get('/api/pokemons', async (req, res) => {
  try {
    let pokemons = await Pokemon.find();
    res.send(pokemons);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/pokemons/:id', async (req, res) => {
  try {
    await Pokemon.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/pokemons/:id', async (req, res) => {
  try {
    let pokemon = await Pokemon.findOne({
      _id: req.params.id
    });
    pokemon.name = req.body.name;
    pokemon.feet = req.body.feet;
    pokemon.inches = req.body.inches;
    pokemon.weight = req.body.weight;
    pokemon.little_image = req.body.little_image;
    pokemon.large_image = req.body.large_image;
    pokemon.types = req.body.types;
    pokemon.save();
    res.sendStatus(200);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
