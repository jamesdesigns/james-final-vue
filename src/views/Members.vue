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
                <li class="headline mb-0">{{ info.data.name }}</li>
                <li>Age: {{ info.data.age }}</li>
                <li>Gender: {{ info.data.gender }}</li>
                <li>Email: {{ info.data.email }}</li>
            </ul>
          
        </v-card-title>
        <v-card-actions class="center-align">
            <v-btn color="info" @click="getCourses">REQUEST MEMBER</v-btn>       
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </div>

</template>
<script>
// This is newly added as of Nov 14 in class. ( BELOW )
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
            .get('https://uinames.com/api/?ext')
            .then(response => (this.info = response))
    },
 
   // This is ES6 way of doing things
   // This basically is how to get a massive object into an array
/*
   methods: {
    getCourses() {
        // axios.get('https://sweltering-fire-2420.firebaseio.com/courses.json')
        axios.get('https://uinames.com/api/?ext')
        .then(response => { // wow, diff between es5 function and arrow
        console.log(response)
        const allCoursesObj = response.data
        // Built in JavaScript root - ask for its entries
        const objectsToArray = Object.entries(allCoursesObj).map(e =>
        Object.assign(e[1], { key: e[0] }))
        console.log(objectsToArray)
        // ... is the spread operator in es6 - add contents into another array
        this.names = [...objectsToArray]
        })
        .catch(error => console.log(error))
        console.log('Done getting all the data!')
        },
    },
}*/
    methods: {
        getCourses() {
            return axios
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
    margin-top: 100px;
}


img {
    margin-left: 5px;
}
.center-align {
    margin-left:20%;
    padding-bottom: 30px;
}

</style>