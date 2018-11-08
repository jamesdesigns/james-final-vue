<template>
  <div id="app">
    <v-app> 
     <v-toolbar color="cyan" dark app clipped-left><v-toolbar-side-icon @click.stop="drawer = !drawer">
    <div id="nav">
     <router-link to="/">Home</router-link> &nbsp;&nbsp;
      <router-link to="/about">About</router-link> 
    </div>
    </v-toolbar-side-icon>
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
  margin-left: 3%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
  padding-left: 175px;
  text-decoration: none;
}
</style>
