<template>
<div>
    <v-app> 
       <v-toolbar color="black" dark app clipped-left>
           <v-toolbar-title class="font-weight-black"><img src="../assets/logo-icon.png" alt="TeamUp" />TeamUp</v-toolbar-title>
        <div id="nav">
        <v-tabs color="black" dark slider-color="pink lighten-1">
            <v-tab ripple><router-link class="menu" to="/">Home</router-link></v-tab>
            <v-tab ripple><router-link class="menu" to="/members">Members</router-link></v-tab>
            <v-tab ripple><router-link class="menu" to="/about">About</router-link></v-tab>
            <v-tab ripple><router-link class="menu" to="/login">Login</router-link></v-tab>
        </v-tabs>
      </div>
        </v-toolbar>
        <router-view/>
    </v-app>
 </div>   
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style scoped>
h1 {
    color: red;
}
.menu {
    padding-right: 20px;
}
.menu:hover, .menu:active {
    color: pink;
}
#nav {
   /* margin-top:15px; */
}
</style>