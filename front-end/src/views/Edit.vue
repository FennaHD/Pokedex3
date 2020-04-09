<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <button @click="addBunch">Add a bunch</button>
          </div>
          <div class="row add-section">
            <div class="row">
              <h3>Add Pokemon</h3>
            </div>
            <div class="row">
              <form>
                <button id="add" class="btn btn-success" @click="addPokemon">+ Add</button>
                <div class="form-group">
                  <input class="form-control" placeholder="Name" v-model="name">
                  <input class="form-control" placeholder="Feet" v-model="feet">
                  <input class="form-control" placeholder="Inches" v-model="inches">
                  <input class="form-control" placeholder="Weight (lbs)" v-model="weight">
                  <input class="form-control" placeholder="Icon URL" v-model="little_image">
                  <input class="form-control" placeholder="Image URL" v-model="large_image">
                  <label class="select">Primary Type</label>
                  <select class="form-control" v-model="primary_type">
                    <option>Normal</option>
                    <option>Grass</option>
                    <option>Fire</option>
                    <option>Water</option>
                    <option>Fighting</option>
                    <option>Flying</option>
                    <option>Poison</option>
                    <option>Ground</option>
                    <option>Rock</option>
                    <option>Bug</option>
                    <option>Ghost</option>
                    <option>Electric</option>
                    <option>Physic</option>
                    <option>Ice</option>
                    <option>Dragon</option>
                    <option>Steel</option>
                    <option>Fairy</option>
                  </select>
                  <label class="select">Secondary Type</label>
                  <select class="form-control" v-model="secondary_type">
                    <option>None</option>
                    <option>Normal</option>
                    <option>Grass</option>
                    <option>Fire</option>
                    <option>Water</option>
                    <option>Fighting</option>
                    <option>Flying</option>
                    <option>Poison</option>
                    <option>Ground</option>
                    <option>Rock</option>
                    <option>Bug</option>
                    <option>Ghost</option>
                    <option>Electric</option>
                    <option>Physic</option>
                    <option>Ice</option>
                    <option>Dragon</option>
                    <option>Steel</option>
                    <option>Fairy</option>
                  </select>
                </div>
              </form>
            </div>
          </div>

          <div class="row">
            <div class="row">
              <div class="row">
                <h3>Delete/Edit Pokemon</h3>
              </div>
              <div class="form-group">
                <input class="form-control form-control-md" v-model="findName" placeholder="Search">
                <div class="suggestions" v-if="suggestions.length > 0 && findName != ''">
                  <div class="form-control form-control-sm" v-for="s in suggestions" :key="s.name" @click="selectItem(s)">{{s.name}}
                  </div>
                </div>
              </div>


              <div v-if="findPokemon" class="row">
                <form>
                  <div class="delete-edit-container">
                    <button class="btn btn-danger delete" @click="deletePokemon">Delete</button>
                    <button class="btn btn-warning" @click="updatePokemon">Edit</button>
                  </div>
                  <div class="form-group">
                    <label>Name</label>
                    <input class="form-control" v-model="findPokemon.name">
                  </div>
                  <div class="form-group">
                    <label>Feet</label>
                    <input class="form-control" v-model="findPokemon.feet">
                  </div>
                  <div class="form-group">
                    <label>Inches</label>
                    <input class="form-control" v-model="findPokemon.inches">
                  </div>
                  <div class="form-group">
                    <label>Weight</label>
                    <input class="form-control" v-model="findPokemon.weight">
                  </div>
                  <div class="form-group">
                    <label>Sprite URL</label>
                    <input class="form-control" v-model="findPokemon.little_image">
                  </div>
                  <div class="form-group">
                    <label>Pokemon Image URL</label>
                    <input class="form-control" v-model="findPokemon.large_image">
                  </div>
                  <div class="form-group">
                    <label class="select">Primary Type</label>
                    <select class="form-control" v-model="findPokemon.types[0]">
                      <option>Normal</option>
                      <option>Grass</option>
                      <option>Fire</option>
                      <option>Water</option>
                      <option>Fighting</option>
                      <option>Flying</option>
                      <option>Poison</option>
                      <option>Ground</option>
                      <option>Rock</option>
                      <option>Bug</option>
                      <option>Ghost</option>
                      <option>Electric</option>
                      <option>Physic</option>
                      <option>Ice</option>
                      <option>Dragon</option>
                      <option>Steel</option>
                      <option>Fairy</option>
                    </select>
                    <label class="select">Secondary Type</label>
                    <select class="form-control" v-model="findPokemon.types[1]">
                      <option>None</option>
                      <option>Normal</option>
                      <option>Grass</option>
                      <option>Fire</option>
                      <option>Water</option>
                      <option>Fighting</option>
                      <option>Flying</option>
                      <option>Poison</option>
                      <option>Ground</option>
                      <option>Rock</option>
                      <option>Bug</option>
                      <option>Ghost</option>
                      <option>Electric</option>
                      <option>Physic</option>
                      <option>Ice</option>
                      <option>Dragon</option>
                      <option>Steel</option>
                      <option>Fairy</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import mock from '../mock.js';

export default {
  name: 'Edit',
  data() {
    return {
      pokemonList: this.$root.$data.pokemons,
      findName: '',
      findPokemon: null,
      name: '',
      feet: '',
      inches: '',
      weight: '',
      little_image: '',
      large_image: '',
      primary_type: '',
      secondary_type: ''
    }
  },
  created() {
    this.getPokemons();
  },
  methods: {
    async addBunch() {
      for (let i = 1; i < 808; ++i) {
        this.name = mock[i].name;
        this.feet = mock[i].feet;
        this.inches = mock[i].inches;
        this.weight = mock[i].weight;
        this.little_image = mock[i].little_image;
        this.large_image = mock[i].large_image;
        this.primary_type = mock[i].types[0];
        if (mock[i].types.length > 1 && mock[i].types[1] != '') this.secondary_type = mock[i].types[1];
        await this.addPokemon();
      }
    },
    async addPokemon() {
      try {
        let types = [this.primary_type, this.secondary_type];
        await axios.post('/api/pokemons', {
          name: this.name,
          feet: this.feet,
          inches: this.inches,
          weight: this.weight,
          little_image: this.little_image,
          large_image: this.large_image,
          types: types
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getPokemons() {
      try {
        let response = await axios.get('/api/pokemons');
        this.pokemonList = response.data;
      } catch(error) {
        console.log(error);
      }
    },
    async deletePokemon() {
      try {
        await axios.delete('/api/pokemons/' + this.findPokemon._id);
        this.getPokemons();
        return true;
      } catch(error) {
        console.log(error);
      }
    },
    async updatePokemon() {
      try {
        let types = [this.findPokemon.types[0], this.findPokemon.types[1]];
        await axios.put('/api/pokemons/' + this.findPokemon._id, {
          name: this.findPokemon.name,
          feet: this.findPokemon.feet,
          inches: this.findPokemon.inches,
          weight: this.findPokemon.weight,
          little_image: this.findPokemon.little_image,
          large_image: this.findPokemon.large_image,
          types: types
        });
        this.getPokemons();
        return true;
      } catch(error) {
        console.log(error);
      }
    },
    selectItem(s) {
      this.findName = '';
      this.findPokemon = s;
    }
  },
  computed: {
    suggestions() {
      let filtered = this.pokemonList.filter(pokemon => pokemon.name.toLowerCase().startsWith(this.findName.toLowerCase()));
      return filtered.sort((a, b) => a.name > b.name);
    }
  }
}
</script>

<style scoped>

.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.container {
  width: 70%;
  display: flex;
  justify-content: flex-start;
}

.delete {
  margin-right: 5px;
}

.row {
  width: 100%;
}

label {
  display: flex;
  justify-self: start;
  margin-bottom: 0px;
}

.add-section {
  margin-bottom: 30px;
}

#add {
  margin-bottom: 5px;
}

.delete-edit-container {
  margin: 10px 0px;
}

.form-group {
  margin-bottom: 10px;
}

.select {
  margin-top: 5px;
}
</style>
