<template>
  <div id="app" class="hello">
  <img width="1330px" height="477px" src="../assets/wow.jpg" alt="Characters from World of Warcraft game" />
    <h1 class="animated bounceIn">{{ msg }}</h1> 
    <p>
      You now have the opportunity to choose the best players to team up with. Choose one of many MMPORG role playing games to play. Select a few players you want to team up with. Get your request approved from other players.
      Then you will form an unstoppable team that will help you dominate your opponents and start winning.
    </p>
    <br>
    <br>
  </div>
</template>
<script>
export default {

  name: "HelloWorld",
  data: {
    name: 'Hello James',
  },
  props: {
    msg: String
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  margin:0;
}

h1 {
  margin-top:3%;
}
p {
  width: 50%;
  text-align:left;
  margin:0 auto;
}
h3 {
  text-align: center;
  margin-left:-2%;
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

.drag-wrapper {
  display: flex;
  justify-content: center;
  margin-top:2%;
}

ul {
  display: flex;
  flex-direction: column;
  padding: 3px !important;
  min-height: 100px;
  width:210px;
  float:left;
  list-style-type:none;
  overflow-y:auto;
  border:2px solid #888;
  border-radius:0.2em;
  background:#ffff66;
  color:#000;
  margin-right: 20px;
}

/* drop target state */
ul[aria-dropeffect="move"] {
  border-color:#68b;
  background:#fff;
}

/* drop target focus and dragover state */
ul[aria-dropeffect="move"]:focus,
ul[aria-dropeffect="move"].dragover
{
  outline:none;
  box-shadow:0 0 0 1px #fff, 0 0 0 3px #68b;
}

/* draggable items */
li {
  display:block;
  list-style-type:none;
  margin:0 0 2px 0;
  padding:0.2em 0.4em;
  border-radius:0.2em;
  line-height:1.3;
}

li:hover {
  box-shadow:0 0 0 2px #68b, inset 0 0 0 1px #ddd;
}

/* items focus state */
li:focus
{
  outline:none;
  box-shadow:0 0 0 2px #68b, inset 0 0 0 1px #ddd;
}

/* items grabbed state */
li[aria-grabbed="true"]
{
  background:#5cc1a6;
  color:#fff;
}

@keyframes nodeInserted {
    from { opacity: 0.2; }
    to { opacity: 0.8; }
}

.item-dropzone-area {
    height: 2rem;
    background: #888;
    opacity: 0.8;
    animation-duration: 0.5s;
    animation-name: nodeInserted;
}

</style>
