<template>
  <div id="app">
      <main-header></main-header>

    <div class="plyrStat" v-highlight:background.delayed="'#58bdbb'">
      <p></p>
      <p>
        Team Leader: {{ userName }} <br>
        Game Experience: {{ select }} <br>
        Players: 10  <br>
        Game Selected: World of Warcraft
        </p>
        </div>
  </div>
</template>
<script>
import Header from './components/Header.vue'
export default {
  name: 'app',
  components: {
    'main-header': Header,
  },
    // ADD NEW STATE MANAGEMENT
  computed: {
    userName() {
      return this.$store.getters.userName;
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
  margin-left: 30px; 
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
.plyrStat {
  display: block;
  width: 100%;
  height: 110px;
  color: #fff;
  font-weight: bold;
  font-size: 110%;
  padding: 15px 0 10px 0;
  text-align:left;
  position: relative;
  bottom: 0;
  left: 0;
}
</style>
