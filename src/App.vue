<template>
  <div id="app">
      <main-header></main-header>
    <p v-highlight:background.delayed="'gray'">Color this</p>
  </div>
</template>
<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    'main-header': Header,
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
  text-decoration: none;
}


</style>
