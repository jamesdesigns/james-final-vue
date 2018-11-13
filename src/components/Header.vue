<template>
<div>
    <v-app> 
       <v-toolbar color="blue" dark app clipped-left>
           <v-toolbar-title>SelectTalent</v-toolbar-title>
        <div id="nav">
          <router-link class="menu" to="/">Home</router-link>
          <router-link class="menu" to="/about">About</router-link>
          <router-link class="menu" to="/summary">Summary</router-link> 
          <router-link class="menu" to="/remote">Remote</router-link>
          <router-link class="menu" to="/login">Login / Sign Up</router-link>
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
.menu {
    padding-right: 20px;
}
</style>