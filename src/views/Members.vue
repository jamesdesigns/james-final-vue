<template>

<div class="container">
    <v-layout>
   <v-flex xs12 sm6 offset-sm3>
  
      <v-card width="300px">
       <v-img
          height="300px"  
          :src="info.data.photo" alt="image" />
        
        </v-img>
        <v-card-title>
            <ul>
                <li class="headline mb-0">{{ info.data[4].name }}</li>
                <li>Age: {{ info.data[4].age }}</li>
                <li>Gender: {{ info.data[4].gender }}</li>
                <li>Email: {{ info.data[4].email }}</li>
            </ul>
          
        </v-card-title>
        <v-card-actions class="center-align">
            <v-btn color="pink lighten-2" @click="requestMember">
                REQUEST MEMBER
                </v-btn>       
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
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
    
    // New example
    mounted() {
        axios
            .get('https://uinames.com/api/?ext&amount=25')
            .then(response => (this.info = response))
    },
 
/*
    methods: {
        requestMember() {
            return axios
            // Original UINAMES used
             .get('https://uinames.com/api/?ext')
            .then(function(response) {
                // Original example
                // this.courses.push(response.data.results[0].name)
                this.info.push(response.data.results[0].name)
            })
            .catch(function(error) {
                console.log(error)
            })
        }
    } */
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
    margin-left: 12%;
}

.center-align {
    margin-left:20%;
    padding-bottom: 30px;
}

</style>