<template>
<div>
    <v-app> 
       <v-toolbar color="cyan" dark app clipped-left>
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/summary">Summary</router-link> 
      </div>
      
        </v-toolbar>
        <router-view/>
    </v-app>
<!-- <h1>Header Component</h1>
<h1>Header Component</h1>  -->
 </div>   
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style scoped>
h1 {
    font-size:500%;
    color: red;
}
</style>