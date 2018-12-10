<template>
  <div class="home">
  <HelloWorld msg="Build a Team"/> 
 <!-- ADD NEW STATE MANAGEMENT: USER:  -->
 <div class="start">
  <h2>Welcome {{ userName }}!</h2>
</div>
<div class="mycontainer">
<v-stepper v-model="e6" vertical>
     <v-stepper-step :complete="e6 > 1" step="1">
      Choose a Game 
      <small>Choose the games you want to play.</small>
    </v-stepper-step>
    <v-stepper-content step="1">
     <v-card color="grey lighten-1" class="mb-5"> 
<v-layout row>
    <v-flex xs12>
        <v-divider></v-divider>
        <v-list
          subheader
          two-line
        >
            <v-list-tile v-for="(game, i) in allGames" :key="i">
            <v-list-tile-action>
              <v-checkbox v-model="selectedGames" :value="game" :id="game.title"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ game.title }}
                </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ game.setting }}  -  Date Published: {{ game.initial_release_date }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          </v-list>
          </v-flex>
        </v-layout>
       </v-card> 
      <v-btn color="pink lighten-2" @click="e6 = 2">Continue</v-btn>
    </v-stepper-content>
    <v-stepper-step :complete="e6 > 2" step="2">Select Players
      <small>Select players who will benefit you the most in forming an unbeatable team.</small>
    </v-stepper-step>
    <v-stepper-content step="2">
     <v-card color="white" class="mb-5">
<v-layout 
row
>
    <v-flex xs12>
        <v-divider></v-divider>
        <v-list
          subheader
          two-line
        >
          <v-list-tile v-for="(player, i) in players" :key="i">
            <v-list-tile-action>
              <v-checkbox v-model="selectedPlayers" :value="player" :id="player.name"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ player.name }} {{ player.surname }}</v-list-tile-title>
              <v-list-tile-sub-title>Age: {{ player.age }}  |  Gender:  {{ player.gender }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
    </v-flex>
  </v-layout>
       </v-card> 
      <v-btn color="pink lighten-2" @click="e6 = 3">Continue</v-btn>
    </v-stepper-content>
    <v-stepper-step :complete="e6 > 3" step="3">Send Request</v-stepper-step>
    <v-stepper-content step="3">
      <v-card color="white" class="mb-5">
        <h3>Game(s) Selected:</h3>
         <ul>
          <li v-for="(games, i) in selectedGames" :key="i">{{ games.title }} | Type: {{ games.setting }} | Published in  {{ games.initial_release_date }}</li>
        </ul>
        <h3>Player(s) Selected:</h3>
        <ul>
          <li v-for="(player, i) in selectedPlayers" :key="i">{{ player.name }} {{ player.surname }} | Age: {{ player.age }} | Gender: {{ player.gender }}</li>
        </ul>  
      </v-card>
<v-dialog v-model="dialog" persistent max-width="490">
      <v-btn slot="activator" color="pink lighten-2" @click="e6 = 1">SEND REQUEST</v-btn>
      <v-card>
        <v-card-title class="headline">Good Luck!</v-card-title>
        <v-card-text>Your request has been sent. Get ready to team up and be ready to start dominating your opponents.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="dialog = false">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-stepper-content>
  </v-stepper> 
<!-- End of Stepper -->
</div> <!-- End of my container -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { videogames } from '../assets/videogames'
import axios from 'axios'

export default {
    data () {
      return {
       allGames: videogames,
       e6: 1,
       dialog: false,
       players: [],
       selectedGames: [],
       selectedPlayers: []
      }
    },
  name: "home",
  components: {
    HelloWorld
  },
  // ADD STATE MANAGEMENT
  computed: {
    userName() {
      return this.$store.getters.userName;
    }
  },
  // CONNECT TO THE UINAMES API
    mounted() {
         axios
             .get('https://uinames.com/api/?amount=15&ext')
             .then(response => (this.players = response.data))
     },
};
</script>
<style>
.mycontainer {
  margin-left:12%;
  margin-right: 12%;
  margin-bottom:100px;
}
h2 {
  color: #5cc1a6;
  margin-bottom: 20px;
}
h3 {
  text-align: left;
  margin-left: 2.5%;
  color: #f344a5;
}
.start {
  margin-left: 35%;
}
.headline {
  margin-left: 3%;
}
</style>