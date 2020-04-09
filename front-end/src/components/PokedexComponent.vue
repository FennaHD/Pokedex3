<template>
  <div class="wrapper">
    <div class="container">
      <div class="pokemons">
        <div v-for="(pokemon, id) in pokemons" :key="id" class="indiv-pokemon">
          <div data-toggle="modal" :data-target="'#' + pokemon.name">
            <img :src="pokemon.little_image">
            <p class="name">{{pokemon.name}}</p>
          </div>
          <Modal :pokemon="pokemon"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
  name: "PokedexComponent",
  props: {
    pokemons: Array
  },
  components: {
    Modal
  }
}
</script>

<style scoped>

  .container {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .pokemons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .indiv-pokemon:hover {
    color: white;
    background-color: #30a7d7;
  }

  .name {
    margin-top: 0px;
    font-size: 20px;
    font-weight: bold;
  }

  img {
    margin-top: 15px;
    width: 120px;
  }

  button {
    border-radius: 12px;
    margin-bottom: 10px;
  }

  .edit {
    margin-right: 5px;
  }

  .modal {
    color: black;
  }

  .indiv-pokemon {
    margin: 10px;
    border: 1px solid grey;
    border-radius: 15px;
    cursor: pointer;
    width: 150px;
    background-color: #f0e9e9;
  }

  @media only screen and (max-width: 991px) {
    .container {
      width: 75%;
    }
  }

  @media only screen and (max-width: 870px) {
    .container {
      width: 95%;
    }
  }

  @media only screen and (max-width: 790px) {
    .container {
      width: 95%;
    }
  }
</style>
