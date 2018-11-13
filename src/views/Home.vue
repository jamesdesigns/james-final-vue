<template>
  <div class="home">
   <!-- Place a New logo here for the Home Page --> 
   <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Choose your Team"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
<style>
.home {
  margin-top:5%;
}
</style>
