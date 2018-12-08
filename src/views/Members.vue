<template>
<div>
<!--  <div class="container"> -->
    <v-container fluid>
    <v-layout 
    row
    align-center
    justify-center
    ma-0
    >
    <v-flex v-for="i in info" :key="i">
   <!-- <v-flex v-for='(item, i) in info' :key="i"> -->
  <div>
      <v-card width="200px">
      <!-- <v-img :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`" alt="image" width="200px" height="200px"> -->
        <!-- <v-img :src="`https://uinames.com/api/photos/female/${i}.jpg`" alt="image" width="200px" height="200px"> -->
        <v-img :src="info.data.photo" alt="image" width="200px" height="200px">
        </v-img>
        <v-card-title>
            <ul>
                <li class="headline mb-0">{{ info.data.name }}</li>
                <li>Age: {{ info.data.age }}
                <li>Gender: {{ info.data.gender }}</li>    
                <!-- <li class="headline mb-0">{{ item.name }}</li>
                <li>Age: {{ item.age }}</li>
                <li>Gender: {{ item.gender }}</li> -->

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

  

  
   <v-container fluid>
    <v-layout 
    row
    align-center
    justify-center
    ma-0
    >
    <v-flex v-for="i in info" :key="i">
   <!-- <v-flex v-for="i in 4" :key="i"> -->
  <div>
      <v-card width="200px">
      <!-- <v-img :src="`https://uinames.com/api/photos/female/${i}.jpg`" alt="image" width="200px" height="200px"> -->
        <v-img :src="info.data.photo" alt="image" width="200px" height="200px">
       <!-- <v-img :src="`https://randomuser.me/api/portraits/women/${i}.jpg`" alt="image" width="200px" height="200px"> -->
        </v-img>
        <v-card-title> 
            <ul>
                <li class="headline mb-0">{{ info.data.name }}</li>
                <li>Age: {{ info.data.age }}</li>
                <li>Gender: {{ info.data.gender }}</li>
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
            // New example
            // info: null
            info: []
    }
    },
   
   // 'https://uinames.com/api/?ext&?amount=50'
    // New example
    mounted() {
        axios
            .get('https://uinames.com/api/?ext')
           // .get('https://randomuser.me/api/?inc=gender,name,picture')
            .then(response => (this.info = response))
    },
    methods: {
        requestMember() {
            return axios
            // Original UINAMES used
             .get('https://uinames.com/api/?ext')
            // .get('https://randomuser.me/api/?inc=gender,name,picture')
            .then(function(response) {
                this.info.push(response.data.results[4].name)
            })
            .catch(function(error) {
                console.log(error)
            })
        }
    } 
}
</script>
<style>
ul {
}
ul li {
    list-style-type: none;
    text-align:left;
}
h2 {
    text-align: left;
    margin-left:10%;
}
.container {
    margin-top: 85px;
    margin-left: 5%;
}
.center-align {
    margin-left:15%;
    padding-bottom: 30px;
}
</style>