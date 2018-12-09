<template>
  <div class="home">
  <HelloWorld msg="Build a Team"/> 
 <!-- ADD NEW STATE MANAGEMENT: USER:  -->
 <div class="start">
  <h2>Welcome {{ userName }}!</h2>
</div>

<!-- New Stepper -->
<div class="mycontainer">
<v-stepper v-model="e6" vertical>
   <!-- <v-stepper-step :complete="e6 > 1" step="1"> -->
     <v-stepper-step :complete="e6 > 1" step="1">
      Choose a Game 
      <small>Choose the games you want to play.</small>
    </v-stepper-step>

    <v-stepper-content step="1">
     <v-card color="grey lighten-1" class="mb-5"> 
                      <!-- NEW ADDED -->
<v-layout row>
    <v-flex xs12>
     <!-- <v-card> -->
        <v-divider></v-divider>
        <v-list
          subheader
          two-line
        >
          <v-list-tile @click="" v-for="game in allGames" :key="game.title">
            <v-list-tile-action>
              <v-checkbox v-model="selectedGames"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="selectedGames = !selectedGames">
              <v-list-tile-title>
                {{ game.title }}
                </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ game.setting }}  -  Date Published: {{ game.initial_release_date }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>
     <!-- </v-card> -->
    </v-flex>
  </v-layout>
       
       
       </v-card> 
      <v-btn color="pink lighten-2" @click="e6 = 2">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">Select Players
      <small>Select players who will benefit you the most in forming an unbeatable team.</small>
    </v-stepper-step>

    <v-stepper-content step="2">
     <v-card color="white" class="mb-5" height="360px">
       
<!-- NEW ADDED -->
<v-layout 
row
>
    <v-flex xs12>
     <!-- <v-card> -->
        <v-divider></v-divider>
        <v-list
          subheader
          two-line
          v-for="(i, index) in game" :key="index"
        >

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="notifications = !notifications">
              <v-list-tile-title>{{ i.name }}</v-list-tile-title>
              <v-list-tile-sub-title>Age: {{ i.age }}  |  Gender:  {{ i.gender }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>
     <!-- </v-card> -->
    </v-flex>
  </v-layout>
       </v-card> 
      <v-btn color="pink lighten-2" @click="e6 = 3">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Send Request</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="white" class="mb-5" height="150px">
        <ul>
          <li v-for="myitem in sendGame">{{ myitem }}</li>
          </ul>
      </v-card>
      <v-btn color="pink lighten-2" @click="e6 = 4">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

     <v-stepper-step step="4">Get Approved</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="white" class="mb-5" height="90px"></v-card>
       <v-btn color="pink lighten-2" @click="e6 = 1">Send Request</v-btn>
      <v-btn flat>Cancel</v-btn>
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
       selectedGames: [],
       sendGame: []
      }
    },
  name: "home",
  components: {
    HelloWorld
  },

  // ADD NEW STATE MANAGEMENT
  computed: {
    userName() {
      return this.$store.getters.userName;
    }
  },
    mounted() {
         axios
             .get('https://uinames.com/api/?amount=5&ext')
          // .get('https://randomuser.me/api/?inc=gender,name,picture')
             .then(response => (this.game = response.data))
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
.start {
  margin-left: 35%;
}
</style>