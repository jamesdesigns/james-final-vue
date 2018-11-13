<template>
<div>
<v-container>
<h1>Member Profiles</h1>
<v-layout>
    <v-flex xs12 sm6 offset-sm3>
<v-card>
<v-card-title primary-title>
          <div>
            <ul>
                <li><img :src="info.data.photo" alt="image" /></li>
                <li class="headline mb-0">{{ info.data.name }}</li>
                <li>Age: {{ info.data.age }}</li>
                <li>Gender: {{ info.data.gender }}</li>
                <li>Email: {{ info.data.email }}</li>
            </ul>
          </div>
        </v-card-title>
</v-card>
    </v-flex>
    </v-layout>
    <v-btn @click="getCourses">Add Member</v-btn>
 </v-container>
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
ul li {
    list-style-type: none;
    text-align:left;
}

li {
    margin-left:50%;
}

h3 {
    text-align: left;
    margin-left:10%;
}

img {
    border-radius: 50%;
    margin-left: 15%;
}
</style>