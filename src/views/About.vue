<template>
  <div class="about">
 <v-container grid-list-xl>
   <v-layout row wrap>
     <v-flex v-for="profile in profiles" :key="profile.name" xs4>
       <v-card
       height="225px">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ profile.surname }}</h3>
            <div>{{ profile.age }}</div>
            <span>{{ profile.gender }}
          </div>  
        </v-card-title>

        <v-card-action>
          <v-btn flat color="blue">Search</v-btn>
        </v-card-action> 
           
       </v-card>
     </v-flex>  
  </v-layout>  
 </v-container>  
  </div>
</template>
<script>
import { profile } from '../assets/profile.js'

export default {
  data: function() {
    return {
      allProfiles: profile
    }
  }
}
</script>
<style>
</style>
