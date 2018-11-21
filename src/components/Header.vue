<template>
<div>
    <v-app> 
       <v-toolbar color="black" dark app clipped-left>
           <v-toolbar-title class="font-weight-black"><img src="../assets/logo-icon.png" alt="TeamUp" />TeamUp</v-toolbar-title>
        <div id="nav">
          <router-link class="menu" to="/">Home</router-link>
          <router-link class="menu" to="/members">Members</router-link>
          <router-link class="menu" to="/about">About</router-link>
          <router-link class="menu" to="/login">Login</router-link>
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
.menu:hover, .menu:active {
    color: pink;
}
#nav {
    margin-top:8px;
}
</style>