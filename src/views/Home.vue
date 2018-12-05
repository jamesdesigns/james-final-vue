<template>
  <div class="home">
   <!-- Place a New logo here for the Home Page --> 
   <!-- <img alt="TeamUp logo" src="../assets/logo.png"> -->
    
    <HelloWorld msg="Build a Team"/>
    <!-- ADD NEW STATE MANAGEMENT: USER:  -->
 <div class="start">
  <h2>Welcome {{ userName }}!</h2>
</div>
<!-- New Stepper -->
<div class="mycontainer">
<v-stepper v-model="e6" vertical>
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
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="notifications = !notifications" >
              <v-list-tile-title>
                {{ game.title }}
                </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ game.setting }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
<!--
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
-->
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

<!-- <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><script type="text/ecmascript" xlink:href="//preloaders.net/jscripts/smil.user.js"/><rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" /><g><path d="M59.6 0h8v40h-8V0z" fill="#33cccc" fill-opacity="1"/><path d="M59.6 0h8v40h-8V0z" fill="#d6f5f5" fill-opacity="0.2" transform="rotate(30 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#d6f5f5" fill-opacity="0.2" transform="rotate(60 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#d6f5f5" fill-opacity="0.2" transform="rotate(90 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#d6f5f5" fill-opacity="0.2" transform="rotate(120 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#c1f0f0" fill-opacity="0.3" transform="rotate(150 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#adebeb" fill-opacity="0.4" transform="rotate(180 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#99e5e5" fill-opacity="0.5" transform="rotate(210 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#85e0e0" fill-opacity="0.6" transform="rotate(240 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#70dbdb" fill-opacity="0.7" transform="rotate(270 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#5cd6d6" fill-opacity="0.8" transform="rotate(300 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#47d1d1" fill-opacity="0.9" transform="rotate(330 64 64)"/><animateTransform attributeName="transform" type="rotate" values="0 64 64;30 64 64;60 64 64;90 64 64;120 64 64;150 64 64;180 64 64;210 64 64;240 64 64;270 64 64;300 64 64;330 64 64" calcMode="discrete" dur="1080ms" repeatCount="indefinite"></animateTransform></g></svg>-->


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
  },

  // ADD NEW STATE MANAGEMENT
  computed: {
    userName() {
      return this.$store.getters.userName;
    }
  }
};
</script>


<style>
.home {
  margin-top:5%;
}
.mycontainer {
  margin-left:12%;
  margin-right: 12%;
}
h2 {
  color: #5cc1a6;
  margin-bottom: 20px;
  margin-top: -10px;
}
.start {
  margin-left: 35%;
}
</style>