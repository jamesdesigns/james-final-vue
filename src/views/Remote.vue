<template>
<div>
<v-container>
<h1>Accessing Names</h1>
<v-btn @click="getCourses">Click to View</v-btn>
<!-- Original example -->
<!-- <div>{{ courses.foo }}</div> -->

<!-- New example -->
<div>{{ courses }}</div>
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
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.info = response))
    },
   
    methods: {
        getCourses() {
            return axios
            //.get('https://randomuser.me/api')
            .get('https://uinames.com/api/')
            .then(function(response) {
                // console.log(response.data.results[0].name)
                this.courses.push(response.data.results[0].name)
            })
            .catch(function(error) {
                console.log(error)
            })

        }
    } 
}

</script>