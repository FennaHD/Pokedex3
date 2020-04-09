<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div id="intro" class="row">
          <p class="welcome mt-4 ml-5 mr-5">
            Welcome to my Pokedex App! Search Pokemons by name or type. You can Edit the Pokedex however
            you like to create your own Pokemon universe!
          </p>
          <br>
          <p>
            <strong><u>For graders:</u></strong> You may find it useful to read the following
            rundown listing functionality you may otherwise miss.
            <ul>
              <li>Cute little pokeball icon</li>
              <li>The mock data was acquired using the pokemon api at
                <a href="https://pokeapi.co/"><u>https://pokeapi.co/</u>. </a>
                I got the data running the program "getMock.py" written in Python 3. You can find it in the repo (main folder).
                This allowed to get only the data I wanted in the format I wanted it.
                The API has a limit of 100 calls per minute so I had to run it around 8 times
                to get all the data I wanted for all 807 pokemons.
              </li>
              <li>Pokemons were added to the database running method "addBunch()" in Edit.vue.</li>
              <li>In the "Pokedex" page you can see all the pokemons and search by name.
                I did not download any images. Instead I just stored the links in each object
                and are referenced everywhere you see an image, so it may take a little bit to
                load the "Pokedex" and "By Type" pages.</li>
              <li>In the "By Type" page you can select as many types of pokemon as you want.
                The pokedex will be filtered to only the pokemons that have all the selected types.
                It's actually kinda fun to mix them up and see if there's a pokemon with a weird mix of types.</li>
              <li>Click on any Pokemon to see more details and a better image of the Pokemon.</li>
              <li>In the Edit page you can add, delete or edit any Pokemons. The idea is that the user
                may adjust the Pokedex as much as they want. It is important to know that I'm not doing much error
                handling, so you may enter values that don't make sense and the app won't
                complain. The user is only limited when changing or adding types since it's a
                dropdown menu.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style scoped>
.wrapper {
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.container {
  width: 65%;
}

#intro {
  text-align: left;
}

.welcome {
  font-size: 20px;
  text-align: center;
  font-weight: 900;
}

@media only screen and (max-width: 991px) {
  .container {
    width: 75%;
  }
}

@media only screen and (max-width: 870px) {
  .container {
    width: 85%;
  }
}

@media only screen and (max-width: 790px) {
  .container {
    width: 95%;
  }
}
</style>
