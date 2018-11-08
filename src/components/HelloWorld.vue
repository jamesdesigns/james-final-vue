<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Now you have the opportunity to choose who you want to work for you.<br>
      Just select any member that best fits your team and get approved in minutes.
    </p>
    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
