<template>
  <div id="app">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #ffffff;
  padding-left: 5%;
  text-decoration: none;
}
</style>
