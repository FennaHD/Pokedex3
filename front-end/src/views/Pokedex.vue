<template>
  <div>
    <div class="wrapper mt-5">
      <div class="search">
        <form class="pure-form">
          <i class="fas fa-search"></i><input v-model="searchText" placeholder="Enter Name"/>
        </form>
      </div>
    </div>
    <PokedexComponent :pokemons="pokemons"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PokedexComponent from '../components/PokedexComponent.vue'
import axios from 'axios'

export default {
  name: 'Pokedex',
  data() {
    return {
      searchText: '',
      name: 'Bulbasaur',
      feet: '2',
      inches: "04",
      weight: "15.2",
      little_image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      large_image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
    }
  },
  created() {
    this.getPokemons();
  },
  components: {
    PokedexComponent
  },
  methods: {
    async getPokemons() {
      try {
        let response = await axios.get('/api/pokemons');
        this.$root.$data.pokemons = response.data;
      } catch(error) {
        console.log(error);
      }
    }
  },
  computed: {
    pokemons() {
      return this.$root.$data.pokemons.filter(pokemon => pokemon.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}

</style>
