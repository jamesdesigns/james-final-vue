<template>
<div class="container">
    <v-container fluid>
    <v-layout 
    row
    align-center
    justify-center
    ma-0
    >
    <v-flex v-for="(i, index) in info" :key="index" mr-2>
  <div>
      <v-card width="200px">
        <v-img :src="i.photo" alt="image" width="200px" height="200px">
        </v-img>
        <v-card-title>
            <ul>
                <li class="headline mb-0">{{ i.name }}</li>
                <li>Age: {{ i.age }}
                <li>Gender: {{ i.gender }}</li>    
            </ul>
        </v-card-title>
        <v-card-actions class="center-align">
            <v-btn color="pink lighten-2" @click="requestMember">
                VIEW PROFILE
                </v-btn>       
        </v-card-actions>
      </v-card>
      </div>
    </v-flex>
  </v-layout>
  </v-container>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            info: []
    }
    },

    mounted() {
         axios
             .get('https://uinames.com/api/?amount=6&ext')
             .then(response => (this.info = response.data))
     },
}
</script>
<style>
ul li {
    list-style-type: none;
    text-align:left;
}
h2 {
    text-align: left;
    margin-left:10%;
}
.container {
margin-top:3%;
}
.center-align {
    margin-left:15%;
    padding-bottom: 30px;
}
</style>