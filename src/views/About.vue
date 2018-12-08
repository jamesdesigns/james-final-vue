<template>
  <div class="about">
    <h1 class="animated bounceIn">How it Works</h1>
    <p>Build a team the easy way. Find individuals you are interested in teaming up with and conquer the gaming world. Login and set up a password and enter your game experience level. Then select the games you want to play and who you would like on your new team.</p> 
    <br>
    <p>Choose individuals who might benefit you the most. After filling out the form, click SEND REQUEST. Each hand picked player will either approve or disapprove your request. Good Luck!</p>
  <p class="msg" v-if="show" v-transition>Hello!</p>
  <v-btn>Toggle</v-btn>
  </div>
</template>
<script>

</script>
<style>
h1 {
  color: #000;
  margin-top: 7%;
  margin-bottom: 1%;
}
p {
  width: 50%;
  text-align: left;
  margin:0 auto;
}

.msg {
    transition: all .3s ease;
    height: 30px;
    padding: 10px;
    background-color: #eee;
    overflow: hidden;
}
.msg.v-enter, .msg.v-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
}

</style>
