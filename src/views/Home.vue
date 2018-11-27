<template>
  <div class="home">
   <!-- Place a New logo here for the Home Page --> 
   <!-- <img alt="TeamUp logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Find a Team"/>

<!-- New Stepper -->
<div class="mycontainer">
<v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Choose a Game 
      <small>Choose the game you want to play.</small>
    </v-stepper-step>

    <v-stepper-content step="1">
     <v-card color="grey lighten-1" class="mb-5" height="250px">
                      <!-- NEW ADDED -->
<v-layout row>
    <v-flex xs12>
     <!-- <v-card> -->
        <v-divider></v-divider>
        <v-list
          subheader
          two-line
          v-for="videogames in allGames" :key="videogames.title"
        >
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="notifications = !notifications">
              <v-list-tile-title>{{ videogames.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ videogames.setting  }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="sound = !sound">
              <v-list-tile-title>World of Warcraft</v-list-tile-title>
              <v-list-tile-sub-title>Description: World of Warcraft takes place within the Warcraft world of Azeroth. World of Warcraft is the world's most popular MMORPG by player count.[</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-checkbox v-model="video"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="video = !video">
              <v-list-tile-title>Call of Duty: Black Ops</v-list-tile-title>
              <v-list-tile-sub-title>Description: The Black Ops universe comes to life in one massive battle royale experience, combining Black Ops signature combat and the biggest map in Call of Duty history.</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-checkbox v-model="invites"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="invites = !invites">
              <v-list-tile-title>Minecraft</v-list-tile-title>
              <v-list-tile-sub-title>Description: Minecraft is a game about placing blocks and going on adventures.</v-list-tile-sub-title>
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
<!-- New Drag and Drop -->
<!-- <h3>Drag and Drop</h3>   
      <div v-drag-and-drop:options="options" class="drag-wrapper">   -->
        <!-- END OF NEW ADDED -->
<!--  <ul>
    <li>Member 1</li>
    <li>Member 2</li>
    <li>Member 3</li>
    <li>Member 4</li>
    <li>Member 5</li>
    <li>Member 6</li>
  </ul>
  -->
<!-- </div> -->
<!-- End of Drag and Drop -->
    </v-stepper-step>

    <v-stepper-content step="2">
     <v-card color="grey lighten-1" class="mb-5" height="250px">
       
<!-- NEW ADDED -->
<v-layout row>
    <v-flex xs12>
     <!-- <v-card> -->
        <v-divider></v-divider>
        <v-list
          subheader
          two-line
        >

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="notifications = !notifications">
              <v-list-tile-title>Mark Jensen</v-list-tile-title>
              <v-list-tile-sub-title>Experience Level: Absolute Dominator</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="sound = !sound">
              <v-list-tile-title>John Varanakis</v-list-tile-title>
              <v-list-tile-sub-title>Experience Level: Newbie</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-checkbox v-model="video"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="video = !video">
              <v-list-tile-title>Adam Rupp</v-list-tile-title>
              <v-list-tile-sub-title>Experience Level: Pro Level</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-checkbox v-model="invites"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="invites = !invites">
              <v-list-tile-title>Allison Love</v-list-tile-title>
              <v-list-tile-sub-title>Experience Level: Explorer</v-list-tile-sub-title>
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

    <v-stepper-step :complete="e6 > 3" step="3">View Selected Game and Players</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="white" class="mb-5" height="200px"></v-card>
      <v-btn color="pink lighten-2" @click="e6 = 4">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">Get Approved</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="white" class="mb-5" height="200px"></v-card>
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


export default {
    data () {
      return {
        allGames: videogames,
        e6: 1
      }
    },
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
<style>
.home {
  margin-top:5%;
}
.mycontainer {
  margin-left:3%;
  margin-right: 3%;
}
</style>