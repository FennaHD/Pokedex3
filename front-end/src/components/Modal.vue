<template>
  <div class="modal" :id="pokemon.name" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{pokemon.name}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="content-wrapper">
            <div class="content-container">
              <div class="row center">
                <div class="col">
                  <div class="pokemon-image-container">
                    <img id="pokemon-image" :src="pokemon.large_image">
                  </div>
                </div>

                <div class="col stats-container">
                  <div class="row">
                    <div class="stat-box">
                      <span class="stat-name">Height: </span><span id="height">{{pokemon.feet}}' {{pokemon.inches}}"</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="stat-box">
                      <span class="stat-name">Weight: </span><span id="weight">{{pokemon.weight}} lbs</span>
                    </div>
                  </div>
                  <div class="row type">
                    <div class="stat-box">
                      <span class="stat-name">Type: </span><span class="types" id="types">{{pokemon.types.join(", ")}}</span>
                    </div>
                  </div>
                  <br>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    pokemon: Object
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

.indiv-pokemon {
  margin: 10px;
  border: 1px solid grey;
  border-radius: 15px;
  cursor: pointer;
  width: 150px;
  background-color: #f0e9e9;
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
  cursor: default;
}

.modal-body {
  display: flex;
  justify-content: center;
}

.stats-container {
  align-items: center;
  width: 230px;
}

#pokemon-image {
  min-width: 150px;
}

.col {
  min-width: 150px;
}

.row {
  flex-wrap: wrap;
}

@media only screen and (max-width: 320px) {
  .row {
    justify-content: center;
  }
}
</style>
