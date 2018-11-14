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
                <!--<li><img :src="info.data.photo" alt="image" /></li>-->
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
export default {
    data() {
        return {
            // Original example
            // courses: []

            // New example
            info: null
    }
    },
    // New example
    mounted() {
        axios
            .get('https://uinames.com/api/?ext')
            .then(response => (this.info = response))
    },
   
    methods: {
        getCourses() {
            return axios
            .get('https://uinames.com/api/?ext')
            .then(function(response) {
                this.courses.push(response.data.results[0].name)
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

li {

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